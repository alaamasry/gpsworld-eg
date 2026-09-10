import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "OBD22 | جهاز تتبع سيارات GPS بمنفذ OBD في مصر",

  description:
    "جهاز OBD22 لتتبع السيارات والمركبات في مصر، بتركيب مباشر من خلال منفذ OBD-II، مع تتبع لحظي وتنبيهات ذكية وتحديد موقع GPS.",

  keywords: [
    "OBD22",
    "جهاز OBD22",
    "OBD22 GPS",
    "جهاز تتبع OBD22",
    "جهاز GPS OBD22",
    "جهاز تتبع OBD",
    "جهاز GPS OBD",
    "OBD GPS Tracker",
    "جهاز GPS",
    "جهاز تتبع سيارات",
    "أجهزة تتبع GPS",
    "جهاز GPS للسيارات",
    "جهاز تتبع للسيارة",
    "GPS Tracker",
    "GPS Tracker مصر",
    "أجهزة GPS مصر",
    "تتبع السيارات",
    "تتبع المركبات",
    "جهاز تتبع سيارات مصر",
  ],

  alternates: {
    canonical: "https://gpsworld-eg.com/devices/obd22",
  },

  openGraph: {
    title: "OBD22 | جهاز تتبع سيارات GPS بمنفذ OBD في مصر",

    description:
      "جهاز OBD22 لتتبع السيارات والمركبات بتركيب مباشر من منفذ OBD-II، مع تتبع لحظي وتنبيهات ذكية وتحديد موقع GPS.",

    url: "https://gpsworld-eg.com/devices/obd22",

    siteName: "GPS World Egypt",

    locale: "ar_EG",

    type: "website",

    images: [
      {
        url: "/images/OBD22.jpeg",
        width: 1200,
        height: 630,
        alt: "OBD22 جهاز تتبع سيارات GPS بمنفذ OBD في مصر",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "OBD22 | جهاز تتبع سيارات GPS بمنفذ OBD في مصر",

    description:
      "جهاز OBD22 لتتبع السيارات والمركبات مع تركيب مباشر من منفذ OBD-II ومتابعة الموقع والحركة.",

    images: ["/images/OBD22.jpeg"],
  },
};

const product = {
  name: "OBD22",
  image: "/images/OBD22.jpeg",
  url: "https://gpsworld-eg.com/devices/obd22",
};

const faqs = [
  {
    question: "ما هو جهاز OBD22؟",
    answer:
      "جهاز OBD22 هو جهاز تتبع GPS للسيارات يتم تركيبه مباشرة من خلال منفذ OBD-II، ويوفر متابعة الموقع والحركة والتنبيهات من خلال نظام التتبع المتوافق.",
  },
  {
    question: "هل يحتاج جهاز OBD22 إلى توصيل أسلاك؟",
    answer:
      "لا، يتم تركيب الجهاز مباشرة في منفذ OBD-II في السيارة دون الحاجة إلى تمديد أسلاك كهربائية إضافية.",
  },
  {
    question: "هل جهاز OBD22 يدعم التتبع اللحظي؟",
    answer:
      "نعم، يدعم جهاز OBD22 متابعة موقع وحركة المركبة بشكل مباشر من خلال نظام التتبع المتوافق.",
  },
  {
    question: "هل يدعم OBD22 تحديد المناطق الجغرافية Geo-Fence؟",
    answer:
      "نعم، يدعم الجهاز التنبيه عند دخول المركبة أو خروجها من منطقة جغرافية محددة حسب النظام المستخدم.",
  },
  {
    question: "هل جهاز OBD22 يدعم فصل محرك السيارة؟",
    answer:
      "لا، جهاز OBD22 لا يدعم فصل محرك السيارة، وهو مخصص للتتبع والمراقبة والتنبيهات.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: ["https://gpsworld-eg.com/images/OBD22.jpeg"],
      url: product.url,
      description:
        "جهاز OBD22 لتتبع السيارات والمركبات بتركيب مباشر من منفذ OBD-II ومتابعة الموقع والحركة باستخدام أنظمة GPS.",
      brand: {
        "@type": "Brand",
        name: "GPS World Egypt",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://gpsworld-eg.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "أجهزة GPS",
          item: "https://gpsworld-eg.com/#products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "OBD22",
          item: "https://gpsworld-eg.com/devices/obd22",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز OBD22"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز OBD22"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

export default function OBD22Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="min-h-screen bg-gray-50" dir="rtl">
        {/* HEADER */}

        <header className="sticky top-0 z-50 bg-blue-950 text-white shadow-lg">
          <div className="mx-auto max-w-7xl px-5 py-4">
            <div className="flex items-center justify-between gap-4">
              <a
                href="/"
                className="flex flex-col leading-tight transition hover:text-yellow-300"
              >
                <span className="text-2xl font-extrabold md:text-3xl">
                  GPS World Egypt
                </span>

                <span className="mt-1 text-xs text-blue-200 md:text-sm">
                  حلول التتبع والمراقبة GPS
                </span>
              </a>

              <a
                href="/#products"
                className="rounded-xl bg-blue-900 px-4 py-3 font-bold transition hover:bg-blue-800"
              >
                📡 الأجهزة
              </a>
            </div>
          </div>
        </header>

        {/* BACK */}

        <div className="mx-auto max-w-7xl px-5 pt-6">
          <a
            href="/#products"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-800"
          >
            ← العودة إلى الأجهزة
          </a>
        </div>

        {/* PRODUCT HERO */}

        <section className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
              <Image
                src={product.image}
                alt="OBD22 جهاز تتبع سيارات GPS بمنفذ OBD في مصر"
                width={650}
                height={500}
                priority
                className="max-h-[500px] w-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز OBD22 لتتبع السيارات والمركبات في مصر
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                جهاز تتبع GPS بتركيب مباشر عبر منفذ OBD-II
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز OBD22 مصمم لتوفير طريقة عملية وسهلة لمتابعة السيارات
                والمركبات، حيث يتم تركيبه مباشرة في منفذ OBD-II بدون الحاجة
                إلى تمديد أسلاك، مع إمكانية متابعة الموقع والحركة والتنبيهات
                من خلال نظام التتبع المتوافق.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-green-600 px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-green-700"
                >
                  💬 استفسر عبر واتساب
                </a>

                <a
                  href="tel:01006687163"
                  className="rounded-xl bg-blue-900 px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-blue-800"
                >
                  📞 اتصل بنا
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK FEATURES */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🔌</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                تركيب سريع
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                تركيب مباشر من خلال منفذ OBD-II بدون أسلاك إضافية.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">📍</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                تتبع لحظي
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                متابعة موقع وحركة المركبة بشكل مباشر عبر الإنترنت.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🚨</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                تنبيهات ذكية
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                تنبيهات للسرعة والاهتزاز والتسارع والكبح والمناطق الجغرافية.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🔄</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                تحديث OTA
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                دعم تحديث الجهاز عن بُعد حسب النظام والإصدار.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES + TECHNICAL SPECS */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* FEATURES */}

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
                ⭐ أهم مميزات جهاز OBD22
              </h2>

              <ul className="space-y-4 text-lg leading-8 text-gray-700">
                <li>📍 متابعة موقع المركبة بشكل لحظي عبر الإنترنت.</li>

                <li>
                  🔌 تركيب مباشر وسريع من خلال منفذ OBD-II بدون أسلاك.
                </li>

                <li>
                  🗺️ دعم تحديد الموقع باستخدام GPS وBDS وGNSS وLBS.
                </li>

                <li>
                  🚨 تنبيهات السرعة والاهتزاز والتسارع والكبح المفاجئ.
                </li>

                <li>
                  📡 دعم التنبيه عند الدخول أو الخروج من منطقة جغرافية
                  محددة Geo-Fence.
                </li>

                <li>
                  💡 إنذار تغير الإضاءة المفاجئ حسب الإصدار.
                </li>

                <li>
                  🔋 إنذار انخفاض البطارية ودعم بطارية احتياطية.
                </li>

                <li>
                  💾 إمكانية حفظ بيانات الرحلات على السيرفر حتى 6 أشهر.
                </li>

                <li>🔄 دعم التحديثات عن بُعد OTA.</li>

                <li>
                  🌡️ إمكانية دعم أجهزة إضافية لمراقبة الحرارة والرطوبة.
                </li>

                <li>
                  🎙️ إمكانية المراقبة الصوتية في بعض الإصدارات.
                </li>

                <li>🛡️ مقاومة للماء والغبار بمعيار IP65.</li>

                <li>
                  ⚡ استهلاك منخفض للطاقة ومناسب للتشغيل المستمر.
                </li>

                <li>
                  🤝 دعم فني ومتابعة من GPS World Egypt.
                </li>
              </ul>
            </div>

            {/* TECHNICAL SPECS */}

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
                ⚙️ المواصفات الفنية لجهاز OBD22
              </h2>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الموديل</span>
                  <span className="text-gray-600">OBD22</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">نوع الجهاز</span>
                  <span className="text-gray-600">OBD GPS Tracker</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    طريقة التركيب
                  </span>
                  <span className="text-gray-600">
                    Plug &amp; Play عبر منفذ OBD-II
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">الشبكات</span>
                  <span className="text-gray-600">2G GSM</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    ترددات GSM
                  </span>
                  <span className="text-gray-600">
                    850 / 900 / 1800 / 1900 MHz
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">GPRS</span>
                  <span className="text-gray-600">Class 12</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    تحديد الموقع
                  </span>
                  <span className="text-gray-600">
                    GPS + BDS + GNSS + LBS
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    بروتوكول الاتصال
                  </span>
                  <span className="text-gray-600">TCP/IP</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    جهد التشغيل
                  </span>
                  <span className="text-gray-600">9–36V DC</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    استهلاك الطاقة
                  </span>
                  <span className="text-gray-600">
                    29mA تشغيل / 7mA سكون
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    البطارية الاحتياطية
                  </span>
                  <span className="text-gray-600">100mAh</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">الأبعاد</span>
                  <span className="text-gray-600">
                    54 × 34 × 32 مم
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الوزن</span>
                  <span className="text-gray-600">حوالي 40 جرام</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">الحماية</span>
                  <span className="text-gray-600">IP65</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    مؤشرات LED
                  </span>
                  <span className="text-gray-600">
                    GSM أحمر / GPS أزرق
                  </span>
                </div>

                <div className="grid grid-cols-2 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    نطاق الحرارة
                  </span>
                  <span className="text-gray-600">
                    من -20° إلى +75° / +80° م
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SMART FUNCTIONS */}

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <span className="font-bold text-blue-700">
                وظائف ذكية
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                متابعة وتنبيهات تساعدك على مراقبة سيارتك
              </h2>

              <p className="mt-5 text-lg leading-9 text-gray-600">
                يوفر جهاز OBD22 مجموعة من وظائف المتابعة والتنبيهات
                التي تساعد على مراقبة المركبة ومعرفة ما يحدث أثناء الرحلة.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-blue-950">
                  🚗 تتبع الرحلات
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  متابعة حركة المركبة والرجوع إلى بيانات الرحلات
                  المحفوظة على المنصة حسب مدة الحفظ المتاحة.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-blue-950">
                  🚨 Geo-Fence
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  تنبيه عند دخول المركبة أو خروجها من منطقة جغرافية
                  محددة مسبقًا.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-blue-950">
                  ⚡ القيادة المفاجئة
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  دعم التنبيه عند التسارع أو الكبح المفاجئ والاهتزاز.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-blue-950">
                  🔋 الطاقة
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  تنبيهات مرتبطة بالطاقة وانخفاض البطارية مع بطارية
                  احتياطية داخل الجهاز.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK MODES */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                أوضاع التشغيل
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أوضاع متعددة حسب احتياج الاستخدام
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">📡</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  Real-Time
                </h3>

                <p className="mt-2 text-gray-600">
                  متابعة مباشرة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">🧠</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  Smart
                </h3>

                <p className="mt-2 text-gray-600">
                  تشغيل ذكي حسب الاستخدام.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">🔋</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  Power Saving
                </h3>

                <p className="mt-2 text-gray-600">
                  توفير استهلاك الطاقة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">🚨</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  Alarm Tracking
                </h3>

                <p className="mt-2 text-gray-600">
                  متابعة مرتبطة بالتنبيهات.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTE */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8 text-center shadow-sm">
            <div className="text-4xl">⚠️</div>

            <h2 className="mt-3 text-2xl font-extrabold text-blue-950">
              ملاحظة مهمة
            </h2>

            <p className="mt-4 text-lg font-bold leading-9 text-gray-700">
              جهاز OBD22 لا يدعم فصل محرك السيارة.
            </p>

            <p className="mt-2 leading-8 text-gray-600">
              الجهاز مخصص للتتبع والمراقبة والتنبيهات، ويتم تركيبه
              مباشرة من خلال منفذ OBD-II.
            </p>
          </div>
        </section>

        {/* WHY */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <span className="font-bold text-blue-700">
              GPS World Egypt
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              لماذا تختار جهاز OBD22؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              إذا كنت تبحث عن جهاز تتبع يمكن تركيبه بسرعة وبدون تمديد
              أسلاك، فإن OBD22 يوفر تركيبًا مباشرًا من منفذ OBD-II
              مع مجموعة من وظائف التتبع والتنبيهات ومتابعة حركة السيارة.
            </p>

            <div className="mt-10 grid gap-5 text-right sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🔌 تركيب بدون أسلاك
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  يتم توصيل الجهاز مباشرة في منفذ OBD-II.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  📍 متابعة مستمرة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة موقع وحركة المركبة من خلال نظام التتبع.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🚨 تنبيهات متعددة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  تنبيهات تساعد على مراقبة سلوك المركبة وحالتها.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🛠️ مناسب للأفراد والشركات
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  مناسب للاستخدام الشخصي وكذلك لمتابعة المركبات
                  وإدارة الأساطيل.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="text-center">
            <span className="font-bold text-blue-700">
              الاستخدامات
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              مناسب لمجموعة متنوعة من الاستخدامات
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">🚘</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                السيارات الخاصة
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                متابعة السيارة ومعرفة موقعها وحركتها.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">🏢</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                الشركات
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                متابعة المركبات ضمن أسطول الشركة.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">📊</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                إدارة الأسطول
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                متابعة الرحلات والبيانات من خلال منصة التتبع.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">🛡️</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                الحماية والمراقبة
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                تنبيهات ومتابعة تساعد على مراقبة المركبة.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                الأسئلة الشائعة
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أسئلة مهمة عن جهاز OBD22
              </h2>
            </div>

            <div className="mt-10 space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h3 className="text-xl font-extrabold text-blue-950">
                    {faq.question}
                  </h3>

                  <p className="mt-3 leading-8 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              هل تريد معرفة المزيد عن جهاز OBD22؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة التفاصيل والتوفر وطلب الجهاز.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-green-700"
              >
                💬 اطلب الجهاز عبر واتساب
              </a>

              <a
                href="/#products"
                className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-950 transition hover:bg-gray-100"
              >
                📡 مشاهدة باقي الأجهزة
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="bg-blue-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-10 text-center">
            <h3 className="text-2xl font-extrabold">
              GPS World Egypt
            </h3>

            <p className="mt-3 text-blue-200">
              أجهزة GPS للتتبع والمراقبة
            </p>

            <p className="mt-5 text-blue-300">
              📞 01006687163
            </p>

            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-green-400 hover:text-green-300"
            >
              💬 تواصل معنا عبر واتساب
            </a>

            <div className="mt-8 border-t border-blue-800 pt-5 text-sm text-blue-300">
              © 2026 GPS World Egypt - جميع الحقوق محفوظة
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP */}

        <a
          href={whatsappBaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="التواصل عبر واتساب"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:bg-green-600"
        >
          💬
        </a>
      </main>
    </>
  );
}