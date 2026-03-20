import HoroscopeSelector from '@/components/horoscope-selector';
import PageHeader from '@/components/page-header';

export default function DreamWeaverPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Cosmic Guidance"
        subtitle="Consult the stars for your daily horoscope."
      />
      <div className="mt-8">
        <HoroscopeSelector />
      </div>
    </div>
  );
}
