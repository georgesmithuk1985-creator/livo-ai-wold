"use client";

import React from "react";

export default function SettingsPage() {
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
    maxWidth: "800px",
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

  const sectionStyle: React.CSSProperties = {
    background: "rgba(15, 23, 42, 0.96)",
    borderRadius: "18px",
    padding: "16px 18px",
    border: "1px solid rgba(55, 65, 81, 0.9)",
    marginBottom: "16px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#9ca3af",
    marginBottom: "4px",
  };

  const valueStyle: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: 500,
  };

  const pillStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 8px",
    borderRadius: "999px",
    fontSize: "11px",
    marginLeft: "6px",
    background: "rgba(34, 197, 94, 0.12)",
    color: "#bbf7d0",
    border: "1px solid rgba(34, 197, 94, 0.45)",
  };

  const disabledControl: React.CSSProperties = {
    marginTop: "8px",
    fontSize: "11px",
    color: "#9ca3af",
    padding: "6px 8px",
    borderRadius: "10px",
    background: "rgba(15, 23, 42, 0.9)",
    border: "1px dashed rgba(75, 85, 99, 0.9)",
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
              Account & App Settings (Demo)
            </h1>
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
              }}
            >
              This page is a mock settings screen for LIVO Core. In the real
              product, you will change account details and app preferences here.
            </p>
          </div>
          <a href="/dashboard" style={backLinkStyle}>
            ← Back to dashboard
          </a>
        </header>

        {/* Account information */}
        <section style={sectionStyle}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Account information
          </h2>

          <div style={{ marginBottom: "8px" }}>
            <div style={labelStyle}>Display name</div>
            <div style={valueStyle}>George Smith</div>
          </div>

          <div style={{ marginBottom: "8px" }}>
            <div style={labelStyle}>Email</div>
            <div style={valueStyle}>george.smith.uk1985@gmail.com</div>
          </div>

          <div style={{ marginBottom: "4px" }}>
            <div style={labelStyle}>Role</div>
            <div style={valueStyle}>
              Standard user <span style={pillStyle}>Mock</span>
            </div>
          </div>
        </section>

        {/* App preferences */}
        <section style={sectionStyle}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            App preferences (future)
          </h2>

          <div style={{ marginBottom: "8px" }}>
            <div style={labelStyle}>Interface language</div>
            <div style={valueStyle}>English · فارسی (planned)</div>
          </div>

          <div style={{ marginBottom: "8px" }}>
            <div style={labelStyle}>Theme</div>
            <div style={valueStyle}>Dark mode (always on in this demo)</div>
          </div>

          <div style={disabledControl}>
            In a future version, you will be able to change language, theme and
            notification settings. For this MVP, settings are read-only.
          </div>
        </section>

        {/* System information */}
        <section style={sectionStyle}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            System information
          </h2>

          <div style={{ marginBottom: "6px" }}>
            <div style={labelStyle}>LIVO Core version</div>
            <div style={valueStyle}>v0.1.0 · UI demo</div>
          </div>

          <div style={{ marginBottom: "6px" }}>
            <div style={labelStyle}>Environment</div>
            <div style={valueStyle}>Production (Vercel)</div>
          </div>

          <div style={{ marginBottom: "0px" }}>
            <div style={labelStyle}>Data status</div>
            <div style={valueStyle}>All values on this page are mock data.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
