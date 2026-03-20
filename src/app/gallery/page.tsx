'use client';

import DreamCard from '@/components/dream-card';
import PageHeader from '@/components/page-header';
import { Skeleton } from '@/components/ui/skeleton';
import { useFirebase, useCollection, useMemoFirebase, useUser } from '@/firebase';
import { Dream } from '@/lib/data';
import { collection, query, orderBy } from 'firebase/firestore';

export default function GalleryPage() {
  const { firestore } = useFirebase();
  const { isUserLoading: isAuthLoading } = useUser();

  const publicNftsQuery = useMemoFirebase(() => {
    // Wait until auth is resolved and firestore is available.
    if (isAuthLoading || !firestore) return null;
    // Query the top-level 'publicNfts' collection for the gallery
    const publicNftsCollection = collection(firestore, 'publicNfts');
    return query(publicNftsCollection, orderBy('mintDate', 'desc'));
  }, [firestore, isAuthLoading]);

  const { data: allNfts, isLoading: isNftsLoading } = useCollection<Dream>(publicNftsQuery);

  const isLoading = isAuthLoading || isNftsLoading;

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Dream Gallery"
        subtitle="A collective exhibition of the subconscious."
      />
      {isLoading ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Skeleton className="h-96" />
            <Skeleton className="h-96" />
            <Skeleton className="h-96" />
         </div>
      ) : allNfts && allNfts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {allNfts.map((dream) => (
            <DreamCard key={dream.id} dream={dream} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center p-8 rounded-lg border-2 border-dashed border-border">
            <p className="text-lg text-muted-foreground">The gallery is empty.</p>
            <p className="text-sm text-muted-foreground mt-2">Be the first to weave a dream!</p>
        </div>
      )}
    </div>
  );
}
