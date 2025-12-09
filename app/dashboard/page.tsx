"use client";

export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px",
        backgroundColor: "#020617",
        color: "white",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* بالای داشبورد */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
            LIVO Core Dashboard
          </h1>
          <p style={{ color: "#9ca3af" }}>
            Welcome back, George. This is your main control center.
          </p>
        </div>

        <button
          style={{
            padding: "10px 20px",
            borderRadius: "999px",
            border: "1px solid #4b5563",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Logout (mock)
        </button>
      </header>

      {/* کارت‌های وضعیت کلی */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at top left, #22c55e33, #020617)",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid #1f2937",
          }}
        >
          <p style={{ fontSize: "12px", color: "#9ca3af" }}>
            Active Devices
          </p>
          <p style={{ fontSize: "24px", marginTop: "8px" }}>3</p>
          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "8px" }}>
            Currently connected to LIVO services.
          </p>
        </div>

        <div
          style={{
            background:
              "radial-gradient(circle at top left, #3b82f633, #020617)",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid #1f2937",
          }}
        >
          <p style={{ fontSize: "12px", color: "#9ca3af" }}>
            Sessions today
          </p>
          <p style={{ fontSize: "24px", marginTop: "8px" }}>12</p>
          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "8px" }}>
            Voice / video / chat interactions (mock).
          </p>
        </div>

        <div
          style={{
            background:
              "radial-gradient(circle at top left, #eab30833, #020617)",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid #1f2937",
          }}
        >
          <p style={{ fontSize: "12px", color: "#9ca3af" }}>
            Translation minutes
          </p>
          <p style={{ fontSize: "24px", marginTop: "8px" }}>47 min</p>
          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "8px" }}>
            Total AI translation time (mock).
          </p>
        </div>
      </section>

      {/* بخش اصلی: اکشن‌ها + فعالیت‌ها */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.3fr)",
          gap: "16px",
          alignItems: "flex-start",
        }}
      >
        {/* اکشن‌های اصلی LIVO */}
        <div
          style={{
            backgroundColor: "#020617",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid #1f2937",
          }}
        >
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
            Quick Actions
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "#9ca3af",
              marginBottom: "20px",
            }}
          >
            Choose how you want to start. These buttons are placeholders for
            future real-time AI engines.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
            }}
          >
            <button
              style={{
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #22c55e55",
                background:
                  "linear-gradient(135deg, #22c55e33, #16a34a11)",
                color: "white",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "14px", fontWeight: 600 }}>
                Live Voice Translator
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#a3e635",
                  marginTop: "6px",
                }}
              >
                Start a real-time voice session (future).
              </p>
            </button>

            <button
              style={{
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #3b82f655",
                background:
                  "linear-gradient(135deg, #3b82f633, #1d4ed811)",
                color: "white",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "14px", fontWeight: 600 }}>
                Live Video Translator
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#93c5fd",
                  marginTop: "6px",
                }}
              >
                High-quality video with AI subtitles (future).
              </p>
            </button>

            <button
              style={{
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #eab30855",
                background:
                  "linear-gradient(135deg, #eab30833, #92400e11)",
                color: "white",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "14px", fontWeight: 600 }}>
                AI Chat & File Translator
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#facc15",
                  marginTop: "6px",
                }}
              >
                Chat & instantly translate PDF / Word (future).
              </p>
            </button>
          </div>
        </div>

        {/* فعالیت اخیر / لاگ‌ها */}
        <div
          style={{
            backgroundColor: "#020617",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid #1f2937",
          }}
        >
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
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
            <li
              style={{
                padding: "10px 0",
                borderBottom: "1px solid #111827",
              }}
            >
              <p style={{ fontSize: "14px" }}>
                Voice translation – English ⇄ Persian
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginTop: "4px",
                }}
              >
                12 minutes • Today, 19:32 (mock)
              </p>
            </li>
            <li
              style={{
                padding: "10px 0",
                borderBottom: "1px solid #111827",
              }}
            >
              <p style={{ fontSize: "14px" }}>
                Video session – Live subtitles enabled
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginTop: "4px",
                }}
              >
                25 minutes • Today, 18:05 (mock)
              </p>
            </li>
            <li style={{ padding: "10px 0" }}>
              <p style={{ fontSize: "14px" }}>
                File translation – medical_report.pdf
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginTop: "4px",
                }}
              >
                Completed • Yesterday, 21:10 (mock)
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
