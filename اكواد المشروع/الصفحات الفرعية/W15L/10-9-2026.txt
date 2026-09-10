import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "W15L | جهاز تتبع GPS لاسلكي للأصول في مصر",

  description:
    "جهاز W15L لتتبع السيارات والمركبات والأصول في مصر، بتصميم لاسلكي وبطارية 7500mAh ومغناطيس قوي، مع تتبع لحظي وتنبيهات ومقاومة للماء والأتربة.",

  keywords: [
    "W15L",
    "جهاز W15L",
    "W15L GPS",
    "W15L GPS Tracker",
    "جهاز تتبع W15L",
    "جهاز GPS W15L",
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
    "جهاز تتبع أصول",
    "جهاز تتبع لاسلكي",
    "جهاز تتبع مغناطيسي",
    "جهاز تتبع سيارات مصر",
  ],

  alternates: {
    canonical: "https://gpsworld-eg.com/devices/w15l",
  },

  openGraph: {
    title: "W15L | جهاز تتبع GPS لاسلكي للأصول في مصر",

    description:
      "جهاز W15L لتتبع السيارات والمركبات والأصول، بتصميم لاسلكي وبطارية ممتدة وتتبع لحظي وتنبيهات ومقاومة للماء والأتربة.",

    url: "https://gpsworld-eg.com/devices/w15l",

    siteName: "GPS World Egypt",

    locale: "ar_EG",

    type: "website",

    images: [
      {
        url: "/images/W15L.jpeg",
        width: 1200,
        height: 630,
        alt: "W15L جهاز تتبع GPS لاسلكي في مصر",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "W15L | جهاز تتبع GPS لاسلكي للأصول في مصر",

    description:
      "جهاز W15L لتتبع السيارات والمركبات والأصول مع بطارية 7500mAh وتتبع لحظي وتنبيهات.",

    images: ["/images/W15L.jpeg"],
  },
};

const product = {
  name: "W15L",
  image: "/images/W15L.jpeg",
  url: "https://gpsworld-eg.com/devices/w15l",
};

const faqs = [
  {
    question: "هل جهاز W15L يحتاج إلى تركيب وتوصيلات؟",
    answer:
      "الجهاز مصمم ليكون لاسلكيًا وسهل التثبيت، ويحتوي على مغناطيس قوي يساعد على تركيبه دون الحاجة إلى توصيلات كهربائية معقدة.",
  },
  {
    question: "ما سعة بطارية جهاز W15L؟",
    answer:
      "يأتي الجهاز ببطارية بسعة 7500mAh، وتختلف مدة التشغيل الفعلية حسب وضع التتبع وطريقة الاستخدام وإعدادات الجهاز.",
  },
  {
    question: "هل جهاز W15L مقاوم للماء؟",
    answer:
      "نعم، الجهاز حاصل على تصنيف IP65 للحماية من الأتربة ورذاذ الماء، مما يجعله مناسبًا للاستخدام في ظروف مختلفة.",
  },
  {
    question: "هل يدعم الجهاز تتبع الموقع بشكل لحظي؟",
    answer:
      "نعم، يدعم W15L التتبع اللحظي ومتابعة موقع وحركة الأصل من خلال النظام أو السيرفر المتوافق مع الجهاز.",
  },
  {
    question: "هل يمكن استخدام W15L لمتابعة الأصول؟",
    answer:
      "نعم، الجهاز مناسب لمتابعة المركبات والأصول، وخاصة الحالات التي تحتاج إلى جهاز لاسلكي سهل التثبيت وبطارية كبيرة.",
  },
  {
    question: "هل يدعم جهاز W15L المراقبة الصوتية؟",
    answer:
      "يدعم الجهاز خاصية المراقبة الصوتية وفقًا لتجهيز الجهاز والنظام المستخدم.",
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
        "جهاز W15L لتتبع السيارات والمركبات والأصول مع تصميم لاسلكي وبطارية 7500mAh وتتبع لحظي وتنبيهات.",
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
          name: "W15L",
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

const whatsappNumber = "201006687163";

const whatsappMessage = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز W15L"
);

const whatsappOrderMessage = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز W15L"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrderMessage;

const whatsappBaseUrl = "https://wa.me/201006687163";

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
            <div className="flex items-center justify-between">
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
            {/* IMAGE */}

            <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
              <Image
                src={product.image}
                alt="W15L جهاز تتبع GPS لاسلكي للأصول والسيارات في مصر"
                width={650}
                height={500}
                priority
                className="max-h-[500px] w-full object-contain"
              />
            </div>

            {/* INFO */}

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز W15L لتتبع السيارات والمركبات والأصول
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                جهاز تتبع GPS لاسلكي ببطارية ممتدة
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز W15L هو جهاز تتبع GPS لاسلكي محمول مصمم لمتابعة
                السيارات والمركبات والأصول، مع بطارية قوية بسعة 7500mAh
                وتصميم عملي مزود بمغناطيس قوي للتثبيت السريع دون الحاجة
                إلى توصيلات أو تركيب معقد.
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
              <div className="text-3xl">🔋</div>

              <h3 className="mt-3 font-extrabold text-blue-950">
                بطارية 7500mAh
              </h3>

              <p className="mt-2 text-gray-600">تشغيل لفترات طويلة</p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-3xl">📍</div>

              <h3 className="mt-3 font-extrabold text-blue-950">
                تتبع لحظي
              </h3>

              <p className="mt-2 text-gray-600">متابعة الموقع والحركة</p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-3xl">🧲</div>

              <h3 className="mt-3 font-extrabold text-blue-950">
                تثبيت مغناطيسي
              </h3>

              <p className="mt-2 text-gray-600">تركيب سريع وسهل</p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-3xl">💧</div>

              <h3 className="mt-3 font-extrabold text-blue-950">
                مقاوم للماء والأتربة
              </h3>

              <p className="mt-2 text-gray-600">حماية بمعيار IP65</p>
            </div>
          </div>
        </section>

        {/* FEATURES + SPECS */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* FEATURES */}

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
                ⭐ أهم مميزات جهاز W15L
              </h2>

              <ul className="space-y-4 text-lg leading-8 text-gray-700">
                <li>
                  📍 تتبع الموقع بشكل لحظي ومتابعة حركة الأصل أو المركبة.
                </li>

                <li>
                  🧲 تصميم لاسلكي مع مغناطيس قوي للتثبيت السريع.
                </li>

                <li>
                  🔋 بطارية قوية بسعة 7500mAh لتوفير فترة تشغيل طويلة.
                </li>

                <li>💧 مقاومة للماء والأتربة بمعيار IP65.</li>

                <li>🚨 تنبيه عند انخفاض مستوى البطارية.</li>

                <li>
                  💡 تنبيه حساس الضوء عند حدوث تغير مفاجئ في الإضاءة،
                  وهو مفيد في حالات العبث أو الفتح غير المصرح به.
                </li>

                <li>🎙️ دعم خاصية المراقبة الصوتية.</li>

                <li>
                  🌡️ إمكانية إضافة مستشعرات درجة الحرارة والرطوبة
                  حسب التجهيز والنظام المستخدم.
                </li>

                <li>⚙️ عدة أوضاع تشغيل لتناسب احتياجات التتبع المختلفة.</li>

                <li>
                  🔄 دعم التحديث عن بُعد OTA لإضافة تحسينات وخصائص جديدة
                  دون الحاجة إلى فك الجهاز.
                </li>

                <li>
                  🛠️ مناسب للاستخدام الشخصي والتجاري ومتابعة الأصول.
                </li>

                <li>🤝 دعم فني ومتابعة من GPS World Egypt.</li>
              </ul>
            </div>

            {/* TECHNICAL SPECS */}

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
                ⚙️ المواصفات الفنية لجهاز W15L
              </h2>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الموديل</span>

                  <span className="text-gray-600">W15L</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    نوع الجهاز
                  </span>

                  <span className="text-gray-600">
                    GPS Tracker لاسلكي
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    أنظمة تحديد الموقع
                  </span>

                  <span className="text-gray-600">
                    GPS / BDS / GNSS / LBS
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    شبكة الاتصال
                  </span>

                  <span className="text-gray-600">4G</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    سعة البطارية
                  </span>

                  <span className="text-gray-600">7500mAh</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">الأبعاد</span>

                  <span className="text-gray-600">
                    86 × 63 × 34 مم
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الوزن</span>

                  <span className="text-gray-600">245 جرام</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">الحماية</span>

                  <span className="text-gray-600">IP65</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">التتبع</span>

                  <span className="text-gray-600">
                    تتبع لحظي وتتبع ذكي
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    أوضاع التشغيل
                  </span>

                  <span className="text-gray-600">
                    تتبع لحظي / ذكي / توفير الطاقة / تنبيهات
                  </span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    مؤشرات LED
                  </span>

                  <span className="text-gray-600">
                    GSM / GPS / الطاقة
                  </span>
                </div>

                <div className="grid grid-cols-2 p-4">
                  <span className="font-bold text-gray-800">التحديث</span>

                  <span className="text-gray-600">OTA عن بُعد</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">الاستخدامات</span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أين يمكن استخدام جهاز W15L؟
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                تصميم W15L اللاسلكي والبطارية الممتدة يجعله مناسبًا
                لمتابعة المركبات والأصول التي تحتاج إلى حل تتبع عملي
                وسهل التركيب.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🚗</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  شركات تأجير السيارات
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة السيارات وإدارة الأصول بشكل أسهل.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">📦</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  نقل ومتابعة البضائع
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  مراقبة حركة الأصول والبضائع أثناء النقل.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🏦</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  التمويل والقروض
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  مناسب لمتابعة المركبات والأصول محل التمويل.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🛡️</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  الحماية من السرقة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  تنبيهات ومتابعة تساعد على مراقبة الأصل.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🚚</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  إدارة الأساطيل
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة المركبات والأصول ضمن أنظمة الإدارة.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🏢</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  إدارة الأصول
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  حل عملي لمتابعة الأصول في المواقع والقطاعات المختلفة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OPERATING MODES */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                أوضاع التشغيل
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                اختر وضع التشغيل المناسب لاحتياجك
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-3xl">📍</div>

                <h3 className="mt-4 font-extrabold text-blue-950">
                  التتبع اللحظي
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة الموقع والحركة بشكل مستمر.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-3xl">🧠</div>

                <h3 className="mt-4 font-extrabold text-blue-950">
                  التتبع الذكي
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  تشغيل الجهاز بطريقة تساعد على إدارة استهلاك الطاقة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-3xl">🔋</div>

                <h3 className="mt-4 font-extrabold text-blue-950">
                  توفير الطاقة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  وضع مناسب عند الحاجة إلى إطالة فترة تشغيل البطارية.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-3xl">🚨</div>

                <h3 className="mt-4 font-extrabold text-blue-950">
                  التتبع مع التنبيهات
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة الجهاز مع الاستفادة من التنبيهات المختلفة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <span className="font-bold text-blue-700">
              GPS World Egypt
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              لماذا تختار جهاز W15L؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              جهاز W15L يجمع بين سهولة التركيب والتصميم اللاسلكي
              والبطارية الكبيرة، مما يجعله مناسبًا لمتابعة المركبات
              والأصول التي تحتاج إلى حل تتبع عملي دون تركيب معقد.
            </p>

            <div className="mt-10 grid gap-5 text-right sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🔋 بطارية كبيرة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  بطارية بسعة 7500mAh لتوفير فترة تشغيل طويلة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🧲 تركيب سهل
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  مغناطيس قوي يسمح بتثبيت الجهاز بسرعة وفي أماكن مختلفة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  💧 حماية IP65
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  مقاومة للماء والأتربة للاستخدام في ظروف متنوعة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold text-blue-950">
                  🔄 تحديث OTA
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  إمكانية التحديث عن بُعد دون الحاجة إلى فك الجهاز.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="text-center">
            <span className="font-bold text-blue-700">
              الأسئلة الشائعة
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              أسئلة شائعة عن جهاز W15L
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl bg-white p-6 shadow-md"
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
        </section>

        {/* CONTACT */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              هل تريد معرفة المزيد عن جهاز W15L؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة التفاصيل والتوفر وطلب جهاز W15L.
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