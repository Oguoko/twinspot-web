// lib/firebase/admin.ts

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

function initAdmin() {
  if (getApps().length > 0) return;

  const serviceAccountJson =
    process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT;

  if (!serviceAccountJson) {
    throw new Error(
      "Missing FIREBASE_ADMIN_SERVICE_ACCOUNT environment variable"
    );
  }

  const serviceAccount = JSON.parse(serviceAccountJson);

  initializeApp({
    credential: cert(serviceAccount),
    storageBucket: "twinspot-tours-and-trave-4aa06.appspot.com",
  });
}

initAdmin();

export const adminAuth = getAuth();
export const adminDb = getFirestore();
export const adminStorage = getStorage().bucket(
  "twinspot-tours-and-trave-4aa06.appspot.com"
);
