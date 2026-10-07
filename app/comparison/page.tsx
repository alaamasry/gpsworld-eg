"use client";

import Link from "next/link";
import { useState } from "react";

const devices = [
  { name: "GT06N 2G", slug: "gt06n-2g" },
  { name: "GT06N 4G", slug: "gt06n-4g" },
  { name: "EV402", slug: "ev402" },
  { name: "EV404", slug: "ev404" },
  { name: "J16PRO Max", slug: "j16pro-max" },
  { name: "AK300", slug: "ak300" },
  { name: "B100", slug: "b100" },
  { name: "EV505", slug: "ev505" },
  { name: "TK303", slug: "tk303" },
  { name: "OBD22", slug: "obd22" },
  { name: "OBD VL505", slug: "obd-vl505" },
  { name: "QBIT", slug: "qbit" },
  { name: "W15L", slug: "w15l" },
  { name: "AT4", slug: "at4" },
  { name: "AT4 PLUS", slug: "at4-plus" },
];

export default function ComparisonPage() {
  const [firstDevice, setFirstDevice] = useState("");
  const [secondDevice, setSecondDevice] = useState("");

  const first = devices.find((device) => device.slug === firstDevice);
  const second = devices.find((device) => device.slug === secondDevice);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        color: "#0f172a",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              color: "#0f172a",
              fontSize: "clamp(30px, 5vw, 48px)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            قارن بين أي جهازين
          </h1>

          <p
            style={{
              color: "#475569",
              fontSize: "18px",
              lineHeight: 1.9,
              maxWidth: "750px",
              margin: "16px auto 0",
            }}
          >
            اختار جهازين من أجهزة GPS الموجودة عندنا، وهنوضح لك الفرق بينهم
            بالتفصيل عشان تختار الجهاز الأنسب ليك.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {/* الجهاز الأول */}
          <section
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
              border: "1px solid #e2e8f0",
            }}
          >
            <p
              style={{
                color: "#2563eb",
                fontWeight: 700,
                margin: 0,
              }}
            >
              الجهاز الأول
            </p>

            <h2
              style={{
                color: "#0f172a",
                fontSize: "28px",
                fontWeight: 800,
                margin: "8px 0",
              }}
            >
              {first ? first.name : "اختار الجهاز الأول"}
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              اختار أول جهاز عايز تقارنه.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "10px",
              }}
            >
              {devices.map((device) => {
                const isSelected = firstDevice === device.slug;
                const isDisabled = secondDevice === device.slug;

                return (
                  <button
                    key={device.slug}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => setFirstDevice(device.slug)}
                    style={{
                      borderRadius: "12px",
                      padding: "13px 8px",
                      fontWeight: 700,
                      fontSize: "14px",
                      cursor: isDisabled ? "not-allowed" : "pointer",
                      border: isSelected
                        ? "2px solid #2563eb"
                        : "1px solid #cbd5e1",
                      backgroundColor: isSelected
                        ? "#2563eb"
                        : isDisabled
                          ? "#e2e8f0"
                          : "#ffffff",
                      color: isSelected
                        ? "#ffffff"
                        : isDisabled
                          ? "#94a3b8"
                          : "#0f172a",
                    }}
                  >
                    {device.name}
                  </button>
                );
              })}
            </div>
          </section>

          {/* الجهاز الثاني */}
          <section
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
              border: "1px solid #e2e8f0",
            }}
          >
            <p
              style={{
                color: "#059669",
                fontWeight: 700,
                margin: 0,
              }}
            >
              الجهاز الثاني
            </p>

            <h2
              style={{
                color: "#0f172a",
                fontSize: "28px",
                fontWeight: 800,
                margin: "8px 0",
              }}
            >
              {second ? second.name : "اختار الجهاز الثاني"}
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              {first
                ? `اختار الجهاز اللي عايز تقارنه مع ${first.name}.`
                : "اختار الجهاز الثاني اللي عايز تقارنه بالجهاز الأول."}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "10px",
              }}
            >
              {devices.map((device) => {
                const isSelected = secondDevice === device.slug;
                const isDisabled = firstDevice === device.slug;

                return (
                  <button
                    key={device.slug}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => setSecondDevice(device.slug)}
                    style={{
                      borderRadius: "12px",
                      padding: "13px 8px",
                      fontWeight: 700,
                      fontSize: "14px",
                      cursor: isDisabled ? "not-allowed" : "pointer",
                      border: isSelected
                        ? "2px solid #059669"
                        : "1px solid #cbd5e1",
                      backgroundColor: isSelected
                        ? "#059669"
                        : isDisabled
                          ? "#e2e8f0"
                          : "#ffffff",
                      color: isSelected
                        ? "#ffffff"
                        : isDisabled
                          ? "#94a3b8"
                          : "#0f172a",
                    }}
                  >
                    {device.name}
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* الأجهزة المختارة */}
        <section
          style={{
            marginTop: "24px",
            backgroundColor: "#0f172a",
            borderRadius: "24px",
            padding: "30px",
            color: "#ffffff",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: "26px",
              fontWeight: 800,
              margin: 0,
            }}
          >
            الأجهزة المختارة
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
              marginTop: "24px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1e293b",
                borderRadius: "16px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#cbd5e1", margin: 0 }}>الجهاز الأول</p>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: 800,
                  margin: "8px 0 0",
                }}
              >
                {first ? first.name : "لم تختار الجهاز الأول"}
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#1e293b",
                borderRadius: "16px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#cbd5e1", margin: 0 }}>الجهاز الثاني</p>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: 800,
                  margin: "8px 0 0",
                }}
              >
                {second ? second.name : "لم تختار الجهاز الثاني"}
              </p>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "28px",
            }}
          >
            {first && second ? (
              <Link
                href={`/comparison/${firstDevice}/${secondDevice}`}
                style={{
                  display: "inline-block",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "12px",
                  padding: "15px 30px",
                  fontSize: "18px",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                ⚖️ ابدأ المقارنة
              </Link>
            ) : (
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#334155",
                  color: "#cbd5e1",
                  borderRadius: "12px",
                  padding: "15px 30px",
                  fontSize: "18px",
                  fontWeight: 800,
                }}
              >
                ⚖️ اختار الجهازين أولاً
              </span>
            )}
          </div>
        </section>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <p
            style={{
              color: "#64748b",
              lineHeight: 1.8,
            }}
          >
            اختار أي جهازين من القائمة، وهنعرض لك الفرق بينهم بطريقة واضحة
            وسهلة تساعدك تختار الأنسب لاستخدامك.
          </p>

          <Link
            href="/#products"
            style={{
              color: "#2563eb",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ← العودة إلى الأجهزة
          </Link>
        </div>
      </section>
    </main>
  );
}