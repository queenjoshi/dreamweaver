import { Dream } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Flame } from "lucide-react";
import MintButton from "./mint-button";
import ShareButton from "./share-button";

type DreamCardProps = {
  dream: Dream;
};

export default function DreamCard({ dream }: DreamCardProps) {
  const dreamUrl = typeof window !== 'undefined' ? `${window.location.origin}/dream/${dream.id}` : '';

  return (
    <Card className="bg-gradient-to-br from-card to-secondary/50 border-accent/20 overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Image
          src={dream.artUrl}
          alt={`Art for dream: ${dream.title}`}
          width={600}
          height={600}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          data-ai-hint="surreal clock"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        {dream.isHot && (
          <Badge
            variant="destructive"
            className="absolute top-4 right-4 bg-primary/80 border-primary text-primary-foreground animate-pulse-glow"
          >
            <Flame className="w-4 h-4 mr-1" />
            HOT
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-6 pb-4">
        <CardTitle className="text-xl font-bold text-accent">
            {dream.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-2 italic line-clamp-2">
          &quot;{dream.summary}&quot;
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-sm text-foreground font-semibold">@{dream.author}</p>
        <div className="flex items-center gap-2">
            <MintButton dream={dream} />
            <ShareButton dream={dream} dreamUrl={dreamUrl} />
        </div>
      </CardFooter>
    </Card>
  );
}
