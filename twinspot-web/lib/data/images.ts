import { adminDb } from "@/lib/firebase/admin";
import { ImageAsset } from "@/lib/types/image";
import { Timestamp } from "firebase-admin/firestore";

export async function getImages(): Promise<ImageAsset[]> {
  const snapshot = await adminDb
    .collection("images")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ImageAsset),
  }));
}

export async function saveImage(data: {
  url: string;
  name: string;
}) {
  const now = Timestamp.now();

  await adminDb.collection("images").add({
    ...data,
    createdAt: now,
  });
}
