import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  console.log("LOGIN REQUEST:", body);

  if (!email || !password) {
    return NextResponse.json(
      { success: false, message: "Email and password are required." },
      { status: 400 }
    );
  }

  // فعلاً موک: هر ایمیل/پسوردی را قبول می‌کنیم
  return NextResponse.json({
    success: true,
    message: "Login successful (mock).",
  });
}
