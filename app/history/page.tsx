"use client";

import React from "react";

type SessionItem = {
  id: number;
  type: "voice" | "video" | "file";
  title: string;
  date: string;
  duration: string;
  direction: string;
  status: string;
};

const sessions: SessionItem[] = [
  {
    id: 1,
    type: "voice",
    title: "English ⇄ Persian · Daily practice",
    date: "Today · 09:32 (mock)",
    duration: "12 minutes",
    direction: "Bi-directional",
    status: "Completed",
  },
  {
    id: 2,
    type: "video",
    title: "Church meeting subtitles",
    date: "Today · 18:05 (mock)",
    duration: "25 minutes",
    direction: "English → Persian",
    status: "Completed",
  },
  {
    id: 3,
    type: "file",
    title: "medical_report.pdf",
    date: "Yesterday · 21:10 (mock)",
    duration: "6 pages",
    direction: "English → Persian",
    status: "Completed",
  },
];

export default function HistoryPage() {
  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #020617, #000000 60%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 12px",
    boxSizing: "border-box",
    color: "#e5e7eb",
  };

  const shellStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "900px",
    background:
      "radial-gradient(circle at top left, #020617, #020617 40%, #020617)",
    borderRadius: "26px",
    boxShadow: "0 24px 60px rgba(0,0,0,0.75)",
    padding: "26px",
    border: "1px solid rgba(75, 85, 99, 0.8)",
    boxSizing: "border-box",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "18px",
  };

  const backLinkStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#93c5fd",
    textDecoration: "none",
  };

  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    marginTop: "10px",
    fontSize: "12px",
  };

  const thStyle: React.CSSProperties = {
    textAlign: "left",
    padding: "8px 10px",
    color: "#9ca3af",
    fontWeight: 500,
    borderBottom: "1px solid rgba(55, 65, 81, 0.9)",
    background: "rgba(15, 23, 42, 0.95)",
  };

  const rowStyle: React.CSSProperties = {
    background: "rgba(15, 23, 42, 0.96)",
  };

  const tdStyle: React.CSSProperties = {
    padding: "8px 10px",
    borderBottom: "1px solid rgba(31, 41, 55, 0.85)",
  };

  const badgeBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 8px",
    borderRadius: "999px",
    fontSize: "11px",
  };

  const statusBadge: React.CSSProperties = {
    ...badgeBase,
    background: "rgba(34, 197, 94, 0.12)",
    color: "#bbf7d0",
    border: "1px solid rgba(34, 197, 94, 0.45)",
  };

  return (
    <main style={pageStyle}>
      <div style={shellStyle}>
        <header style={headerStyle}>
          <div>
            <h1
              style={{
                fontSize: "18px",
                fontWeight: 600,
                marginBottom: "4px",
              }}
            >
              Session History (Demo)
            </h1>
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
              }}
            >
              This page shows a mock list of your recent LIVO sessions. In the
              real product, this table will be filled with live data from the
              translation engine.
            </p>
          </div>
          <a href="/dashboard" style={backLinkStyle}>
            ← Back to dashboard
          </a>
        </header>

        <section>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...thStyle, borderTopLeftRadius: "12px" }}>
                  Type
                </th>
                <th style={thStyle}>Title</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Duration</th>
                <th style={thStyle}>Direction</th>
                <th style={{ ...thStyle, borderTopRightRadius: "12px" }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr
                  key={session.id}
                  style={{
                    ...rowStyle,
                    borderBottomLeftRadius:
                      index === sessions.length - 1 ? "12px" : 0,
                    borderBottomRightRadius:
                      index === sessions.length - 1 ? "12px" : 0,
                  }}
                >
                  <td style={tdStyle}>{session.type}</td>
                  <td style={tdStyle}>{session.title}</td>
                  <td style={tdStyle}>{session.date}</td>
                  <td style={tdStyle}>{session.duration}</td>
                  <td style={tdStyle}>{session.direction}</td>
                  <td style={tdStyle}>
                    <span style={statusBadge}>{session.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
