import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// این Route برای ثبت‌نام واقعی کاربر در Supabase استفاده می‌شود
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    console.log("REGISTER REQUEST BODY:", body);

    // ۱) چک کردن این که همه فیلدها پر شده باشند
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // ۲) ثبت‌نام کاربر در Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      console.error("SUPABASE SIGNUP ERROR:", error);
      return NextResponse.json(
        {
          success: false,
          message: error.message || "Signup failed.",
        },
        { status: 400 }
      );
    }

    // تا اینجای کار: کاربر در Supabase Auth ساخته شده است.
    // در فاز بعدی، بعد از لاگین، پروفایلش را در جدول profiles هم پر می‌کنیم.

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully.",
        userId: data.user?.id || null,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("REGISTER API UNEXPECTED ERROR:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}
