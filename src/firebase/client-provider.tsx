"use client";

import React, { type ReactNode } from "react";
import { FirebaseProvider } from "@/firebase/provider";
import { firebaseApp, auth, firestore } from "@/firebase";

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  // ⛔ Prevent render until Firebase is ready (client-side only)
  if (!firebaseApp || !auth || !firestore) {
    return null; // or loader
  }

  return (
    <FirebaseProvider
      firebaseApp={firebaseApp}
      auth={auth}
      firestore={firestore}
    >
      {children}
    </FirebaseProvider>
  );
}