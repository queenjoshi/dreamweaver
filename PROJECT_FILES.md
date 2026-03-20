# DreamWeaver Project Files for GitHub

This file contains the full path and content for every file in your DreamWeaver project. Follow these steps to manually publish your app from your phone:

### Instructions:

1.  **Create a GitHub Repository:**
    *   Go to [github.com/new](https://github.com/new) in your phone's browser.
    *   Give your repository a name (e.g., `dreamweaver-app`).
    *   Make it **Private**.
    *   Click **"Create repository"**.

2.  **Add Files One-by-One:**
    *   In your new repository, tap **"Add file"** and then **"Create new file"**.
    *   For each file listed below, you will:
        *   Copy the complete file path (like `src/app/page.tsx`) and paste it into the file name box on GitHub.
        *   Copy the *entire* code content for that file.
        *   Paste the code into the main content editor box in GitHub.
        *   Scroll down and tap **"Commit new file"**.
    *   Repeat this for every file. It's tedious, and I am sorry, but it will work.

---
---

### File: `.env`

**Path:** `.env`

```

```

---
---

### File: `README.md`

**Path:** `README.md`

```md
# How to Publish Your DreamWeaver App (The Simple Guide)

You've built your app, and now it's time to put it on the internet for everyone to see. This guide will walk you through it, step-by-step, in plain English.

Think of this process in three stages:
1.  **Package Your App:** Get your app's code ready on your computer.
2.  **Upload It:** Put your packaged code in a safe, online storage locker (called GitHub).
3.  **Go Live:** Tell Firebase to grab your code from the locker and put it on a public website.

---

### **Step 1: Package Your App on Your Computer**

This step uses a tool called "Git" to create a neat package of your project. You'll use your computer's command line or terminal for this.

1.  **Open the Command Line (Terminal):**
    *   On Mac, open the "Terminal" app.
    *   On Windows, open the "Command Prompt" or "PowerShell" app.

2.  **Navigate to Your Project Folder:**
    Type `cd` followed by the path to where you saved this project, then press Enter.

3.  **Run these three commands one by one.** Just copy, paste, and press Enter for each line. This tells your computer to create an official "save point" for your app.

    ```bash
    git init -b main
    ```
    *(This prepares the folder for packaging.)*

    ```bash
    git add .
    ```
    *(This adds all your files to the package.)*

    ```bash
    git commit -m "My first version of the DreamWeaver app"
    ```
    *(This seals the package and gives it a name.)*

---

### **Step 2: Upload Your App to GitHub**

GitHub is like a free online storage locker for code. We need to put your packaged app here so Firebase can find it.

1.  **Create a GitHub Account:** If you don't have one, sign up for free at [GitHub.com](https://github.com).

2.  **Create a New "Repository":**
    *   Once you're logged in, go to [github.com/new](https://github.com/new). A repository is just a private locker for a single project.
    *   Give your repository a name (like `dreamweaver-app`).
    *   You can make it **Private** – only you and Firebase will see it.
    *   Click the big green **"Create repository"** button.

3.  **Link Your Computer to Your GitHub Locker:**
    *   After creating the repository, GitHub will show you a page with some commands. Look for the section titled **"...or push an existing repository from the command line."**
    *   Copy the two lines of code it gives you. They will look like this:

    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    git push -u origin main
    ```

    *   Paste those two lines into your command line/terminal and press Enter. This will upload your packaged app from your computer to your private locker on GitHub.

---

### **Step 3: Tell Firebase to Go Live**

This is the final step! You're telling Firebase where your app is stored so it can put it on the internet.

1.  **Go to the Firebase Console:**
    *   Open the [Firebase Console](https://console.firebase.google.com/) and choose the project for this app (`studio-1682215130-e1690`).

2.  **Find App Hosting:**
    *   In the menu on the left, look for the "Build" section and click on **App Hosting**.

3.  **Connect to GitHub:**
    *   Click **"Get Started"** and follow the instructions to connect your GitHub account.
    *   It will ask you which repository (locker) you want to use. Select the `dreamweaver-app` repository you just created.
    *   Give Firebase permission to access it.

Firebase will now automatically grab your code, build it, and deploy it to a live website. After a few minutes, it will give you your public URL.

From now on, whenever you want to update your website, you just need to repeat Step 1 and Step 2 to upload the new version, and Firebase will handle the rest automatically.

I hope this is much clearer. I sincerely apologize for the earlier frustration. You've done the hard part of creating the app; this last part will get you across the finish line.
```

---
---

### File: `apphosting.yaml`

**Path:** `apphosting.yaml`

```yaml
# Settings to manage and configure a Firebase App Hosting backend.
# https://firebase.google.com/docs/app-hosting/configure

runConfig:
  # Increase this value if you'd like to automatically spin up
  # more instances in response to increased traffic.
  maxInstances: 10
# Explicitly set the source directory to the project root
# to ensure the buildpack finds the package.json and Next.js app.
source:
  directory: /
```

---
---

### File: `components.json`

**Path:** `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---
---

### File: `docs/backend.json`

**Path:** `docs/backend.json`

```json
{
  "entities": {
    "UserAccount": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "UserAccount",
      "type": "object",
      "description": "Stores user account information, linking to profile and authentication details.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the UserAccount entity."
        },
        "username": {
          "type": "string",
          "description": "User's chosen username."
        },
        "email": {
          "type": "string",
          "description": "User's email address.",
          "format": "email"
        },
        "profileId": {
          "type": "string",
          "description": "Reference to UserProfile. (Relationship: UserAccount 1:1 UserProfile)"
        },
        "creationDate": {
          "type": "string",
          "description": "Date the account was created.",
          "format": "date-time"
        }
      },
      "required": [
        "id",
        "username",
        "email",
        "profileId",
        "creationDate"
      ]
    },
    "UserProfile": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "UserProfile",
      "type": "object",
      "description": "Stores user profile information, including dream streak, energy meter, and NFT collection details.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the UserProfile entity."
        },
        "dreamStreak": {
          "type": "number",
          "description": "The user's current dream streak."
        },
        "energyMeter": {
          "type": "number",
          "description": "The user's current energy level."
        },
        "nftCollectionIds": {
          "type": "array",
          "description": "References to NFTs. (Relationship: UserProfile 1:N NFT)",
          "items": {
            "type": "string"
          }
        },
        "lastUpdated": {
          "type": "string",
          "description": "Date the profile was last updated.",
          "format": "date-time"
        }
      },
      "required": [
        "id",
        "dreamStreak",
        "energyMeter",
        "nftCollectionIds",
        "lastUpdated"
      ]
    },
    "NFT": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "NFT",
      "type": "object",
      "description": "Represents a dream-inspired NFT.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the NFT entity."
        },
        "title": {
          "type": "string",
          "description": "Title of the NFT."
        },
        "description": {
          "type": "string",
          "description": "Description of the NFT."
        },
        "imageUrl": {
          "type": "string",
          "description": "URL of the NFT image.",
          "format": "uri"
        },
        "ownerId": {
          "type": "string",
          "description": "Reference to UserProfile. (Relationship: UserProfile 1:N NFT)"
        },
        "mintDate": {
          "type": "string",
          "description": "Date the NFT was minted.",
          "format": "date-time"
        }
      },
      "required": [
        "id",
        "title",
        "description",
        "imageUrl",
        "ownerId",
        "mintDate"
      ]
    }
  },
  "auth": {
    "providers": [
      "password",
      "anonymous"
    ]
  },
  "firestore": {
    "structure": [
      {
        "path": "/users/{userId}/accounts/{accountId}",
        "definition": {
          "entityName": "UserAccount",
          "schema": {
            "$ref": "#/backend/entities/UserAccount"
          },
          "description": "Stores user account information.  Access is restricted to the user with the matching userId. Includes 'userId' as a denormalized authorization field.",
          "params": [
            {
              "name": "userId",
              "description": "The unique identifier for the user."
            },
            {
              "name": "accountId",
              "description": "The unique identifier for the user account."
            }
          ]
        }
      },
      {
        "path": "/users/{userId}/profiles/{profileId}",
        "definition": {
          "entityName": "UserProfile",
          "schema": {
            "$ref": "#/backend/entities/UserProfile"
          },
          "description": "Stores user profile information. Access is restricted to the user with the matching userId. Includes 'userId' as a denormalized authorization field.",
          "params": [
            {
              "name": "userId",
              "description": "The unique identifier for the user."
            },
            {
              "name": "profileId",
              "description": "The unique identifier for the user profile."
            }
          ]
        }
      },
      {
        "path": "/users/{userId}/nfts/{nftId}",
        "definition": {
          "entityName": "NFT",
          "schema": {
            "$ref": "#/backend/entities/NFT"
          },
          "description": "Stores NFT data. Access is restricted to the user with the matching userId, which matches the NFT's ownerId. Includes denormalized 'ownerId' field for authorization independence.",
          "params": [
            {
              "name": "userId",
              "description": "The unique identifier for the user."
            },
            {
              "name": "nftId",
              "description": "The unique identifier for the NFT."
            }
          ]
        }
      }
    ],
    "reasoning": "This Firestore structure prioritizes security, scalability, and debuggability based on the core design principles. User authentication is handled by Firebase Auth, and the Firestore structure is designed to securely store user account and profile data, along with NFTs. The structure leverages path-based ownership for user-specific data (profiles, NFTs) ensuring that security rules can easily validate ownership without complex `get()` calls. The design emphasizes authorization independence via denormalization, ensuring atomic operations and clear intent. Specifically, the `ownerId` field in the `NFT` collection enables secure listing and querying of NFTs owned by a specific user without requiring a `get()` call to the `UserProfile`. The segregation of user-specific data into separate collections based on the user's UID ensures a homogeneous security posture, simplifying rules. This structure directly supports account login and feed access, where the user's authentication state is used to grant them access to their profiles and associated NFTs."
  }
}
```

---
---

### File: `firestore.rules`

**Path:** `firestore.rules`

```rules
/**
 * Core Philosophy: This ruleset enforces a strict user-ownership model where users have
 * complete control over their own data, and no access to anyone else's. It is designed for
 * applications where user data is private and siloed.
 *
 * Data Structure: All data is organized under a top-level `users` collection. Each user's
 * data, including their account, profile, and NFTs, is nested within their own document,
 * identified by their unique user ID (e.g., /users/{userId}/...).
 *
 * Key Security Decisions:
 * - User data is private: All reads and writes to a user's data tree (/users/{userId}) are
 *   restricted to that specific authenticated user.
 * - User listing is disabled: It is not possible to query the top-level `/users` collection
 *   to prevent user enumeration attacks and protect user privacy.
 * - Ownership is enforced by path: The structure `/users/{userId}` is the primary mechanism
 *   for enforcing ownership.
 *
 * Denormalization for Authorization: To ensure fast and secure authorization checks, these
 * rules expect that documents within a user's data tree contain a denormalized ownership
 * field (e.g., `userId` or `ownerId`). This field must match the `{userId}` from the path,
 * ensuring data integrity and preventing documents from being moved or associated with the
 * wrong user. This avoids slow and costly `get()` calls in rules.
 *
 * Structural Segregation: The data model naturally segregates each user's private data
 * by placing it in subcollections under their unique user document. This is a secure and
 * performant pattern that simplifies access control logic.
 */
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // ------------------------------------------------------------------------
    // Helper Functions
    // ------------------------------------------------------------------------

    /**
     * Checks if the user is authenticated.
     */
    function isSignedIn() {
      return request.auth != null;
    }

    /**
     * Checks if the currently authenticated user's UID matches the provided userId.
     * This is the fundamental check for all ownership-based security.
     */
    function isOwner(userId) {
      return isSignedIn() && request.auth.uid == userId;
    }

    /**
     * Checks for ownership on an existing resource. Used for update/delete operations
     * to ensure the document exists before attempting to modify it.
     */
    function isExistingOwner(userId) {
      return isOwner(userId) && resource != null;
    }

    /**
     * On create, validates that the new document's internal 'userId' field
     * matches the user's auth UID, ensuring relational integrity.
     */
    function isOwnerOnCreate(userId) {
      return isOwner(userId) && request.resource.data.userId == userId;
    }
    
    /**
     * On update, validates that the internal 'userId' field cannot be changed.
     */
    function isUserIdImmutable() {
        return request.resource.data.userId == resource.data.userId;
    }
    
    /**
     * On create, validates that the new NFT's internal 'ownerId' field
     * matches the user's auth UID, ensuring relational integrity.
     */
    function isNftOwnerOnCreate(userId) {
      return isOwner(userId) && request.resource.data.ownerId == userId;
    }
    
    /**
     * On update, validates that the NFT's 'ownerId' field cannot be changed.
     */
    function isNftOwnerIdImmutable() {
      return request.resource.data.ownerId == resource.data.ownerId;
    }
    
    // ------------------------------------------------------------------------
    // User Root Document Rules
    // ------------------------------------------------------------------------

    /**
     * @description Rules for a user's root document, which acts as a container for subcollections.
     * @path        /users/{userId}
     * @allow       (create) A new user can create their own root document.
     * @allow       (get, update) An authenticated user can read and update their own document.
     * @deny        (list) Users cannot list all other users in the database.
     * @deny        (delete) Users cannot delete their own root document to prevent orphaning subcollections.
     * @principle   Enforces the Self-Creation pattern and prevents user enumeration.
     */
    match /users/{userId} {
      allow get: if isOwner(userId);
      allow list: if false;
      allow create: if isOwner(userId);
      allow update: if isOwner(userId);
      allow delete: if false;
    }

    // ------------------------------------------------------------------------
    // User Account Rules (/users/{userId}/accounts/{accountId})
    // ------------------------------------------------------------------------

    /**
     * @description Secures user account documents. Only the owner can access their account info.
     * @path        /users/{userId}/accounts/{accountId}
     * @allow       (create, get, list, update, delete) An authenticated user for their own account documents.
     * @deny        (get) A user trying to read another user's account document.
     * @deny        (create) A user trying to create an account document under another user's ID.
     * @principle   Restricts access to a user's own data tree and validates relational integrity.
     */
    match /users/{userId}/accounts/{accountId} {
      allow get: if isOwner(userId);
      allow list: if isOwner(userId);
      allow create: if isOwnerOnCreate(userId);
      allow update: if isExistingOwner(userId) && isUserIdImmutable();
      allow delete: if isExistingOwner(userId);
    }

    // ------------------------------------------------------------------------
    // User Profile Rules (/users/{userId}/profiles/{profileId})
    // ------------------------------------------------------------------------

    /**
     * @description Secures user profile documents. Only the owner can access their own profile.
     * @path        /users/{userId}/profiles/{profileId}
     * @allow       (create, get, list, update, delete) An authenticated user for their own profile documents.
     * @deny        (list) A user trying to list another user's profiles.
     * @deny        (update) A user trying to update another user's profile document.
     * @principle   Restricts access to a user's own data tree and validates relational integrity.
     */
    match /users/{userId}/profiles/{profileId} {
      allow get: if isOwner(userId);
      allow list: if isOwner(userId);
      allow create: if isOwnerOnCreate(userId);
      allow update: if isExistingOwner(userId) && isUserIdImmutable();
      allow delete: if isExistingOwner(userId);
    }

    // ------------------------------------------------------------------------
    // User NFT Rules (/users/{userId}/nfts/{nftId})
    // ------------------------------------------------------------------------

    /**
     * @description Secures NFT documents. Allows public reads but restricts writes to the owner.
     * @path        /users/{userId}/nfts/{nftId}
     * @allow       (get, list) Anyone can read NFT data for the public gallery.
     * @allow       (create) A user creating an NFT for themselves, ensuring `ownerId` is correct.
     * @allow       (update, delete) The owner of the NFT.
     * @deny        (create) A user trying to create an NFT with an `ownerId` that doesn't match their own.
     * @deny        (delete) A user trying to delete another user's NFT.
     * @principle   Enables a public gallery while maintaining strict ownership for writes.
     */
    match /users/{userId}/nfts/{nftId} {
      allow get: if true;
      allow list: if true;
      allow create: if isNftOwnerOnCreate(userId);
      allow update: if isExistingOwner(userId) && isNftOwnerIdImmutable();
      allow delete: if isExistingOwner(userId);
    }

    // ------------------------------------------------------------------------
    // Platform Stats Rules (/platform/stats)
    // ------------------------------------------------------------------------

    /**
     * @description Secures the platform-wide statistics document.
     * @path        /platform/stats
     * @allow       (get) Anyone can read the platform stats (e.g., total mints).
     * @allow       (create, update) Only authenticated users can initialize or increment stats.
     *              This is loosely secured; a more robust implementation would use a backend
     *              function to prevent abuse, but for now, we trust client-side increments on mint.
     * @deny        (delete) The stats document should never be deleted.
     */
     match /platform/stats {
        allow get: if true;
        allow list: if true;
        allow create: if isSignedIn();
        allow update: if isSignedIn();
        allow delete: if false;
     }
  }
}
```

---
---

### File: `next.config.ts`

**Path:** `next.config.ts`

```ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https' as const,
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // Increase timeout for server actions, especially for long-running AI tasks like video generation.
    serverActions: {
      bodySizeLimit: '4.5mb',
      serverActionsTimeout: 120, // 2 minutes
    },
  }
};

export default nextConfig;
```

---
---

### File: `package.json`

**Path:** `package.json`

```json
{
  "name": "nextn",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "NODE_ENV=production next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "postinstall": "patch-package"
  },
  "engines": {
    "node": "20"
  },
  "dependencies": {
    "@genkit-ai/google-genai": "^1.20.0",
    "@genkit-ai/next": "^1.20.0",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "@tanstack/react-query": "^5.51.15",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "firebase": "^11.9.1",
    "genkit": "^1.20.0",
    "lucide-react": "^0.475.0",
    "next": "15.3.8",
    "nft.storage": "^7.2.0",
    "patch-package": "^8.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "viem": "^2.20.1",
    "wagmi": "^2.12.2",
    "wav": "^1.0.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/wav": "^1.0.3",
    "genkit-cli": "^1.20.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

---
---

### File: `src/ai/dev.ts`

**Path:** `src/ai/dev.ts`

```ts
'use server';
/**
 * @fileoverview A development server for Genkit.
 *
 * This file is used to start the Genkit development server, which provides a
 * UI for inspecting and running flows.
 *
 * It is not intended for production use.
 */

import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-dream-journal-entry.ts';
import '@/ai/flows/generate-surreal-dream-art.ts';
import '@/ai/flows/upload-to-ipfs.ts';
import '@/ai/flows/speak-summary.ts';
import '@/ai/flows/generate-dream-video.ts';
import '@/ai/flows/generate-meme.ts';
import '@/ai/flows/generate-music.ts';
import '@/ai/flows/generate-horoscope.ts';
import '@/ai/flows/generate-enya-music.ts';
```

---
---

### File: `src/ai/flows/generate-dream-video.ts`

**Path:** `src/ai/flows/generate-dream-video.ts`

```ts
'use server';
/**
 * @fileOverview Generates a short video from an image and a prompt.
 *
 * - generateDreamVideo - A function that animates a static image.
 * - GenerateDreamVideoInput - The input type for the generateDreamVideo function.
 * - GenerateDreamVideoOutput - The return type for the generateDreamVideo function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/google-genai';
import { MediaPart } from 'genkit';
import * as fs from 'fs';
import { Readable } from 'stream';


const GenerateDreamVideoInputSchema = z.object({
  prompt: z.string().describe("A text description of how to animate the image."),
  photoDataUri: z.string().describe(
      "The photo to animate, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateDreamVideoInput = z.infer<typeof GenerateDreamVideoInputSchema>;

const GenerateDreamVideoOutputSchema = z.object({
  videoDataUri: z
    .string()
    .describe(
      'The generated video as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:video/mp4;base64,<encoded_data>\'.'
    ),
});
export type GenerateDreamVideoOutput = z.infer<typeof GenerateDreamVideoOutputSchema>;

export async function generateDreamVideo(
  input: GenerateDreamVideoInput
): Promise<GenerateDreamVideoOutput> {
  return generateDreamVideoFlow(input);
}

const generateDreamVideoFlow = ai.defineFlow(
  {
    name: 'generateDreamVideoFlow',
    inputSchema: GenerateDreamVideoInputSchema,
    outputSchema: GenerateDreamVideoOutputSchema,
  },
  async ({ prompt, photoDataUri }) => {
    let { operation } = await ai.generate({
        model: googleAI.model('veo-2.0-generate-001'),
        prompt: [
            { text: prompt },
            { media: { url: photoDataUri } },
        ],
        config: {
            durationSeconds: 5,
            aspectRatio: '16:9',
            personGeneration: 'allow_adult',
        },
    });

    if (!operation) {
        throw new Error('Expected the model to return an operation');
    }

    // Poll for completion
    while (!operation.done) {
        await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 seconds
        operation = await ai.checkOperation(operation);
    }

    if (operation.error) {
        throw new Error('Failed to generate video: ' + operation.error.message);
    }

    const videoPart = operation.output?.message?.content.find((p) => !!p.media && p.media.contentType?.startsWith('video/'));

    if (!videoPart?.media?.url) {
        throw new Error('Failed to find the generated video in the operation result.');
    }
    
    // The URL returned from Veo needs an API key to be downloaded.
    const videoDownloadResponse = await fetch(
        `${videoPart.media.url}&key=${process.env.GEMINI_API_KEY}`
    );

    if (!videoDownloadResponse.ok || !videoDownloadResponse.body) {
        throw new Error(`Failed to download video file. Status: ${videoDownloadResponse.status}`);
    }

    const videoBuffer = await videoDownloadResponse.arrayBuffer();
    const videoBase64 = Buffer.from(videoBuffer).toString('base64');
    
    return {
      videoDataUri: `data:video/mp4;base64,${videoBase64}`,
    };
  }
);
```

---
---

### File: `src/ai/flows/generate-enya-music.ts`

**Path:** `src/ai/flows/generate-enya-music.ts`

```ts
'use server';
/**
 * @fileOverview A flow to generate an ambient music track.
 *
 * - generateEnyaMusic - Generates an Enya-style audio track.
 * - GenerateEnyaMusicInput - The input type for the generateEnyaMusic function.
 * - GenerateEnyaMusicOutput - The return type for the generateEnyaMusic function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/google-genai';

const GenerateEnyaMusicInputSchema = z.object({
  prompt: z.string().describe('A prompt to inspire the music.'),
});
export type GenerateEnyaMusicInput = z.infer<typeof GenerateEnyaMusicInputSchema>;

const GenerateEnyaMusicOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The generated audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'."
    ),
});
export type GenerateEnyaMusicOutput = z.infer<typeof GenerateEnyaMusicOutputSchema>;

export async function generateEnyaMusic(
  input: GenerateEnyaMusicInput
): Promise<GenerateEnyaMusicOutput> {
  return generateEnyaMusicFlow(input);
}

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  const wav = (await import('wav')).default;
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const generateEnyaMusicFlow = ai.defineFlow(
  {
    name: 'generateEnyaMusicFlow',
    inputSchema: GenerateEnyaMusicInputSchema,
    outputSchema: GenerateEnyaMusicOutputSchema,
  },
  async ({ prompt }) => {
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
           // Using a voice that is clear and has a gentle quality.
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Luna' },
          },
        },
      },
      // Prompt engineered to produce an atmospheric, musical piece rather than just speech.
      prompt: `(Soundtrack, ambient music, Enya-style, dreamy, ethereal, atmospheric, no spoken words) ${prompt}`,
    });

    if (!media?.url) {
      throw new Error('Music generation failed to produce audio.');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    const wavBase64 = await toWav(audioBuffer);

    return {
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);
```

---
---

### File: `src/ai/flows/generate-horoscope.ts`

**Path:** `src/ai/flows/generate-horoscope.ts`

```ts
'use server';
/**
 * @fileOverview Generates a daily horoscope for a given zodiac sign.
 *
 * - generateHoroscope - A function that generates a horoscope.
 * - GenerateHoroscopeInput - The input type for the generateHoroscope function.
 * - GenerateHoroscopeOutput - The return type for the generateHoroscope function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateHoroscopeInputSchema = z.object({
  zodiacSign: z.string().describe('The zodiac sign for which to generate the horoscope.'),
});
export type GenerateHoroscopeInput = z.infer<typeof GenerateHoroscopeInputSchema>;

const GenerateHoroscopeOutputSchema = z.object({
  horoscope: z.string().describe('The generated horoscope text.'),
});
export type GenerateHoroscopeOutput = z.infer<typeof GenerateHoroscopeOutputSchema>;

export async function generateHoroscope(
  input: GenerateHoroscopeInput
): Promise<GenerateHoroscopeOutput> {
  return generateHoroscopeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHoroscopePrompt',
  input: { schema: GenerateHoroscopeInputSchema },
  output: { schema: GenerateHoroscopeOutputSchema },
  prompt: `You are a mystical astrologer who writes for the DreamWeaver app. 
  
  Generate a short, insightful, and slightly mystical horoscope for the zodiac sign: {{{zodiacSign}}}. 
  
  The tone should be positive and encouraging, connecting the astrological insight to themes of dreams, creativity, and self-discovery. Keep it to 2-3 sentences.`,
});

const generateHoroscopeFlow = ai.defineFlow(
  {
    name: 'generateHoroscopeFlow',
    inputSchema: GenerateHoroscopeInputSchema,
    outputSchema: GenerateHoroscopeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
```

---
---

### File: `src/ai/flows/generate-meme.ts`

**Path:** `src/ai/flows/generate-meme.ts`

```ts
'use server';
/**
 * @fileOverview Creates a meme by adding text to an image.
 *
 * - generateMeme - A function that adds text to an image to create a meme.
 * - GenerateMemeInput - The input for the generateMeme function.
 * - GenerateMemeOutput - The return type for the generateMeme function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { any } from 'genkit/cohere';

const GenerateMemeInputSchema = z.object({
  photoDataUri: z.string().describe(
      "The photo to add text to, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  topText: z.string().optional().describe('Text to add to the top of the image.'),
  bottomText: z.string().optional().describe('Text to add to the bottom of the image.'),
});
export type GenerateMemeInput = z.infer<typeof GenerateMemeInputSchema>;

const GenerateMemeOutputSchema = z.object({
  memeDataUri: z.string().describe(
      'The generated meme as a data URI that must include a MIME type and use Base64 encoding.'
    ),
});
export type GenerateMemeOutput = z.infer<typeof GenerateMemeOutputSchema>;

export async function generateMeme(input: GenerateMemeInput): Promise<GenerateMemeOutput> {
  return generateMemeFlow(input);
}

const generateMemeFlow = ai.defineFlow(
  {
    name: 'generateMemeFlow',
    inputSchema: GenerateMemeInputSchema,
    outputSchema: GenerateMemeOutputSchema,
  },
  async ({ photoDataUri, topText, bottomText }) => {
    const prompt: (string | MediaPart)[] = [
        "You are a meme generator. Add the following text to the image provided. Use a classic, bold, white meme font (like Impact) with a black outline for maximum readability. Place the text at the top and/or bottom as specified.",
    ];

    if (topText) {
        prompt.push(`Top Text: "${topText}"`);
    }
    if (bottomText) {
        prompt.push(`Bottom Text: "${bottomText}"`);
    }

    prompt.push({ media: { url: photoDataUri } });
    
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: prompt,
      config: {
        responseModalities: ['IMAGE'],
      },
    });

    if (!media?.url) {
      throw new Error('Meme generation failed to return an image.');
    }
    
    return { memeDataUri: media.url };
  }
);
```

---
---

### File: `src/ai/flows/generate-music.ts`

**Path:** `src/ai/flows/generate-music.ts`

```ts
'use server';
/**
 * @fileOverview A flow to convert text to a musical audio track.
 *
 * - generateMusic - Converts text to an audio data URI.
 * - GenerateMusicInput - The input type for the generateMusic function.
 * - GenerateMusicOutput - The return type for the generateMusic function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/google-genai';

const GenerateMusicInputSchema = z.object({
  prompt: z.string().describe('The text to be converted to music.'),
});
export type GenerateMusicInput = z.infer<typeof GenerateMusicInputSchema>;

const GenerateMusicOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The generated audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'."
    ),
});
export type GenerateMusicOutput = z.infer<typeof GenerateMusicOutputSchema>;

export async function generateMusic(
  input: GenerateMusicInput
): Promise<GenerateMusicOutput> {
  return generateMusicFlow(input);
}

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  const wav = (await import('wav')).default;
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const generateMusicFlow = ai.defineFlow(
  {
    name: 'generateMusicFlow',
    inputSchema: GenerateMusicInputSchema,
    outputSchema: GenerateMusicOutputSchema,
  },
  async ({ prompt }) => {
    // Using a creative voice for a more 'musical' feel.
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Synthwave' }, // A more stylized voice
          },
        },
      },
      prompt: `Create a short, spoken-word piece from this: ${prompt}. Infuse it with a rhythmic, slightly melodic cadence.`,
    });

    if (!media?.url) {
      throw new Error('Music generation failed to produce audio.');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    const wavBase64 = await toWav(audioBuffer);

    return {
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);
```

---
---

### File: `src/ai/flows/generate-surreal-dream-art.ts`

**Path:** `src/ai/flows/generate-surreal-dream-art.ts`

```ts
'use server';
/**
 * @fileOverview Generates art from text and an optional image.
 *
 * - generateSurrealDreamArt - A function that generates art from a text description.
 * - GenerateSurrealDreamArtInput - The input type for the generateSurrealDreamArt function.
 * - GenerateSurrealDreamArtOutput - The return type for the generateSurrealDreamArt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const GenerateSurrealDreamArtInputSchema = z.object({
  mainSubject: z
    .string()
    .describe('The main subject or theme for the art.'),
  photoDataUri: z.string().optional().describe(
      "An optional photo to provide context for the art, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateSurrealDreamArtInput = z.infer<
  typeof GenerateSurrealDreamArtInputSchema
>;

const GenerateSurrealDreamArtOutputSchema = z.object({
  artDataUri: z
    .string()
    .describe(
      'The generated art as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'
    ),
});
export type GenerateSurrealDreamArtOutput = z.infer<
  typeof GenerateSurrealDreamArtOutputSchema
>;

export async function generateSurrealDreamArt(
  input: GenerateSurrealDreamArtInput
): Promise<GenerateSurrealDreamArtOutput> {
  return generateSurrealDreamArtFlow(input);
}

const systemPrompt = `You are a versatile AI artist. Create a visually compelling image based on the user's text. 
- If the text seems like a dream, create a surrealist piece with a luxurious, cyber-luxe aesthetic, metallic gold borders, and vibrant neon glows.
- If the text seems like a meme, create a funny, shareable image in a modern internet meme style.
- Otherwise, create a beautiful piece of digital art that captures the essence of the text.
- If a reference photo is provided, use it as the primary visual inspiration, blending its elements with the text description to create a cohesive piece.`;

const generateSurrealDreamArtFlow = ai.defineFlow(
  {
    name: 'generateArtFlow',
    inputSchema: GenerateSurrealDreamArtInputSchema,
    outputSchema: GenerateSurrealDreamArtOutputSchema,
  },
  async ({ mainSubject, photoDataUri }) => {
    
    const prompt: (string | MediaPart)[] = [
        systemPrompt,
        `User text: ${mainSubject}`,
    ];

    if (photoDataUri) {
        prompt.push({ media: { url: photoDataUri } });
    }

    const {media} = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-2.5-flash-image-preview',
       config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media) {
      // Fallback to text-to-image if image-to-image fails or returns no image
      const { media: textToImageMedia } = await ai.generate({
          model: 'googleai/imagen-4.0-fast-generate-001',
          prompt: `${systemPrompt}\n\nUser text: ${mainSubject}`,
      });
      return { artDataUri: textToImageMedia!.url! };
    }
    
    return {artDataUri: media!.url!};
  }
);
```

---
---

### File: `src/ai/flows/speak-summary.ts`

**Path:** `src/ai/flows/speak-summary.ts`

```ts
'use server';
/**
 * @fileOverview A flow to convert text to speech.
 *
 * - speakSummary - Converts text to an audio data URI.
 * - SpeakSummaryInput - The input type for the speakSummary function.
 * - SpeakSummaryOutput - The return type for the speakSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/google-genai';

const SpeakSummaryInputSchema = z.object({
  text: z.string().describe('The text to be converted to speech.'),
});
export type SpeakSummaryInput = z.infer<typeof SpeakSummaryInputSchema>;

const SpeakSummaryOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The generated audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'."
    ),
});
export type SpeakSummaryOutput = z.infer<typeof SpeakSummaryOutputSchema>;

export async function speakSummary(
  input: SpeakSummaryInput
): Promise<SpeakSummaryOutput> {
  return speakSummaryFlow(input);
}

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  const wav = (await import('wav')).default;
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const speakSummaryFlow = ai.defineFlow(
  {
    name: 'speakSummaryFlow',
    inputSchema: SpeakSummaryInputSchema,
    outputSchema: SpeakSummaryOutputSchema,
  },
  async ({ text }) => {
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Nova' },
          },
        },
      },
      prompt: text,
    });

    if (!media?.url) {
      throw new Error('Text-to-speech generation failed to produce audio.');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    const wavBase64 = await toWav(audioBuffer);

    return {
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);
```

---
---

### File: `src/ai/flows/summarize-dream-journal-entry.ts`

**Path:** `src/ai/flows/summarize-dream-journal-entry.ts`

```ts
'use server';
/**
 * @fileOverview Summarizes a piece of content using AI.
 *
 * - summarizeDreamJournalEntry - A function that summarizes the content.
 * - SummarizeDreamJournalEntryInput - The input type for the summarizeDreamJournalEntry function.
 * - SummarizeDreamJournalEntryOutput - The return type for the summarizeDreamJournalEntry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeDreamJournalEntryInputSchema = z.object({
  content: z
    .string()
    .describe('The content to summarize.'),
});
export type SummarizeDreamJournalEntryInput = z.infer<
  typeof SummarizeDreamJournalEntryInputSchema
>;

const SummarizeDreamJournalEntryOutputSchema = z.object({
  title: z.string().describe('A short, catchy, 3-5 word title for the content.'),
  summary: z.string().describe('A one-sentence summary of the content.'),
});
export type SummarizeDreamJournalEntryOutput = z.infer<
  typeof SummarizeDreamJournalEntryOutputSchema
>;

export async function summarizeDreamJournalEntry(
  input: SummarizeDreamJournalEntryInput
): Promise<SummarizeDreamJournalEntryOutput> {
  return summarizeDreamJournalEntryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeContentPrompt',
  input: {schema: SummarizeDreamJournalEntryInputSchema},
  output: {schema: SummarizeDreamJournalEntryOutputSchema},
  prompt: `You are a creative assistant. Generate a short, catchy, 3-5 word title and a one-sentence summary for the following content. If the content seems like a meme, make the title and summary funny. If it's a dream, make it mystical. Adapt to the user's input.\n\n{{content}}`,
});

const summarizeDreamJournalEntryFlow = ai.defineFlow(
  {
    name: 'summarizeContentFlow',
    inputSchema: SummarizeDreamJournalEntryInputSchema,
    outputSchema: SummarizeDreamJournalEntryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
```

---
---

### File: `src/ai/flows/upload-to-ipfs.ts`

**Path:** `src/ai/flows/upload-to-ipfs.ts`

```ts
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
```

---
---

### File: `src/ai/genkit.ts`

**Path:** `src/ai/genkit.ts`

```ts
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
```

---
---

### File: `src/app/actions.ts`

**Path:** `src/app/actions.ts`

```ts
'use server';

import { generateSurrealDreamArt } from "@/ai/flows/generate-surreal-dream-art";
import { summarizeDreamJournalEntry } from "@/ai/flows/summarize-dream-journal-entry";
import { speakSummary } from "@/ai/flows/speak-summary";
import { generateDreamVideo } from "@/ai/flows/generate-dream-video";
import { generateMeme } from "@/ai/flows/generate-meme";
import { generateMusic } from "@/ai/flows/generate-music";
import { generateHoroscope } from "@/ai/flows/generate-horoscope";
import { z } from "zod";

const PostSchema = z.object({
  textEntry: z.string().min(1, { message: 'Text entry cannot be empty.'}).optional().or(z.literal('')),
  photoDataUri: z.string().optional(),
});

export type WeaveState = {
  title?: string;
  summary?: string;
  artDataUri?: string;
  audioDataUri?: string;
  videoDataUri?: string;
  memeDataUri?: string;
  musicDataUri?: string;
  error?: string;
  message?: string;
}

export type ArtGenerationState = {
    artDataUri?: string;
    error?: string;
    message?: string;
}

export type HoroscopeState = {
    horoscope?: string;
    sign?: string;
    error?: string;
    message?: string;
}

export async function weaveDreamAction(
  prevState: WeaveState,
  formData: FormData
): Promise<WeaveState> {

  const textEntry = formData.get('textEntry');
  const photoDataUri = formData.get('photoDataUri');

  if (!textEntry && !photoDataUri) {
     const validatedFields = PostSchema.safeParse({
      textEntry: textEntry,
      photoDataUri: photoDataUri,
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors.textEntry?.[0] || 'An entry is required if no photo is provided.',
      };
    }
  }

  if (!textEntry && !photoDataUri) {
    return {};
  }
  
  const validatedFields = PostSchema.safeParse({
    textEntry: textEntry,
    photoDataUri: photoDataUri,
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.textEntry?.[0],
    };
  }

  const { textEntry: entry, photoDataUri: pdu } = validatedFields.data;

  try {
    const [summaryResult, artResult] = await Promise.all([
      summarizeDreamJournalEntry({ content: entry || 'A surreal scene' }),
      generateSurrealDreamArt({ mainSubject: entry || 'A surreal scene', photoDataUri: pdu }),
    ]);

    if (!summaryResult.summary || !artResult.artDataUri || !summaryResult.title) {
        throw new Error("AI generation failed. Please try again.");
    }
    
    // Generate audio from the summary in parallel
    const audioResult = await speakSummary({ text: summaryResult.summary });

    if (!audioResult.audioDataUri) {
        // We can consider this a non-critical failure and still return the rest of the data.
        console.warn("Audio generation failed, but proceeding without audio.");
    }

    return {
      title: summaryResult.title,
      summary: summaryResult.summary,
      artDataUri: artResult.artDataUri,
      audioDataUri: audioResult?.audioDataUri,
      message: 'Post weaved successfully!',
    };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return {
      error: `Failed to weave post: ${errorMessage}`,
    };
  }
}

export async function generateArtAction(
  prevState: ArtGenerationState,
  formData: FormData
): Promise<ArtGenerationState> {
    const prompt = formData.get('prompt') as string;

    if (!prompt) {
        return { error: 'Please enter a prompt to generate art.' };
    }

    try {
        const artResult = await generateSurrealDreamArt({ mainSubject: prompt });
        if (!artResult.artDataUri) {
            throw new Error("AI art generation failed to produce an image.");
        }
        return {
            artDataUri: artResult.artDataUri,
            message: 'Art generated successfully!',
        };
    } catch (e) {
        console.error(e);
        const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
        return {
            error: `Failed to generate art: ${errorMessage}`,
        };
    }
}

export async function generateVideoAction(prevState: WeaveState, formData: FormData): Promise<WeaveState> {
    const artDataUri = formData.get('artDataUri') as string;
    const prompt = formData.get('prompt') as string;
    if (!artDataUri) {
        return { ...prevState, error: 'Original art is missing.' };
    }

    try {
        const { videoDataUri } = await generateDreamVideo({
            photoDataUri: artDataUri,
            prompt: prompt || 'Animate this image, making it cinematic and surreal.'
        });
        return { ...prevState, videoDataUri };
    } catch (e: any) {
        return { ...prevState, error: `Video generation failed: ${e.message}` };
    }
}

export async function generateMemeAction(prevState: WeaveState, formData: FormData): Promise<WeaveState> {
    const artDataUri = formData.get('artDataUri') as string;
    const topText = formData.get('topText') as string;
    const bottomText = formData.get('bottomText') as string;

    if (!artDataUri) {
        return { ...prevState, error: 'Original art is missing.' };
    }
    if (!topText && !bottomText) {
        return { ...prevState, error: 'Please provide text for the meme.' };
    }

    try {
        const { memeDataUri } = await generateMeme({
            photoDataUri: artDataUri,
            topText,
            bottomText,
        });
        return { ...prevState, memeDataUri };
    } catch(e: any) {
        return { ...prevState, error: `Meme generation failed: ${e.message}` };
    }
}

export async function generateMusicAction(prevState: WeaveState, formData: FormData): Promise<WeaveState> {
    const summary = formData.get('summary') as string;

    if (!summary) {
        return { ...prevState, error: 'Cannot generate music without a summary.' };
    }

    try {
        const { audioDataUri } = await generateMusic({
            prompt: summary,
        });
        return { ...prevState, musicDataUri: audioDataUri };
    } catch (e: any) {
        return { ...prevState, error: `Music generation failed: ${e.message}` };
    }
}

export async function getHoroscopeAction(prevState: HoroscopeState, formData: FormData): Promise<HoroscopeState> {
    const zodiacSign = formData.get('zodiacSign') as string;
    if (!zodiacSign) {
        return { error: 'Please select a zodiac sign.' };
    }

    try {
        const { horoscope } = await generateHoroscope({ zodiacSign });
        return { horoscope, sign: zodiacSign, message: 'Horoscope generated!' };
    } catch (e: any) {
        return { error: `Failed to generate horoscope: ${e.message}`, sign: zodiacSign };
    }
}
```

---
---

### File: `src/app/art/page.tsx`

**Path:** `src/app/art/page.tsx`

```tsx
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
```

---
---

### File: `src/app/capture/page.tsx`

**Path:** `src/app/capture/page.tsx`

```tsx
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
```

---
---

### File: `src/app/dreamweaver/page.tsx`

**Path:** `src/app/dreamweaver/page.tsx`

```tsx
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
```

---
---

### File: `src/app/gallery/page.tsx`

**Path:** `src/app/gallery/page.tsx`

```tsx
'use client';

import DreamCard from '@/components/dream-card';
import PageHeader from '@/components/page-header';
import { Skeleton } from '@/components/ui/skeleton';
import { useFirestore, useCollection, useMemoFirebase, useUser } from '@/firebase';
import { Dream } from '@/lib/data';
import { collectionGroup, query, orderBy } from 'firebase/firestore';

export default function GalleryPage() {
  const { firestore } = useFirebase();
  const { isUserLoading: isAuthLoading } = useUser();

  const nftsQuery = useMemoFirebase(() => {
    // Wait until auth is resolved and firestore is available.
    if (isAuthLoading || !firestore) return null;
    // Query the 'nfts' collection group to get documents from all users' nfts subcollections
    const nftsCollectionGroup = collectionGroup(firestore, 'nfts');
    return query(nftsCollectionGroup, orderBy('mintDate', 'desc'));
  }, [firestore, isAuthLoading]);

  const { data: allNfts, isLoading: isNftsLoading } = useCollection<Dream>(nftsQuery);

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
```

---
---

### File: `src/app/globals.css`

**Path:** `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 215 100% 4%; /* Deep Blue-Black */
    --foreground: 210 40% 98%; /* Light Blue-White Text */
    --card: 215 30% 12%; /* Dark Blue-Gray Card */
    --card-foreground: 210 40% 98%;
    --popover: 215 100% 4%;
    --popover-foreground: 210 40% 98%;
    --primary: 205 90% 60%; /* Bright Neon Blue */
    --primary-foreground: 215 100% 10%;
    --secondary: 215 30% 20%;
    --secondary-foreground: 210 40% 98%;
    --muted: 215 30% 15%;
    --muted-foreground: 210 40% 60%;
    --accent: 45 90% 65%; /* Metallic Gold */
    --accent-foreground: 45 30% 10%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 205 80% 40%; /* Neon Blue Border */
    --input: 215 30% 20%;
    --ring: 205 90% 60%; /* Neon Blue Ring */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    background-image: radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1), transparent 50%), 
                      radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.05), transparent 50%);
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .mask-gradient-lr {
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }
}

@keyframes marquee {
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  from { transform: translateX(-50%); }
  to { transform: translateX(0%); }
}

.animate-marquee {
    animation: marquee 60s linear infinite;
}

.animate-marquee-reverse {
    animation: marquee-reverse 60s linear infinite;
}


@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---
---

### File: `src/app/horoscope/page.tsx`

**Path:** `src/app/horoscope/page.tsx`

```tsx
import HoroscopeSelector from '@/components/horoscope-selector';
import PageHeader from '@/components/page-header';

export default function HoroscopePage() {
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
```

---
---

### File: `src/app/layout.tsx`

**Path:** `src/app/layout.tsx`

```tsx
"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import BottomNav from '@/components/bottom-nav';
import { Web3Provider } from '@/components/web3-provider';
import { FirebaseClientProvider } from '@/firebase';
import AppInitializer from '@/components/app-initializer';
import DreamRadio from '@/components/dream-radio';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>DreamWeaver</title>
        <meta name="description" content="Weave your dreams into surreal art." />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Web3Provider>
          <FirebaseClientProvider>
            <AppInitializer>
              <div className="relative flex flex-col min-h-screen">
                <main className="flex-1 pb-24">{children}</main>
                <BottomNav />
                <DreamRadio />
              </div>
            </AppInitializer>
            <Toaster />
          </FirebaseClientProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
```

---
---

### File: `src/app/login/page.tsx`

**Path:** `src/app/login/page.tsx`

```tsx
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
```

---
---

### File: `src/app/page.tsx`

**Path:** `src/app/page.tsx`

```tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { dreams } from '@/lib/data';
import DreamCard from '@/components/dream-card';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const firstRow = dreams.slice(0, 3);
  const secondRow = dreams.slice(3, 6);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
       <header className="container mx-auto px-4 py-6 z-10">
        <h1 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-accent via-primary to-accent">
          DreamWeaver
        </h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <div className="relative w-full flex flex-col items-center justify-center -mt-8 py-12">
              <div className="w-full max-w-7xl relative mask-gradient-lr">
                  <Marquee>
                      {dreams.slice(0, 4).map((dream) => <DreamCard key={`marquee-1-${dream.id}`} dream={dream} />)}
                  </Marquee>
                  <Marquee reverse={true} className="mt-8">
                      {dreams.slice(1, 5).map((dream) => <DreamCard key={`marquee-2-${dream.id}`} dream={dream} />)}
                  </Marquee>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
          </div>

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
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm space-y-2">
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

const Marquee = ({ children, reverse = false, className }: { children: React.ReactNode, reverse?: boolean, className?: string }) => {
    return (
        <div className={cn("flex w-full overflow-hidden", className)}>
            <div className={cn("flex w-max animate-marquee", { "animate-marquee-reverse": reverse })}>
                {Array(4).fill(0).map((_, i) => (
                    <div key={i} className="flex-shrink-0 flex justify-around gap-8 px-4">
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
};
```

---
---

### File: `src/app/privacy/page.tsx`

**Path:** `src/app/privacy/page.tsx`

```tsx
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
```

---
---

### File: `src/app/profile/page.tsx`

**Path:** `src/app/profile/page.tsx`

```tsx
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
import { Award, Zap, Shapes } from "lucide-react";
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { Skeleton } from "@/components/ui/skeleton";
import { useAccount, useConnect } from 'wagmi';
import { toast } from '@/hooks/use-toast';

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
  
  const handleConnect = (connector: any) => {
    connect({ connector });
  };


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
        <div className="mt-8 flex w-full max-w-xs flex-col items-center gap-4">
          {connectors.map((connector) => (
            <Button
              key={connector.uid}
              onClick={() => handleConnect(connector)}
              className="w-full text-lg"
              size="lg"
            >
              Connect with {connector.name}
            </Button>
          ))}
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
```

---
---

### File: `src/app/signup/page.tsx`

**Path:** `src/app/signup/page.tsx`

```tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect all signup attempts to the profile page
    router.replace('/profile');
  }, [router]);

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center px-4 py-8">
      <p className="text-muted-foreground">Redirecting to profile...</p>
    </div>
  );
}
```

---
---

### File: `src/app/terms/page.tsx`

**Path:** `src/app/terms/page.tsx`

```tsx
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
```

---
---

### File: `src/components/FirebaseErrorListener.tsx`

**Path:** `src/components/FirebaseErrorListener.tsx`

```tsx
'use client';

import { useState, useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/**
 * An invisible component that listens for globally emitted 'permission-error' events.
 * It throws any received error to be caught by Next.js's global-error.tsx.
 */
export function FirebaseErrorListener() {
  // Use the specific error type for the state for type safety.
  const [error, setError] = useState<FirestorePermissionError | null>(null);

  useEffect(() => {
    // The callback now expects a strongly-typed error, matching the event payload.
    const handleError = (error: FirestorePermissionError) => {
      // Set error in state to trigger a re-render.
      setError(error);
    };

    // The typed emitter will enforce that the callback for 'permission-error'
    // matches the expected payload type (FirestorePermissionError).
    errorEmitter.on('permission-error', handleError);

    // Unsubscribe on unmount to prevent memory leaks.
    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, []);

  // On re-render, if an error exists in state, throw it.
  if (error) {
    throw error;
  }

  // This component renders nothing.
  return null;
}
```

---
---

### File: `src/components/app-initializer.tsx`

**Path:** `src/components/app-initializer.tsx`

```tsx
'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';

export default function AppInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}
```

---
---

### File: `src/components/app-logo.tsx`

**Path:** `src/components/app-logo.tsx`

```tsx
import { cn } from "@/lib/utils";

const AppLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-accent", className)}
    {...props}
  >
    <defs>
      <filter id="neon-red-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M32 58C17.63 58 6 46.37 6 32C6 20.33 14.48 10.41 25 7.42C23.18 11.23 22 15.98 22 21C22 35.33 34.67 48 49 48C52.12 48 55.05 47.38 57.69 46.28C52.17 53.53 42.84 58 32 58Z"
      stroke="currentColor"
      strokeWidth="2"
      className="drop-shadow-neon-gold"
    />

    <path
      d="M32,22 C36,26 40,30 42,35"
      stroke="url(#weave-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M28,28 C34,30 38,36 39,42"
      stroke="url(#weave-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M36,25 C38,32 36,39 32,44"
      stroke="url(#weave-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />

    <circle cx="46" cy="14" r="3" className="text-primary" fill="currentColor" filter="url(#neon-red-glow)" />
    <circle cx="52" cy="25" r="1.5" className="text-primary/70" fill="currentColor" filter="url(#neon-red-glow)" />

    <defs>
        <linearGradient id="weave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 1}} />
        </linearGradient>
    </defs>
  </svg>
);

export default AppLogo;
```

---
---

### File: `src/components/art-generator-form.tsx`

**Path:** `src/components/art-generator-form.tsx`

```tsx
'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Sparkles, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { ArtGenerationState, generateArtAction } from '@/app/actions';
import { Skeleton } from './ui/skeleton';

const initialState: ArtGenerationState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold"
      disabled={pending}
    >
      {pending ? (
        <>
          <Sparkles className="mr-2 h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-5 w-5" />
          Generate Art
        </>
      )}
    </Button>
  );
}

export default function ArtGeneratorForm() {
  const [state, formAction] = useActionState(generateArtAction, initialState);
  const { toast } = useToast();
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state.message) {
      toast({ title: 'Success', description: state.message });
    }
    if (state.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-6">
        <div className="grid w-full gap-2">
          <Label htmlFor="prompt" className="text-lg">
            Enter your prompt
          </Label>
          <Textarea
            id="prompt"
            name="prompt"
            placeholder="A futuristic cityscape at sunset, with flying cars and neon signs..."
            rows={5}
            className="bg-input border-border focus:ring-primary text-base"
          />
        </div>
        <SubmitButton />
      </form>

      {pending && (
         <Card className="bg-card border-accent/20 overflow-hidden">
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
            </CardHeader>
            <CardContent>
                <Skeleton className="w-full aspect-square" />
            </CardContent>
         </Card>
      )}

      {state.artDataUri && !pending && (
        <Card className="bg-card border-accent/20 overflow-hidden animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">Generation Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border border-accent rounded-lg p-1 shadow-lg shadow-accent/20">
              <Image
                src={state.artDataUri}
                alt="Generated art"
                width={512}
                height={512}
                className="rounded-md w-full h-auto object-contain"
              />
            </div>
            {/* Future buttons like "Save" or "Mint" could go here */}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
```

---
---

### File: `src/components/bottom-nav.tsx`

**Path:** `src/components/bottom-nav.tsx`

```tsx
"use client";

import { cn } from "@/lib/utils";
import { Home, Images, PenSquare, User, Sparkles, Paintbrush, Bot, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/capture", label: "Capture", icon: Sparkles },
  { href: "/horoscope", label: "Horoscope", icon: Star },
  { href: "/profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-lg border-t border-accent/30 z-50">
      <div className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-colors duration-300 group",
                isActive ? "text-primary" : "text-muted-foreground hover:text-accent"
              )}
            >
              <item.icon
                className={cn(
                  "h-7 w-7 transition-all duration-300 drop-shadow-[0_0_4px_hsl(var(--muted-foreground))] group-hover:drop-shadow-neon-gold",
                  isActive ? "drop-shadow-[0_0_8px_hsl(var(--primary))] scale-110" : "group-hover:scale-110"
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={cn("text-xs mt-1 font-medium transition-colors", isActive ? "text-primary-foreground" : "text-muted-foreground")}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
```

---
---

### File: `src/components/dream-capture-form.tsx`

**Path:** `src/components/dream-capture-form.tsx`

```tsx
"use client";

import { useFormStatus } from "react-dom";
import { weaveDreamAction, WeaveState, generateVideoAction, generateMemeAction, generateMusicAction } from "@/app/actions";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mic, Sparkles, Square, Upload, X, GalleryHorizontal, Volume2, LoaderCircle, RefreshCw, Film, MessageSquare, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useFirestore, useUser, addDocumentNonBlocking } from "@/firebase";
import { collection, serverTimestamp, doc, runTransaction } from "firebase/firestore";
import Link from "next/link";
import { useAccount } from "wagmi";


const initialState: WeaveState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold"
      disabled={pending}
    >
      {pending ? (
        <>
          <Sparkles className="mr-2 h-5 w-5 animate-spin" />
          Weaving...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" />
          Weave Post
        </>
      )}
    </Button>
  );
}

function Waveform({ isRecording }: { isRecording: boolean }) {
  return (
    <div className="flex items-center justify-center space-x-1 h-16">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-primary/50 rounded-full",
            isRecording && "animate-pulse-glow"
          )}
          style={{
            height: isRecording ? `${Math.sin(i * 0.5) * 20 + 30}px` : `4px`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function DreamCaptureForm() {
  const [state, formAction] = useActionState(weaveDreamAction, initialState);
  const [videoState, videoFormAction] = useActionState(generateVideoAction, state);
  const [memeState, memeFormAction] = useActionState(generateMemeAction, state);
  const [musicState, musicFormAction] = useActionState(generateMusicAction, state);


  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<any>(null);
  const [photoDataUri, setPhotoDataUri] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { user, isUserLoading } = useUser();
  const { isConnected } = useAccount();
  const firestore = useFirestore();

  const finalState = musicState.musicDataUri ? musicState : (memeState.memeDataUri ? memeState : (videoState.videoDataUri ? videoState : state));

  const handleReset = () => {
    setTranscript("");
    setPhotoDataUri(null);
    if (formRef.current) {
        formRef.current.reset();
    }
    // Reset all action states
    formAction(new FormData());
    videoFormAction(new FormData());
    memeFormAction(new FormData());
    musicFormAction(new FormData());
  };

  useEffect(() => {
    if (finalState.message) {
      toast({ title: "Success", description: finalState.message });
    }
    if (finalState.error) {
      toast({
        title: "Error",
        description: finalState.error,
        variant: "destructive",
      });
    }
  }, [finalState, toast]);

  const handlePostToGallery = async () => {
    if (finalState.summary && finalState.artDataUri && finalState.title && user && firestore) {
        const nftsCollectionRef = collection(firestore, 'users', user.uid, 'nfts');
        const newDream = {
          title: finalState.title,
          summary: finalState.summary,
          artUrl: finalState.musicDataUri || finalState.memeDataUri || finalState.videoDataUri || finalState.artDataUri, // Prioritize remix
          entry: transcript, 
          isHot: Math.random() > 0.8,
          author: user.email?.split('@')[0] || 'dreamer',
          ownerId: user.uid,
          mintDate: serverTimestamp(),
        };

        addDocumentNonBlocking(nftsCollectionRef, newDream);

        const profileRef = doc(firestore, 'users', user.uid, 'profiles', 'main');
        try {
            await runTransaction(firestore, async (transaction) => {
                const profileDoc = await transaction.get(profileRef);
                if (!profileDoc.exists()) {
                    return;
                }
                const currentStreak = profileDoc.data().dreamStreak || 0;
                const currentEnergy = profileDoc.data().energy || 0;
                transaction.update(profileRef, { 
                    dreamStreak: currentStreak + 1,
                    energy: Math.min(100, currentEnergy + 5)
                });
            });
        } catch (e) {
            console.error("Failed to update profile on post:", e);
        }

        toast({
            title: "Posted to Gallery!",
            description: "Your creation has been saved to your collection.",
        });

        handleReset();

    } else if (!user) {
        toast({
            title: "Not Logged In",
            description: "You must be logged in to post to the gallery.",
            variant: "destructive",
        });
    }
  };
  
  const handleToggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        toast({
          variant: "destructive",
          title: "Browser not supported",
          description: "Speech recognition is not supported in this browser.",
        });
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        toast({
          variant: "destructive",
          title: "Recognition Error",
          description: event.error === 'not-allowed' ? "Microphone access denied." : "An error occurred during speech recognition."
        });
        setIsRecording(false);
      };

      recognition.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = transcript;
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        setTranscript(finalTranscript + interimTranscript);
      };
      
      recognition.start();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoDataUri(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  const { pending: isWeaving } = useFormStatus();
  const videoStatus = useFormStatus();
  const memeStatus = useFormStatus();
  const musicStatus = useFormStatus();
  const isRemixing = videoStatus.pending || memeStatus.pending || musicStatus.pending;


  if (isUserLoading) {
      return (
        <div className="flex justify-center items-center p-8">
            <LoaderCircle className="w-8 h-8 animate-spin" />
        </div>
      );
  }

  if (!user || !isConnected) {
    return (
        <div className="text-center p-8 rounded-lg border-2 border-dashed border-border">
            <p className="text-muted-foreground">Please connect your wallet and log in to create a post.</p>
            <Button asChild className="mt-4">
              <Link href="/login">Login</Link>
            </Button>
        </div>
    )
  }

  return (
    <div className="space-y-8">
      <Card className="bg-card border-accent/20">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <Button 
                size="icon" 
                onClick={handleToggleRecording}
                className={cn(
                  "w-20 h-20 rounded-full text-accent-foreground drop-shadow-neon-gold transition-all duration-300",
                  isRecording ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                  )}
              >
                {isRecording ? <Square className="h-10 w-10" /> : <Mic className="h-10 w-10" />}
              </Button>
               <Button 
                size="icon" 
                onClick={() => fileInputRef.current?.click()}
                className="w-20 h-20 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                <Upload className="h-10 w-10" />
              </Button>
            </div>
            <Waveform isRecording={isRecording} />
            <p className="text-sm text-muted-foreground">
              {isRecording ? "Recording... Tap to stop." : "Tap to record, upload an image, or start typing."}
            </p>
          </div>
        </CardContent>
      </Card>

       {photoDataUri && (
        <div className="relative w-full max-w-sm mx-auto">
          <Image
            src={photoDataUri}
            alt="Image preview"
            width={300}
            height={300}
            className="rounded-lg object-cover w-full"
          />
           <Button
            variant="destructive"
            size="icon"
            className="absolute -top-2 -right-2 rounded-full h-8 w-8"
            onClick={() => setPhotoDataUri(null)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      <form ref={formRef} action={formAction} className="space-y-6">
        <input type="hidden" name="photoDataUri" value={photoDataUri || ''} />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
        <div className="grid w-full gap-2">
          <Label htmlFor="textEntry" className="text-lg">
            Describe your idea
          </Label>
          <Textarea
            id="textEntry"
            name="textEntry"
            placeholder="A cat playing chess with a dog on the moon..."
            rows={8}
            className="bg-input border-border focus:ring-primary text-base"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
          />
        </div>
        <SubmitButton />
      </form>

      {isWeaving && (
        <div className="text-center p-8 rounded-lg border-2 border-dashed border-primary/50 animate-pulse">
            <Sparkles className="mx-auto h-12 w-12 text-primary drop-shadow-neon-red"/>
            <p className="mt-4 text-lg font-semibold text-primary">The Looms are working their magic...</p>
            <p className="text-sm text-muted-foreground">Generating your creation.</p>
        </div>
      )}

      {finalState.artDataUri && !isWeaving && (
        <Card className="bg-card border-accent/20 overflow-hidden animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">{finalState.title || "Weaving Complete!"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border border-accent rounded-lg p-1 shadow-lg shadow-accent/20 relative">
              {isRemixing && (
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 rounded-md">
                    <LoaderCircle className="w-12 h-12 text-primary animate-spin" />
                    <p className="mt-4 text-lg font-semibold text-primary-foreground">Remixing...</p>
                </div>
              )}
              {finalState.musicDataUri ? (
                  <audio controls src={finalState.musicDataUri} className="w-full">
                    Your browser does not support the audio element.
                  </audio>
              ) : finalState.memeDataUri ? (
                <Image src={finalState.memeDataUri} alt="Generated meme" width={512} height={512} className="rounded-md w-full h-auto object-contain" />
              ) : finalState.videoDataUri ? (
                <video src={finalState.videoDataUri} controls autoPlay loop className="rounded-md w-full h-auto object-contain" />
              ) : (
                <Image src={finalState.artDataUri} alt="Generated art" width={512} height={512} className="rounded-md w-full h-auto object-contain" />
              )}
            </div>

            {/* Remix section */}
            {!finalState.memeDataUri && !finalState.videoDataUri && !finalState.musicDataUri &&(
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="text-lg">Remix Your Creation</CardTitle>
                        <CardDescription>Transform your art into something new.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form action={videoFormAction} className="space-y-2">
                           <input type="hidden" name="artDataUri" value={finalState.artDataUri} />
                           <Textarea name="prompt" placeholder="Describe the animation (e.g., 'make the stars twinkle')" className="bg-input"/>
                           <Button type="submit" className="w-full" disabled={isRemixing}>
                            <Film className="mr-2"/> Generate Video
                           </Button>
                        </form>
                        <form action={memeFormAction} className="space-y-2">
                            <input type="hidden" name="artDataUri" value={finalState.artDataUri} />
                            <Input name="topText" placeholder="Top text" className="bg-input" />
                            <Input name="bottomText" placeholder="Bottom text" className="bg-input" />
                            <Button type="submit" className="w-full" disabled={isRemixing}>
                                <MessageSquare className="mr-2" /> Make it a Meme
                            </Button>
                        </form>
                        <form action={musicFormAction} className="space-y-2">
                            <input type="hidden" name="artDataUri" value={finalState.artDataUri} />
                            <input type="hidden" name="summary" value={finalState.summary} />
                            <Button type="submit" className="w-full" disabled={isRemixing}>
                                <Music className="mr-2" /> Generate Music
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            )}

            <div>
              <div className="flex items-center justify-between mb-2">
                 <h3 className="text-xl font-semibold">Alice's Summary</h3>
                 {finalState.audioDataUri && (
                     <audio controls src={finalState.audioDataUri} className="h-8">
                        Your browser does not support the audio element.
                     </audio>
                 )}
              </div>
              <p className="text-muted-foreground italic">
                &quot;{finalState.summary}&quot;
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                 <Button
                    onClick={handlePostToGallery}
                    size="lg"
                    className="w-full"
                    disabled={isRemixing}
                >
                    <GalleryHorizontal className="mr-2 h-5 w-5" />
                    Post to Gallery
                </Button>
                <Button
                    onClick={handleReset}
                    size="lg"
                    variant="outline"
                    className="w-full"
                    disabled={isRemixing}
                >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Start Over
                </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
```

---
---

### File: `src/components/dream-card.tsx`

**Path:** `src/components/dream-card.tsx`

```tsx
import { Dream } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Flame } from "lucide-react";
import MintButton from "./mint-button";
import ShareButton from "./share-button";

type DreamCardProps = {
  dream: Dream;
};

export default function DreamCard({ dream }: DreamCardProps) {
  const dreamUrl = typeof window !== 'undefined' ? `${window.location.origin}/dream/${dream.id}` : '';

  return (
    <Card className="bg-gradient-to-br from-card to-secondary/50 border-accent/20 overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Image
          src={dream.artUrl}
          alt={`Art for dream: ${dream.title}`}
          width={600}
          height={600}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          data-ai-hint="surreal clock"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        {dream.isHot && (
          <Badge
            variant="destructive"
            className="absolute top-4 right-4 bg-primary/80 border-primary text-primary-foreground animate-pulse-glow"
          >
            <Flame className="w-4 h-4 mr-1" />
            HOT
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-6 pb-4">
        <CardTitle className="text-xl font-bold text-accent">
            {dream.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-2 italic line-clamp-2">
          &quot;{dream.summary}&quot;
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-sm text-foreground font-semibold">@{dream.author}</p>
        <div className="flex items-center gap-2">
            <MintButton dream={dream} />
            <ShareButton dream={dream} dreamUrl={dreamUrl} />
        </div>
      </CardFooter>
    </Card>
  );
}
```

---
---

### File: `src/components/dream-radio.tsx`

**Path:** `src/components/dream-radio.tsx`

```tsx
'use client';

import { generateEnyaMusic } from '@/ai/flows/generate-enya-music';
import { useToast } from '@/hooks/use-toast';
import { LoaderCircle, Music, Play, Pause, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Slider } from './ui/slider';

export default function DreamRadio() {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const handleFetchMusic = async () => {
    setIsLoading(true);
    try {
      const result = await generateEnyaMusic({
        prompt: 'A flowing, peaceful, and atmospheric soundscape with gentle choirs and soft piano.',
      });
      setAudioSrc(result.audioDataUri);
    } catch (error) {
      console.error('Failed to generate music:', error);
      toast({
        title: 'Dream Radio Error',
        description: 'Could not generate ambient music. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (audioSrc && audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
    }
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else if (!isLoading) {
        handleFetchMusic();
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50">
        {isExpanded ? (
             <div className="bg-card/80 backdrop-blur-lg border border-accent/30 rounded-lg p-4 w-64 shadow-lg animate-in fade-in-50 slide-in-from-bottom-4 duration-300">
                <div className='flex justify-between items-center'>
                    <h4 className="font-semibold text-accent">Dream Radio</h4>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsExpanded(false)}><X className="w-4 h-4" /></Button>
                </div>
                <div className="flex items-center gap-4 mt-2">
                    <Button variant="ghost" size="icon" onClick={togglePlay} disabled={isLoading}>
                    {isLoading ? (
                        <LoaderCircle className="w-6 h-6 animate-spin text-primary" />
                    ) : isPlaying ? (
                        <Pause className="w-6 h-6 text-primary" />
                    ) : (
                        <Play className="w-6 h-6 text-primary" />
                    )}
                    </Button>
                    <Slider
                        value={[volume * 100]}
                        onValueChange={(value) => setVolume(value[0] / 100)}
                        className="w-full"
                    />
                </div>
                {audioSrc && (
                    <audio
                    ref={audioRef}
                    src={audioSrc}
                    loop
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    />
                )}
             </div>
        ) : (
            <Button
                size="icon"
                className={cn("rounded-full h-14 w-14 bg-accent/80 text-accent-foreground backdrop-blur-lg hover:bg-accent", isPlaying && "animate-pulse-glow")}
                onClick={() => setIsExpanded(true)}
            >
                <Music className="w-7 h-7" />
            </Button>
        )}
    </div>
  );
}
```

---
---

### File: `src/components/horoscope-selector.tsx`

**Path:** `src/components/horoscope-selector.tsx`

```tsx
'use client';

import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { HoroscopeState, getHoroscopeAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { LoaderCircle, WandSparkles } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const initialState: HoroscopeState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold"
      disabled={pending}
    >
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          Consulting the stars...
        </>
      ) : (
        <>
          <WandSparkles className="mr-2 h-5 w-5" />
          Get My Horoscope
        </>
      )}
    </Button>
  );
}

export default function HoroscopeSelector() {
  const [state, formAction] = useActionState(getHoroscopeAction, initialState);
  const { toast } = useToast();
  const [selectedSign, setSelectedSign] = useState<string>('');

  useEffect(() => {
    if (state.message) {
      toast({ title: 'Success', description: state.message });
    }
    if (state.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);
  
  // This gets the pending status for the form this component is in.
  // We need to use this to show loading states, but since we have a separate
  // form for the selector, we can't just use `useFormStatus` at the top level.
  // We can wrap the form content in a component that uses it.
  function FormContent() {
      const { pending } = useFormStatus();
      return (
        <>
            <Select name="zodiacSign" required value={selectedSign} onValueChange={setSelectedSign}>
              <SelectTrigger className="w-full text-lg py-6">
                <SelectValue placeholder="Select your Zodiac sign" />
              </SelectTrigger>
              <SelectContent>
                {zodiacSigns.map(sign => (
                  <SelectItem key={sign} value={sign}>{sign}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold"
              disabled={pending || !selectedSign}
            >
              {pending ? (
                <>
                  <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                  Consulting the stars...
                </>
              ) : (
                <>
                  <WandSparkles className="mr-2 h-5 w-5" />
                  Get My Horoscope
                </>
              )}
            </Button>

            {pending && (
                <Card className="bg-card border-accent/20 overflow-hidden">
                    <CardHeader>
                        <Skeleton className="h-8 w-1/3 mb-2" />
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-3/4" />
                    </CardHeader>
                </Card>
            )}

            {state.horoscope && !pending && (
                <Card className="bg-card border-accent/20 overflow-hidden animate-in fade-in-50 duration-500">
                <CardHeader>
                    <CardTitle className="text-2xl text-accent">Your Daily Horoscope for {state.sign}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-foreground/90 italic">
                        &quot;{state.horoscope}&quot;
                    </p>
                </CardContent>
                </Card>
            )}
        </>
      )
  }

  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-6">
        <FormContent/>
      </form>
    </div>
  );
}
```

---
---

### File: `src/components/mint-button.tsx`

**Path:** `src/components/mint-button.tsx`

```tsx
"use client";

import { useAccount, useConnect, useDisconnect, useWriteContract } from "wagmi";
import { Button } from "./ui/button";
import { Coins, Wallet, LoaderCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { base } from "viem/chains";
import { parseEther } from "viem";
import { useEffect, useState } from "react";
import { Dream } from "@/lib/data";
import { uploadToIpfs } from "@/ai/flows/upload-to-ipfs";
import { useFirestore } from "@/firebase";
import { doc, runTransaction } from "firebase/firestore";

const zora1155Abi = [
  {
    "type": "function",
    "name": "mintWithRewards",
    "inputs": [
      { "name": "recipient", "type": "address" },
      { "name": "tokenId", "type": "uint256" },
      { "name": "quantity", "type": "uint256" },
      { "name": "minterArguments", "type": "bytes" },
      { "name": "mintReferral", "type": "address" }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "createToken",
    "inputs": [
        { "name": "uri", "type": "string" },
        { "name": "maxSupply", "type": "uint256" }
    ],
    "outputs": [
        { "name": "tokenId", "type": "uint256" }
    ],
    "stateMutability": "nonpayable"
  }
] as const;

// Address for Zora 1155 contract on Base
const zoraContractAddress = "0xFb193fbce2E3F4c952463D2aC9FfFd6A4A49ca41";

async function incrementMintCount(firestore: any) {
    if (!firestore) return;
    const statsRef = doc(firestore, 'platform', 'stats');
    try {
        await runTransaction(firestore, async (transaction) => {
            const statsDoc = await transaction.get(statsRef);
            if (!statsDoc.exists()) {
                transaction.set(statsRef, { totalMints: 1 });
            } else {
                const newCount = (statsDoc.data().totalMints || 0) + 1;
                transaction.update(statsRef, { totalMints: newCount });
            }
        });
    } catch (e) {
        console.error("Failed to increment mint count:", e);
        // This is a non-critical operation, so we just log the error.
    }
}


export default function MintButton({ dream }: { dream: Dream }) {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { toast } = useToast();
  const { writeContractAsync, data: hash, isPending, isSuccess, isError, error } = useWriteContract();
  const [isUploading, setIsUploading] = useState(false);
  const firestore = useFirestore();

  const handleMint = async () => {
    if (!address) {
        toast({
            title: "Wallet Not Connected",
            description: "Please connect your wallet to mint.",
            variant: "destructive"
        });
        return;
    }
    
    setIsUploading(true);
    toast({ title: "Preparing Artwork...", description: "Uploading metadata to decentralized storage." });

    try {
        // 1. Upload metadata to IPFS via Genkit flow
        const { metadataUrl } = await uploadToIpfs({
            title: dream.title,
            description: dream.summary,
            artDataUri: dream.artUrl,
            author: dream.author
        });

        toast({ title: "Metadata Ready!", description: "Please confirm the transaction in your wallet." });
        
        // This is a simplified approach. A more robust solution would use a factory contract
        // or have a backend create tokens. For this demo, we assume tokenId can be pseudo-randomly
        // derived or we just create a new one each time. The most robust way is to use a backend/factory.
        // NOTE: The Zora 1155 contract might not have `createToken`. This is a conceptual example.
        // A common pattern is to have a fixed set of tokenIds and mint against them.
        // For a true open edition, you'd create a new tokenId for each unique dream.
        // Let's assume a simplified mint call with a random tokenId for now as we don't have `createToken`.
        // A real production app would need a more sophisticated token ID management strategy.
        const pseudoRandomTokenId = BigInt(Math.floor(Math.random() * 1000000000));


        await writeContractAsync({
            address: zoraContractAddress,
            abi: zora1155Abi,
            functionName: 'mintWithRewards',
            args: [
                address, // recipient
                pseudoRandomTokenId, // Placeholder tokenId
                1n, // quantity
                `0x000000000000000000000000${address.substring(2)}`, // minterArguments (includes recipient)
                "0x0000000000000000000000000000000000000000" // mintReferral
            ],
            value: parseEther("0.0008"), // Mint fee
            chainId: base.id,
        });

    } catch (e: any) {
        console.error("Minting failed", e);
        toast({
            title: "Minting Failed",
            description: e.message || "Could not upload metadata or process transaction.",
            variant: "destructive"
        });
    } finally {
        setIsUploading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
        toast({
            title: "Mint Successful!",
            description: (
                <div>
                    <p>Your creation has been minted. See transaction:</p>
                    <a href={`https://basescan.org/tx/${hash}`} target="_blank" rel="noopener noreferrer" className="underline">
                        View on BaseScan
                    </a>
                </div>
            ),
        });
        // Increment the platform-wide mint counter
        incrementMintCount(firestore);
    }
    if (isError) {
        toast({
            title: "Transaction Failed",
            description: error?.message || "An unexpected error occurred in your wallet.",
            variant: "destructive",
        });
    }
  }, [isSuccess, isError, hash, error, toast, firestore]);

  const isMinting = isPending || isUploading;

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <Button
            onClick={handleMint}
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold"
            disabled={isMinting}
        >
          {isMinting ? <LoaderCircle className="w-4 h-4 mr-2 animate-spin" /> : <Coins className="w-4 h-4 mr-2" />}
          {isUploading ? "Uploading..." : isPending ? "Minting..." : "Mint"}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" disabled={isMinting}>
                <Wallet className="h-5 w-5 text-muted-foreground"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem disabled>
                {address?.slice(0, 6)}...{address?.slice(-4)}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => disconnect()}>
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold"
        >
          <Coins className="w-4 h-4 mr-2" />
          Mint
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {connectors.map((connector) => (
          <DropdownMenuItem
            key={connector.uid}
            onClick={() => connect({ connector })}
          >
            {connector.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

---
---

### File: `src/components/page-header.tsx`

**Path:** `src/components/page-header.tsx`

```tsx
type PageHeaderProps = {
    title: string;
    subtitle: string;
    className?: string;
  };
  
  export default function PageHeader({ title, subtitle, className }: PageHeaderProps) {
    return (
      <header className={className}>
        <h1 className="text-4xl font-bold tracking-tight drop-shadow-neon-gold sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      </header>
    );
  }
```

---
---

### File: `src/components/share-button.tsx`

**Path:** `src/components/share-button.tsx`

```tsx
'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { Share2, Twitter, Copy, Download, MessageCircle } from 'lucide-react';
import { Dream } from '@/lib/data';
import { toast } from '@/hooks/use-toast';

interface ShareButtonProps {
  dream: Dream;
  dreamUrl: string;
}

// Simple Telegram icon SVG
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
);


export default function ShareButton({ dream, dreamUrl }: ShareButtonProps) {
  const shareText = `Check out this dream I created with DreamWeaver: "${dream.title}"`;

  const handleShare = (platform: 'twitter' | 'telegram' | 'farcaster') => {
    let url = '';
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(dreamUrl);
    const encodedImageUrl = encodeURIComponent(dream.artUrl);

    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
      case 'farcaster':
        url = `https://warpcast.com/~/compose?text=${encodedText}&embeds[]=${encodedUrl}&embeds[]=${encodedImageUrl}`;
        break;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(dreamUrl);
    toast({
      title: 'Link Copied!',
      description: 'The link to this dream has been copied to your clipboard.',
    });
  };
  
  const handleDownload = async () => {
    try {
        const response = await fetch(dream.artUrl);
        if (!response.ok) throw new Error('Network response was not ok.');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${dream.title.replace(/ /g, '_')}.png`; // Suggest a filename
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        toast({ title: 'Download Started', description: 'Your image is being downloaded.'});
    } catch (error) {
        console.error("Download failed:", error);
        // If fetch fails due to CORS, fallback to opening in new tab for manual save
        window.open(dream.artUrl, '_blank');
        toast({ title: 'Download Failed', description: 'Could not automatically download. Your image has been opened in a new tab for you to save manually.', variant: 'destructive'});
    }
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleShare('twitter')}>
          <Twitter className="mr-2" /> Share on X
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('farcaster')}>
          <MessageCircle className="mr-2" /> Share on Farcaster
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('telegram')}>
          <TelegramIcon className="mr-2" /> Share on Telegram
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink}>
          <Copy className="mr-2" /> Copy Link
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDownload}>
          <Download className="mr-2" /> Download Image
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

---
---

### File: `src/components/splash-screen.tsx`

**Path:** `src/components/splash-screen.tsx`

```tsx
import AppLogo from "./app-logo";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50 animate-in fade-in-0 duration-500">
      <div className="relative">
        <AppLogo className="w-24 h-24 animate-pulse-glow" />
      </div>
      <h1 className="text-4xl font-bold mt-6 tracking-wider">DreamWeaver</h1>
      <p className="text-muted-foreground mt-2">Weaving the fabric of your subconscious.</p>
    </div>
  );
}
```

---
---

### File: `src/components/ui/input.tsx`

**Path:** `src/components/ui/input.tsx`

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

---
---

### File: `src/components/ui/textarea.tsx`

**Path:** `src/components/ui/textarea.tsx`

```tsx
import * as React from 'react';

import {cn} from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};
```

---
---

### File: `src/lib/data.ts`

**Path:** `src/lib/data.ts`

```ts
import { PlaceHolderImages } from "./placeholder-images";
import { Timestamp } from "firebase/firestore";

export type Dream = {
  id: string;
  title: string;
  entry: string;
  summary: string;
  artUrl: string;
  isHot: boolean;
  author: string;
  ownerId: string;
  mintDate: Timestamp;
};

const getImageUrl = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/error/600/800';
}

export const dreams: Omit<Dream, 'ownerId' | 'mintDate'>[] = [
  {
    id: "1",
    title: "The Melting Clock",
    entry: "I was on a floating island, and the clock on the old tower was melting like ice cream under two suns. Strange birds were singing backwards.",
    summary: "A surreal landscape with a melting clock on a floating island under two suns, accompanied by birds singing in reverse.",
    artUrl: getImageUrl("dream-1"),
    isHot: true,
    author: "lucid_dreamer",
  },
  {
    id: "2",
    title: "Coral City Depths",
    entry: "I swam through a city made of coral. The skyscrapers were giant, colorful reefs, and glowing jellyfish were the streetlights. Fish in business suits swam past me.",
    summary: "An underwater metropolis built from coral, illuminated by jellyfish, and inhabited by anthropomorphic fish.",
    artUrl: getImageUrl("dream-2"),
    isHot: false,
    author: "deep_diver",
  },
  {
    id: "3",
    title: "The Crystal Forest",
    entry: "The forest was made of glass trees that chimed when the wind blew. A river of pure light flowed through it, and I could see my own reflection in every leaf.",
    summary: "A forest of crystalline trees that create music with the wind, bisected by a luminous river.",
    artUrl: getImageUrl("dream-3"),
    isHot: false,
    author: "visionary",
  },
  {
    id: "4",
    title: "Martian Gold",
    entry: "As an astronaut on a red desert planet, I stumbled upon a lost temple. Inside, a floating golden artifact was pulsing with a soft, warm light.",
    summary: "An astronaut discovers a pulsating golden artifact within a temple on a desert planet.",
    artUrl: getImageUrl("dream-4"),
    isHot: true,
    author: "star_voyager",
  },
];

export const userProfile = {
  name: "Joshi",
  dreamStreak: 128,
  energy: 75, // percentage
};
```

---
---

### File: `src/lib/placeholder-images.ts`

**Path:** `src/lib/placeholder-images.ts`

```ts
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
```

---
---

### File: `tailwind.config.ts`

**Path:** `tailwind.config.ts`

```ts
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
         marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0%)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee-reverse 60s linear infinite',
      },
      dropShadow: {
        'neon-red': '0 0 12px hsl(var(--primary) / 0.8)',
        'neon-gold': '0 0 12px hsl(var(--accent) / 0.6)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
```

---
---

### File: `tsconfig.json`

**Path:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```