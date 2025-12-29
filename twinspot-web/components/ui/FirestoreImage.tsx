import Image from "next/image";

export default function FirestoreImage({ image }: { image: any }) {
  if (!image || !image.url) return null;

  return (
    <Image
      src={image.url}
      alt={image.alt || ""}
      width={image.width || 1600}
      height={image.height || 900}
    />
  );
}
