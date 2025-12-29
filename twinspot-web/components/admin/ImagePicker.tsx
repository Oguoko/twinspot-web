"use client";

import { ImageAsset } from "@/lib/types/image";

type Props = {
  images: ImageAsset[];
  onSelect: (url: string) => void;
};

export default function ImagePicker({ images, onSelect }: Props) {
  if (images.length === 0) {
    return (
      <div style={{ opacity: 0.6 }}>
        No images uploaded yet.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {images.map((img) => (
        <img
          key={img.id}
          src={img.url}
          alt={img.name}
          onClick={() => onSelect(img.url)}
          style={{
            width: "100%",
            height: 100,
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: 6,
            border: "2px solid transparent",
          }}
        />
      ))}
    </div>
  );
}
