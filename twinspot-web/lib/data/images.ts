import { adminDb } from "@/lib/firebase/admin";
import type { ImageAsset } from "@/lib/types/image";

export async function getImages(): Promise<ImageAsset[]> {
  const snapshot = await adminDb.collection("images").get();

  return snapshot.docs.map((doc) => {
    const data = doc.data() as Omit<ImageAsset, "id">;

    return {
      id: doc.id,   // single source of truth
      ...data,
    };
  });
}
