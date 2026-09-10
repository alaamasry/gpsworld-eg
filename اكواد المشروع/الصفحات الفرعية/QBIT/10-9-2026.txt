import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "QBIT | جهاز تتبع GPS صغير ومحمول في مصر",
  description:
    "جهاز QBIT GPS لتتبع السيارات والمركبات والأشخاص والحيوانات والأمتعة، بحجم صغير وبطارية تدوم 2 إلى 3 أيام، مع GPS وLBS وWiFi ودعم Tracksolid Pro.",
  keywords: [
    "QBIT",
    "QBIT GPS",
    "جهاز QBIT",
    "جهاز تتبع QBIT",
    "QBIT GPS Tracker",
    "جهاز GPS صغير",
    "جهاز تتبع صغير",
    "جهاز تتبع محمول",
    "جهاز تتبع سيارات",
    "جهاز تتبع السيارة",
    "جهاز تتبع GPS",
    "أجهزة GPS مصر",
    "GPS Tracker مصر",
    "تتبع السيارات",
    "تتبع المركبات",
    "تتبع الأطفال",
    "تتبع كبار السن",
    "تتبع الحيوانات",
    "Tracksolid Pro",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/qbit",
  },
  openGraph: {
    title: "QBIT | جهاز تتبع GPS صغير ومحمول في مصر",
    description:
      "جهاز QBIT GPS صغير ومحمول لتتبع السيارات والأشخاص والحيوانات والأمتعة، مع GPS وLBS وWiFi ودعم Tracksolid Pro.",
    url: "https://gpsworld-eg.com/devices/qbit",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/QBIT.jpeg",
        width: 1200,
        height: 630,
        alt: "QBIT جهاز تتبع GPS صغير ومحمول",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QBIT | جهاز تتبع GPS صغير ومحمول",
    description:
      "جهاز QBIT لتتبع السيارات والأشخاص والحيوانات والأمتعة مع GPS وLBS وWiFi وTracksolid Pro.",
    images: ["/images/QBIT.jpeg"],
  },
};

const product = {
  name: "QBIT",
  image: "/images/QBIT.jpeg",
  url: "https://gpsworld-eg.com/devices/qbit",
};

const faqs = [
  {
    question: "هل يحتاج جهاز QBIT إلى تركيب أسلاك؟",
    answer:
      "لا، جهاز QBIT جهاز محمول يعمل ببطارية داخلية ولا يحتاج إلى توصيل أسلاك داخل السيارة.",
  },
  {
    question: "كم تستمر بطارية QBIT؟",
    answer:
      "تعمل البطارية حوالي 2 إلى 3 أيام، وتختلف المدة حسب طريقة الاستخدام ووضع التشغيل.",
  },
  {
    question: "هل يدعم QBIT المكالمات؟",
    answer:
      "نعم، يدعم الجهاز إجراء واستقبال المكالمات الصوتية، بالإضافة إلى خاصية الاستماع الصوتي عند تفعيلها.",
  },
  {
    question: "هل يوجد سجل لحركة الجهاز؟",
    answer:
      "نعم، يمكن مراجعة سجل الحركة لمدة تصل إلى 90 يومًا وفقًا لنظام المتابعة المستخدم.",
  },
  {
    question: "ما التطبيق المستخدم مع QBIT؟",
    answer:
      "يعمل QBIT مع تطبيق Tracksolid Pro للمتابعة وعرض الموقع والتنبيهات والتقارير.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: ["https://gpsworld-eg.com/images/QBIT.jpeg"],
      url: product.url,
      description:
        "جهاز QBIT GPS صغير ومحمول لتتبع السيارات والأشخاص والحيوانات والأمتعة، مع GPS وLBS وWiFi ودعم Tracksolid Pro.",
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
          name: "QBIT",
          item: "https://gpsworld-eg.com/devices/qbit",
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
  "مرحبًا، أريد الاستفسار عن جهاز QBIT GPS"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز QBIT GPS"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

export default function QBITPage() {
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

        {/* PRODUCT */}
        <section className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
              <Image
                src={product.image}
                alt="QBIT جهاز تتبع GPS صغير ومحمول"
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
                جهاز QBIT لتتبع السيارات والأشخاص والمقتنيات
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                جهاز تتبع GPS صغير ومحمول
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز QBIT هو جهاز تتبع GPS صغير ومحمول، مناسب لمتابعة السيارات
                والمركبات وكذلك الأطفال وكبار السن والحيوانات والأمتعة
                والمقتنيات المهمة. يتميز بحجمه الصغير وسهولة استخدامه، مع
                إمكانية المتابعة من خلال تطبيق Tracksolid Pro.
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

        {/* FEATURES & SPECS */}
        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
                ⭐ أهم مميزات جهاز QBIT
              </h2>

              <ul className="space-y-4 text-lg leading-8 text-gray-700">
                <li>📍 متابعة الموقع بشكل لحظي.</li>

                <li>
                  📡 يدعم تحديد الموقع باستخدام GPS وLBS وWiFi.
                </li>

                <li>
                  🔋 بطارية تعمل لمدة حوالي 2 إلى 3 أيام حسب طريقة الاستخدام.
                </li>

                <li>
                  ⚡ وضع توفير الطاقة للمساعدة على إطالة عمر البطارية.
                </li>

                <li>
                  🚨 تنبيهات عند تجاوز السرعة أو الخروج من النطاق الجغرافي.
                </li>

                <li>
                  🆘 زر SOS لإرسال تنبيه والتواصل مع أرقام الطوارئ المسجلة.
                </li>

                <li>
                  📞 إمكانية إجراء واستقبال المكالمات الصوتية.
                </li>

                <li>
                  🎙️ دعم الاستماع الصوتي المحيطي عند تفعيل الخاصية.
                </li>

                <li>
                  🔔 تنبيه عند انخفاض البطارية أو العبث بالجهاز.
                </li>

                <li>
                  🛣️ إمكانية مراجعة سجل حركة الجهاز حتى 90 يومًا.
                </li>

                <li>
                  🗺️ عرض الموقع والحركة على الخرائط من خلال نظام المتابعة.
                </li>

                <li>
                  📱 يعمل مع تطبيق Tracksolid Pro على الهاتف والأجهزة المختلفة.
                </li>

                <li>🔌 شحن الجهاز بسهولة عن طريق USB.</li>

                <li>
                  📦 حجم صغير مناسب للاستخدام اليومي وسهل الحمل.
                </li>

                <li>
                  🤝 دعم فني ومتابعة من GPS World Egypt.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
                ⚙️ المواصفات الفنية لجهاز QBIT
              </h2>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    الموديل
                  </div>
                  <div className="p-4 text-gray-600">QBIT</div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    نوع الجهاز
                  </div>
                  <div className="p-4 text-gray-600">
                    GPS Tracker محمول
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    تحديد الموقع
                  </div>
                  <div className="p-4 text-gray-600">
                    GPS + LBS + WiFi
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    البطارية
                  </div>
                  <div className="p-4 text-gray-600">
                    تعمل حوالي 2 إلى 3 أيام حسب الاستخدام
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    الشحن
                  </div>
                  <div className="p-4 text-gray-600">USB</div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    زر SOS
                  </div>
                  <div className="p-4 text-gray-600">
                    يدعم حتى 3 أرقام طوارئ
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    المكالمات الصوتية
                  </div>
                  <div className="p-4 text-gray-600">
                    إرسال واستقبال المكالمات
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    الاستماع الصوتي
                  </div>
                  <div className="p-4 text-gray-600">مدعوم</div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    سجل الحركة
                  </div>
                  <div className="p-4 text-gray-600">حتى 90 يومًا</div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    التطبيق
                  </div>
                  <div className="p-4 text-gray-600">
                    Tracksolid Pro
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    التنبيهات
                  </div>
                  <div className="p-4 text-gray-600">
                    السرعة - Geo-Fence - السقوط - البطارية
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    بلد التصنيع
                  </div>
                  <div className="p-4 text-gray-600">الصين</div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="bg-gray-50 p-4 font-bold text-gray-700">
                    الضمان
                  </div>
                  <div className="p-4 text-gray-600">
                    سنة ضد عيوب الصناعة
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                طريقة الاستخدام
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                طريقة تشغيل جهاز QBIT
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                جهاز QBIT مصمم ليكون سهل الاستخدام، ولا يحتاج إلى تركيب أسلاك
                داخل السيارة. بعد تركيب شريحة SIM وتشغيل الجهاز يمكن البدء في
                المتابعة من خلال تطبيق Tracksolid Pro.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-blue-900">1</div>

                <h3 className="mt-3 text-lg font-bold text-blue-950">
                  تركيب الشريحة
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  افتح الجهاز وضع شريحة SIM المناسبة.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-blue-900">2</div>

                <h3 className="mt-3 text-lg font-bold text-blue-950">
                  تشغيل الجهاز
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  قم بتشغيل جهاز QBIT وتجهيزه للعمل.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-blue-900">3</div>

                <h3 className="mt-3 text-lg font-bold text-blue-950">
                  تحميل التطبيق
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  حمّل تطبيق Tracksolid Pro على الموبايل.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-blue-900">4</div>

                <h3 className="mt-3 text-lg font-bold text-blue-950">
                  بدء التتبع
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  سجّل الدخول وابدأ متابعة الموقع والحركة والتنبيهات.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USES */}
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                استخدامات متعددة
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أين يمكن استخدام جهاز QBIT؟
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">🚗</div>

                <h3 className="mt-3 text-lg font-bold text-blue-950">
                  السيارات
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  متابعة السيارة وموقعها وحركتها.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">👨‍👩‍👧</div>

                <h3 className="mt-3 text-lg font-bold text-blue-950">
                  الأطفال
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  المساعدة في متابعة حركة الأطفال أثناء التنقل.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">👴</div>

                <h3 className="mt-3 text-lg font-bold text-blue-950">
                  كبار السن
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  مناسب للمتابعة أثناء التنقل خارج المنزل.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">🐕</div>

                <h3 className="mt-3 text-lg font-bold text-blue-950">
                  الحيوانات
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  إمكانية متابعة الحيوانات والأماكن التي تتحرك فيها.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">🎒</div>

                <h3 className="mt-3 text-lg font-bold text-blue-950">
                  الأمتعة والمقتنيات
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  مناسب لمتابعة الحقائب والمقتنيات المهمة.
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
              لماذا تختار جهاز QBIT؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              إذا كنت تبحث عن جهاز تتبع GPS صغير وسهل الحمل، فإن QBIT يوفر
              مجموعة من وظائف التتبع والتنبيهات في حجم صغير، مع دعم GPS وLBS
              وWiFi وتطبيق Tracksolid Pro، بالإضافة إلى البطارية القابلة للشحن
              وسهولة الاستخدام في السيارة أو أثناء التنقل.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="text-center">
            <span className="font-bold text-blue-700">
              الأسئلة الشائعة
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              أسئلة مهمة عن جهاز QBIT
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-blue-950">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              هل تريد معرفة المزيد عن جهاز QBIT؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة التفاصيل والتوفر وطلب جهاز التتبع.
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