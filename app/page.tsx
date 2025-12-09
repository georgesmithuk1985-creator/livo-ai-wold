export default function Home() {
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
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>LIVO Core</h1>
        <p style={{ marginBottom: "24px", fontSize: "16px" }}>
          Welcome. Choose an option to continue.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          {/* Login → /login */}
          <a href="/login" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                border: "none",
                backgroundColor: "#0ea5e9",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </a>

          {/* Register → /register */}
          <a href="/register" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                border: "1px solid #64748b",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
