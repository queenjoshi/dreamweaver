import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { dreams } from '@/lib/data';
import DreamCard from '@/components/dream-card';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const featuredDreams = dreams.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="container mx-auto px-4 py-6 z-10">
        <h1 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-accent via-primary to-accent">
          DreamWeaver
        </h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">

        <div className="mt-2 z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-neon-gold text-balance">
            The On-Chain Creation Suite.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl font-semibold text-muted-foreground text-balance tracking-wide">
            Dream ⟶ Weave ⟶ Remix ⟶ Mint ⟶ Share.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold">
            <Link href="/capture">
              Start Weaving
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg font-bold border-accent/50">
            <Link href="/gallery">
              Explore Gallery
            </Link>
          </Button>
        </div>

        <div className="container mx-auto px-4 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDreams.map((dream) => (
              <DreamCard key={dream.id} dream={dream as any} />
            ))}
          </div>
        </div>

      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm space-y-2 mt-20">
        <div className="flex justify-center gap-4 mb-4">
          <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
        </div>
        <p className="font-semibold">Base Dreaming, Base Posting.</p>
        <p>Zora on Base, where dreams don't have to die.</p>
        <p className="font-semibold">Do you still dare to dream?</p>
        <p className="mt-4 text-xs">DreamWeaver brought to you by "The House Of Joshi"</p>
      </footer>
    </div>
  );
}
