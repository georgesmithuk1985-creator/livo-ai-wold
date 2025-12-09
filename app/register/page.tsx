"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister() {
    setMessage("Loading...");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#020617",
        color: "white",
        fontFamily: "system-ui",
      }}
    >
      <div style={{ width: "350px", textAlign: "center" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Register</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "10px",
            width: "100%",
            borderRadius: "6px",
            border: "1px solid #334155",
            backgroundColor: "#0f172a",
            color: "white",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "10px",
            width: "100%",
            borderRadius: "6px",
            border: "1px solid #334155",
            backgroundColor: "#0f172a",
            color: "white",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "20px",
            width: "100%",
            borderRadius: "6px",
            border: "1px solid #334155",
            backgroundColor: "#0f172a",
            color: "white",
          }}
        />

        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#22c55e",
            color: "black",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>

        <p style={{ marginTop: "20px", color: "#94a3b8" }}>
          {message}
        </p>

        <p style={{ marginTop: "16px", fontSize: "14px" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#38bdf8" }}>Login</a>
        </p>
      </div>
    </main>
  );
}
