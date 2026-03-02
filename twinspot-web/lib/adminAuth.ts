import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import crypto from "crypto";

const COOKIE_NAME = "twinspot_admin_session";
const SECRET = process.env.ADMIN_PASSWORD || "";

function sign(value: string) {
  return crypto.createHmac("sha256", SECRET).update(value).digest("hex");
}

function buildToken() {
  const timestamp = `${Date.now()}`;
  return `${timestamp}.${sign(timestamp)}`;
}

function verifyToken(token?: string) {
  if (!token || !SECRET) return false;
  const [timestamp, signature] = token.split(".");
  if (!timestamp || !signature) return false;
  const expected = sign(timestamp);
  if (signature.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export async function createAdminSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, buildToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
}

export async function clearAdminSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  return verifyToken(store.get(COOKIE_NAME)?.value);
}

export function isAdminAuthenticatedRequest(request: NextRequest) {
  return verifyToken(request.cookies.get(COOKIE_NAME)?.value);
}

export function verifyAdminPassword(password: string) {
  return Boolean(SECRET) && password === SECRET;
}
