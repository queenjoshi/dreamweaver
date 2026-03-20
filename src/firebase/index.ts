"use client";

import { firebaseConfig } from "@/firebase/config";
import {
  initializeApp,
  getApps,
  getApp,
  type FirebaseApp,
} from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

/* ------------------ INIT (CLIENT ONLY) ------------------ */
let firebaseApp: FirebaseApp | null = null;
let auth: Auth | null = null;
let firestore: Firestore | null = null;

if (typeof window !== "undefined") {
  firebaseApp =
    getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

  auth = getAuth(firebaseApp);
  firestore = getFirestore(firebaseApp);
}

/* ------------------ EXPORTS ------------------ */
export { firebaseApp, auth, firestore };

/* ------------------ RE-EXPORTS ------------------ */
export * from "./provider";
export * from "./client-provider";
export * from "./firestore/use-collection";
export * from "./firestore/use-doc";
export * from "./non-blocking-updates";
export * from "./non-blocking-login";
export * from "./errors";
export * from "./error-emitter";