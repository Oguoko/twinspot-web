"use client";

import { uploadImage } from "@/app/admin/images/actions";

export default function ImageUploader() {
  return (
    <form
      action={uploadImage}
      style={{ marginBottom: "2rem" }}
    >
      <input
        type="file"
        name="file"
        accept="image/*"
        required
      />

      <button type="submit">
        Upload Image
      </button>
    </form>
  );
}
