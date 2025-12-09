import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { success: false, message: "Email and password are required." },
      { status: 400 }
    );
  }

  // فعلاً فقط برای تست:
  console.log("REGISTER REQUEST:", body);

  return NextResponse.json({
    success: true,
    message: "User registered (mock).",
    user: {
      name: name || "",
      email,
    },
  });
}
