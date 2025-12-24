"use client";

import { useState } from "react";
import TipTapEditor from "./TipTapEditor";
import ImagePicker from "./ImagePicker";
import { savePost } from "@/app/admin/posts/actions";

type ImageItem = {
  imageUrl: string;
  alt?: string;
};

type Props = {
  initialContent?: string;
  images: ImageItem[];
};

export default function PostEditor({
  initialContent = "",
  images,
}: Props) {
  const [content, setContent] = useState(initialContent);
  const [editorRef, setEditorRef] = useState<any>(null);
  const [heroImage, setHeroImage] = useState<ImageItem | null>(null);

  function insertImage(img: ImageItem) {
    if (!editorRef) return;

    editorRef
      .chain()
      .focus()
      .insertContent(
        `<img src="${img.imageUrl}" alt="${img.alt || ""}" />`
      )
      .run();
  }

  async function handleSave() {
    await savePost({
      title: "Draft title",
      slug: "draft-slug",
      content,
      heroImage,
      published: false,
    });

    alert("Post saved");
  }

  return (
    <div>
      <TipTapEditor
        content={content}
        onChange={setContent}
        onReady={setEditorRef}
      />

      <input type="hidden" name="content" value={content} readOnly />

      <h3 style={{ marginTop: "2.5rem" }}>Insert Image</h3>

      <ImagePicker images={images} onSelect={insertImage} />

      <button
        onClick={handleSave}
        style={{ marginTop: "2rem" }}
      >
        Save Post
      </button>
    </div>
  );
}
