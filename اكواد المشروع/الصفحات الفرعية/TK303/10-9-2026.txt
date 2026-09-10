import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TK303 | جهاز تتبع سيارات GPS في مصر",

  description:
    "جهاز TK303 لتتبع السيارات والمركبات في مصر، مع متابعة الموقع والحركة من خلال أنظمة وسيرفرات GPS المتوافقة.",

  keywords: [
    "TK303",
    "جهاز TK303",
    "TK303 GPS",
    "TK303 GPS Tracker",
    "جهاز تتبع TK303",
    "جهاز GPS TK303",
    "جهاز GPS",
    "جهاز تتبع سيارات",
    "أجهزة تتبع GPS",
    "جهاز GPS للسيارات",
    "جهاز تتبع للسيارة",
    "GPS Tracker",
    "GPS Tracker مصر",
    "أجهزة GPS مصر",
    "أجهزة تتبع السيارات",
    "تتبع السيارات",
    "تتبع المركبات",
    "جهاز تتبع سيارات مصر",
  ],

  alternates: {
    canonical: "https://gpsworld-eg.com/devices/tk303",
  },

  openGraph: {
    title: "TK303 | جهاز تتبع سيارات GPS في مصر",

    description:
      "جهاز TK303 لتتبع السيارات والمركبات ومتابعة الموقع والحركة من خلال أنظمة وسيرفرات GPS المتوافقة.",

    url: "https://gpsworld-eg.com/devices/tk303",

    siteName: "GPS World Egypt",

    locale: "ar_EG",

    type: "website",

    images: [
      {
        url: "/images/TK303.jpeg",
        width: 1200,
        height: 630,
        alt: "TK303 جهاز تتبع سيارات GPS في مصر",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "TK303 | جهاز تتبع سيارات GPS في مصر",

    description:
      "جهاز TK303 لتتبع السيارات والمركبات ومتابعة الموقع والحركة عبر أنظمة GPS المتوافقة.",

    images: ["/images/TK303.jpeg"],
  },
};

const product = {
  name: "TK303",
  image: "/images/TK303.jpeg",
  url: "https://gpsworld-eg.com/devices/tk303",
};

const faqs = [
  {
    question: "ما هو جهاز TK303؟",
    answer:
      "جهاز TK303 هو جهاز تتبع GPS يستخدم لمتابعة موقع السيارات والمركبات وحركة المركبة من خلال أنظمة وسيرفرات GPS المتوافقة.",
  },
  {
    question: "هل جهاز TK303 مناسب للسيارات؟",
    answer:
      "نعم، الجهاز مخصص لمتابعة السيارات والمركبات ويمكن استخدامه ضمن نظام تتبع GPS متوافق.",
  },
  {
    question: "كيف أعرف سعر وتوفر جهاز TK303؟",
    answer:
      "يمكنك التواصل معنا عبر واتساب لمعرفة السعر والتوفر والتفاصيل الخاصة بالجهاز قبل الطلب.",
  },
  {
    question: "هل يوجد دعم فني للجهاز؟",
    answer:
      "يتوفر الدعم والمتابعة من GPS World Egypt حسب نظام التشغيل والسيرفر المتوافق مع الجهاز.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: ["https://gpsworld-eg.com/images/TK303.jpeg"],
      url: product.url,
      description:
        "جهاز TK303 لتتبع السيارات والمركبات ومتابعة الموقع والحركة عبر أنظمة GPS المتوافقة.",
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
          name: "TK303",
          item: "https://gpsworld-eg.com/devices/tk303",
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
  "مرحبًا، أريد الاستفسار عن جهاز GPS موديل TK303"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز GPS موديل TK303"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

export default function TK303Page() {
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
                className="shrink-0 rounded-xl bg-blue-900 px-4 py-3 font-bold transition hover:bg-blue-800"
              >
                📡 الأجهزة
              </a>
            </div>
          </div>
        </header>

        {/* BACK BUTTON */}

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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* PRODUCT IMAGE */}

            <div className="flex min-h-[420px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
              <Image
                src={product.image}
                alt="TK303 جهاز تتبع سيارات GPS في مصر"
                width={650}
                height={500}
                priority
                className="max-h-[480px] w-full object-contain"
              />
            </div>

            {/* PRODUCT INFORMATION */}

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز TK303 لتتبع السيارات والمركبات في مصر
              </h1>

              <p className="mt-4 text-xl font-bold text-blue-700">
                جهاز تتبع GPS عملي
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز TK303 لمتابعة المركبات ومراقبة الموقع والحركة،
                ويقدم حلًا عمليًا للتتبع والمراقبة من خلال أنظمة
                وسيرفرات GPS المتوافقة.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
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

        <section className="mx-auto max-w-7xl px-5 pb-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">📍</div>

              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                متابعة الموقع
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                متابعة موقع المركبة من خلال نظام GPS المتوافق.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🚗</div>

              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                للسيارات والمركبات
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                مناسب لمتابعة السيارات والمركبات المختلفة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🗺️</div>

              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                متابعة على الخريطة
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                عرض موقع المركبة وبيانات الحركة من خلال السيرفر.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🛠️</div>

              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                دعم فني
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                دعم ومتابعة من GPS World Egypt.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES + SPECS */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* FEATURES */}

            <div className="rounded-3xl bg-white p-7 shadow-md md:p-8">
              <h2 className="mb-7 text-2xl font-extrabold text-blue-950">
                ⭐ أهم مميزات جهاز TK303
              </h2>

              <ul className="space-y-5 text-lg leading-8 text-gray-700">
                <li className="flex gap-3">
                  <span>📍</span>
                  <span>متابعة موقع المركبة بشكل لحظي.</span>
                </li>

                <li className="flex gap-3">
                  <span>🚗</span>
                  <span>مناسب لمتابعة السيارات والمركبات المختلفة.</span>
                </li>

                <li className="flex gap-3">
                  <span>📡</span>
                  <span>يعمل مع أنظمة وسيرفرات GPS المتوافقة.</span>
                </li>

                <li className="flex gap-3">
                  <span>🚨</span>
                  <span>دعم وظائف التنبيهات والمتابعة.</span>
                </li>

                <li className="flex gap-3">
                  <span>🛣️</span>
                  <span>متابعة حركة المركبة أثناء التشغيل.</span>
                </li>

                <li className="flex gap-3">
                  <span>🗺️</span>
                  <span>عرض موقع المركبة على الخريطة من خلال السيرفر.</span>
                </li>

                <li className="flex gap-3">
                  <span>📊</span>
                  <span>متابعة بيانات المركبة وسجل الحركة.</span>
                </li>

                <li className="flex gap-3">
                  <span>🛠️</span>
                  <span>مناسب للاستخدام الشخصي والتجاري.</span>
                </li>

                <li className="flex gap-3">
                  <span>🤝</span>
                  <span>دعم فني ومتابعة من GPS World Egypt.</span>
                </li>
              </ul>
            </div>

            {/* SPECIFICATIONS */}

            <div className="rounded-3xl bg-white p-7 shadow-md md:p-8">
              <h2 className="mb-7 text-2xl font-extrabold text-blue-950">
                ⚙️ المواصفات الفنية لجهاز TK303
              </h2>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="grid grid-cols-[40%_60%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الموديل</span>

                  <span className="text-gray-600">TK303</span>
                </div>

                <div className="grid grid-cols-[40%_60%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    نوع الجهاز
                  </span>

                  <span className="text-gray-600">GPS Tracker</span>
                </div>

                <div className="grid grid-cols-[40%_60%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    تحديد الموقع
                  </span>

                  <span className="text-gray-600">GPS</span>
                </div>

                <div className="grid grid-cols-[40%_60%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">التتبع</span>

                  <span className="text-gray-600">تتبع لحظي</span>
                </div>

                <div className="grid grid-cols-[40%_60%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الاتصال</span>

                  <span className="text-gray-600">
                    حسب إصدار الجهاز والنظام
                  </span>
                </div>

                <div className="grid grid-cols-[40%_60%] p-4">
                  <span className="font-bold text-gray-800">الاستخدام</span>

                  <span className="text-gray-600">
                    تتبع ومراقبة المركبات
                  </span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-blue-50 p-5 text-sm leading-7 text-blue-900">
                <strong>ملاحظة:</strong> سيتم إضافة باقي المواصفات
                الفنية المؤكدة للجهاز بعد مراجعة بيانات النسخة الموجودة
                لدينا.
              </div>
            </div>
          </div>
        </section>

        {/* SUITABLE FOR */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">TK303</span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مناسب لمتابعة السيارات والمركبات
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                جهاز عملي لمتابعة المركبات ومراقبة الموقع والحركة
                من خلال أنظمة وسيرفرات GPS المتوافقة.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚘</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  السيارات
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  لمتابعة موقع السيارة وحركتها.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚐</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  المركبات
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  مناسب لمتابعة أنواع مختلفة من المركبات.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">📱</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  المتابعة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة بيانات المركبة من خلال النظام المتوافق.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY GPS WORLD */}

        <section className="px-5 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <span className="font-bold text-blue-700">
              GPS World Egypt
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              لماذا تختار جهاز TK303؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              جهاز TK303 يوفر حلًا عمليًا لمتابعة السيارات والمركبات
              ومراقبة الموقع والحركة، مع إمكانية استخدامه ضمن أنظمة
              وسيرفرات GPS المتوافقة، بالإضافة إلى الدعم الفني
              والمتابعة من GPS World Egypt.
            </p>
          </div>
        </section>

        {/* FAQ */}

        <section className="bg-gray-100 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                أسئلة شائعة
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أسئلة عن جهاز TK303
              </h2>
            </div>

            <div className="mt-10 space-y-5">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer text-lg font-extrabold text-blue-950">
                    {faq.question}
                  </summary>

                  <p className="mt-4 leading-8 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              هل تريد معرفة المزيد عن جهاز TK303؟
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
              className="mt-3 inline-block text-green-400 transition hover:text-green-300"
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