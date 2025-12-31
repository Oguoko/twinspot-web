export type ImageItem = {
  imageUrl: string;
  alt?: string;
};

/** FULL BLOG POST (used on /blog/[slug]) */
export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;      // REQUIRED here
  excerpt?: string;
  published: boolean;
  tags?: string[];
  heroImage?: ImageItem;
  createdAt?: string | null;
  updatedAt?: string | null;
}

/** LIGHTWEIGHT POST (homepage, cards, lists) */
export interface PostPreview {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  published: boolean;
  heroImage?: ImageItem;
  createdAt?: string | null;
}
