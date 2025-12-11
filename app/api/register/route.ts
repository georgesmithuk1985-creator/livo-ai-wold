import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// ثبت‌نام کاربر جدید
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // 1) چک کردن فیلدها
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    console.log("REGISTER: signUp start", { email });

    // 2) ساخت یوزر در Supabase Auth
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
      console.error("REGISTER: signUp error", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    const userId = data.user?.id;

    if (!userId) {
      console.error("REGISTER: no user id returned from Supabase");
      return NextResponse.json(
        { success: false, message: "No user id returned from Supabase." },
        { status: 500 }
      );
    }

    // 3) ساخت پروفایل در جدول profiles
    const { error: profileError } = await supabase.from("profiles").insert({
      user_id: userId,
      email,
      full_name: name,
    });

    if (profileError) {
      console.error("REGISTER: profile insert error", profileError);
      return NextResponse.json(
        {
          success: false,
          message: "User created but failed to create profile.",
        },
        { status: 500 }
      );
    }

    // 4) موفقیت
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("REGISTER: unexpected error", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
