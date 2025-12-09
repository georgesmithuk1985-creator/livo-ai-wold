"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {
    setMessage("Loading...");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
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
        fontFamily: "system-ui",
      }}
    >
      <div style={{ width: "320px" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "16px" }}>Login</h1>
        <p style={{ marginBottom: "24px", fontSize: "14px", color: "#cbd5f5" }}>
          Enter your email and password to continue.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <label style={{ fontSize: "14px" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                marginTop: "4px",
                padding: "8px 10px",
                borderRadius: "8px",
                border: "1px solid #475569",
                backgroundColor: "#020617",
                color: "white",
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: "14px" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                marginTop: "4px",
                padding: "8px 10px",
                borderRadius: "8px",
                border: "1px solid #475569",
                backgroundColor: "#020617",
                color: "white",
              }}
            />
          </div>

          <button
            onClick={handleLogin}
            style={{
              marginTop: "8px",
              padding: "10px 24px",
              borderRadius: "9999px",
              border: "none",
              backgroundColor: "#22c55e",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Sign in
          </button>
        </div>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#94a3b8" }}>
          {message}
        </p>

        <p style={{ marginTop: "16px", fontSize: "14px" }}>
          Don&apos;t have an account?{" "}
          <a href="/register" style={{ color: "#38bdf8" }}>
            Register
          </a>
        </p>
      </div>
    </main>
  );
}
