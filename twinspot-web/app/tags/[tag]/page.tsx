import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import Link from "next/link";


export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const q = query(
    collection(db, "posts"),
    where("tags", "array-contains", tag)
  );

  const snap = await getDocs(q);

  return (
    <main className="section">
      <h1>Articles tagged “{tag}”</h1>

      <div className="posts">
        {snap.docs.map(doc => {
          const post = doc.data();
          return (
            <Link key={doc.id} href={`/blog/${doc.id}`}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          );
        })}
      </div>
     

    </main>
  );
}
