"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ضدگلوله: مدیریت کامل لاگین
  async function handleLogin(event: React.FormEvent) {
    event.preventDefault(); // نگذار صفحه رفرش شود

    if (!email || !password) {
      setMessage("ایمیل و رمز عبور الزامی است.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!data.success) {
        setMessage(data.message || "ورود ناموفق بود، دوباره تلاش کنید.");
        setIsLoading(false);
        return;
      }

      // اینجا ورود موفق است
      setMessage("ورود موفقیت‌آمیز. در حال انتقال به داشبورد...");

      // ضدگلوله: ریدایرکت رسمی Next.js
      router.push("/dashboard");
      // نیازی به setIsLoading(false) بعد از push نیست
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      setMessage("خطای شبکه. لطفاً دوباره تلاش کنید.");
      setIsLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#020617",
        color: "white",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          width: "360px",
          padding: "32px",
          borderRadius: "24px",
          background:
            "radial-gradient(circle at top, #0f172a 0, #020617 60%, #000 100%)",
          boxShadow: "0 18px 45px rgba(0,0,0,0.7)",
          border: "1px solid rgba(148,163,184,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          ورود
        </h1>
        <p
          style={{
            marginBottom: "24px",
            fontSize: "14px",
            textAlign: "center",
            color: "#cbd5f5",
          }}
        >
          برای ادامه ایمیل و رمز عبور خود را وارد کنید.
        </p>

        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label style={{ fontSize: "14px" }}>ایمیل</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #334155",
                backgroundColor: "#020617",
                color: "white",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label style={{ fontSize: "14px" }}>رمز عبور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #334155",
                backgroundColor: "#020617",
                color: "white",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              marginTop: "16px",
              padding: "10px",
              borderRadius: "999px",
              border: "none",
              cursor: isLoading ? "not-allowed" : "pointer",
              background: isLoading
                ? "linear-gradient(90deg,#16a34a,#4ade80)"
                : "linear-gradient(90deg,#22c55e,#16a34a)",
              color: "black",
              fontWeight: 600,
              fontSize: "15px",
              boxShadow: "0 12px 30px rgba(34,197,94,0.45)",
              transition: "transform 0.12s ease, box-shadow 0.12s ease",
            }}
          >
            {isLoading ? "در حال ورود..." : "ورود"}
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "16px",
              fontSize: "13px",
              textAlign: "center",
              color: "#e5e7eb",
            }}
          >
            {message}
          </p>
        )}

        <p
          style={{
            marginTop: "18px",
            fontSize: "13px",
            textAlign: "center",
            color: "#9ca3af",
          }}
        >
          ثبت نام نکرده‌اید؟{" "}
          <a
            href="/register"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            ثبت نام کنید
          </a>
        </p>
      </div>
    </main>
  );
}
