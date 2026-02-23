import fs from "node:fs";
import path from "node:path";

type PickImageParams = {
  folders: string[];
  seed: string;
  fallbackFolders?: string[];
};

const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const DEFAULT_FALLBACK_FOLDERS = ["wildlife", "birding", "landscapes"];

function getFilesInPhotoFolder(folder: string): string[] {
  const folderPath = path.join(process.cwd(), "public", "photos", folder);

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const files = fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((file) => ALLOWED_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  return files;
}

function stableHash(input: string): number {
  let hash = 0;

  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }

  return hash;
}

export function pickImageFromFolders({
  folders,
  seed,
  fallbackFolders = DEFAULT_FALLBACK_FOLDERS,
}: PickImageParams): string {
  const searchFolders = [...folders, ...fallbackFolders];

  for (const folder of searchFolders) {
    const files = getFilesInPhotoFolder(folder);

    if (files.length > 0) {
      const index = stableHash(`${seed}:${folder}`) % files.length;
      return `/photos/${folder}/${files[index]}`;
    }
  }

  return "/hero.jpg";
}
