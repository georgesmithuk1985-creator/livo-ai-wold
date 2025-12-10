import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    console.log("REGISTER REQUEST BODY:", body);

    // ۱) چک کردن فیلدها
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // ۲) ساخت یوزر در Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      console.error("SUPABASE AUTH ERROR:", authError);
      return NextResponse.json(
        {
          success: false,
          message: authError.message || "Failed to register user.",
        },
        { status: 400 }
      );
    }

    const user = authData.user;
    if (!user) {
      console.error("No user returned from Supabase.");
      return NextResponse.json(
        {
          success: false,
          message: "User not returned from Supabase.",
        },
        { status: 500 }
      );
    }

    // ۳) ذخیره پروفایل در جدول profiles
    const { error: profileError } = await supabase.from("profiles").insert({
      user_id: user.id,
      email,
      full_name: name,
    });

    if (profileError) {
      console.error("SUPABASE PROFILE ERROR:", profileError);
      return NextResponse.json(
        {
          success: false,
          message: "User created but failed to save profile.",
        },
        { status: 500 }
      );
    }

    // ۴) موفقیت
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
