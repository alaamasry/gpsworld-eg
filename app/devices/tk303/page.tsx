import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "TK303 2G | جهاز تتبع سيارات GPS سلكي في مصر",
  description:
    "جهاز TK303 2G سلكي لتتبع السيارات والمركبات، مع تتبع مباشر وتنبيهات أمنية وGPS وLBS وSOS والاستماع الصوتي وفصل المحرك بالريلاي.",
  keywords: [
    "TK303",
    "TK303 2G",
    "جهاز TK303",
    "TK303 GPS",
    "TK303 GPS Tracker",
    "جهاز تتبع TK303",
    "جهاز GPS TK303",
    "جهاز تتبع GPS 2G",
    "جهاز تتبع سيارات",
    "جهاز تتبع سيارات GPS",
    "جهاز GPS للسيارات",
    "جهاز تتبع المركبات",
    "جهاز تتبع سلكي",
    "جهاز GPS سلكي",
    "أجهزة تتبع GPS",
    "أجهزة تتبع السيارات",
    "أجهزة GPS مصر",
    "GPS مصر",
    "GPS Tracker مصر",
    "جهاز تتبع سيارات مصر",
    "تتبع السيارات",
    "تتبع المركبات",
  ],

  alternates: {
    canonical: "https://gpsworld-eg.com/devices/tk303",
  },

  openGraph: {
    title: "TK303 2G | جهاز تتبع سيارات GPS سلكي في مصر",
    description:
      "جهاز TK303 2G سلكي لتتبع السيارات والمركبات مع التتبع المباشر والتنبيهات الأمنية والاستماع الصوتي وفصل المحرك.",
    url: "https://gpsworld-eg.com/devices/tk303",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/TK303.jpeg",
        width: 1200,
        height: 630,
        alt: "TK303 2G جهاز تتبع سيارات GPS سلكي",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TK303 2G | جهاز تتبع سيارات GPS سلكي",
    description:
      "جهاز TK303 2G سلكي لتتبع السيارات والمركبات مع مجموعة من وظائف الحماية والتنبيهات.",
    images: ["/images/TK303.jpeg"],
  },
};

const product = {
  name: "TK303",
  image: "/images/TK303.jpeg",
  url: "https://gpsworld-eg.com/devices/tk303",
};

const features = [
  {
    number: "01",
    icon: "📍",
    title: "تتبع مباشر ومتابعة الموقع",
    text:
      "متابعة موقع السيارة أو المركبة على الخريطة ومعرفة مكانها وتحركاتها أثناء التشغيل من خلال نظام التتبع المتوافق.",
  },
  {
    number: "02",
    icon: "🚗",
    title: "متابعة السرعة وخط السير",
    text:
      "يمكن متابعة سرعة المركبة أثناء الحركة ومراجعة الرحلات والتحركات السابقة من خلال النظام المستخدم، مع إمكانية إعداد تنبيه عند تجاوز السرعة المحددة.",
  },
  {
    number: "03",
    icon: "🗺️",
    title: "السياج الجغرافي Geo-Fence",
    text:
      "إمكانية تحديد منطقة معينة على الخريطة واستقبال تنبيه عند دخول المركبة إلى المنطقة أو خروجها منها، حسب إعدادات النظام.",
  },
  {
    number: "04",
    icon: "🚨",
    title: "تنبيهات الحماية والأمان",
    text:
      "يدعم مجموعة من التنبيهات لمتابعة أي حركة أو تغيير غير طبيعي، مثل الاهتزاز والحركة وفصل الكهرباء والعبث بالتوصيلات.",
  },
  {
    number: "05",
    icon: "🚪",
    title: "تنبيه فتح الأبواب",
    text:
      "يمكن توصيل حساس باب بالجهاز واستخدامه لإرسال تنبيه عند فتح الباب، بشرط تركيب الحساس والتوصيلات بالطريقة المناسبة.",
  },
  {
    number: "06",
    icon: "🔋",
    title: "بطارية احتياطية داخلية",
    text:
      "يحتوي الجهاز على بطارية داخلية احتياطية تساعده على الاستمرار في العمل عند فصل مصدر الكهرباء الرئيسي عن المركبة، مع إمكانية إرسال تنبيه بفصل الكهرباء حسب الإعدادات.",
  },
  {
    number: "07",
    icon: "🛑",
    title: "فصل المحرك عن بُعد",
    text:
      "يمكن توصيل الجهاز بريلاي للتحكم في فصل الوقود أو الكهرباء عن المركبة، ويتم تنفيذ الوظيفة من خلال النظام أو SMS حسب إمكانيات الجهاز والإعدادات المتاحة.",
  },
  {
    number: "08",
    icon: "🆘",
    title: "زر SOS للطوارئ",
    text:
      "يمكن توصيل زر SOS بالجهاز، وعند الضغط عليه يمكن إرسال تنبيه للطوارئ إلى الأرقام المحددة مع بيانات موقع المركبة، حسب إعدادات الجهاز والنظام.",
  },
  {
    number: "09",
    icon: "🎙️",
    title: "الاستماع داخل السيارة",
    text:
      "يدعم توصيل ميكروفون خارجي للاستماع إلى الصوت داخل المركبة، وتعمل الخاصية وفق تجهيز الجهاز وطريقة تشغيل الخدمة والإعدادات المتاحة.",
  },
  {
    number: "10",
    icon: "📡",
    title: "2G مع GPS وLBS",
    text:
      "يعمل الجهاز على شبكة 2G لإرسال بيانات التتبع والتنبيهات، ويستخدم GPS لتحديد الموقع، مع إمكانية الاستفادة من LBS حسب الجهاز والشبكة والنظام.",
  },
];

const faqs = [
  {
    question: "ما هو جهاز TK303؟",
    answer:
      "TK303 هو جهاز تتبع GPS سلكي يعمل على شبكة 2G، ويتم توصيله مباشرة بكهرباء المركبة، ويجمع بين التتبع المباشر ومجموعة من وظائف الحماية والتنبيهات.",
  },
  {
    question: "هل TK303 جهاز 2G؟",
    answer:
      "نعم، النسخة التي نقدمها من TK303 تعمل على شبكة 2G.",
  },
  {
    question: "هل يمكن فصل محرك السيارة باستخدام TK303؟",
    answer:
      "نعم، يمكن استخدام خاصية فصل المحرك عند توصيل الجهاز بريلاي وتركيب التوصيلات بالطريقة الصحيحة. وتختلف طريقة التحكم حسب إمكانيات الجهاز والإعدادات المتاحة.",
  },
  {
    question: "هل يدعم TK303 الاستماع داخل السيارة؟",
    answer:
      "نعم، يدعم توصيل ميكروفون خارجي للاستماع داخل المركبة حسب تجهيز الجهاز وطريقة تشغيل الخدمة.",
  },
  {
    question: "هل يدعم TK303 زر SOS؟",
    answer:
      "يمكن توصيل زر SOS بالجهاز، وعند استخدامه يمكن إرسال تنبيه للطوارئ مع بيانات الموقع حسب إعدادات الجهاز والنظام.",
  },
  {
    question: "هل يدعم TK303 كارت ذاكرة؟",
    answer:
      "بعض إصدارات TK303 تدعم كارت MicroSD لتسجيل البيانات والمسارات، لذلك يجب التأكد من الإصدار المتاح قبل الطلب.",
  },
  {
    question: "هل جهاز TK303 مقاوم للماء؟",
    answer:
      "بعض إصدارات TK303 تأتي بتصنيف حماية مثل IP66، لذلك يجب التأكد من تصنيف الحماية الخاص بالنسخة المتاحة قبل التركيب.",
  },
  {
    question: "ما جهد تشغيل TK303؟",
    answer:
      "يختلف نطاق جهد التشغيل حسب إصدار TK303. بعض النسخ مخصصة للعمل على نطاق 12–24 فولت، لذلك يجب التأكد من توافق النسخة مع جهد المركبة قبل التركيب.",
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
        "جهاز TK303 2G سلكي لتتبع السيارات والمركبات مع التتبع المباشر والتنبيهات الأمنية والاستماع الصوتي وفصل المحرك.",
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

      <main className="min-h-screen bg-gray-50 text-gray-900" dir="rtl">
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
                  أجهزة GPS وحلول التتبع والمراقبة
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

        {/* HERO */}

        <section className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <DeviceGallery
                images={[
                  "/images/TK303.jpeg",
                  "/images/TK303-2.jpeg",
                  "/images/TK303-3.jpeg",
                  "/images/TK303-4.jpeg",
                  "/images/TK303-5.jpeg",
                  "/images/TK303-6.jpeg",
                ]}
                deviceName="TK303"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ جهاز تتبع سلكي 2G
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز TK303 2G لتتبع السيارات والمركبات
              </h1>

              <p className="mt-4 text-xl font-bold text-blue-700">
                تتبع مباشر + تنبيهات حماية + استماع + فصل محرك
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                إنت في الشغل أو بعيد عن عربيتك؟ تقدر تتابع موقع المركبة
                وتحركاتها وتعرف السرعة وخط السير، مع مجموعة من وظائف الحماية
                والتنبيهات مثل فصل الكهرباء والاهتزاز والحركة وفتح الأبواب
                وGeo-Fence. ويدعم الجهاز أيضًا توصيل SOS وميكروفون خارجي،
                مع إمكانية فصل المحرك عند تركيب الريلاي والتوصيلات بالطريقة
                الصحيحة.
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
                تتبع مباشر
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                متابعة موقع المركبة وحركتها على الخريطة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🚨</div>
              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                تنبيهات حماية
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                اهتزاز وحركة وفصل كهرباء وفتح أبواب حسب التوصيل.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🎙️</div>
              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                استماع صوتي
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                إمكانية توصيل ميكروفون خارجي للاستماع داخل السيارة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🛑</div>
              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                فصل المحرك
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                يمكن توصيل ريلاي للتحكم في فصل المحرك بالطريقة الصحيحة.
              </p>
            </div>
          </div>
        </section>

        {/* NUMBERED FEATURES */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="text-center">
            <span className="font-bold text-blue-700">TK303 2G</span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              أهم مميزات جهاز TK303
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              جهاز سلكي يجمع بين التتبع المباشر ومجموعة كبيرة من وظائف
              الحماية والتنبيهات والإضافات المناسبة لمتابعة المركبات.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-950 text-lg font-extrabold text-white">
                    {feature.number}
                  </div>

                  <div>
                    <div className="text-3xl">{feature.icon}</div>

                    <h3 className="mt-3 text-xl font-extrabold text-blue-950">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-lg leading-8 text-gray-600">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ADDITIONAL FEATURES */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                إمكانيات إضافية
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مزايا تختلف حسب إصدار الجهاز
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                بعض خصائص TK303 تختلف من إصدار لآخر، لذلك لا نعتمد هذه
                الخصائص كمواصفات ثابتة لكل الأجهزة.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-7 shadow-sm">
                <div className="text-4xl">💾</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  MicroSD
                </h3>

                <p className="mt-3 text-lg leading-8 text-gray-600">
                  بعض الإصدارات تدعم كارت MicroSD لتسجيل بيانات ومسارات
                  المركبة، وقد يساعد التخزين المحلي في التعامل مع فترات
                  انقطاع شبكة المحمول حسب طريقة عمل الإصدار والنظام.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-sm">
                <div className="text-4xl">💧</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  مقاومة العوامل الخارجية
                </h3>

                <p className="mt-3 text-lg leading-8 text-gray-600">
                  بعض نسخ TK303 تأتي بتصنيف حماية مثل IP66. يجب التأكد من
                  تصنيف الحماية الخاص بالنسخة المتاحة قبل الاعتماد عليه في
                  الأماكن المعرضة للماء أو الأتربة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL INFO */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-md md:p-8">
              <h2 className="mb-7 text-2xl font-extrabold text-blue-950">
                ⚙️ معلومات فنية مهمة
              </h2>

              <div className="space-y-4 text-lg">
                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-bold text-gray-800">
                    نوع الجهاز
                  </span>
                  <span className="text-gray-600">
                    جهاز تتبع GPS سلكي
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-bold text-gray-800">
                    شبكة الاتصال
                  </span>
                  <span className="text-gray-600">2G</span>
                </div>

                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-bold text-gray-800">
                    تحديد الموقع
                  </span>
                  <span className="text-gray-600">GPS + LBS</span>
                </div>

                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-bold text-gray-800">
                    التوصيل
                  </span>
                  <span className="text-gray-600">
                    توصيل مباشر بكهرباء المركبة
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-bold text-gray-800">
                    البطارية الاحتياطية
                  </span>
                  <span className="text-gray-600">
                    موجودة — السعة تختلف حسب الإصدار
                  </span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-bold text-gray-800">
                    جهد التشغيل
                  </span>
                  <span className="text-gray-600">
                    يختلف حسب الإصدار
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-sm leading-7 text-blue-900">
                <strong>مهم:</strong> بعض نسخ TK303 مخصصة للعمل على نطاق
                12–24 فولت، لذلك يجب التأكد من توافق النسخة مع جهد المركبة
                قبل التركيب.
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md md:p-8">
              <h2 className="mb-7 text-2xl font-extrabold text-blue-950">
                🚗 مناسب لمجموعة متنوعة من المركبات
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 p-5">
                  <div className="text-3xl">🚘</div>
                  <h3 className="mt-3 font-extrabold text-blue-950">
                    السيارات الملاكي
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    مناسب لمتابعة السيارة ومعرفة موقعها وتحركاتها.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <div className="text-3xl">🚕</div>
                  <h3 className="mt-3 font-extrabold text-blue-950">
                    سيارات الأجرة
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    مناسب لمتابعة المركبات المستخدمة في العمل.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <div className="text-3xl">🏍️</div>
                  <h3 className="mt-3 font-extrabold text-blue-950">
                    الموتوسيكلات
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    يمكن استخدامه مع المركبات المناسبة لطريقة التوصيل
                    والجهد.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <div className="text-3xl">🚛</div>
                  <h3 className="mt-3 font-extrabold text-blue-950">
                    الشاحنات والمركبات التجارية
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    مناسب للمركبات التي تتوافق مع طريقة تركيب الجهاز وجهد
                    التشغيل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTE */}

        <section className="px-5 pb-16">
          <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-200 bg-yellow-50 p-7 md:p-9">
            <h2 className="text-2xl font-extrabold text-yellow-900">
              ⚠️ نقطة مهمة قبل التركيب
            </h2>

            <p className="mt-4 text-lg leading-9 text-yellow-900">
              لأن اسم TK303 يُستخدم لعدة إصدارات، قد تختلف بعض التفاصيل
              مثل جهد التشغيل وسعة البطارية ودعم MicroSD وتصنيف الحماية.
              لذلك يتم التأكد من مواصفات النسخة المتاحة وتوافقها مع المركبة
              قبل التركيب.
            </p>
          </div>
        </section>

        {/* COMPARISON CTA */}

        <section className="bg-gray-100 px-5 py-16">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 text-center shadow-lg md:p-12">
            <span className="font-bold text-blue-700">
              محتار بين أكثر من جهاز؟
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-blue-950 md:text-4xl">
              قارن بين TK303 والأجهزة الأخرى
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              اعرف الفرق العملي بين الأجهزة واختار الجهاز الأنسب لنوع
              مركبتك وطريقة الاستخدام والوظائف التي تحتاجها.
            </p>

            <a
              href="/compare"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-blue-950 px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-blue-900"
            >
              ⚖️ مقارنة بين الأجهزة
            </a>
          </div>
        </section>

        {/* WARRANTY */}

        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <div className="text-5xl">🛡️</div>

            <h2 className="mt-4 text-3xl font-extrabold">
              الضمان
            </h2>

            <p className="mt-4 text-xl leading-8 text-blue-100">
              سنة ضد عيوب الصناعة.
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
              عايز تعرف إذا كان TK303 مناسب لعربيتك؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة النسخة المتاحة والتأكد من التوافق مع
              المركبة وطريقة التركيب.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-green-700"
              >
                💬 استفسر عبر واتساب
              </a>

              <a
                href="tel:01006687163"
                className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-950 transition hover:bg-gray-100"
              >
                📞 اتصل بنا
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
              أجهزة GPS للتتبع والمراقبة في مصر
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