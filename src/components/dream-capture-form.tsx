"use client";

import { useFormStatus } from "react-dom";
import {
  weaveDreamAction,
  WeaveState,
  generateVideoAction,
  generateMemeAction,
  generateMusicAction,
} from "@/app/actions";

import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Mic,
  Sparkles,
  Square,
  Upload,
  X,
  GalleryHorizontal,
  LoaderCircle,
  RefreshCw,
  Film,
  MessageSquare,
  Music,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

import { Input } from "./ui/input";
import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useFirestore, useUser } from "@/firebase";
import {
  collection,
  serverTimestamp,
  doc,
  runTransaction,
  writeBatch,
} from "firebase/firestore";
import Link from "next/link";
import { useAccount } from "wagmi";

const initialState: WeaveState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? "Weaving..." : "Weave Post"}
    </Button>
  );
}

export default function DreamCaptureForm() {
  const [state, formAction] = useActionState(weaveDreamAction, initialState);
  const [videoState, videoFormAction] = useActionState(generateVideoAction, state);
  const [memeState, memeFormAction] = useActionState(generateMemeAction, state);
  const [musicState, musicFormAction] = useActionState(generateMusicAction, state);

  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<any>(null);

  const [photoDataUri, setPhotoDataUri] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { user, isUserLoading } = useUser();
  const { isConnected } = useAccount();
  const firestore = useFirestore();

  const finalState =
    musicState.musicDataUri ||
      memeState.memeDataUri ||
      videoState.videoDataUri
      ? musicState.musicDataUri
        ? musicState
        : memeState.memeDataUri
          ? memeState
          : videoState
      : state;

  // ✅ FIXED Speech Recognition
  const handleToggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      return;
    }

    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast({
        variant: "destructive",
        title: "Not Supported",
        description: "Speech recognition not supported",
      });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognitionRef.current = recognition;

    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);

    recognition.onresult = (event: any) => {
      let text = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.start();
  };

  // cleanup
  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoDataUri(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  if (isUserLoading) {
    return <LoaderCircle className="animate-spin" />;
  }

  if (!user || !isConnected) {
    return (
      <div className="text-center">
        <p>Connect wallet & login</p>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 flex flex-col items-center gap-4">
          <Button onClick={handleToggleRecording}>
            {isRecording ? <Square /> : <Mic />}
          </Button>

          <Button onClick={() => fileInputRef.current?.click()}>
            <Upload />
          </Button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </CardContent>
      </Card>

      {photoDataUri && (
        <Image src={photoDataUri} alt="preview" width={300} height={300} />
      )}

      <form ref={formRef} action={formAction}>
        <Textarea
          name="textEntry"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />
        <SubmitButton />
      </form>

      {finalState.artDataUri && (
        <Card>
          <CardHeader>
            <CardTitle>{finalState.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={finalState.artDataUri}
              alt="art"
              width={500}
              height={500}
            />

            <Button onClick={() => formRef.current?.reset()}>
              <RefreshCw /> Reset
            </Button>

            <Button>
              <GalleryHorizontal /> Post
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}