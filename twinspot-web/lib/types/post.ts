export type ImageItem = {
  imageUrl: string;
  alt?: string;
};

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;          // ✅ REQUIRED
  excerpt?: string;
  published: boolean;
  tags?: string[];
  heroImage?: ImageItem;
  createdAt?: string | null;
  updatedAt?: string | null;
}
