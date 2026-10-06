import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "OBD22 | جهاز تتبع GPS للسيارات بنظام OBD في مصر",
  description:
    "جهاز OBD22 لتتبع السيارات بنظام Plug & Play، يركب مباشرة في منفذ OBD-II بدون قطع أو تعديل أسلاك، مع تتبع مباشر وتنبيهات الحركة والسرعة وGeo-Fence وتنبيه نزع الجهاز.",
  keywords: [
    "OBD22",
    "جهاز OBD22",
    "OBD22 GPS",
    "OBD22 مصر",
    "جهاز تتبع OBD22",
    "جهاز GPS OBD22",
    "جهاز تتبع OBD",
    "جهاز GPS OBD",
    "OBD GPS Tracker",
    "OBD GPS Tracker مصر",
    "جهاز GPS للسيارات",
    "جهاز تتبع سيارات",
    "جهاز تتبع سيارات GPS",
    "جهاز تتبع سيارات مصر",
    "جهاز تتبع للسيارة",
    "جهاز تتبع مركبات",
    "أجهزة تتبع GPS",
    "أجهزة GPS مصر",
    "GPS Tracker",
    "GPS Tracker مصر",
    "GPS مصر",
    "تتبع السيارات",
    "تتبع السيارة",
    "تتبع المركبات",
    "جهاز تتبع بدون أسلاك",
    "جهاز تتبع OBD للسيارات",
  ],

  alternates: {
    canonical: "https://gpsworld-eg.com/devices/obd22",
  },

  openGraph: {
    title: "OBD22 | جهاز تتبع GPS للسيارات بنظام OBD في مصر",
    description:
      "جهاز OBD22 صغير الحجم يعمل على شبكة 2G، يركب مباشرة في منفذ OBD-II بدون قطع أو تعديل أسلاك، مع تتبع مباشر وتنبيهات متعددة.",
    url: "https://gpsworld-eg.com/devices/obd22",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/OBD22.jpeg",
        width: 1200,
        height: 630,
        alt: "OBD22 جهاز تتبع سيارات GPS في مصر",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OBD22 | جهاز تتبع GPS للسيارات بنظام OBD",
    description:
      "جهاز OBD22 بتركيب مباشر من منفذ OBD-II بدون قطع أسلاك، مع تتبع مباشر وتنبيهات الحركة والسرعة ونزع الجهاز.",
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
      "جهاز OBD22 هو جهاز تتبع GPS صغير للسيارات يعمل بنظام Plug & Play، ويتم تركيبه مباشرة في منفذ OBD-II الموجود في السيارة بدون قطع أو تعديل أسلاك السيارة.",
  },
  {
    question: "هل جهاز OBD22 يحتاج إلى قطع أسلاك؟",
    answer:
      "لا، يتم تركيب جهاز OBD22 مباشرة في منفذ OBD-II، لذلك لا يحتاج إلى قطع أو تعديل ضفيرة الكهرباء في السيارة.",
  },
  {
    question: "هل يمكن تركيب وفك جهاز OBD22 بسهولة؟",
    answer:
      "نعم، من مميزات جهاز OBD22 أنه يمكن تركيبه وفكه بسهولة من منفذ OBD-II بدون أعمال كهرباء إضافية.",
  },
  {
    question: "هل جهاز OBD22 يدعم التتبع المباشر؟",
    answer:
      "نعم، يدعم جهاز OBD22 متابعة موقع السيارة وحركتها بشكل مباشر من خلال نظام التتبع المستخدم.",
  },
  {
    question: "هل جهاز OBD22 يدعم تنبيه نزع الجهاز؟",
    answer:
      "نعم، يمكن للجهاز اكتشاف نزع أو فصل الجهاز من منفذ OBD-II وإرسال تنبيه حسب تجهيز الجهاز وإعدادات نظام التتبع.",
  },
  {
    question: "هل جهاز OBD22 يحتوي على ميكروفون؟",
    answer:
      "نعم، يحتوي جهاز OBD22 على ميكروفون داخلي يمكن استخدامه للاستماع إلى الأصوات المحيطة بالجهاز، حسب تجهيز الجهاز والنظام المستخدم.",
  },
  {
    question: "هل جهاز OBD22 يدعم Geo-Fence؟",
    answer:
      "نعم، يدعم الجهاز التنبيه عند دخول السيارة أو خروجها من منطقة جغرافية محددة حسب إعدادات نظام التتبع.",
  },
  {
    question: "هل جهاز OBD22 يدعم فصل محرك السيارة؟",
    answer:
      "لا، جهاز OBD22 مخصص للتتبع والمراقبة والتنبيهات، ولا يدعم فصل محرك السيارة.",
  },
  {
    question: "هل جهاز OBD22 يعمل على شبكة 4G؟",
    answer:
      "لا، النسخة المذكورة من جهاز OBD22 تعمل على شبكة 2G، لذلك يفضل التأكد من توافر تغطية 2G في مكان استخدام السيارة.",
  },
  {
    question: "هل كل السيارات مناسبة لجهاز OBD22؟",
    answer:
      "يعتمد الجهاز على وجود منفذ OBD-II متوافق في السيارة، لذلك يجب التأكد من وجود المنفذ وتوافق الجهاز معه قبل الشراء.",
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
        "جهاز OBD22 لتتبع السيارات بنظام Plug & Play، يركب مباشرة في منفذ OBD-II بدون قطع أو تعديل أسلاك، مع تتبع مباشر وتنبيهات الحركة والسرعة وGeo-Fence وتنبيه نزع الجهاز.",
      brand: {
        "@type": "Brand",
        name: "GPS World Egypt",
      },
      category: "أجهزة GPS لتتبع السيارات والمركبات",
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
        {/* ================= HEADER ================= */}

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

        {/* ================= BACK ================= */}

        <div className="mx-auto max-w-7xl px-5 pt-6">
          <a
            href="/#products"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-800"
          >
            ← العودة إلى الأجهزة
          </a>
        </div>

        {/* ================= PRODUCT HERO ================= */}

        <section className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative">
              <DeviceGallery
                images={[
                  "/images/OBD22.jpeg",
                  "/images/OBD22-2.jpeg",
                  "/images/OBD22-3.jpeg",
                  "/images/OBD22-4.jpeg",
                  "/images/OBD22-5.jpeg",
                  "/images/OBD22-6.jpeg",
                ]}
                deviceName="OBD22"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز OBD22 لتتبع السيارات في مصر
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                جهاز تتبع GPS بنظام Plug &amp; Play
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز OBD22 هو جهاز تتبع GPS صغير الحجم يتم تركيبه مباشرة في
                منفذ OBD-II الموجود في السيارة، بدون الحاجة إلى قطع أو تعديل
                أسلاك السيارة.
              </p>

              <p className="mt-4 text-lg leading-9 text-gray-600">
                الجهاز يعمل على شبكة 2G، ويجمع بين سهولة التركيب والتتبع
                المباشر وتنبيهات الحركة والسرعة والسياج الجغرافي، بالإضافة إلى
                تنبيه نزع الجهاز ووجود ميكروفون داخلي حسب تجهيز الجهاز والنظام
                المستخدم.
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

        {/* ================= QUICK FEATURES ================= */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🔌</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                تركيب Plug &amp; Play
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                يتم تركيب الجهاز مباشرة في منفذ OBD-II بدون قطع أو تعديل
                الأسلاك.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">📍</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                تتبع مباشر
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                متابعة موقع السيارة وحركتها وسرعتها من خلال نظام التتبع.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🚨</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                تنبيه نزع الجهاز
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                إمكانية التنبيه عند فصل أو نزع الجهاز من منفذ OBD-II.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🎙️</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                ميكروفون داخلي
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                ميكروفون داخلي للاستماع حسب تجهيز الجهاز والنظام المستخدم.
              </p>
            </div>
          </div>
        </section>

        {/* ================= MAIN FEATURES ================= */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                مميزات الجهاز
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مميزات جهاز OBD22 بالتفصيل
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-600">
                جهاز صغير وسهل التركيب، مناسب لمن يريد تتبع السيارة بدون قطع
                أو تعديل أسلاك الكهرباء.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* 1 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    1
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      تركيب سريع بدون أسلاك 🔌
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يتم تركيب الجهاز مباشرة في منفذ OBD-II الموجود في
                      السيارة، بدون الحاجة إلى قطع أو توصيل أسلاك في ضفيرة
                      الكهرباء.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      ويمكن تركيبه وفكه بسهولة عند الحاجة، مما يجعله مناسبًا
                      لمن لا يرغب في إجراء أي تعديل على توصيلات السيارة.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    2
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      حجم صغير وسهولة الاستخدام 📏
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يتميز الجهاز بحجم صغير يساعد على تركيبه أسفل التابلوه
                      بدون أن يشغل مساحة كبيرة.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      المقاس حوالي <strong>45 × 22.5 × 30 مم</strong> والوزن
                      حوالي <strong>30 جرامًا</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    3
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      التتبع والمراقبة المباشرة 📍
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      متابعة موقع السيارة على الخريطة ومعرفة مكانها وتحركاتها
                      بشكل مباشر من خلال نظام التتبع المستخدم.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      كما يمكن متابعة السرعة وخط السير والرحلات السابقة حسب
                      النظام المستخدم.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    4
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      تنبيه نزع الجهاز 🚨
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يمكن للجهاز اكتشاف فصله أو نزعه من منفذ OBD-II وإرسال
                      تنبيه حسب تجهيز الجهاز وإعدادات نظام التتبع.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      تساعد هذه الخاصية على اكتشاف محاولة تعطيل جهاز التتبع
                      أو العبث به.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    5
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      متابعة تشغيل السيارة ACC 🚗
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يدعم الجهاز متابعة حالة تشغيل وإيقاف السيارة ACC، مع
                      إمكانية استقبال التنبيه حسب إعدادات النظام المستخدم.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    6
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      مستشعر الحركة والاهتزاز 🚨
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يحتوي الجهاز على مستشعر للحركة والاهتزاز يساعد على
                      اكتشاف الحركة غير الطبيعية للمركبة.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      ويمكن الاستفادة منه في بعض حالات السحب أو الرفع حسب
                      إعدادات الجهاز وطريقة اكتشاف الحركة.
                    </p>
                  </div>
                </div>
              </div>

              {/* 7 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    7
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      الاستماع داخل السيارة 🎙️
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يحتوي جهاز OBD22 على ميكروفون داخلي يمكن استخدامه
                      للاستماع إلى الأصوات المحيطة بالجهاز.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      تعمل هذه الخاصية حسب تجهيز الجهاز والنظام المستخدم
                      وتغطية شبكة المحمول.
                    </p>
                  </div>
                </div>
              </div>

              {/* 8 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    8
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      جهد التشغيل ⚙️
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يعمل الجهاز من خلال كهرباء منفذ OBD-II، مع نطاق جهد
                      تشغيل مذكور من <strong>9 إلى 36 فولت DC</strong>.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      لذلك يجب التأكد من توافق منفذ السيارة مع الجهاز قبل
                      التركيب.
                    </p>
                  </div>
                </div>
              </div>

              {/* 9 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    9
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      السرعة والسياج الجغرافي 🗺️
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يدعم الجهاز تنبيه تجاوز السرعة، بالإضافة إلى Geo-Fence
                      للتنبيه عند دخول السيارة أو خروجها من منطقة جغرافية
                      محددة.
                    </p>
                  </div>
                </div>
              </div>

              {/* 10 */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                    10
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-blue-950">
                      يعمل على شبكة 2G 📡
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يعمل جهاز OBD22 على شبكة <strong>2G</strong>، لذلك يفضل
                      التأكد من توافر تغطية 2G في مكان استخدام السيارة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECHNICAL SPECS ================= */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                المواصفات الأساسية
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مواصفات جهاز OBD22
              </h2>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  الموديل
                </span>

                <span className="text-gray-600">
                  OBD22
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  نوع الجهاز
                </span>

                <span className="text-gray-600">
                  OBD GPS Tracker
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  طريقة التركيب
                </span>

                <span className="text-gray-600">
                  Plug &amp; Play عبر منفذ OBD-II
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  الشبكة
                </span>

                <span className="text-gray-600">
                  2G
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  جهد التشغيل
                </span>

                <span className="text-gray-600">
                  9–36V DC
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  الأبعاد
                </span>

                <span className="text-gray-600">
                  45 × 22.5 × 30 مم
                </span>
              </div>

              <div className="grid grid-cols-2 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  الوزن
                </span>

                <span className="text-gray-600">
                  حوالي 30 جرام
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= IMPORTANT NOTE ================= */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8 text-center shadow-sm">
            <div className="text-4xl">⚠️</div>

            <h2 className="mt-3 text-2xl font-extrabold text-blue-950">
              نقطة مهمة قبل الشراء
            </h2>

            <p className="mt-4 text-lg font-bold leading-9 text-gray-700">
              جهاز OBD22 يعتمد على وجود منفذ OBD-II متوافق في السيارة.
            </p>

            <p className="mt-3 leading-8 text-gray-600">
              لذلك يجب التأكد من وجود المنفذ وتوافقه مع الجهاز قبل الشراء.
              كما أن الجهاز يعمل على شبكة 2G، لذلك يفضل التأكد من توافر
              تغطية 2G في مكان استخدام السيارة.
            </p>
          </div>
        </section>

        {/* ================= WHY OBD22 ================= */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <span className="font-bold text-blue-700">
              لماذا OBD22؟
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              الحل المناسب لمن يريد تركيبًا سريعًا بدون تعديل الأسلاك
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              إذا كنت تريد جهاز تتبع GPS للسيارة بدون قطع أو تعديل في ضفيرة
              الكهرباء، فإن OBD22 يوفر تركيبًا مباشرًا من منفذ OBD-II مع
              مجموعة من وظائف التتبع والتنبيهات.
            </p>

            <div className="mt-10 grid gap-5 text-right sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🔌 بدون قطع أسلاك
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  يتم توصيل الجهاز مباشرة في منفذ OBD-II.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  📍 متابعة السيارة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة الموقع والحركة والسرعة من خلال نظام التتبع.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🚨 تنبيهات متعددة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  حركة واهتزاز وسرعة وGeo-Fence وتنبيه نزع الجهاز.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🎙️ ميكروفون داخلي
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  إمكانية الاستماع حسب تجهيز الجهاز والنظام المستخدم.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SUITABLE FOR ================= */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="text-center">
            <span className="font-bold text-blue-700">
              مناسب لمين؟
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              جهاز OBD22 مناسب لمن يبحث عن
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">🔌</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                تركيب سهل
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                جهاز يمكن تركيبه مباشرة بدون قطع أو تعديل الأسلاك.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">🚘</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                السيارات الخاصة
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                مناسب لمتابعة السيارة ومعرفة موقعها وحركتها.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">🛡️</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                المراقبة والحماية
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                تنبيهات تساعد على معرفة الحركة ونزع الجهاز والسرعة.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">⚡</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                تركيب وفك سريع
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                مناسب لمن يريد جهازًا يمكن تركيبه وفكه بسهولة.
              </p>
            </div>
          </div>
        </section>

        {/* ================= COMPARISON CTA ================= */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <span className="font-bold text-blue-200">
              محتار بين جهازين؟
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              قارن بين أجهزة GPS واختار الأنسب لسيارتك
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              سنوفر لك مقارنة واضحة بين الأجهزة لمعرفة الفرق في طريقة
              التركيب والمميزات والاستخدام المناسب لكل جهاز.
            </p>

            <a
              href="/devices/compare"
              className="mt-8 inline-flex rounded-xl bg-yellow-400 px-8 py-4 text-lg font-extrabold text-blue-950 transition hover:bg-yellow-300"
            >
              🔍 مقارنة بين الأجهزة
            </a>
          </div>
        </section>

        {/* ================= WARRANTY ================= */}

        <section className="mx-auto max-w-4xl px-5 pb-16">
          <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
            <div className="text-4xl">🛡️</div>

            <h2 className="mt-3 text-2xl font-extrabold text-blue-950">
              الضمان
            </h2>

            <p className="mt-3 text-xl font-bold text-green-700">
              سنة ضد عيوب الصناعة.
            </p>
          </div>
        </section>

        {/* ================= FAQ ================= */}

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

        {/* ================= CONTACT ================= */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              هل تريد معرفة المزيد عن جهاز OBD22؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة التفاصيل والتوفر وطلب جهاز التتبع المناسب
              لسيارتك.
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

        {/* ================= FOOTER ================= */}

        <footer className="bg-blue-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-10 text-center">
            <h3 className="text-2xl font-extrabold">
              GPS World Egypt
            </h3>

            <p className="mt-3 text-blue-200">
              أجهزة GPS للتتبع والمراقبة في مصر
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

        {/* ================= FLOATING WHATSAPP ================= */}

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