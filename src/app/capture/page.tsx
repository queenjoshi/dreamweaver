import DreamCaptureForm from '@/components/dream-capture-form';
import PageHeader from '@/components/page-header';

export default function CapturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Create a Post"
        subtitle="Let the loom of consciousness weave its magic."
      />
      <div className="mt-8">
        <DreamCaptureForm />
      </div>
    </div>
  );
}
