import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const BUCKET_NAME = "twinspot-tours-and-trave-4aa06.appspot.com";

if (!getApps().length) {
  const serviceAccountJson = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT;

  if (!serviceAccountJson) {
    throw new Error(
      "Missing FIREBASE_ADMIN_SERVICE_ACCOUNT environment variable"
    );
  }

  const serviceAccount = JSON.parse(serviceAccountJson);

  // ✅ CRITICAL FIX
  if (serviceAccount.private_key) {
    serviceAccount.private_key =
      serviceAccount.private_key.replace(/\\n/g, "\n");
  }

  initializeApp({
    credential: cert(serviceAccount),
    storageBucket: BUCKET_NAME,
  });
}

export const adminAuth = getAuth();
export const adminDb = getFirestore();
export const adminStorage = getStorage().bucket(BUCKET_NAME);
