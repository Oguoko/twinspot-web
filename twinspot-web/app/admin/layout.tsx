import { ReactNode } from "react";
import { requireEditor } from "@/lib/auth/requireEditor";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireEditor();

  return (
    <section
      style={{
        background: "#fafafa",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      {children}
    </section>
  );
}
