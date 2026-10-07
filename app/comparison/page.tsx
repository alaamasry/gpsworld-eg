"use client";

import Link from "next/link";
import { useState } from "react";

const devices = [
  { slug: "gt06n-2g", name: "GT06N 2G" },
  { slug: "gt06n-4g", name: "GT06N 4G" },
  { slug: "ev402", name: "EV402" },
  { slug: "ev404", name: "EV404" },
  { slug: "j16pro-max", name: "J16PRO Max" },
  { slug: "ak300", name: "AK300" },
  { slug: "b100", name: "B100" },
  { slug: "ev505", name: "EV505" },
  { slug: "tk303", name: "TK303" },
  { slug: "obd22", name: "OBD22" },
  { slug: "obd-vl505", name: "OBD VL505" },
  { slug: "qbit", name: "QBIT" },
  { slug: "w15l", name: "W15L" },
  { slug: "at4", name: "AT4" },
  { slug: "at4-plus", name: "AT4 PLUS" },
];

export default function ComparisonPage() {
  const [firstDevice, setFirstDevice] = useState("");
  const [secondDevice, setSecondDevice] = useState("");

  const canCompare =
    firstDevice !== "" &&
    secondDevice !== "" &&
    firstDevice !== secondDevice;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "32px 16px 60px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        {/* العنوان */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              fontSize: "34px",
              marginBottom: "10px",
            }}
          >
            ⚖️
          </div>

          <h1
            style={{
              margin: 0,
              color: "#172554",
              fontSize: "clamp(28px, 6vw, 42px)",
              fontWeight: 900,
            }}
          >
            مقارنة أجهزة GPS
          </h1>

          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              color: "#475569",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            اختار أي جهازين وشوف الفرق بينهم بسهولة
          </p>
        </div>

        {/* الجهاز الأول */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "22px",
            marginBottom: "18px",
            boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
            border: "1px solid #e2e8f0",
          }}
        >
          <label
            htmlFor="first-device"
            style={{
              display: "block",
              color: "#172554",
              fontSize: "20px",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            الجهاز الأول
          </label>

          <div style={{ position: "relative" }}>
            <select
              id="first-device"
              value={firstDevice}
              onChange={(e) => {
                setFirstDevice(e.target.value);

                if (e.target.value === secondDevice) {
                  setSecondDevice("");
                }
              }}
              style={{
                width: "100%",
                appearance: "none",
                WebkitAppearance: "none",
                background: "#f8fafc",
                border: "2px solid #cbd5e1",
                borderRadius: "14px",
                padding: "17px 50px 17px 16px",
                fontSize: "17px",
                fontWeight: 700,
                color: firstDevice ? "#172554" : "#64748b",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="">اختار الجهاز الأول</option>

              {devices.map((device) => (
                <option key={device.slug} value={device.slug}>
                  {device.name}
                </option>
              ))}
            </select>

            <span
              style={{
                position: "absolute",
                left: "18px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                fontSize: "20px",
                color: "#172554",
                fontWeight: 900,
              }}
            >
              ▼
            </span>
          </div>
        </section>

        {/* الجهاز الثاني */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "22px",
            marginBottom: "24px",
            boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
            border: "1px solid #e2e8f0",
          }}
        >
          <label
            htmlFor="second-device"
            style={{
              display: "block",
              color: "#172554",
              fontSize: "20px",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            الجهاز الثاني
          </label>

          <div style={{ position: "relative" }}>
            <select
              id="second-device"
              value={secondDevice}
              onChange={(e) => setSecondDevice(e.target.value)}
              style={{
                width: "100%",
                appearance: "none",
                WebkitAppearance: "none",
                background: "#f8fafc",
                border: "2px solid #cbd5e1",
                borderRadius: "14px",
                padding: "17px 50px 17px 16px",
                fontSize: "17px",
                fontWeight: 700,
                color: secondDevice ? "#172554" : "#64748b",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="">اختار الجهاز الثاني</option>

              {devices.map((device) => (
                <option
                  key={device.slug}
                  value={device.slug}
                  disabled={device.slug === firstDevice}
                >
                  {device.name}
                </option>
              ))}
            </select>

            <span
              style={{
                position: "absolute",
                left: "18px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                fontSize: "20px",
                color: "#172554",
                fontWeight: 900,
              }}
            >
              ▼
            </span>
          </div>
        </section>

        {/* ملخص الاختيار */}
        {(firstDevice || secondDevice) && (
          <div
            style={{
              background: "#172554",
              borderRadius: "20px",
              padding: "22px",
              marginBottom: "20px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.18)",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                color: "#bfdbfe",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              الأجهزة المختارة
            </p>

            <div
              style={{
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: 900,
              }}
            >
              {firstDevice
                ? devices.find((d) => d.slug === firstDevice)?.name
                : "لم يتم اختيار الجهاز الأول"}

              {"  ×  "}

              {secondDevice
                ? devices.find((d) => d.slug === secondDevice)?.name
                : "لم يتم اختيار الجهاز الثاني"}
            </div>
          </div>
        )}

        {/* زر المقارنة */}
        {canCompare ? (
          <Link
            href={`/comparison/${firstDevice}/${secondDevice}`}
            style={{
              display: "block",
              width: "100%",
              boxSizing: "border-box",
              textAlign: "center",
              textDecoration: "none",
              background: "#172554",
              color: "#ffffff",
              borderRadius: "16px",
              padding: "18px 20px",
              fontSize: "19px",
              fontWeight: 900,
              boxShadow: "0 8px 20px rgba(15, 23, 42, 0.2)",
            }}
          >
            ⚖️ ابدأ المقارنة
          </Link>
        ) : (
          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              textAlign: "center",
              background: "#e2e8f0",
              color: "#64748b",
              borderRadius: "16px",
              padding: "18px 20px",
              fontSize: "18px",
              fontWeight: 800,
            }}
          >
            اختار جهازين مختلفين لبدء المقارنة
          </div>
        )}
      </div>
    </main>
  );
}