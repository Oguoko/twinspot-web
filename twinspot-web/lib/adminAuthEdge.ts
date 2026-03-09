import type { NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE_NAME } from "@/lib/adminAuthCookie";

export function hasAdminSessionCookie(request: NextRequest) {
  return Boolean(request.cookies.get(ADMIN_SESSION_COOKIE_NAME)?.value);
}
