// lib/firebase/admin.ts

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

function initAdmin() {
  if (getApps().length > 0) return;

  const serviceAccountPath = path.join(
    process.cwd(),
    "twinspot-tours-and-trave-4aa06-firebase-adminsdk-fbsvc-5d8cb5631b.json"
  );

  if (!fs.existsSync(serviceAccountPath)) {
    throw new Error("Firebase service account JSON file not found");
  }

  const serviceAccount = JSON.parse(
    fs.readFileSync(serviceAccountPath, "utf8")
  );

  initializeApp({
    credential: cert(serviceAccount),
  });
}

initAdmin();

export const adminAuth = getAuth();
export const adminDb = getFirestore();
