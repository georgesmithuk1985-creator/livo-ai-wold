import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  console.log("REGISTER REQUEST:", body);

  if (!name || !email || !password) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 400 }
    );
  }

  // فعلاً فقط موک
  return NextResponse.json({
    success: true,
    message: "User registered (mock).",
    user: {
      name,
      email,
    },
  });
}
