import { NextRequest, NextResponse } from "next/server";
import { setSession, clearSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { username, password, action } = await req.json();

    if (action === "logout") {
      await clearSession();
      return NextResponse.json({ success: true });
    }

    // Check credentials matching benchmark
    if (username === "bentengbenteng" && password === "benteng123456") {
      await setSession({
        username: "bentengbenteng",
        role: "admin",
        nama: "Administrator Kelurahan Benteng",
      });
      return NextResponse.json({ success: true, redirect: "/dashboard" });
    }

    return NextResponse.json(
      { error: "Username atau password salah. Silakan coba lagi." },
      { status: 401 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
