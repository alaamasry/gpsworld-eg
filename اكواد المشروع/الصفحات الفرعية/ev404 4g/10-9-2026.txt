import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EV404 | جهاز تتبع سيارات GPS في مصر",

  description:
    "جهاز EV404 لتتبع السيارات والمركبات في مصر، مع متابعة الموقع والحركة بشكل لحظي، ودعم إدارة الأساطيل والتنبيهات وأنظمة GPS المتوافقة.",

  keywords: [
    "EV404",
    "جهاز EV404",
    "EV404 GPS",
    "جهاز تتبع EV404",
    "جهاز GPS EV404",
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
    "إدارة الأساطيل",
    "جهاز تتبع سيارات مصر",
  ],

  alternates: {
    canonical: "https://gpsworld-eg.com/devices/ev404-4g",
  },

  openGraph: {
    title: "EV404 | جهاز تتبع سيارات GPS في مصر",

    description:
      "جهاز EV404 لتتبع السيارات والمركبات ومتابعة الموقع والحركة وإدارة الأساطيل من خلال أنظمة GPS المتوافقة.",

    url: "https://gpsworld-eg.com/devices/ev404-4g",

    siteName: "GPS World Egypt",

    locale: "ar_EG",

    type: "website",

    images: [
      {
        url: "/images/ev404.jpeg",
        width: 1200,
        height: 630,
        alt: "EV404 جهاز تتبع سيارات GPS في مصر",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "EV404 | جهاز تتبع سيارات GPS في مصر",

    description:
      "جهاز EV404 لتتبع السيارات والمركبات ومتابعة الموقع والحركة وإدارة الأساطيل.",

    images: ["/images/ev404.jpeg"],
  },
};

const product = {
  name: "EV404",
  image: "/images/ev404.jpeg",
  url: "https://gpsworld-eg.com/devices/ev404-4g",
};

const faqs = [
  {
    question: "ما هو جهاز EV404؟",
    answer:
      "جهاز EV404 هو جهاز تتبع GPS للمركبات، مصمم لمتابعة الموقع والحركة ودعم استخدامات الأفراد والشركات وإدارة الأساطيل.",
  },
  {
    question: "هل يناسب EV404 الشركات وإدارة الأساطيل؟",
    answer:
      "نعم، الجهاز مناسب لمتابعة المركبات التجارية والخدمية وإدارة الأساطيل ومراقبة الرحلات وحركة المركبات.",
  },
  {
    question: "ما جهد تشغيل جهاز EV404؟",
    answer:
      "يعمل الجهاز على نطاق جهد من 9V إلى 90V DC.",
  },
  {
    question: "هل يوجد ضمان للجهاز؟",
    answer:
      "يوجد ضمان لمدة سنة ضد عيوب التصنيع، ولا يشمل الضمان الحرق أو الكسر.",
  },
  {
    question: "كيف أعرف تفاصيل الجهاز والتوفر؟",
    answer:
      "يمكنك التواصل معنا عبر واتساب لمعرفة التفاصيل والتوفر وطلب الجهاز.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: ["https://gpsworld-eg.com/images/ev404.jpeg"],
      url: product.url,
      description:
        "جهاز EV404 لتتبع السيارات والمركبات في مصر، مع متابعة الموقع والحركة بشكل لحظي، ودعم إدارة الأساطيل والتنبيهات.",
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
          name: "EV404",
          item: "https://gpsworld-eg.com/devices/ev404-4g",
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

export default function EV404Page() {
  const whatsappInquiry = encodeURIComponent(
    "مرحبًا، أريد الاستفسار عن جهاز GPS موديل EV404"
  );

  const whatsappOrder = encodeURIComponent(
    "مرحبًا، أريد طلب جهاز GPS موديل EV404"
  );

  const whatsappInquiryUrl =
    "https://wa.me/201006687163?text=" + whatsappInquiry;

  const whatsappOrderUrl =
    "https://wa.me/201006687163?text=" + whatsappOrder;

  const whatsappBaseUrl = "https://wa.me/201006687163";

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
                className="shrink-0 rounded-xl bg-blue-900 px-4 py-3 font-bold transition hover:bg-blue-800"
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* IMAGE */}

            <div className="flex min-h-[420px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
              <Image
                src={product.image}
                alt="EV404 جهاز تتبع سيارات GPS في مصر"
                width={650}
                height={500}
                priority
                className="max-h-[480px] w-full object-contain"
              />
            </div>

            {/* INFORMATION */}

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز EV404 لتتبع السيارات والمركبات في مصر
              </h1>

              <p className="mt-4 text-xl font-bold text-blue-700">
                جهاز تتبع GPS احترافي
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز EV404 لمتابعة المركبات ومراقبة الموقع والحركة، ومناسب
                للأفراد والشركات التي تحتاج إلى متابعة المركبات وإدارة الأساطيل
                وتحسين مستوى الأمان والتشغيل.
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

        {/* ================= QUICK FEATURES ================= */}

        <section className="mx-auto max-w-7xl px-5 pb-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">📍</div>

              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                تتبع لحظي
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                متابعة موقع المركبة وحركتها بشكل مباشر.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🚨</div>

              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                حماية وأمان
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                تنبيهات عند بعض الحالات التي تؤثر على أمان المركبة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🏢</div>

              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                إدارة الأساطيل
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                مناسب للشركات وإدارة المركبات والخدمات الميدانية.
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

        {/* ================= FEATURES + SPECS ================= */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* FEATURES */}

            <div className="rounded-3xl bg-white p-7 shadow-md md:p-8">
              <h2 className="mb-7 text-2xl font-extrabold text-blue-950">
                ⭐ أهم مميزات جهاز EV404
              </h2>

              <ul className="space-y-5 text-lg leading-8 text-gray-700">
                <li className="flex gap-3">
                  <span>📍</span>
                  <span>
                    تتبع مباشر ومتابعة موقع المركبة لحظة بلحظة.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>🛰️</span>
                  <span>
                    تحديد المواقع ومتابعة حركة المركبة من خلال نظام التتبع.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>🗺️</span>
                  <span>
                    إمكانية متابعة المسارات وسجل الرحلات والحركة السابقة حسب
                    النظام المستخدم.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>🚨</span>
                  <span>
                    إنذار عند فصل مصدر الطاقة الخارجي أو حدوث حالات غير
                    طبيعية.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>⚡</span>
                  <span>
                    إمكانية التحكم في فصل الوقود أو الكهرباء عن بُعد حسب طريقة
                    التركيب والنظام المتوافق.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>🎙️</span>
                  <span>
                    دعم المراقبة الصوتية حسب تجهيز الجهاز والنظام المتوافق.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>📍</span>
                  <span>
                    دعم السياج الجغرافي لتنبيه المستخدم عند دخول أو خروج
                    المركبة من منطقة محددة.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>🔋</span>
                  <span>
                    تنبيه عند انخفاض البطارية أو وجود مشكلة في مصدر الطاقة.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>🛡️</span>
                  <span>
                    إنذار عند إزالة أو العبث بالجهاز حسب إعدادات النظام.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>📡</span>
                  <span>
                    هوائيات GPS وGSM عالية الحساسية لتحسين استقبال الإشارة.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>🏢</span>
                  <span>
                    مناسب للشركات والمؤسسات وإدارة أساطيل المركبات.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span>🤝</span>
                  <span>
                    دعم فني ومتابعة من GPS World Egypt.
                  </span>
                </li>
              </ul>
            </div>

            {/* SPECIFICATIONS */}

            <div className="rounded-3xl bg-white p-7 shadow-md md:p-8">
              <h2 className="mb-7 text-2xl font-extrabold text-blue-950">
                ⚙️ المواصفات الفنية لجهاز EV404
              </h2>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الموديل</span>
                  <span className="text-gray-600">EV404</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">نوع الجهاز</span>
                  <span className="text-gray-600">GPS Tracker</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    تقنية الاتصال
                  </span>
                  <span className="text-gray-600">4G LTE</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    دعم الشبكات
                  </span>
                  <span className="text-gray-600">4G + 2G</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    جهد التشغيل
                  </span>
                  <span className="font-bold text-blue-700">
                    9V – 90V DC
                  </span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">التيار</span>
                  <span className="text-gray-600">300mA</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الأبعاد</span>
                  <span className="text-gray-600">79 × 33 × 16 مم</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">الوزن</span>
                  <span className="text-gray-600">40 جرام</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الاتصال</span>
                  <span className="text-gray-600">
                    GPRS Class 3 / TCP/IP
                  </span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    حساسية GPS
                  </span>
                  <span className="text-gray-600">-160 dB</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الرطوبة</span>
                  <span className="text-gray-600">5% – 95%</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    بلد التصنيع
                  </span>
                  <span className="text-gray-600">تايوان</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    تشغيل السيرفر
                  </span>
                  <span className="text-gray-600">سنة واحدة</span>
                </div>

                <div className="grid grid-cols-[42%_58%] p-4">
                  <span className="font-bold text-gray-800">الضمان</span>
                  <span className="text-gray-600">
                    سنة ضد عيوب التصنيع
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FLEET MANAGEMENT ================= */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">EV404</span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مناسب لإدارة ومتابعة الأساطيل
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                يوفر EV404 مجموعة من الوظائف التي تساعد الشركات والمؤسسات على
                متابعة المركبات وتحسين كفاءة التشغيل ومراقبة حركة السيارات.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚚</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  شركات النقل
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة الشاحنات والرحلات وتحسين كفاءة التشغيل.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🏢</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  الشركات والمؤسسات
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  إدارة أساطيل الشركات والمركبات الخدمية.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚕</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  المركبات التجارية
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  مناسب لسيارات الأجرة والحافلات والفانات والتأجير.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🛡️</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  الحماية
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  المساعدة في متابعة المركبات وتقليل مخاطر السرقة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SMART FUNCTIONS ================= */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="text-center">
            <span className="font-bold text-blue-700">وظائف ذكية</span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              متابعة وتحليل حركة المركبة
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              يساعد EV404 في متابعة بيانات الحركة والرحلات والتنبيهات، مما
              يدعم مراقبة المركبات وتحسين إدارة الأسطول.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                📊 متابعة القيادة
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                متابعة بعض أنماط حركة المركبة والرحلات حسب الوظائف المتاحة
                بالنظام.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                🗺️ سجل الرحلات
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                عرض تاريخ الحركة واسترجاع المسارات السابقة ومراجعة نقاط
                التوقف والانطلاق حسب النظام.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                🚨 التنبيهات الذكية
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                دعم التنبيهات عند فصل الطاقة أو العبث بالجهاز أو الخروج من
                النطاق الجغرافي المحدد.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                🎙️ مراقبة صوتية
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                إمكانية المراقبة الصوتية حسب تجهيز الجهاز والنظام المستخدم.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                ⚡ تحكم عن بُعد
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                إمكانية التحكم في بعض وظائف المركبة عن بُعد حسب طريقة
                التركيب والنظام المتوافق.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                🔐 حماية المركبة
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                يساعد التتبع المستمر والتنبيهات في متابعة المركبة وتقليل
                مخاطر الاستخدام غير المصرح به.
              </p>
            </div>
          </div>
        </section>

        {/* ================= APPLICATIONS ================= */}

        <section className="bg-gray-100 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                الاستخدامات المثالية
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أين يمكن استخدام EV404؟
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-blue-950">
                  🚛 النقل والخدمات اللوجستية
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  متابعة الشاحنات والنقل والتوزيع والرحلات.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-blue-950">
                  🚗 شركات التأجير
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  مراقبة المركبات وتقليل مخاطر الاستخدام غير المصرح به.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-blue-950">
                  🏢 الشركات والمؤسسات
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  إدارة أساطيل الشركات وسيارات المبيعات والخدمة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-blue-950">
                  🚌 الحافلات والفانات
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  متابعة المركبات التجارية والخدمية.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-blue-950">
                  🚕 سيارات الأجرة
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  متابعة الحركة والرحلات وسجل المسارات.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-blue-950">
                  🏛️ المؤسسات الكبرى
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  إدارة ومراقبة الأساطيل من خلال منصة موحدة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATES ================= */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-white p-8 text-center shadow-md">
            <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
              🏆 الاعتمادات والشهادات
            </h2>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <span className="rounded-xl bg-blue-50 px-6 py-3 font-bold text-blue-900">
                CE
              </span>

              <span className="rounded-xl bg-blue-50 px-6 py-3 font-bold text-blue-900">
                FCC
              </span>

              <span className="rounded-xl bg-blue-50 px-6 py-3 font-bold text-blue-900">
                RoHS
              </span>

              <span className="rounded-xl bg-blue-50 px-6 py-3 font-bold text-blue-900">
                ANATEL
              </span>
            </div>
          </div>
        </section>

        {/* ================= WARRANTY ================= */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-blue-50 p-8">
            <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
              🛡️ الضمان والتشغيل
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6">
                <h3 className="font-extrabold text-blue-950">
                  تشغيل السيرفر
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  مدة تشغيل السيرفر سنة، ويتم التجديد حسب نوع السيرفر.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="font-extrabold text-blue-950">الضمان</h3>

                <p className="mt-3 leading-8 text-gray-600">
                  ضمان سنة ضد عيوب التصنيع، ولا يشمل الضمان الحرق أو الكسر.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section className="bg-gray-100 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">أسئلة شائعة</span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أسئلة عن جهاز EV404
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

        {/* ================= CONTACT ================= */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              هل تريد معرفة المزيد عن جهاز EV404؟
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

        {/* ================= FOOTER ================= */}

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