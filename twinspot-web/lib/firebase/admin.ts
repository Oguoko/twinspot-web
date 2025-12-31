import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const BUCKET_NAME = "twinspot-tours-and-trave-4aa06.appspot.com";

if (!getApps().length) {
  const b64 = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_B64;

  if (!b64) {
    throw new Error(
      "Missing FIREBASE_ADMIN_SERVICE_ACCOUNT_B64 environment variable"
    );
  }

  const serviceAccount = JSON.parse(
    Buffer.from(b64, "base64").toString("utf-8")
  );

  initializeApp({
    credential: cert(serviceAccount),
    storageBucket: BUCKET_NAME,
  });
}

export const adminAuth = getAuth();
export const adminDb = getFirestore();
export const adminStorage = getStorage().bucket(BUCKET_NAME);
