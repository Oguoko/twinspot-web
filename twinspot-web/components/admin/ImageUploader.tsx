"use client";

import { uploadImage } from "@/app/admin/images/actions";
import { useTransition } from "react";

export default function ImageUploader() {
  const [pending, startTransition] = useTransition();

  return (
    <form
      action={(formData) =>
        startTransition(() => uploadImage(formData))
      }
      style={{ marginBottom: "2rem" }}
    >
      <input type="file" name="file" accept="image/*" required />
      <button disabled={pending}>
        {pending ? "Uploading…" : "Upload Image"}
      </button>
    </form>
  );
}
