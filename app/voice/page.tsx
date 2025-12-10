"use client";

import React from "react";

export default function VoicePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #111827, #020617)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        color: "white",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          borderRadius: "24px",
          padding: "32px 28px",
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,64,175,0.9))",
          boxShadow:
            "0 24px 80px rgba(15,23,42,0.8), 0 0 0 1px rgba(148,163,184,0.15)",
          border: "1px solid rgba(148,163,184,0.35)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: "4px",
          }}
        >
          Live Voice Translator (Future)
        </h1>

        <p
          style={{
            marginBottom: "24px",
            color: "#e5e7eb",
            fontSize: "14px",
          }}
        >
          این صفحه در نسخه‌های بعدی LIVO فعال می‌شود. در این‌جا مکالمه‌ی صوتی
          زنده بین دو زبان (مثلاً انگلیسی و فارسی) با کمک هوش مصنوعی انجام
          خواهد شد.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "20px",
          }}
        >
          {/* سمت چپ: توضیح و placeholder */}
          <div
            style={{
              borderRadius: "18px",
              padding: "18px 16px",
              background:
                "radial-gradient(circle at top left, #1e293b, #020617)",
              border: "1px solid rgba(148,163,184,0.4)",
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                marginBottom: "10px",
                fontWeight: 600,
              }}
            >
              وضعیت جلسه (Demo)
            </h2>
            <ul
              style={{
                fontSize: "13px",
                color: "#e5e7eb",
                lineHeight: 1.7,
                paddingLeft: "18px",
              }}
            >
              <li>اتصال میکروفون و بلندگو (در نسخه واقعی).</li>
              <li>انتخاب زبان مبدأ و مقصد.</li>
              <li>نمایش متن دو طرف مکالمه.</li>
              <li>ذخیره‌ی جلسه برای مرور بعدی.</li>
            </ul>
          </div>

          {/* سمت راست: کارت کوچک تنظیمات */}
          <div
            style={{
              borderRadius: "18px",
              padding: "16px 16px 18px",
              background:
                "linear-gradient(145deg, rgba(22,163,74,0.2), rgba(22,163,74,0.05))",
              border: "1px solid rgba(34,197,94,0.45)",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "#bbf7d0",
                marginBottom: "8px",
              }}
            >
              این فقط یک نمونه‌ی نمایشی است.
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#dcfce7",
                marginBottom: "10px",
              }}
            >
              در نسخه بعدی، دکمه‌ی «شروع جلسه» در اینجا فعال می‌شود و می‌توانید
              مکالمه‌ی زنده را امتحان کنید.
            </p>
            <button
              type="button"
              style={{
                marginTop: "4px",
                width: "100%",
                padding: "10px 0",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg, #22c55e, #4ade80, #22c55e)",
                color: "#022c22",
                fontWeight: 600,
                fontSize: "13px",
                cursor: "not-allowed",
                opacity: 0.65,
              }}
            >
              Start Session (Coming soon)
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
