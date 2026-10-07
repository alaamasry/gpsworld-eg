import Link from "next/link";

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

function getDeviceName(slug: string) {
  return devices.find((device) => device.slug === slug)?.name;
}

export default async function ComparisonResultPage({
  params,
}: {
  params: Promise<{
    device1: string;
    device2: string;
  }>;
}) {
  const { device1, device2 } = await params;

  const firstName = getDeviceName(device1);
  const secondName = getDeviceName(device2);

  if (!firstName || !secondName || device1 === device2) {
    return (
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#f8fafc",
          color: "#0f172a",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#0f172a",
            fontSize: "32px",
            fontWeight: 800,
          }}
        >
          المقارنة غير متاحة
        </h1>

        <p
          style={{
            color: "#475569",
            marginTop: "15px",
          }}
        >
          من فضلك اختار جهازين مختلفين من صفحة المقارنة.
        </p>

        <Link
          href="/comparison"
          style={{
            display: "inline-block",
            marginTop: "25px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            padding: "14px 25px",
            borderRadius: "12px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          ← العودة للمقارنة
        </Link>
      </main>
    );
  }

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
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p
            style={{
              color: "#2563eb",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            مقارنة أجهزة GPS
          </p>

          <h1
            style={{
              color: "#0f172a",
              fontSize: "clamp(30px, 5vw, 48px)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            {firstName} × {secondName}
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
            هنا هنوضح لك الفرق بين الجهازين بطريقة سهلة وعملية تساعدك تختار
            الجهاز الأنسب لاستخدامك.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <section
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
            }}
          >
            <h2
              style={{
                color: "#0f172a",
                fontSize: "26px",
                fontWeight: 800,
                margin: 0,
              }}
            >
              {firstName}
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: 1.9,
                marginTop: "15px",
              }}
            >
              هنا هنكتب وصف الجهاز ومميزاته وطريقة استخدامه بالتفصيل.
            </p>
          </section>

          <section
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
            }}
          >
            <h2
              style={{
                color: "#0f172a",
                fontSize: "26px",
                fontWeight: 800,
                margin: 0,
              }}
            >
              {secondName}
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: 1.9,
                marginTop: "15px",
              }}
            >
              هنا هنكتب وصف الجهاز ومميزاته وطريقة استخدامه بالتفصيل.
            </p>
          </section>
        </div>

        <section
          style={{
            marginTop: "30px",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "30px",
            boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
          }}
        >
          <h2
            style={{
              color: "#0f172a",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 800,
              marginBottom: "25px",
            }}
          >
            المقارنة التفصيلية
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                color: "#0f172a",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "15px",
                      border: "1px solid #cbd5e1",
                      backgroundColor: "#f1f5f9",
                    }}
                  >
                    المقارنة
                  </th>

                  <th
                    style={{
                      padding: "15px",
                      border: "1px solid #cbd5e1",
                      backgroundColor: "#eff6ff",
                    }}
                  >
                    {firstName}
                  </th>

                  <th
                    style={{
                      padding: "15px",
                      border: "1px solid #cbd5e1",
                      backgroundColor: "#ecfdf5",
                    }}
                  >
                    {secondName}
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  "طريقة التركيب",
                  "نوع الاستخدام",
                  "التتبع المباشر",
                  "سجل الرحلات",
                  "التنبيهات",
                  "البطارية",
                  "فصل المحرك",
                ].map((item) => (
                  <tr key={item}>
                    <td
                      style={{
                        padding: "15px",
                        border: "1px solid #cbd5e1",
                        fontWeight: 700,
                      }}
                    >
                      {item}
                    </td>

                    <td
                      style={{
                        padding: "15px",
                        border: "1px solid #cbd5e1",
                        color: "#475569",
                      }}
                    >
                      سيتم تحديدها حسب مواصفات الجهاز
                    </td>

                    <td
                      style={{
                        padding: "15px",
                        border: "1px solid #cbd5e1",
                        color: "#475569",
                      }}
                    >
                      سيتم تحديدها حسب مواصفات الجهاز
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          style={{
            marginTop: "30px",
            backgroundColor: "#0f172a",
            color: "#ffffff",
            borderRadius: "24px",
            padding: "30px",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: 800,
              margin: 0,
            }}
          >
            الفرق العملي بين الجهازين
          </h2>

          <p
            style={{
              color: "#e2e8f0",
              lineHeight: 2,
              marginTop: "15px",
            }}
          >
            بعد إضافة مواصفات الجهازين، هنا هنوضح لك الفرق الحقيقي بينهم
            بطريقة بسيطة ومفهومة، ونقول لك أي جهاز أنسب لكل نوع من الاستخدام.
          </p>
        </section>

        <div
          style={{
            textAlign: "center",
            marginTop: "35px",
          }}
        >
          <Link
            href="/comparison"
            style={{
              display: "inline-block",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "15px 30px",
              borderRadius: "12px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            ← مقارنة أجهزة أخرى
          </Link>
        </div>
      </section>
    </main>
  );
}