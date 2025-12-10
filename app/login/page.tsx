"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      setMessage("Email and password are required.");
      return;
    }

    setIsLoading(true);
    setMessage("Loading...");

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
        setMessage(data.message || "Login failed.");
        setIsLoading(false);
        return;
      }

      setMessage("Login successful. Redirecting...");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      setMessage("Network error. Please try again.");
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
      <div style={{ width: "360px", textAlign: "center" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "16px" }}>Login</h1>
        <p style={{ marginBottom: "24px", fontSize: "14px", color: "#cbd5f5" }}>
          Enter your email and password to continue.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "left",
          }}
        >
          <label style={{ fontSize: "14px" }}>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                marginTop: "6px",
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #334155",
                backgroundColor: "#020617",
                color: "white",
              }}
            />
          </label>

          <label style={{ fontSize: "14px" }}>
            Password
            <input
              type="password"
              placeholder="●●●●●●●●"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                marginTop: "6px",
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #334155",
                backgroundColor: "#020617",
                color: "white",
              }}
            />
          </label>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            style={{
              marginTop: "16px",
              width: "100%",
              padding: "10px",
              borderRadius: "9999px",
              border: "none",
              background: "linear-gradient(90deg, #22c55e, #16a34a)",
              color: "black",
              fontWeight: 600,
              fontSize: "15px",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#e5e7eb" }}>
          {message}
        </p>

        <p style={{ marginTop: "12px", fontSize: "13px", color: "#94a3b8" }}>
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            Register
          </a>
        </p>
      </div>
    </main>
  );
}
