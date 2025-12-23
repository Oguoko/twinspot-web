"use client";

import { useEffect, useState } from "react";
import TipTapEditor from "./TipTapEditor";
import ImagePicker from "./ImagePicker";

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

  // Inject image HTML directly (simple + reliable)
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

  return (
    <div>
      <TipTapEditor
        content={content}
        onChange={setContent}
      />

      <input
        type="hidden"
        name="content"
        value={content}
        readOnly
      />

      <h3 style={{ marginTop: "2.5rem" }}>Insert Image</h3>

      <ImagePicker
        images={images}
        onSelect={insertImage}
      />
    </div>
  );
}

