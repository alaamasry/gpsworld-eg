import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "EV402 2G | جهاز تتبع GPS صغير للسيارات والمركبات",
  description:
    "جهاز EV402 2G لتتبع السيارات والمركبات، جهاز GPS سلكي صغير الحجم يعمل بجهد 9–36V DC، مع تتبع مباشر وسجل رحلات ومايك وSOS وتنبيهات وفصل المحرك بالريلاي.",
  keywords: [
    "EV402",
    "EV402 2G",
    "جهاز EV402",
    "جهاز تتبع EV402",
    "جهاز GPS EV402",
    "EV402 GPS Tracker",
    "جهاز تتبع سيارات",
    "جهاز GPS للسيارات",
    "أجهزة تتبع GPS",
    "أجهزة تتبع السيارات",
    "GPS Tracker مصر",
    "أجهزة GPS مصر",
    "تتبع السيارات",
    "تتبع المركبات",
    "جهاز GPS للموتوسيكل",
    "GPS World Egypt",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/ev402-2g",
  },
  openGraph: {
    title: "EV402 2G | جهاز تتبع GPS صغير للسيارات والمركبات",
    description:
      "جهاز EV402 2G صغير الحجم لتتبع السيارات والمركبات، يعمل بجهد 9–36V DC مع تتبع مباشر وسجل رحلات ومايك وSOS وتنبيهات وفصل المحرك.",
    url: "https://gpsworld-eg.com/devices/ev402-2g",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/ev402.jpeg",
        width: 1200,
        height: 630,
        alt: "EV402 جهاز تتبع GPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV402 2G | جهاز تتبع GPS صغير",
    description:
      "جهاز EV402 2G لتتبع السيارات والمركبات، صغير الحجم ويعمل بجهد 9–36V DC.",
    images: ["/images/ev402.jpeg"],
  },
};

const product = {
  name: "EV402",
  image: "/images/ev402.jpeg",
  url: "https://gpsworld-eg.com/devices/ev402-2g",
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز GPS موديل EV402"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز GPS موديل EV402"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

const faqs = [
  {
    question: "ما هو جهاز EV402؟",
    answer:
      "EV402 هو جهاز تتبع GPS سلكي صغير الحجم يعمل على شبكة 2G، ومخصص لمتابعة السيارات والمركبات ومعرفة موقعها وحركتها، مع مجموعة من وظائف الأمان والتنبيهات.",
  },
  {
    question: "هل EV402 مناسب للموتوسيكلات؟",
    answer:
      "نعم، الحجم الصغير وجهد التشغيل من 9 إلى 36V DC يجعلان EV402 مناسبًا للموتوسيكلات والسكوترات، بالإضافة إلى السيارات والمركبات الأخرى التي تناسبها مواصفات الجهاز.",
  },
  {
    question: "هل يمكن فصل محرك السيارة باستخدام EV402؟",
    answer:
      "نعم، يمكن استخدام وظيفة فصل المحرك من خلال ريلاي مع التوصيل الصحيح بدائرة الوقود أو الكهرباء، وتُنفذ العملية حسب طريقة التركيب ونظام المركبة.",
  },
  {
    question: "هل يوجد ميكروفون أو خاصية الاستماع في EV402؟",
    answer:
      "نعم، يحتوي EV402 على ميكروفون ويدعم خاصية الاستماع عن بُعد حسب إعدادات الجهاز وطريقة التوصيل والنظام المستخدم.",
  },
  {
    question: "هل يوجد زر SOS في EV402؟",
    answer:
      "نعم، يدعم EV402 زر SOS لإرسال تنبيه في حالات الطوارئ حسب إعدادات الجهاز وطريقة التركيب.",
  },
  {
    question: "ما جهد تشغيل EV402؟",
    answer:
      "يعمل EV402 على نطاق جهد 9–36V DC، ولذلك يمكن استخدامه مع السيارات والموتوسيكلات والمركبات المناسبة لهذا النطاق.",
  },
  {
    question: "هل EV402 يعمل على 4G؟",
    answer:
      "لا، النسخة المعتمدة لدينا من EV402 تعمل على شبكة 2G.",
  },
  {
    question: "ما مقاس ووزن EV402؟",
    answer:
      "مقاس الجهاز حوالي 72 × 31 × 12 مم، ووزنه حوالي 30 جرام.",
  },
  {
    question: "كيف أطلب جهاز EV402؟",
    answer:
      "يمكنك التواصل معنا عبر واتساب أو الاتصال بنا لمعرفة التفاصيل والتوفر وطلب الجهاز.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: ["https://gpsworld-eg.com/images/ev402.jpeg"],
      url: product.url,
      description:
        "جهاز EV402 2G صغير الحجم لتتبع السيارات والمركبات، يعمل بجهد 9–36V DC مع تتبع مباشر وسجل رحلات ومايك وSOS وتنبيهات وإمكانية فصل المحرك بالريلاي.",
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
          name: "EV402",
          item: "https://gpsworld-eg.com/devices/ev402-2g",
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

export default function EV402Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main
        className="min-h-screen bg-white text-gray-900"
        dir="rtl"
        style={{
          backgroundColor: "#ffffff",
          color: "#0f172a",
        }}
      >
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <DeviceGallery
                images={[
                  "/images/ev402.jpeg",
                  "/images/ev402-2.jpeg",
                  "/images/ev402-3.jpeg",
                  "/images/ev402-4.jpeg",
                  "/images/ev402-5.jpeg",
                  "/images/ev402-6.jpeg",
                ]}
                deviceName="EV402"
              />
            </div>

            <div>
              <span className="mb-5 inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز EV402 2G لتتبع السيارات والمركبات
              </h1>

              <p className="mt-4 text-xl font-bold text-blue-700">
                جهاز GPS سلكي صغير الحجم بجهد تشغيل 9–36V
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-700">
                لو بتدور على جهاز تتبع GPS صغير وسهل إخفاؤه داخل المركبة،
                فجهاز EV402 من الاختيارات العملية. الجهاز يعمل على شبكة 2G،
                ويدعم تتبع موقع المركبة وحركتها وسجل الرحلات، مع السرعة
                والتنبيهات والمايك وSOS وإمكانية فصل المحرك باستخدام ريلاي
                عند تركيبه وتوصيله بشكل صحيح.
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
            <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-md">
              <div className="text-3xl">📡</div>

              <h3 className="mt-3 font-extrabold text-blue-950">
                شبكة 2G
              </h3>

              <p className="mt-2 text-gray-700">
                يعمل على شبكة 2G المناسبة لنظام الجهاز.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-md">
              <div className="text-3xl">⚡</div>

              <h3 className="mt-3 font-extrabold text-blue-950">
                9–36V DC
              </h3>

              <p className="mt-2 text-gray-700">
                نطاق جهد تشغيل مناسب للسيارات والموتوسيكلات والمركبات
                المناسبة.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-md">
              <div className="text-3xl">📦</div>

              <h3 className="mt-3 font-extrabold text-blue-950">
                حجم صغير
              </h3>

              <p className="mt-2 text-gray-700">
                حوالي 72 × 31 × 12 مم ووزن حوالي 30 جرام.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-md">
              <div className="text-3xl">🎙️</div>

              <h3 className="mt-3 font-extrabold text-blue-950">
                مايك + SOS
              </h3>

              <p className="mt-2 text-gray-700">
                مايك للاستماع عن بُعد وزر SOS للطوارئ حسب الإعداد والتركيب.
              </p>
            </div>
          </div>
        </section>

        {/* DETAILED FEATURES */}
        <section className="mx-auto max-w-7xl px-5 py-12">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                مميزات جهاز EV402
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مميزات جهاز GPS EV402 بالتفصيل
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-700">
                جهاز EV402 يجمع بين الحجم الصغير ومجموعة متكاملة من وظائف
                التتبع والأمان، مما يجعله مناسبًا خصوصًا للمركبات التي تحتاج
                إلى جهاز يمكن إخفاؤه بسهولة.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {/* 1 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">1️⃣</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  تتبع مباشر للمركبة
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يمكنك متابعة موقع المركبة ومعرفة حركتها من خلال نظام التتبع
                  المناسب، مع إمكانية معرفة موقعها أثناء الحركة.
                </p>
              </div>

              {/* 2 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">2️⃣</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  سجل الحركة والرحلات
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يمكن متابعة مسار وحركة المركبة السابقة من خلال النظام
                  المستخدم مع الجهاز، حسب إعدادات النظام ومدة حفظ البيانات.
                </p>
              </div>

              {/* 3 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">3️⃣</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  معرفة السرعة
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يمكن متابعة سرعة المركبة أثناء الحركة واستقبال تنبيه عند
                  تجاوز السرعة المحددة حسب إعدادات النظام.
                </p>
              </div>

              {/* 4 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">4️⃣</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  فصل المحرك بالريلاي
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يمكن تنفيذ أمر فصل المحرك عن طريق ريلاي يتم تركيبه وتوصيله
                  بالطريقة الصحيحة بدائرة الوقود أو الكهرباء، حسب نوع المركبة
                  وطريقة التركيب.
                </p>
              </div>

              {/* 5 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">5️⃣</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  الميكروفون والاستماع
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يحتوي الجهاز على ميكروفون ويدعم خاصية الاستماع عن بُعد حسب
                  إعدادات الجهاز وطريقة التوصيل والنظام المستخدم.
                </p>
              </div>

              {/* 6 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">6️⃣</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  زر SOS للطوارئ
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يدعم الجهاز زر SOS لإرسال تنبيه في حالات الطوارئ إلى الأرقام
                  أو النظام المحدد حسب إعدادات الجهاز وطريقة التركيب.
                </p>
              </div>

              {/* 7 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">7️⃣</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  تنبيه عند فصل الكهرباء
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  البطارية الداخلية تساعد الجهاز على التعامل مع انقطاع كهرباء
                  المركبة وإرسال تنبيه عند حدوث فصل أو عبث حسب إعدادات النظام.
                </p>
              </div>

              {/* 8 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">8️⃣</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  تنبيه الحركة والاهتزاز
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يمكن استخدام تنبيهات الحركة والاهتزاز لمتابعة أي حركة غير
                  طبيعية للمركبة أثناء توقفها، حسب إعدادات الجهاز والنظام.
                </p>
              </div>

              {/* 9 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">9️⃣</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  Geo-Fence
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  إمكانية تحديد نطاق جغرافي ومتابعة دخول المركبة أو خروجها من
                  النطاق حسب النظام وإعداداته.
                </p>
              </div>

              {/* 10 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">🔟</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  ACC تشغيل وإيقاف
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يساعد النظام على متابعة حالة تشغيل وإيقاف المركبة من خلال
                  إشارة ACC عند تركيب الجهاز بالشكل الصحيح.
                </p>
              </div>

              {/* 11 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">🔋</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  بطارية داخلية 55mAh
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يحتوي EV402 على بطارية داخلية بسعة 55mAh، وتساعد بشكل أساسي
                  في التعامل مع انقطاع كهرباء المركبة وإرسال تنبيه فصل الطاقة.
                </p>
              </div>

              {/* 12 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">⚡</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  جهد تشغيل 9–36V
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يعمل الجهاز على نطاق 9–36V DC، مما يجعله مناسبًا للسيارات
                  والموتوسيكلات والسكوترات والمركبات التي تقع ضمن هذا النطاق.
                </p>
              </div>

              {/* 13 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">📦</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  حجم صغير وسهل الإخفاء
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  أبعاد الجهاز حوالي 72 × 31 × 12 مم ووزنه حوالي 30 جرام، لذلك
                  يعتبر مناسبًا جدًا للأماكن التي تحتاج إلى جهاز صغير الحجم.
                </p>
              </div>

              {/* 14 */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div className="text-3xl">🏍️</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  مناسب للموتوسيكلات والمركبات الصغيرة
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  الحجم الصغير ومدى جهد التشغيل يجعلان EV402 اختيارًا عمليًا
                  للموتوسيكلات والسكوترات، بالإضافة إلى السيارات والمركبات
                  الأخرى المناسبة لمواصفاته.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICAL DIFFERENCES */}
        <section className="bg-gray-50 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                عمليًا مع EV402
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                لماذا قد يكون EV402 مناسبًا لك؟
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-700">
                لو أهم حاجة عندك جهاز صغير وسهل إخفاؤه ويعمل على 9–36V، فـ
                EV402 يقدم مجموعة متكاملة من وظائف التتبع والأمان مثل المايك
                وSOS والتنبيهات وفصل المحرك.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-7 shadow-md">
                <div className="text-4xl">📦</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  صغير جدًا
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  حجمه الصغير يساعد في تركيبه داخل أماكن مختلفة بالمركبة
                  وإخفائه بسهولة أكبر.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-md">
                <div className="text-4xl">⚡</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  9–36V
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  نطاق تشغيل مناسب للسيارات والموتوسيكلات والمركبات التي تقع
                  ضمن نطاق الجهد.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-md">
                <div className="text-4xl">🎙️</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  مايك + SOS
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يجمع بين التتبع ووظائف الأمان مثل الاستماع عن بُعد وزر SOS،
                  بالإضافة إلى إمكانية فصل المحرك.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT INFORMATION */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                معلومات مهمة قبل التركيب
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950">
                إمكانيات EV402
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-blue-950">
                  🎙️ الميكروفون والاستماع
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  الجهاز مزود بميكروفون ويدعم خاصية الاستماع عن بُعد حسب
                  إعدادات الجهاز وطريقة التوصيل والنظام المستخدم.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-blue-950">
                  🆘 زر SOS
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  يدعم الجهاز زر SOS لإرسال تنبيه في حالات الطوارئ حسب طريقة
                  التركيب وإعدادات الجهاز.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
            <div className="text-center">
              <span className="font-bold text-blue-700">الاستخدامات</span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أين يمكن استخدام EV402؟
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚗</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  السيارات الخاصة
                </h3>

                <p className="mt-2 text-gray-700">
                  لمتابعة السيارة ومعرفة موقعها وحركتها.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🏍️</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  الموتوسيكلات
                </h3>

                <p className="mt-2 text-gray-700">
                  مناسب بشكل خاص للمركبات التي تحتاج جهازًا صغيرًا وسهل
                  الإخفاء.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚛</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  المركبات التجارية
                </h3>

                <p className="mt-2 text-gray-700">
                  لمتابعة المركبات المستخدمة في العمل حسب الجهد والتركيب.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚚</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  الأساطيل
                </h3>

                <p className="mt-2 text-gray-700">
                  لمتابعة وتنظيم حركة المركبات ضمن أنظمة التتبع المناسبة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL NOTES */}
        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-white md:p-10">
            <div className="text-center">
              <span className="font-bold text-cyan-300">
                ملاحظات فنية
              </span>

              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                قبل تركيب جهاز EV402
              </h2>
            </div>

            <div className="mt-8 space-y-4 text-lg leading-9 text-blue-100">
              <p>
                • الجهاز يعمل على شبكة 2G، لذلك يجب التأكد من توفر تغطية الشبكة
                المناسبة في مكان استخدام المركبة.
              </p>

              <p>
                • جهد تشغيل الجهاز من 9 إلى 36V DC، ويجب التأكد من أن جهد
                المركبة مناسب قبل التركيب.
              </p>

              <p>
                • فصل المحرك يحتاج إلى ريلاي وتركيب صحيح، ويجب تنفيذ التوصيل
                بواسطة فني يعرف دائرة المركبة.
              </p>

              <p>
                • وظائف المايك والاستماع وSOS والتنبيهات وسجل الرحلات تعتمد
                على إعدادات الجهاز والنظام وطريقة التركيب.
              </p>

              <p>
                • بطارية 55mAh داخلية تساعد الجهاز عند انقطاع كهرباء المركبة
                وتدعم إرسال تنبيه فصل الطاقة.
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-blue-900 p-6 text-center">
              <h3 className="text-xl font-extrabold">🛡️ الضمان</h3>

              <p className="mt-2 text-lg text-blue-100">
                سنة ضد عيوب الصناعة.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON CTA */}
        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 text-center shadow-md md:p-10">
            <span className="font-bold text-blue-700">
              محتار بين أكثر من جهاز؟
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              قارن EV402 مع جهاز آخر
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-700">
              لو مش عارف EV402 أنسب لك ولا جهاز تاني، هنقدر نقارن بين الأجهزة
              ونوضح لك الفرق العملي بينهم حسب استخدامك.
            </p>

            <a
              href="/comparison"
              className="mt-7 inline-flex rounded-xl bg-blue-950 px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-blue-900"
            >
              🔍 مقارنة بين الأجهزة
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="text-center">
            <span className="font-bold text-blue-700">
              الأسئلة الشائعة
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              أسئلة عن جهاز EV402
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer text-xl font-extrabold text-blue-950">
                  {faq.question}
                </summary>

                <p className="mt-3 leading-8 text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-gradient-to-l from-blue-950 to-blue-900 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              هل تريد معرفة المزيد عن جهاز EV402؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-100">
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
            <h3 className="text-2xl font-extrabold">GPS World Egypt</h3>

            <p className="mt-3 text-blue-200">
              أجهزة GPS للتتبع والمراقبة
            </p>

            <p className="mt-5 text-blue-300">📞 01006687163</p>

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