import ArtGeneratorForm from '@/components/art-generator-form';
import PageHeader from '@/components/page-header';

export default function ArtPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Art Studio"
        subtitle="Generate stunning visuals with the power of AI."
      />
      <div className="mt-8">
        <ArtGeneratorForm />
      </div>
    </div>
  );
}
