import { PHOTO_MANIFEST, type PhotoManifestFolder } from "@/lib/photoManifest";

const DEFAULT_FALLBACK_FOLDERS: PhotoManifestFolder[] = [
  "wildlife",
  "birding",
  "landscapes",
];

export function hashSeed(input: string): number {
  let hash = 5381;

  for (let i = 0; i < input.length; i += 1) {
    hash = ((hash << 5) + hash + input.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function toPublicPhotoPath(folder: PhotoManifestFolder, fileName: string): string {
  return `/photos/${folder}/${encodeURIComponent(fileName)}`;
}

export function pickManifestPhoto(
  folders: PhotoManifestFolder[],
  seed: string,
  fallback: PhotoManifestFolder[] = DEFAULT_FALLBACK_FOLDERS
): string {
  const orderedFolders = [...folders, ...fallback];

  for (const folder of orderedFolders) {
    const files = PHOTO_MANIFEST[folder];

    if (files.length > 0) {
      const index = hashSeed(`${seed}:${folder}`) % files.length;
      return toPublicPhotoPath(folder, files[index]);
    }
  }

  return "/hero.jpg";
}
