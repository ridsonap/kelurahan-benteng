// ponytail: Native cookie-based session auth; zero dependencies, works serverless on Vercel
import { cookies } from "next/headers";

const SESSION_COOKIE = "benteng_session";

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  if (!session || !session.value) return null;
  try {
    return JSON.parse(session.value) as { username: string; role: string; nama: string };
  } catch {
    return null;
  }
}

export async function setSession(user: { username: string; role: string; nama: string }) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
