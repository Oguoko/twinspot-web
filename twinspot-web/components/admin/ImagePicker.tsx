"use client";

import Image from "next/image";

type ImageItem = {
  imageUrl: string;
  alt?: string;
  caption?: string;
};

type Props = {
  images: ImageItem[];
  onSelect: (image: ImageItem) => void;
};

export default function ImagePicker({ images, onSelect }: Props) {
  if (!images || images.length === 0) {
    return (
      <p style={{ fontSize: "0.85rem", color: "#777" }}>
        No images available yet.
      </p>
    );
  }

  return (
    <div className="image-picker">
      {images
        .filter(
          (img) =>
            img.imageUrl &&
            img.imageUrl.startsWith("http")
        )
        .map((img, i) => (
          <button
            key={i}
            type="button"
            className="image-item"
            onClick={() => onSelect(img)}
          >
            <Image
              src={img.imageUrl}
              alt={img.alt || "Selected image"}
              width={220}
              height={140}
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}

      <style jsx>{`
        .image-picker {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .image-item {
          border: none;
          padding: 0;
          background: transparent;
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
        }

        .image-item:hover {
          outline: 2px solid #8c6b2f;
        }
      `}</style>
    </div>
  );
}
