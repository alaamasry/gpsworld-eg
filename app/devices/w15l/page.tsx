import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "W15L 4G | جهاز تتبع GPS لاسلكي ومغناطيسي في مصر",

  description:
    "جهاز W15L 4G لتتبع السيارات والمركبات والحاويات والأصول، ببطارية 7500mAh وتثبيت مغناطيسي قوي وحماية IP65 وتتبع مباشر وتنبيهات الحركة والسرعة والسياج الجغرافي.",

  keywords: [
    "W15L",
    "W15L 4G",
    "جهاز W15L",
    "W15L GPS",
    "W15L GPS Tracker",
    "جهاز تتبع W15L",
    "جهاز GPS W15L",
    "جهاز تتبع W15L 4G",
    "جهاز GPS لاسلكي",
    "جهاز تتبع لاسلكي",
    "جهاز تتبع مغناطيسي",
    "جهاز GPS مغناطيسي",
    "جهاز تتبع أصول",
    "جهاز تتبع سيارات",
    "جهاز تتبع سيارات مصر",
    "جهاز GPS للسيارات",
    "جهاز تتبع مركبات",
    "تتبع السيارات",
    "تتبع المركبات",
    "تتبع الأصول",
    "GPS Tracker",
    "GPS Tracker مصر",
    "GPS مصر",
    "أجهزة GPS",
    "أجهزة GPS مصر",
  ],

  alternates: {
    canonical: "https://gpsworld-eg.com/devices/w15l",
  },

  openGraph: {
    title: "W15L 4G | جهاز تتبع GPS لاسلكي ومغناطيسي في مصر",

    description:
      "جهاز W15L 4G ببطارية 7500mAh وتثبيت مغناطيسي قوي وحماية IP65، مع تتبع مباشر وتنبيهات الحركة والسرعة والسياج الجغرافي.",

    url: "https://gpsworld-eg.com/devices/w15l",

    siteName: "GPS World Egypt",

    locale: "ar_EG",

    type: "website",

    images: [
      {
        url: "/images/W15L.jpeg",
        width: 1200,
        height: 630,
        alt: "W15L 4G جهاز تتبع GPS لاسلكي ومغناطيسي",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "W15L 4G | جهاز تتبع GPS لاسلكي ومغناطيسي",

    description:
      "جهاز W15L 4G ببطارية 7500mAh وتثبيت مغناطيسي قوي وتتبع مباشر وتنبيهات وحماية IP65.",

    images: ["/images/W15L.jpeg"],
  },
};

const product = {
  name: "W15L 4G",
  image: "/images/W15L.jpeg",
  url: "https://gpsworld-eg.com/devices/w15l",
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز W15L 4G"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز W15L 4G"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

const faqs = [
  {
    question: "ما هو جهاز W15L 4G؟",
    answer:
      "جهاز W15L 4G هو جهاز تتبع GPS لاسلكي ومغناطيسي، يعمل ببطارية داخلية 7500mAh، ومصمم لمتابعة السيارات والمركبات والحاويات والمعدات وبعض الأصول التي تحتاج إلى جهاز يمكن تثبيته وفكه بسهولة.",
  },

  {
    question: "هل يحتاج W15L 4G إلى توصيل أسلاك؟",
    answer:
      "لا، الجهاز لاسلكي ولا يحتاج إلى توصيله بكهرباء السيارة أو ضفيرة المركبة، ويحتوي على قاعدة مغناطيسية قوية للتثبيت على الأسطح المعدنية المناسبة.",
  },

  {
    question: "ما سعة بطارية W15L 4G؟",
    answer:
      "يحتوي الجهاز على بطارية ليثيوم قابلة لإعادة الشحن بسعة 7500mAh. مدة التشغيل الفعلية تختلف حسب معدل تحديث الموقع وحركة المركبة ووضع التشغيل وإعدادات توفير الطاقة.",
  },

  {
    question: "هل جهاز W15L 4G يعمل على شبكة 4G؟",
    answer:
      "نعم، يعمل الجهاز على شبكة 4G LTE Cat.1 حسب إصدار الجهاز والشبكة المتاحة، وقد تدعم بعض الإصدارات الانتقال إلى شبكات أخرى عند ضعف تغطية 4G حسب نسخة الجهاز والشبكة المستخدمة.",
  },

  {
    question: "هل جهاز W15L 4G مغناطيسي؟",
    answer:
      "نعم، يحتوي الجهاز على قاعدة مغناطيسية قوية تساعد على تثبيته على الأسطح المعدنية المناسبة، ويمكن فك الجهاز ونقله من مركبة أو أصل إلى آخر.",
  },

  {
    question: "هل يدعم W15L التتبع المباشر؟",
    answer:
      "نعم، يدعم الجهاز متابعة موقع المركبة أو الأصل على الخريطة، بالإضافة إلى متابعة الحركة والسرعة وخط السير من خلال النظام المستخدم.",
  },

  {
    question: "هل يدعم W15L تنبيه نزع الجهاز؟",
    answer:
      "نعم، يحتوي الجهاز على مستشعر يساعد على اكتشاف محاولة إزالة الجهاز أو العبث به، ويمكن إرسال تنبيه حسب إعدادات الجهاز والنظام المستخدم.",
  },

  {
    question: "هل يدعم W15L تنبيه السرعة والسياج الجغرافي؟",
    answer:
      "نعم، يدعم الجهاز تنبيه تجاوز السرعة والسياج الجغرافي Geo-Fence حسب إعدادات النظام المستخدم.",
  },

  {
    question: "هل جهاز W15L مقاوم للماء والأتربة؟",
    answer:
      "نعم، يتمتع الجهاز بتصنيف حماية IP65، ويوفر حماية من الأتربة ومقاومة للمياه ورذاذها ضمن حدود التصنيف.",
  },

  {
    question: "هل يحتوي W15L على ميكروفون؟",
    answer:
      "نعم، يحتوي الجهاز على ميكروفون داخلي، ويمكن استخدام خاصية الاستماع الصوتي عن بُعد حسب تجهيز الجهاز والنظام المستخدم وإعدادات الخدمة.",
  },

  {
    question: "هل يمكن نقل جهاز W15L من سيارة إلى أخرى؟",
    answer:
      "نعم، من أهم مميزات التصميم اللاسلكي والمغناطيسي إمكانية فك الجهاز وإعادة تركيبه أو نقله إلى مركبة أو أصل آخر عند الحاجة.",
  },

  {
    question: "هل يوجد مدة تشغيل ثابتة لبطارية W15L؟",
    answer:
      "لا يُفضّل تثبيت مدة تشغيل واحدة للجهاز، لأن مدة البطارية تختلف حسب معدل تحديث الموقع وحركة المركبة ووضع التشغيل وإعدادات توفير الطاقة وطريقة الاستخدام.",
  },
];

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Product",

      name: product.name,

      image: ["https://gpsworld-eg.com/images/W15L.jpeg"],

      url: product.url,

      description:
        "جهاز W15L 4G لتتبع السيارات والمركبات والحاويات والأصول، ببطارية 7500mAh وتثبيت مغناطيسي وحماية IP65 وتتبع مباشر وتنبيهات.",

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
          name: "W15L 4G",
          item: "https://gpsworld-eg.com/devices/w15l",
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

export default function W15LPage() {
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
                  "/images/W15L.jpeg",
                  "/images/W15L-2.jpeg",
                  "/images/W15L-3.jpeg",
                  "/images/W15L-4.jpeg",
                  "/images/W15L-5.jpeg",
                  "/images/W15L-6.jpeg",
                ]}
                deviceName="W15L 4G"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز W15L 4G لتتبع السيارات والمركبات والأصول
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                جهاز GPS لاسلكي ومغناطيسي ببطارية 7500mAh
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز W15L 4G هو جهاز تتبع GPS لاسلكي ومغناطيسي، لا يحتاج
                إلى توصيل بأسلاك السيارة، ويعتمد على بطارية داخلية كبيرة
                بسعة 7500mAh مع قاعدة مغناطيسية قوية للتثبيت على الأسطح
                المعدنية المناسبة.
              </p>

              <p className="mt-4 text-lg leading-9 text-gray-600">
                يعمل الجهاز على شبكة 4G LTE Cat.1، ومصمم لمتابعة السيارات
                والمركبات والحاويات والمعدات وبعض الأصول، مع إمكانية
                التتبع المباشر ومتابعة السرعة وخط السير والتنبيهات.
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🔋</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                بطارية 7500mAh
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                بطارية كبيرة قابلة لإعادة الشحن
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🧲</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                تثبيت مغناطيسي
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                بدون توصيل أسلاك السيارة
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">📡</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                4G LTE Cat.1
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                اتصال 4G حسب الإصدار والشبكة
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">💧</div>

              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                حماية IP65
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                حماية من الأتربة ورذاذ المياه ضمن حدود التصنيف
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                مميزات الجهاز
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مميزات جهاز W15L 4G بالتفصيل
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-600">
                جهاز لاسلكي ومغناطيسي يجمع بين البطارية الكبيرة وسهولة
                التثبيت ومجموعة من وظائف التتبع والتنبيهات.
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
                      بطارية كبيرة وتشغيل طويل 🔋
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يحتوي الجهاز على بطارية ليثيوم قابلة لإعادة الشحن
                      بسعة <strong>7500mAh</strong>.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      ويدعم أوضاعًا مختلفة لإدارة استهلاك الطاقة حسب
                      طبيعة الاستخدام. مدة التشغيل الفعلية تختلف حسب
                      معدل تحديث الموقع وحركة المركبة ووضع التشغيل
                      وإعدادات توفير الطاقة.
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
                      الاتصال بشبكات 4G 📡
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يعمل الجهاز على شبكات <strong>4G LTE Cat.1</strong>{" "}
                      حسب إصدار الجهاز والشبكة المتاحة.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      بعض الإصدارات قد تدعم الانتقال إلى شبكات أخرى عند
                      ضعف تغطية 4G حسب نسخة الجهاز والشبكة المستخدمة.
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
                      تثبيت مغناطيسي بدون أسلاك 🧲
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      لا يحتاج الجهاز إلى توصيله بكهرباء السيارة أو
                      ضفيرة المركبة.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      يحتوي على قاعدة مغناطيسية قوية تساعد على تثبيته
                      على الأسطح المعدنية المناسبة، ويمكن فكه ونقله
                      من مركبة أو أصل إلى آخر بسهولة.
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
                      تحديد الموقع ومتابعة المركبة 📍
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يدعم التتبع المباشر لموقع المركبة ومتابعة مكانها
                      وتحركاتها على الخريطة.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      ويمكن متابعة السرعة وخط السير والرحلات السابقة
                      من خلال النظام المستخدم، مع إمكانية الاستفادة من
                      LBS حسب الجهاز والتغطية والنظام.
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
                      تنبيه نزع الجهاز والحماية من العبث 🚨
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يحتوي الجهاز على مستشعر يساعد على اكتشاف محاولة
                      إزالة الجهاز من مكان تثبيته.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      عند اكتشاف نزع الجهاز أو العبث به، يمكن إرسال
                      تنبيه إلى الهاتف من خلال النظام المستخدم حسب
                      إعدادات الجهاز.
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
                      التنبيهات الأمنية 🛡️
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يدعم الجهاز مجموعة من التنبيهات حسب إعداداته
                      والنظام المستخدم.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      وتشمل تنبيه الحركة والاهتزاز غير الطبيعي، وتجاوز
                      السرعة، والسياج الجغرافي Geo-Fence، وانخفاض مستوى
                      البطارية.
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
                      مقاومة الأتربة والمياه 💧
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      يتمتع الجهاز بتصنيف حماية <strong>IP65</strong>{" "}
                      وفق مواصفات الإصدار المذكورة.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      يوفر حماية من دخول الأتربة ومقاومة للمياه ورذاذها
                      ضمن حدود تصنيف الحماية، مع ضرورة اختيار مكان
                      تركيب مناسب.
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
                      يحتوي الجهاز على ميكروفون داخلي.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      ويمكن استخدام خاصية الاستماع الصوتي عن بُعد حسب
                      تجهيز الجهاز والنظام المستخدم وإعدادات الخدمة.
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
                      الحجم والوزن 📏
                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">
                      المقاس:
                      <strong> 86 × 63 × 34 مم</strong>.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      الوزن حوالي <strong>236 جرامًا</strong>.
                    </p>

                    <p className="mt-3 leading-8 text-gray-600">
                      التصميم مع القاعدة المغناطيسية يجعله مناسبًا
                      للتثبيت على الأسطح المعدنية المناسبة.
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
                مواصفات جهاز W15L 4G
              </h2>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  الموديل
                </span>

                <span className="text-gray-600">
                  W15L 4G
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  نوع الجهاز
                </span>

                <span className="text-gray-600">
                  GPS Tracker لاسلكي ومغناطيسي
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  شبكة الاتصال
                </span>

                <span className="text-gray-600">
                  4G LTE Cat.1
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  دعم الشبكات الأخرى
                </span>

                <span className="text-gray-600">
                  حسب إصدار الجهاز والشبكة المتاحة
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  تحديد الموقع
                </span>

                <span className="text-gray-600">
                  GPS / BDS / LBS حسب الجهاز والتغطية والنظام
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  البطارية
                </span>

                <span className="text-gray-600">
                  7500mAh ليثيوم قابلة لإعادة الشحن
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  طريقة التثبيت
                </span>

                <span className="text-gray-600">
                  قاعدة مغناطيسية قوية
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  الحماية
                </span>

                <span className="text-gray-600">
                  IP65
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  التنبيهات
                </span>

                <span className="text-gray-600">
                  حركة / اهتزاز / سرعة / Geo-Fence / بطارية منخفضة / نزع الجهاز
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-bold text-gray-800">
                  الميكروفون
                </span>

                <span className="text-gray-600">
                  ميكروفون داخلي
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-bold text-gray-800">
                  الأبعاد
                </span>

                <span className="text-gray-600">
                  86 × 63 × 34 مم
                </span>
              </div>

              <div className="grid grid-cols-2 p-5">
                <span className="font-bold text-gray-800">
                  الوزن
                </span>

                <span className="text-gray-600">
                  حوالي 236 جرامًا
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BATTERY */}

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
              <div className="text-center">
                <span className="font-bold text-blue-700">
                  البطارية
                </span>

                <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                  بطارية 7500mAh بدون مدة تشغيل ثابتة
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                  بطارية W15L الكبيرة تمنحك مرونة في اختيار طريقة التشغيل
                  المناسبة، لكن مدة التشغيل الفعلية تختلف من حالة لأخرى
                  حسب معدل تحديث الموقع وحركة المركبة ووضع التشغيل
                  وإعدادات توفير الطاقة وطريقة الاستخدام.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <div className="text-4xl">📍</div>

                  <h3 className="mt-4 font-extrabold text-blue-950">
                    تتبع متكرر
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    مناسب عند الحاجة إلى تحديثات موقع أكثر تكرارًا.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <div className="text-4xl">🧠</div>

                  <h3 className="mt-4 font-extrabold text-blue-950">
                    إدارة الطاقة
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    أوضاع مختلفة حسب طبيعة الاستخدام والإعدادات.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <div className="text-4xl">🔋</div>

                  <h3 className="mt-4 font-extrabold text-blue-950">
                    توفير الطاقة
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    يمكن استخدام أوضاع توفير الطاقة أثناء توقف المركبة.
                  </p>
                </div>
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
              أين يمكن استخدام جهاز W15L 4G؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              التصميم اللاسلكي والمغناطيسي والبطارية الكبيرة يجعلون W15L
              مناسبًا للعديد من حالات تتبع المركبات والأصول.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-md">
              <div className="text-4xl">🚗</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                السيارات والمركبات
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                متابعة المركبة وموقعها وحركتها بدون توصيلات كهربائية.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <div className="text-4xl">📦</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                الحاويات والشحنات
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                مناسب لمتابعة الحاويات والشحنات التي تحتوي على سطح معدني
                مناسب للتثبيت.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <div className="text-4xl">🚜</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                المعدات والأصول
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                حل لاسلكي لمتابعة المعدات والأصول التي تحتاج إلى جهاز
                قابل للفك والنقل.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <div className="text-4xl">🛡️</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                تأمين المركبات
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                تنبيهات الحركة والسرعة ونزع الجهاز تساعد على متابعة
                المركبة أثناء التوقف.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <div className="text-4xl">🏢</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                الشركات والأساطيل
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                مناسب لمتابعة المركبات والأصول ضمن أنظمة التتبع.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <div className="text-4xl">🔄</div>

              <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                الاستخدام المتنقل
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                يمكن فك الجهاز ونقله بسهولة من أصل أو مركبة إلى أخرى.
              </p>
            </div>
          </div>
        </section>

        {/* WHY */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <span className="font-bold text-blue-700">
              أهم نقطة تميزه
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              بطارية كبيرة + مغناطيس + 4G + حماية IP65
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              يجمع W15L 4G بين بطارية 7500mAh والتثبيت المغناطيسي القوي
              وشبكة 4G والحماية IP65، مع تنبيهات الحركة والسرعة والسياج
              الجغرافي ونزع الجهاز.
            </p>

            <div className="mt-10 grid gap-5 text-right sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🔋 بطارية 7500mAh
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  بطارية كبيرة قابلة لإعادة الشحن مع أوضاع مختلفة لإدارة
                  استهلاك الطاقة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🧲 تثبيت مغناطيسي
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  لا يحتاج إلى توصيل أسلاك ويمكن تثبيته على الأسطح
                  المعدنية المناسبة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  📡 شبكة 4G
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  يعمل على 4G LTE Cat.1 حسب إصدار الجهاز والشبكة المتاحة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🚨 تنبيهات متعددة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  حركة واهتزاز وسرعة وGeo-Fence وبطارية منخفضة ونزع الجهاز.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTE */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8 text-center shadow-sm">
            <div className="text-4xl">⚠️</div>

            <h2 className="mt-3 text-2xl font-extrabold text-blue-950">
              نقطة مهمة قبل الشراء
            </h2>

            <p className="mt-4 text-lg font-bold leading-9 text-gray-700">
              لا يُفضّل تثبيت مدة تشغيل محددة لبطارية W15L.
            </p>

            <p className="mt-3 leading-8 text-gray-600">
              مدة التشغيل الفعلية تختلف حسب معدل تحديث الموقع، وحركة
              المركبة، ووضع التشغيل، وإعدادات توفير الطاقة وطريقة
              الاستخدام.
            </p>
          </div>
        </section>

        {/* COMPARISON CTA */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <span className="font-bold text-blue-200">
              محتار بين جهازين؟
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              قارن بين أجهزة GPS واختار الأنسب
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تعرف على الفرق بين الأجهزة من حيث طريقة التركيب والشبكة
              والبطارية والمميزات والاستخدام المناسب لكل جهاز.
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
                أسئلة شائعة عن جهاز W15L 4G
              </h2>
            </div>

            <div className="mt-10 space-y-5">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl bg-gray-50 p-6 shadow-sm"
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
              هل تريد معرفة المزيد عن جهاز W15L 4G؟
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