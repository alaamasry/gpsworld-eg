import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "OBD VL505 4G | جهاز تتبع سيارات GPS OBD في مصر",

  description:
    "جهاز OBD VL505 4G لتتبع السيارات بنظام Plug & Play، يعمل بشبكة 4G LTE Cat.1، مع إمكانية دعم 2G حسب الإصدار، وتتبع مباشر وتنبيه نزع الجهاز ومراقبة سلوك القيادة.",

  keywords: [
    "OBD VL505",
    "OBD VL505 4G",
    "OBD VL505 GPS",
    "جهاز OBD VL505",
    "جهاز OBD VL505 4G",
    "جهاز تتبع OBD VL505",
    "جهاز GPS OBD VL505",
    "OBD GPS Tracker",
    "OBD GPS Tracker مصر",
    "جهاز تتبع OBD",
    "جهاز GPS OBD",
    "جهاز تتبع سيارات",
    "جهاز تتبع سيارات GPS",
    "جهاز GPS للسيارات",
    "جهاز تتبع للسيارة",
    "أجهزة تتبع GPS",
    "GPS Tracker",
    "GPS Tracker مصر",
    "GPS مصر",
    "أجهزة GPS مصر",
    "أجهزة GPS",
    "تتبع السيارات",
    "تتبع المركبات",
    "جهاز تتبع سيارات مصر",
  ],

  alternates: {
    canonical: "https://gpsworld-eg.com/devices/obdvl505",
  },

  openGraph: {
    title: "OBD VL505 4G | جهاز تتبع سيارات GPS OBD في مصر",
    description:
      "جهاز OBD VL505 4G بتركيب Plug & Play من منفذ OBD-II، مع 4G LTE Cat.1، تتبع مباشر، تنبيه نزع الجهاز ومراقبة سلوك القيادة.",
    url: "https://gpsworld-eg.com/devices/obdvl505",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/OBDVL505.jpeg",
        width: 1200,
        height: 630,
        alt: "OBD VL505 4G جهاز تتبع سيارات GPS بمنفذ OBD",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OBD VL505 4G | جهاز تتبع سيارات GPS في مصر",
    description:
      "جهاز OBD VL505 4G بتركيب مباشر عبر منفذ OBD-II، مع 4G LTE Cat.1 وتتبع مباشر وتنبيه نزع الجهاز ومراقبة سلوك القيادة.",
    images: ["/images/OBDVL505.jpeg"],
  },
};

const product = {
  name: "OBD VL505 4G",
  image: "/images/OBDVL505.jpeg",
  url: "https://gpsworld-eg.com/devices/obdvl505",
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز OBD VL505 4G"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز OBD VL505 4G"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

const faqs = [
  {
    question: "ما هو جهاز OBD VL505 4G؟",
    answer:
      "جهاز OBD VL505 4G هو جهاز تتبع GPS صغير الحجم يعمل بنظام Plug & Play، ويتم تركيبه مباشرة في منفذ OBD-II الموجود في السيارة بدون قطع أو تعديل أسلاك السيارة.",
  },
  {
    question: "هل يحتاج OBD VL505 4G إلى قطع أسلاك؟",
    answer:
      "لا، يتم تركيب الجهاز مباشرة في منفذ OBD-II بدون الحاجة إلى قطع أو توصيل أسلاك السيارة.",
  },
  {
    question: "هل يدعم OBD VL505 4G شبكة 4G؟",
    answer:
      "نعم، يعمل الجهاز على شبكة 4G LTE Cat.1، مع إمكانية دعم شبكة 2G في بعض الإصدارات والشبكات عند ضعف أو عدم توافر تغطية 4G.",
  },
  {
    question: "هل يدعم OBD VL505 4G التتبع المباشر؟",
    answer:
      "نعم، يدعم الجهاز متابعة موقع السيارة وحركتها بشكل مباشر من خلال نظام التتبع المستخدم.",
  },
  {
    question: "هل يدعم OBD VL505 4G تنبيه نزع الجهاز؟",
    answer:
      "نعم، يمكن للجهاز إرسال تنبيه عند نزع الجهاز من منفذ OBD-II حسب تجهيز الجهاز وإعدادات النظام المستخدم.",
  },
  {
    question: "هل يدعم OBD VL505 4G مراقبة سلوك السائق؟",
    answer:
      "نعم، يحتوي الجهاز على مستشعر تسارع يمكن الاستفادة منه في اكتشاف التسارع المفاجئ والفرملة المفاجئة وبعض حالات الانعطاف الحاد.",
  },
  {
    question: "هل يدعم OBD VL505 4G متابعة ACC؟",
    answer:
      "نعم، يدعم الجهاز متابعة حالة ACC لمعرفة فترات تشغيل السيارة وتوقفها حسب النظام المستخدم.",
  },
  {
    question: "هل يحتوي OBD VL505 4G على ميكروفون؟",
    answer:
      "يدعم الجهاز الاستماع الصوتي من خلال الميكروفون حسب تجهيز الجهاز والنظام المستخدم.",
  },
  {
    question: "ما جهد تشغيل OBD VL505 4G؟",
    answer:
      "يعمل جهاز OBD VL505 4G على نطاق جهد من 9 إلى 36 فولت DC.",
  },
  {
    question: "هل يدعم OBD VL505 4G فصل محرك السيارة؟",
    answer:
      "لا، الجهاز مخصص للتتبع والمراقبة والتنبيهات ولا يدعم فصل محرك السيارة.",
  },
  {
    question: "هل يمكن نقل الجهاز إلى سيارة أخرى؟",
    answer:
      "نعم، من مميزات نظام Plug & Play إمكانية فك الجهاز وتركيبه في سيارة أخرى بشرط وجود منفذ OBD-II متوافق.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: ["https://gpsworld-eg.com/images/OBDVL505.jpeg"],
      url: product.url,
      description:
        "جهاز OBD VL505 4G لتتبع السيارات بنظام Plug & Play، يعمل بشبكة 4G LTE Cat.1 مع إمكانية دعم 2G حسب الإصدار، وتتبع مباشر وتنبيه نزع الجهاز ومراقبة سلوك القيادة.",
      brand: {
        "@type": "Brand",
        name: "GPS World Egypt",
      },
      category: "GPS Vehicle Tracker",
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
          name: "OBD VL505 4G",
          item: "https://gpsworld-eg.com/devices/obdvl505",
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

export default function OBDVL505Page() {
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

        {/* HERO */}

        <section className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative">
              <DeviceGallery
                images={[
                  "/images/OBDVL505.jpeg",
                  "/images/OBDVL505-2.jpeg",
                  "/images/OBDVL505-3.jpeg",
                  "/images/OBDVL505-4.jpeg",
                  "/images/OBDVL505-5.jpeg",
                  "/images/OBDVL505-6.jpeg",
                ]}
                deviceName="OBD VL505 4G"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز OBD VL505 4G لتتبع السيارات والمركبات
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                جهاز GPS صغير بنظام Plug &amp; Play وشبكة 4G LTE Cat.1
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز OBD VL505 4G هو جهاز تتبع GPS صغير الحجم يتم تركيبه
                مباشرة في منفذ OBD-II الموجود في السيارة، بدون الحاجة إلى
                قطع أو تعديل أسلاك السيارة.
              </p>

              <p className="mt-4 text-lg leading-9 text-gray-600">
                يعمل الجهاز على شبكة 4G LTE Cat.1، مع إمكانية دعم 2G في
                بعض الإصدارات والشبكات، ويوفر تتبعًا مباشرًا ومتابعة
                للسرعة وخط السير وتنبيهات نزع الجهاز والحركة، بالإضافة
                إلى إمكانية مراقبة بعض سلوكيات القيادة.
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
                Plug &amp; Play
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                تركيب مباشر في منفذ OBD-II بدون قطع أو تعديل أسلاك السيارة.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">📡</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                4G LTE Cat.1
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                اتصال 4G سريع لنقل بيانات التتبع، مع دعم 2G في بعض
                الإصدارات والشبكات.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🚨</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                تنبيه نزع الجهاز
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                إمكانية التنبيه عند فصل الجهاز من منفذ OBD-II.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🚦</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                مراقبة القيادة
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                متابعة التسارع والفرملة والانعطافات الحادة حسب إعدادات النظام.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN FEATURES */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                مميزات الجهاز
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مميزات جهاز OBD VL505 4G بالتفصيل
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-600">
                جهاز صغير يجمع بين سهولة التركيب واتصال 4G ومجموعة من
                وظائف التتبع والتنبيهات ومراقبة سلوك القيادة.
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
                      يتم تركيب الجهاز مباشرة في منفذ OBD-II بدون قطع أو
                      توصيل أسلاك السيارة.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      ويمكن فك الجهاز ونقله إلى سيارة أخرى عند الحاجة،
                      بشرط وجود منفذ OBD-II متوافق.
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
                      الاتصال بشبكة 4G 📡
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يعمل الجهاز على شبكة 4G LTE Cat.1 لنقل بيانات
                      التتبع ومعلومات السيارة إلى النظام المستخدم.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      بعض الإصدارات تدعم الانتقال إلى 2G عند ضعف أو
                      عدم توافر تغطية 4G حسب نسخة الجهاز والشبكة.
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
                      تحديد الموقع ومتابعة الحركة 📍
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      متابعة موقع السيارة على الخريطة ومعرفة مكانها
                      وتحركاتها بشكل مباشر.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      كما يمكن متابعة السرعة وخط السير والرحلات السابقة
                      من خلال النظام المستخدم، مع إمكانية الاستفادة من
                      LBS حسب الجهاز والشبكة والنظام.
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
                      يمكن للجهاز إرسال تنبيه عند نزع الجهاز من منفذ
                      OBD-II حسب إعدادات الجهاز والنظام المستخدم.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      ويمكن الاستفادة من البطارية الداخلية في بعض حالات
                      فصل الجهاز لإرسال التنبيه، حسب تجهيز الإصدار.
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
                      مراقبة الحركة والاهتزاز 🚗
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يحتوي الجهاز على مستشعر حركة يساعد في اكتشاف بعض
                      الحالات غير الطبيعية.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      مثل حركة السيارة بعد توقفها والاهتزازات غير الطبيعية
                      وبعض حالات السحب أو الرفع حسب إعدادات الجهاز والنظام.
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
                      مراقبة سلوك السائق 🚦
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يدعم الجهاز مستشعر تسارع Accelerometer يمكن
                      الاستفادة منه في مراقبة بعض سلوكيات القيادة.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      مثل التسارع المفاجئ والفرملة المفاجئة وبعض حالات
                      الانعطاف الحاد.
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
                      متابعة حالة ACC 🔑
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يدعم الجهاز متابعة حالة ACC لمعرفة فترات تشغيل
                      السيارة وفترات توقفها.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      وتساعد هذه البيانات في معرفة أوقات استخدام المركبة
                      ومتابعة نشاطها من خلال النظام المستخدم.
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
                      الاستماع الصوتي 🎙️
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يدعم الجهاز الاستماع إلى الأصوات المحيطة من خلال
                      الميكروفون حسب تجهيز الجهاز والنظام المستخدم.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      تختلف طريقة تشغيل خاصية الاستماع حسب النظام وإعدادات
                      الجهاز.
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
                      جهد التشغيل ⚙️
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يعمل الجهاز على جهد من <strong>9 إلى 36 فولت DC</strong>.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      لذلك يجب التأكد من توافق منفذ OBD-II في السيارة
                      مع نطاق التشغيل قبل التركيب.
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
                      حجم صغير ووزن خفيف 📏
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يتميز الجهاز بحجم صغير جدًا مناسب للتركيب أسفل
                      التابلوه ولا يشغل مساحة كبيرة.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      المقاس <strong>45 × 30 × 22.5 مم</strong> والوزن
                      حوالي <strong>26 جرامًا</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECS */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                المواصفات الأساسية
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مواصفات جهاز OBD VL505 4G
              </h2>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  الموديل
                </span>

                <span className="text-gray-600">
                  OBD VL505 4G
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
                  4G LTE Cat.1
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  دعم 2G
                </span>

                <span className="text-gray-600">
                  حسب إصدار الجهاز والشبكة المتاحة
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  تحديد الموقع
                </span>

                <span className="text-gray-600">
                  أنظمة تحديد الموقع المتاحة بالجهاز + LBS حسب الجهاز والشبكة والنظام
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
                  مستشعر الحركة
                </span>

                <span className="text-gray-600">
                  متوفر
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  Accelerometer
                </span>

                <span className="text-gray-600">
                  مراقبة التسارع والفرملة والانعطاف
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  ACC
                </span>

                <span className="text-gray-600">
                  متابعة حالة تشغيل وإيقاف السيارة
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  تنبيه نزع الجهاز
                </span>

                <span className="text-gray-600">
                  Unplug Alert حسب الإعدادات والتجهيز
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  الميكروفون
                </span>

                <span className="text-gray-600">
                  متوفر حسب تجهيز الجهاز والنظام
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  الأبعاد
                </span>

                <span className="text-gray-600">
                  45 × 30 × 22.5 مم
                </span>
              </div>

              <div className="grid grid-cols-2 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  الوزن
                </span>

                <span className="text-gray-600">
                  حوالي 26 جرامًا
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* DRIVING BEHAVIOR */}

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <span className="font-bold text-blue-700">
                مراقبة سلوك القيادة
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                تابع طريقة استخدام السيارة
              </h2>

              <p className="mt-5 text-lg leading-9 text-gray-600">
                بفضل مستشعر التسارع الموجود بالجهاز، يمكن الاستفادة من
                OBD VL505 4G في متابعة بعض سلوكيات القيادة، وهو ما يجعله
                مناسبًا بشكل خاص للسيارات التابعة للشركات والأساطيل.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-gray-50 p-7 text-center shadow-sm">
                <div className="text-4xl">🚀</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  التسارع المفاجئ
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  إمكانية اكتشاف التسارع القوي أو المفاجئ حسب إعدادات
                  الجهاز والنظام.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-7 text-center shadow-sm">
                <div className="text-4xl">🛑</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  الفرملة المفاجئة
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  إمكانية اكتشاف الفرملة أو التوقف العنيف أثناء القيادة.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-7 text-center shadow-sm">
                <div className="text-4xl">↪️</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  الانعطاف الحاد
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  إمكانية اكتشاف بعض حالات الانعطاف القوي أثناء الحركة.
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
              نقطة مهمة قبل الشراء
            </h2>

            <p className="mt-4 text-lg font-bold leading-9 text-gray-700">
              جهاز OBD VL505 4G يحتاج إلى وجود منفذ OBD-II متوافق في السيارة.
            </p>

            <p className="mt-3 leading-8 text-gray-600">
              لذلك يجب التأكد من وجود المنفذ وتوافق السيارة مع الجهاز قبل
              الشراء، كما يفضل التأكد من توافر تغطية 4G في مكان استخدام
              الجهاز.
            </p>
          </div>
        </section>

        {/* WHY */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <span className="font-bold text-blue-700">
              أهم نقطة تميزه
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              4G + Plug &amp; Play + حجم صغير
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              يجمع OBD VL505 4G بين تركيب Plug &amp; Play بدون قص أو تعديل
              أسلاك السيارة، واتصال 4G LTE Cat.1، والحجم الصغير جدًا،
              بالإضافة إلى تنبيه نزع الجهاز وإمكانية مراقبة بعض سلوكيات
              القيادة.
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
                  📡 شبكة 4G
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  اتصال 4G LTE Cat.1 مع دعم 2G في بعض الإصدارات والشبكات.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🚨 تنبيه نزع الجهاز
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  إمكانية اكتشاف فصل الجهاز من منفذ OBD-II وإرسال التنبيه.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🚦 مراقبة القيادة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة التسارع والفرملة والانعطافات الحادة حسب الإعدادات.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUITABLE FOR */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="text-center">
            <span className="font-bold text-blue-700">
              مناسب لمين؟
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              جهاز OBD VL505 4G مناسب لمن يريد
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              جهاز GPS حديث وسهل التركيب بدون أي قص أو تعديل في أسلاك
              السيارة، مع إمكانية فك الجهاز ونقله بسهولة بين المركبات.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">🚘</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                السيارات الملاكي
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                متابعة السيارة وموقعها وحركتها بدون تعديل الأسلاك.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">🏢</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                سيارات الشركات
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                متابعة استخدام السيارات ومعرفة نشاطها أثناء العمل.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">📊</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                الأساطيل
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                مراقبة الرحلات وبعض سلوكيات القيادة.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md">
              <div className="text-4xl">🔄</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                النقل بين السيارات
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                يمكن فك الجهاز ونقله إلى سيارة أخرى بها منفذ متوافق.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON CTA */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <span className="font-bold text-blue-200">
              محتار بين جهازين؟
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              قارن بين أجهزة GPS واختار الأنسب لسيارتك
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تعرف على الفرق بين الأجهزة من حيث طريقة التركيب والشبكة
              والمميزات والاستخدام المناسب لكل جهاز.
            </p>

            <a
              href="/devices/compare"
              className="mt-8 inline-flex rounded-xl bg-yellow-400 px-8 py-4 text-lg font-extrabold text-blue-950 transition hover:bg-yellow-300"
            >
              🔍 مقارنة بين الأجهزة
            </a>
          </div>
        </section>

        {/* WARRANTY */}

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

        {/* FAQ */}

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                الأسئلة الشائعة
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أسئلة شائعة عن جهاز OBD VL505 4G
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
              هل تريد معرفة المزيد عن جهاز OBD VL505 4G؟
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