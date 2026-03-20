import PageHeader from '@/components/page-header';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: December 30, 2025"
      />
      <div className="prose prose-invert mt-8 max-w-none text-muted-foreground space-y-4">
        <p className="text-destructive font-bold p-4 border border-destructive/50 rounded-lg bg-destructive/10">
          Disclaimer: This is a placeholder Terms of Service and is not legal advice. You must consult with a qualified legal professional to draft a policy that is appropriate for your specific circumstances.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using DreamWeaver (the "Service"), you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          DreamWeaver is a digital platform that allows users to generate, view, and interact with content created by artificial intelligence ("AI-Generated Content"), including but not limited to images, text, and music. The Service also allows users to mint certain AI-Generated Content as non-fungible tokens ("NFTs") on the Base blockchain.
        </p>

        <h2>3. User-Generated and AI-Generated Content</h2>
        <p>
          You are solely responsible for the text prompts and other content you provide to the Service ("User Content"). You retain ownership of your User Content. By providing User Content, you grant the Service a worldwide, non-exclusive, royalty-free license to use, reproduce, and prepare derivative works of your User Content for the purpose of providing and improving the Service.
        </p>
        <p>
          The AI-Generated Content is created by a generative AI model. While you may direct its creation, the nature of generative AI means the output is not directly authored by you. Ownership of AI-Generated Content is a complex and evolving legal area. By using this Service, you acknowledge that you may not have full copyright ownership over the AI-Generated Content in all jurisdictions.
        </p>

        <h2>4. NFTs and Blockchain Transactions</h2>
        <p>
          The Service provides tools that allow you to mint AI-Generated Content as NFTs. All transactions are conducted on the Base blockchain. We have no control over blockchain transactions, and all transactions are final and irreversible. You are responsible for all transaction fees (gas fees).
        </p>
        
        <h2>5. Disclaimers and Limitation of Liability</h2>
        <p>
          The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the AI-Generated Content will be accurate, unique, or free from similarities to other content. You expressly agree that your use of the Service is at your sole risk.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page.
        </p>
      </div>
    </div>
  );
}
