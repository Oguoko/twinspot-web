import AdminLoginForm from "./AdminLoginForm";
import styles from "@/app/admin/admin.module.css";

type AdminLoginPageProps = {
  searchParams?: Promise<{ next?: string | string[] }>;
};

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const params = await searchParams;
  const nextParam = params?.next;
  const next = typeof nextParam === "string" ? nextParam : Array.isArray(nextParam) ? nextParam[0] : undefined;

  return (
    <main className={styles.loginWrap}>
      <AdminLoginForm nextPath={next} />
    </main>
  );
}
