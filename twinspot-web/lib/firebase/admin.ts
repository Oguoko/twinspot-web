import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

/**
 * Initializes Firebase Admin SDK safely.
 * This must only run on the server.
 */
export function initAdmin() {
  if (getApps().length > 0) return;

  const serviceAccount = JSON.parse(
    process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT as string
  );

  initializeApp({
    credential: cert(serviceAccount),
  });
}

// Optional exports for later use
export const adminAuth = () => getAuth();
export const adminDb = () => getFirestore();
