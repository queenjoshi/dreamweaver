'use server';
/**
 * @fileOverview A flow to upload NFT metadata and assets to IPFS.
 *
 * - uploadToIpfs - A function that uploads dream art and metadata.
 * - UploadToIpfsInput - The input type for the uploadToIpfs function.
 * - UploadToIpfsOutput - The return type for the uploadToIpfs function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { NFTStorage, File } from 'nft.storage';

// Ensure you have NFT_STORAGE_API_KEY in your .env file
const nftStorageClient = new NFTStorage({ token: process.env.NFT_STORAGE_API_KEY! });

const UploadToIpfsInputSchema = z.object({
  title: z.string().describe('The title of the NFT.'),
  description: z.string().describe('The description of the NFT (the summary).'),
  artDataUri: z.string().describe("The art for the NFT, as a data URI."),
  author: z.string().describe("The creator's handle."),
});
export type UploadToIpfsInput = z.infer<typeof UploadToIpfsInputSchema>;

const UploadToIpfsOutputSchema = z.object({
  metadataUrl: z.string().describe('The IPFS URL for the generated metadata.'),
});
export type UploadToIpfsOutput = z.infer<typeof UploadToIpfsOutputSchema>;

export async function uploadToIpfs(input: UploadToIpfsInput): Promise<UploadToIpfsOutput> {
  return uploadToIpfsFlow(input);
}

// Helper to convert data URI to Blob
async function dataUriToBlob(dataUri: string) {
    const response = await fetch(dataUri);
    const blob = await response.blob();
    return blob;
}

const uploadToIpfsFlow = ai.defineFlow(
  {
    name: 'uploadToIpfsFlow',
    inputSchema: UploadToIpfsInputSchema,
    outputSchema: UploadToIpfsOutputSchema,
  },
  async ({ title, description, artDataUri, author }) => {
    if (!process.env.NFT_STORAGE_API_KEY) {
        throw new Error("NFT_STORAGE_API_KEY environment variable is not set.");
    }
    
    const imageBlob = await dataUriToBlob(artDataUri);
    const imageFile = new File([imageBlob], 'dream.png', { type: imageBlob.type });

    // The address that will receive the royalty payments.
    // IMPORTANT: Replace this with your own wallet address.
    const royaltyReceiver = "0xYOUR_WALLET_ADDRESS_HERE";
    const royaltyFeeBps = 300; // 300 basis points = 3%

    // Upload to NFT.storage
    const metadata = await nftStorageClient.store({
      name: title,
      description: description,
      image: imageFile,
      properties: {
        author,
        app: "DreamWeaver",
      },
      // EIP-2981 Royalty Standard
      royalty_info: {
          royalty_factor: royaltyFeeBps,
          royalty_receiver_address: royaltyReceiver
      },
      // OpenSea standard for royalties
      seller_fee_basis_points: royaltyFeeBps,
      fee_recipient: royaltyReceiver
    });

    return {
      metadataUrl: metadata.url,
    };
  }
);
