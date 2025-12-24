export type Post = {
  id?: string;
  title: string;
  slug: string;
  content: string; // TipTap JSON string
  heroImage?: {
    imageUrl: string;
    alt?: string;
  };
  published: boolean;
  createdAt?: any;
  updatedAt?: any;
};
