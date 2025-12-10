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
      background: "linear-gradient(135deg, #062b33, #044a5a)",
    },
    {
      id: 2,
      label: "Sessions today",
      value: "12",
      description: "Voice / video / chat interactions (mock).",
      background: "linear-gradient(135deg, #071d45, #13458b)",
    },
    {
      id: 3,
      label: "Translation minutes",
      value: "47 min",
      description: "Total AI translation time (mock).",
      background: "linear-gradient(135deg, #2a1010, #552424)",
    },
  ];

  const quickActions = [
    {
      id: 1,
      title: "Live Voice Translator",
      subtitle: "Start a real-time voice session (future).",
      borderColor: "#16a34a",
      hoverBackground: "rgba(22,163,74,0.12)",
    },
    {
      id: 2,
      title: "Live Video Translator",
      subtitle: "High-quality video with AI subtitles (future).",
      borderColor: "#2563eb",
      hoverBackground: "rgba(37,99,235,0.12)",
    },
    {
      id: 3,
      title: "AI Chat & File Translator",
      subtitle: "Chat & instantly translate PDF / Word (future).",
      borderColor: "#7c3aed",
      hoverBackground: "rgba(124,58,237,0.12)",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: "Voice translation — English ↔ Persian",
      meta: "12 minutes · Today · 09:32 (mock)",
    },
    {
      id: 2,
      title: "Video session — Live subtitles enabled",
      meta: "25 minutes · Today · 18:05 (mock)",
    },
    {
      id: 3,
      title: "File translation — medical_report.pdf",
      meta: "Completed · Yesterday · 21:10 (mock)",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f172a 0, #020617 55%)",
        color: "#e5e7eb",
        display: "flex",
        justifyContent: "center",
        padding: "40px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1120px",
          background:
            "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(15,23,42,0.98))",
          borderRadius: "24px",
          padding: "28px 28px 32px 28px",
          boxShadow:
            "0 24px 60px rgba(0,0,0,0.75), 0 0 0 1px rgba(148,163,184,0.16)",
          border: "1px solid rgba(148,163,184,0.28)",
        }}
      >
        {/* Header */}
        <div
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
                fontSize: "26px",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              LIVO Core Dashboard
            </h1>
            <p
              style={{
                marginTop: "6px",
                fontSize: "14px",
                color: "#9ca3af",
              }}
            >
              Welcome back, <span style={{ color: "#e5e7eb" }}>{userName}</span>
              . This is your main control center.
            </p>
          </div>

          <button
            type="button"
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(148,163,184,0.4)",
              background:
                "radial-gradient(circle at top left, #1f2937, #020617)",
              color: "#e5e7eb",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "default",
            }}
          >
            Logout (mock)
          </button>
        </div>

        {/* Top stats */}
        <div
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
                padding: "18px 18px 16px 18px",
                background: item.background,
                border: "1px solid rgba(148,163,184,0.45)",
                boxShadow: "0 14px 35px rgba(0,0,0,0.55)",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "#cbd5f5",
                  marginBottom: "10px",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {item.value}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#e5e7eb",
                  opacity: 0.9,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom grid: Quick Actions + Activity */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            gap: "18px",
          }}
        >
          {/* Quick Actions */}
          <section
            style={{
              borderRadius: "18px",
              padding: "18px 18px 16px 18px",
              background:
                "radial-gradient(circle at top left, #020617, #020617)",
              border: "1px solid rgba(148,163,184,0.45)",
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
                fontSize: "13px",
                color: "#9ca3af",
                marginBottom: "16px",
              }}
            >
              Choose how you want to start. These buttons are placeholders for
              future real-time AI engines.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "12px",
              }}
            >
              {quickActions.map((action) => (
                <div
                  key={action.id}
                  style={{
                    borderRadius: "16px",
                    padding: "12px 12px 10px 12px",
                    border: `1px solid ${action.borderColor}`,
                    background:
                      "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.9))",
                    cursor: "not-allowed",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.55)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "4px",
                    }}
                  >
                    {action.title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#9ca3af",
                      lineHeight: 1.5,
                    }}
                  >
                    {action.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity */}
          <section
            style={{
              borderRadius: "18px",
              padding: "18px 18px 16px 18px",
              background:
                "radial-gradient(circle at top left, #020617, #020617)",
              border: "1px solid rgba(148,163,184,0.45)",
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
                fontSize: "13px",
                color: "#9ca3af",
                marginBottom: "16px",
              }}
            >
              Preview of how we will show your session history later.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {recentActivity.map((item) => (
                <li
                  key={item.id}
                  style={{
                    padding: "8px 0",
                    borderBottom:
                      item.id === recentActivity[recentActivity.length - 1].id
                        ? "none"
                        : "1px solid rgba(55,65,81,0.65)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      marginBottom: "2px",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#9ca3af",
                    }}
                  >
                    {item.meta}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
