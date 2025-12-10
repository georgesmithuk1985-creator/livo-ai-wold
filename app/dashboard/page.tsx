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
      background: "linear-gradient(135deg, #062b33, #04445a)",
    },
    {
      id: 2,
      label: "Sessions today",
      value: "12",
      description: "Voice / video / chat interactions (mock).",
      background: "linear-gradient(135deg, #062b63, #041a8a)",
    },
    {
      id: 3,
      label: "Translation minutes",
      value: "47 min",
      description: "Total AI translation time (mock).",
      background: "linear-gradient(135deg, #5a1010, #7a1f1f)",
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

  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #151b2b, #050814 60%)",
    color: "#f9fafb",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 12px",
    boxSizing: "border-box",
  };

  const shellStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1100px",
    background:
      "radial-gradient(circle at top left, #111827, #020617 55%, #020817)",
    borderRadius: "28px",
    boxShadow: "0 24px 60px rgba(0,0,0,0.65)",
    padding: "28px",
    boxSizing: "border-box",
    border: "1px solid rgba(148, 163, 184, 0.15)",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  };

  const headerRight: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const logoutButtonStyle: React.CSSProperties = {
    padding: "8px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(148, 163, 184, 0.3)",
    background: "rgba(15, 23, 42, 0.9)",
    color: "#e5e7eb",
    cursor: "pointer",
    fontSize: "13px",
  };

  const settingsButtonStyle: React.CSSProperties = {
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(59, 130, 246, 0.5)",
    background: "rgba(15, 23, 42, 0.85)",
    color: "#bfdbfe",
    cursor: "pointer",
    fontSize: "12px",
  };

  const statGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  };

  const statCardStyle: React.CSSProperties = {
    borderRadius: "20px",
    padding: "16px",
    color: "#e5e7eb",
    boxShadow: "0 12px 30px rgba(0,0,0,0.55)",
  };

  const mainGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
    gap: "18px",
  };

  const panelStyle: React.CSSProperties = {
    background: "rgba(15, 23, 42, 0.92)",
    borderRadius: "22px",
    padding: "18px 18px 20px",
    border: "1px solid rgba(55, 65, 81, 0.8)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.65)",
  };

  const quickActionsRow: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  };

  const quickButtonBase: React.CSSProperties = {
    flex: "1 1 160px",
    borderRadius: "16px",
    padding: "14px 14px 16px",
    cursor: "pointer",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    background: "linear-gradient(135deg, #020617, #020617)",
    boxShadow: "0 10px 26px rgba(0,0,0,0.7)",
    textAlign: "left",
    fontSize: "13px",
    lineHeight: 1.35,
  };

  const linkReset: React.CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  };

  const badgeStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 8px",
    borderRadius: "999px",
    fontSize: "11px",
    marginTop: "6px",
  };

  const futureBadge: React.CSSProperties = {
    ...badgeStyle,
    background: "rgba(148, 163, 184, 0.18)",
    color: "#e5e7eb",
    border: "1px solid rgba(148, 163, 184, 0.35)",
  };

  const historyBadge: React.CSSProperties = {
    ...badgeStyle,
    background: "rgba(34, 197, 94, 0.12)",
    color: "#bbf7d0",
    border: "1px solid rgba(34, 197, 94, 0.45)",
  };

  const disabledBadge: React.CSSProperties = {
    ...badgeStyle,
    background: "rgba(148, 163, 184, 0.12)",
    color: "#9ca3af",
    border: "1px dashed rgba(148, 163, 184, 0.4)",
  };

  return (
    <main style={pageStyle}>
      <div style={shellStyle}>
        {/* Header */}
        <header style={headerStyle}>
          <div>
            <h1
              style={{
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              LIVO Core Dashboard
            </h1>
            <p
              style={{
                marginTop: "4px",
                fontSize: "13px",
                color: "#9ca3af",
              }}
            >
              Welcome back, {userName}. This is your main control center.
            </p>
          </div>

          <div style={headerRight}>
            <button
              type="button"
              style={settingsButtonStyle}
              onClick={() => {
                window.location.href = "/settings";
              }}
            >
              Settings
            </button>
            <button
              type="button"
              style={logoutButtonStyle}
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Logout (mock)
            </button>
          </div>
        </header>

        {/* Stats */}
        <section style={statGridStyle}>
          {stats.map((item) => (
            <div
              key={item.id}
              style={{ ...statCardStyle, background: item.background }}
            >
              <div style={{ fontSize: "11px", opacity: 0.8 }}>
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  marginTop: "6px",
                }}
              >
                {item.value}
              </div>
              <p
                style={{
                  fontSize: "12px",
                  marginTop: "8px",
                  opacity: 0.9,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* Main two-column area */}
        <section style={mainGridStyle}>
          {/* Quick Actions */}
          <div style={panelStyle}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 600,
                marginBottom: "4px",
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

            <div style={quickActionsRow}>
              {/* 1. Live Voice Translator → /voice */}
              <a href="/voice" style={linkReset}>
                <div
                  style={{
                    ...quickButtonBase,
                    borderColor: "rgba(34, 197, 94, 0.55)",
                    background:
                      "linear-gradient(135deg, #052e16, #022c22 60%, #020617)",
                  }}
                >
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>
                    Live Voice Translator
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#d1fae5",
                      marginTop: "6px",
                    }}
                  >
                    Start a real-time voice session (future).
                  </p>
                  <div style={futureBadge}>Future feature · Voice</div>
                </div>
              </a>

              {/* 2. Session History → /history */}
              <a href="/history" style={linkReset}>
                <div
                  style={{
                    ...quickButtonBase,
                    borderColor: "rgba(59, 130, 246, 0.6)",
                    background:
                      "linear-gradient(135deg, #0b1120, #020617 60%, #020617)",
                  }}
                >
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>
                    Session History
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#bfdbfe",
                      marginTop: "6px",
                    }}
                  >
                    View a demo list of your recent sessions.
                  </p>
                  <div style={historyBadge}>New · History mock</div>
                </div>
              </a>

              {/* 3. AI Chat & File Translator – disabled (future) */}
              <div
                style={{
                  ...quickButtonBase,
                  opacity: 0.6,
                  cursor: "not-allowed",
                  borderStyle: "dashed",
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: 600 }}>
                  AI Chat & File Translator
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#9ca3af",
                    marginTop: "6px",
                  }}
                >
                  Chat & instantly translate PDF / Word (future).
                </p>
                <div style={disabledBadge}>Coming later</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div style={panelStyle}>
            <h2
              style={{
                fontSize: "15px",
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
                marginBottom: "12px",
              }}
            >
              Preview of how we will show your session history later.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {recentActivity.map((item) => (
                <li
                  key={item.id}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "14px",
                    background: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(55, 65, 81, 0.85)",
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
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#9ca3af",
                    }}
                  >
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
