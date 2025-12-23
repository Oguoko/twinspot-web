import { ReactNode } from "react";
import { requireEditor } from "@/lib/auth/requireEditor";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireEditor();

  return <>{children}</>;
}
