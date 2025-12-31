export type ImageItem = {
  imageUrl: string;
  alt?: string;
};

export interface Post {
  id: string;               // ✅ REQUIRED
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  published: boolean;
  tags?: string[];
  heroImage?: ImageItem;    // ✅ CONSISTENT SHAPE
  createdAt?: string | null;
  updatedAt?: string | null;
}
