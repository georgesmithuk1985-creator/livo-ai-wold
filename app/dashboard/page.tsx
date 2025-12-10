"use client";

import React from "react";

export default function DashboardPage() {
  const userName = "George";

  const stats = [
    {
      id: 1,
      label: "Active Devices",
      value: "3",
      description: "Currently connected to LIVO services.",
      background: "linear-gradient(135deg, #062b33, #062b33, #04445a)",
    },
    {
      id: 2,
      label: "Sessions today",
      value: "12",
      description: "Voice / video / chat interactions (mock).",
      background: "linear-gradient(135deg, #062854, #0b3b7a, #0d47a1)",
    },
    {
      id: 3,
      label: "Translation minutes",
      value: "47 min",
      description: "Total AI translation time (mock).",
      background: "linear-gradient(135deg, #4a1b1b, #7f1d1d, #b91c1c)",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: "Voice translation — English ⇄ Persian",
      detail: "12 minutes · Today · 09:32 (mock)",
    },
    {
      id: 2,
      title: "Video session — Live subtitles enabled",
      detail: "25 minutes · Today · 18:05 (mock)",
    },
    {
      id: 3,
      title: "File translation — medical_report.pdf",
      detail: "Completed · Yesterday · 21:10 (mock)",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #111827, #020617 60%)",
        color: "#f9fafb",
        padding: "40px 16px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          borderRadius: "24px",
          padding: "32px",
          background:
            "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1), transparent 60%), radial-gradient(circle at 100% 0%, rgba(168,85,247,0.1), transparent 60%), #020617",
          boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
          border: "1px solid rgba(148,163,184,0.2)",
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "4px",
              }}
            >
              LIVO Core Dashboard
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "14px" }}>
              Welcome back, {userName}. This is your main control center.
            </p>
          </div>
          <button
            type="button"
            style={{
              padding: "8px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(148,163,184,0.6)",
              background: "rgba(15,23,42,0.8)",
              color: "#e5e7eb",
              fontSize: "13px",
              cursor: "pointer",
            }}
            onClick={() => alert("Logout is mock-only in this demo.")}
          >
            Logout (mock)
          </button>
        </header>

        {/* Top stats */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {stats.map((item) => (
            <div
              key={item.id}
              style={{
                borderRadius: "18px",
                padding: "18px 20px",
                background: item.background,
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                border: "1px solid rgba(15,23,42,0.8)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#e5e7eb",
                  marginBottom: "6px",
                  opacity: 0.9,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {item.value}
              </div>
              <div style={{ fontSize: "12px", color: "#d1d5db" }}>
                {item.description}
              </div>
            </div>
          ))}
        </section>

        {/* Bottom area: Quick Actions + Recent Activity */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
            gap: "20px",
          }}
        >
          {/* Quick Actions */}
          <div
            style={{
              borderRadius: "18px",
              padding: "20px",
              background:
                "radial-gradient(circle at top left, rgba(56,189,248,0.08), transparent 55%), #020617",
              border: "1px solid rgba(55,65,81,0.9)",
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Quick Actions
            </h2>
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                marginBottom: "14px",
              }}
            >
              Choose how you want to start. These buttons are placeholders for
              future real-time AI engines.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "14px",
              }}
            >
              {/* کارت 1: Live Voice Translator → لینک به /voice */}
              <a
                href="/voice"
                style={{
                  display: "block",
                  padding: "16px 14px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(34,197,94,0.04))",
                  border: "1px solid rgba(34,197,94,0.6)",
                  color: "#bbf7d0",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                Live Voice Translator
              </a>

              {/* کارت 2: Live Video Translator (soon) */}
              <div
                style={{
                  padding: "16px 14px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(59,130,246,0.04))",
                  border: "1px solid rgba(59,130,246,0.6)",
                  color: "#bfdbfe",
                  fontSize: "13px",
                  fontWeight: 600,
                  textAlign: "center",
                  cursor: "not-allowed",
                  opacity: 0.6,
                }}
              >
                Live Video Translator (soon)
              </div>

              {/* کارت 3: AI Chat & File Translator (soon) */}
              <div
                style={{
                  padding: "16px 14px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(168,85,247,0.18), rgba(168,85,247,0.04))",
                  border: "1px solid rgba(168,85,247,0.6)",
                  color: "#e9d5ff",
                  fontSize: "13px",
                  fontWeight: 600,
                  textAlign: "center",
                  cursor: "not-allowed",
                  opacity: 0.6,
                }}
              >
                AI Chat & File Translator (soon)
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div
            style={{
              borderRadius: "18px",
              padding: "20px",
              background:
                "radial-gradient(circle at top, rgba(148,163,184,0.12), transparent 60%), #020617",
              border: "1px solid rgba(55,65,81,0.9)",
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Recent Activity (mock)
            </h2>
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                marginBottom: "14px",
              }}
            >
              Preview of how we will show your session history later.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {recentActivity.map((item) => (
                <li
                  key={item.id}
                  style={{
                    padding: "10px 0",
                    borderBottom:
                      item.id !== recentActivity.length
                        ? "1px solid rgba(31,41,55,0.9)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      marginBottom: "3px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#9ca3af" }}>
                    {item.detail}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
