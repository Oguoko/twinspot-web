import { Timestamp } from "firebase-admin/firestore";

export type ImageItem = {
  imageUrl: string;
  alt?: string;
};



export interface Post {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  published: boolean;
  tags?: string[];
  heroImage?: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};