'use client';

import { useEffect } from 'react';
import { useAuth, useUser, initiateAnonymousSignIn } from '@/firebase';
import DreamCard from "@/components/dream-card";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useFirestore, useMemoFirebase, useCollection, useDoc, setDocumentNonBlocking } from "@/firebase";
import { Dream } from "@/lib/data";
import { Award, Zap, Shapes, Wallet } from "lucide-react";
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { Skeleton } from "@/components/ui/skeleton";
import { useAccount, useConnect } from 'wagmi';
import { toast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserProfile = {
  dreamStreak: number;
  energy: number;
}

type PlatformStats = {
    totalMints: number;
}

export default function ProfilePage() {
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();

  // Create user profile document if it doesn't exist
  useEffect(() => {
    if (user && firestore && isConnected) {
      const profileRef = doc(firestore, 'users', user.uid, 'profiles', 'main');
      const profileData: any = {
        dreamStreak: 0,
        energy: 50,
        userId: user.uid, // Denormalized for security rules
      };
      if (address) {
        profileData.walletAddress = address;
      }
      setDocumentNonBlocking(profileRef, profileData, { merge: true });
    }
  }, [user, firestore, address, isConnected]);
  
  // Effect to handle Firebase sign-in after wallet connection
  useEffect(() => {
    if (isConnected && address && !user && auth) {
        initiateAnonymousSignIn(auth);
    }
  }, [isConnected, address, user, auth]);


  const profileDocRef = useMemoFirebase(() => {
    if (!user || !isConnected) return null;
    return doc(firestore, 'users', user.uid, 'profiles', 'main');
  }, [firestore, user, isConnected]);

  const { data: userProfile, isLoading: isProfileLoading } = useDoc<UserProfile>(profileDocRef);

  const platformStatsRef = useMemoFirebase(() => {
      if(!firestore) return null;
      return doc(firestore, 'platform', 'stats');
  }, [firestore]);

  const { data: platformStats, isLoading: isStatsLoading } = useDoc<PlatformStats>(platformStatsRef);


  const nftsCollectionRef = useMemoFirebase(() => {
    if (!user || !isConnected) return null;
    return collection(firestore, 'users', user.uid, 'nfts');
  }, [firestore, user, isConnected]);

  const nftsQuery = useMemoFirebase(() => {
    if (!nftsCollectionRef) return null;
    return query(nftsCollectionRef, orderBy('mintDate', 'desc'));
  }, [nftsCollectionRef]);

  const { data: userNfts, isLoading: isNftsLoading } = useCollection<Dream>(nftsQuery);
  
  const getUsername = () => {
    if (address) {
      return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }
    if (user?.isAnonymous) {
      return 'anonymous_dreamer';
    }
    return 'dreamer';
  }

  if (isUserLoading || (isConnected && user && (!userProfile || isStatsLoading))) {
    return (
        <div className="container mx-auto px-4 py-8">
            <Skeleton className="h-12 w-1/2 mb-4" />
            <Skeleton className="h-8 w-3/4" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Skeleton className="h-40" />
                <Skeleton className="h-40" />
                <Skeleton className="h-40" />
            </div>
            <Separator className="my-10 bg-border" />
            <div>
                <Skeleton className="h-10 w-1/3 mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Skeleton className="h-96" />
                    <Skeleton className="h-96" />
                </div>
            </div>
        </div>
    );
  }

  if (!isConnected || !user) {
    return (
      <div className="container mx-auto flex h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 py-8">
        <PageHeader
          title="Join the Weave"
          subtitle="Connect your wallet to create your profile."
          className="text-center"
        />
        <div className="mt-8">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="lg" className="text-lg font-bold">
                        <Wallet className="mr-2 h-5 w-5" />
                        Connect Wallet
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                    {connectors.map((connector) => (
                    <DropdownMenuItem
                        key={connector.uid}
                        onClick={() => connect({ connector })}
                        className="text-lg"
                    >
                        {connector.name}
                    </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title={getUsername()} subtitle="Your personal dream gallery." />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card border-accent/20">
          <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
            <Award className="w-8 h-8 text-accent" />
            <CardTitle className="text-xl">Dream Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-accent drop-shadow-neon-gold">{userProfile?.dreamStreak || 0}</p>
            <p className="text-xs text-muted-foreground">consecutive days</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-accent/20">
          <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
            <Zap className="w-8 h-8 text-primary" />
            <CardTitle className="text-xl">Dream Energy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-primary drop-shadow-neon-red">{userProfile?.energy || 0}%</p>
            <Progress value={userProfile?.energy || 0} className="mt-2 h-2 [&>*]:bg-primary" />
          </CardContent>
        </Card>

         <Card className="bg-card border-accent/20">
          <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
            <Shapes className="w-8 h-8 text-foreground" />
            <CardTitle className="text-xl">Total Mints</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-foreground">{platformStats?.totalMints || 0}</p>
            <p className="text-xs text-muted-foreground">across the platform</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-10 bg-border" />

      <div>
        <h2 className="text-3xl font-bold mb-6">Collection</h2>
        {(isNftsLoading) ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Skeleton className="h-96" />
                <Skeleton className="h-96" />
            </div>
        ) : userNfts && userNfts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {userNfts.map((dream) => (
                  <DreamCard key={dream.id} dream={dream} />
              ))}
          </div>
        ) : (
          <div className="text-center p-8 rounded-lg border-2 border-dashed border-border">
            <p className="text-muted-foreground">Your collection is empty.</p>
            <p className="text-sm text-muted-foreground mt-2">Go to the Capture page to weave your first dream.</p>
          </div>
        )}
      </div>
    </div>
  );
}
