import PageHeader from '@/components/page-header';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: December 30, 2025"
      />
      <div className="prose prose-invert mt-8 max-w-none text-muted-foreground space-y-4">
        <p className="text-destructive font-bold p-4 border border-destructive/50 rounded-lg bg-destructive/10">
          Disclaimer: This is a placeholder Privacy Policy and is not legal advice. You must consult with a qualified legal professional to draft a policy that is compliant with laws like GDPR, CCPA, and others applicable to your users.
        </p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to DreamWeaver. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our Service.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li>
            <strong>Account Information:</strong> When you connect your wallet, we use Firebase Authentication to create a user account. We may store your public wallet address and a unique user ID provided by Firebase. We do not collect or store your private keys.
          </li>
          <li>
            <strong>User Content:</strong> We collect the text prompts and images you upload to our Service to generate content.
          </li>
          <li>
            <strong>Generated Content:</strong> We store the AI-Generated Content (images, text, music, videos) you create and post to the gallery in our Firebase Firestore database.
          </li>
          <li>
            <strong>Usage Information:</strong> We may collect information about how you use the Service, though this placeholder does not specify any analytics tools.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
            <li>Provide, maintain, and improve our Service.</li>
            <li>Create your user profile and display your creations in your personal gallery.</li>
            <li>Display your creations in the public gallery.</li>
            <li>Process transactions on the blockchain when you choose to mint an NFT.</li>
        </ul>

        <h2>4. How We Share Your Information</h2>
        <p>We use third-party services to provide our Service:</p>
        <ul>
            <li>
                <strong>Firebase (Google):</strong> We use Firebase for authentication (Firebase Auth) and database storage (Firestore). Your data is subject to Google's Privacy Policy.
            </li>
             <li>
                <strong>Google AI Platform:</strong> We use Google's generative AI models to create content. Prompts you submit will be processed by Google.
            </li>
             <li>
                <strong>NFT.Storage:</strong> When you mint an NFT, the metadata and image are uploaded to the InterPlanetary File System (IPFS) via NFT.Storage. This data becomes public and permanent.
            </li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
            We take reasonable measures to protect your information, but no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that the information you supply will not be intercepted while being transmitted to us over the Internet.
        </p>
        
        <h2>6. Your Rights</h2>
        <p>
            Depending on your location, you may have rights over your personal data, such as the right to access, correct, or delete your information. Please contact us to make such a request.
        </p>
      </div>
    </div>
  );
}
