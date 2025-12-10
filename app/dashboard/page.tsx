"use client";

export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #020617 0, #000 65%)",
        color: "white",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          width: "960px",
          maxWidth: "100%",
          padding: "28px",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(2,6,23,0.98))",
          boxShadow: "0 22px 60px rgba(0,0,0,0.8)",
          border: "1px solid rgba(148,163,184,0.35)",
        }}
      >
        {/* هدر داشبورد */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "24px", marginBottom: "4px" }}>
              LIVO Core Dashboard
            </h1>
            <p style={{ fontSize: "13px", color: "#cbd5f5" }}>
              Welcome back, George. This is your main control center.
            </p>
          </div>

          <button
            style={{
              padding: "8px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(248,250,252,0.6)",
              backgroundColor: "transparent",
              color: "#e5e7eb",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Logout (mock)
          </button>
        </header>

        {/* ردیف کارت‌های بالا */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              background:
                "radial-gradient(circle at top left, #22c55e20, #020617 70%)",
              border: "1px solid rgba(34,197,94,0.35)",
            }}
          >
            <p style={{ fontSize: "12px", color: "#9ca3af" }}>Active Devices</p>
            <p style={{ fontSize: "26px", fontWeight: 600, marginTop: "8px" }}>
              3
            </p>
            <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "6px" }}>
              Currently connected to LIVO services.
            </p>
          </div>

          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              background:
                "radial-gradient(circle at top, #3b82f620, #020617 70%)",
              border: "1px solid rgba(59,130,246,0.35)",
            }}
          >
            <p style={{ fontSize: "12px", color: "#9ca3af" }}>Sessions today</p>
            <p style={{ fontSize: "26px", fontWeight: 600, marginTop: "8px" }}>
              12
            </p>
            <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "6px" }}>
              Voice / video / chat interactions (mock).
            </p>
          </div>

          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              background:
                "radial-gradient(circle at top right, #f9731620, #020617 70%)",
              border: "1px solid rgba(249,115,22,0.35)",
            }}
          >
            <p style={{ fontSize: "12px", color: "#9ca3af" }}>
              Translation minutes
            </p>
            <p style={{ fontSize: "26px", fontWeight: 600, marginTop: "8px" }}>
              47 min
            </p>
            <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "6px" }}>
              Total AI translation time (mock).
            </p>
          </div>
        </section>

        {/* بخش پایین: اکشن سریع + فعالیت اخیر */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
            gap: "18px",
          }}
        >
          {/* اکشن‌ها */}
          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.7))",
              border: "1px solid rgba(148,163,184,0.3)",
            }}
          >
            <h2 style={{ fontSize: "16px", marginBottom: "4px" }}>
              Quick Actions
            </h2>
            <p
              style={{
                fontSize: "12px",
                marginBottom: "14px",
                color: "#9ca3af",
              }}
            >
              Choose how you want to start. These buttons are placeholders for
              future real-time AI engines.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "12px",
              }}
            >
              <button
                style={{
                  padding: "14px 12px",
                  borderRadius: "14px",
                  border: "1px solid rgba(34,197,94,0.5)",
                  background:
                    "radial-gradient(circle at top left, #22c55e25, transparent 60%)",
                  color: "#e5e7eb",
                  fontSize: "13px",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                  Live Voice Translator
                </div>
                <div style={{ fontSize: "11px", color: "#bbf7d0" }}>
                  Start a real-time voice session (future).
                </div>
              </button>

              <button
                style={{
                  padding: "14px 12px",
                  borderRadius: "14px",
                  border: "1px solid rgba(59,130,246,0.5)",
                  background:
                    "radial-gradient(circle at top right, #3b82f625, transparent 60%)",
                  color: "#e5e7eb",
                  fontSize: "13px",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                  Live Video Translator
                </div>
                <div style={{ fontSize: "11px", color: "#bfdbfe" }}>
                  High-quality video with AI subtitles (future).
                </div>
              </button>

              <button
                style={{
                  padding: "14px 12px",
                  borderRadius: "14px",
                  border: "1px solid rgba(236,72,153,0.5)",
                  background:
                    "radial-gradient(circle at bottom, #ec489925, transparent 60%)",
                  color: "#e5e7eb",
                  fontSize: "13px",
                  textAlign: "left",
                  cursor: "pointer",
                  gridColumn: "span 2",
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                  AI Chat &amp; File Translator
                </div>
                <div style={{ fontSize: "11px", color: "#f9a8d4" }}>
                  Chat &amp; instantly translate PDF / Word (future).
                </div>
              </button>
            </div>
          </div>

          {/* فعالیت اخیر */}
          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.7))",
              border: "1px solid rgba(148,163,184,0.3)",
            }}
          >
            <h2 style={{ fontSize: "16px", marginBottom: "4px" }}>
              Recent Activity (mock)
            </h2>
            <p
              style={{
                fontSize: "12px",
                marginBottom: "10px",
                color: "#9ca3af",
              }}
            >
              Preview of how we will show your session history later.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(55,65,81,0.6)",
                  fontSize: "12px",
                }}
              >
                <div>Voice translation – English ⇄ Persian</div>
                <div style={{ color: "#9ca3af" }}>12 minutes · Today · 09:32</div>
              </li>
              <li
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(55,65,81,0.6)",
                  fontSize: "12px",
                }}
              >
                <div>Video session – Live subtitles enabled</div>
                <div style={{ color: "#9ca3af" }}>25 minutes · Today · 18:05</div>
              </li>
              <li
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(55,65,81,0.6)",
                  fontSize: "12px",
                }}
              >
                <div>File translation – medical_report.pdf</div>
                <div style={{ color: "#9ca3af" }}>
                  Completed · Yesterday · 21:10
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
