"use server";

import { adminStorage } from "@/lib/firebase/admin";
import { saveImage } from "@/lib/data/images";

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) throw new Error("No file uploaded");

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;

  const blob = adminStorage.file(`images/${fileName}`);

  await blob.save(buffer, {
    contentType: file.type,
    public: true,
  });

  const url = `https://storage.googleapis.com/${adminStorage.name}/images/${fileName}`;

  await saveImage({
    url,
    name: file.name,
  });
}
