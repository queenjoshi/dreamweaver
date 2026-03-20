'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect all login attempts to the new profile page
    router.replace('/profile');
  }, [router]);

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center px-4 py-8">
      <p className="text-muted-foreground">Redirecting to profile...</p>
    </div>
  );
}
