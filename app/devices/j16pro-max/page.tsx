import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "J16PRO Max 4G | جهاز تتبع سيارات GPS 4G في مصر",
  description:
    "جهاز J16PRO Max 4G لتتبع السيارات والمركبات، يعمل بتقنية 4G LTE بجهد 9–90V، بحجم صغير وبطارية احتياطية 150mAh، مع تتبع مباشر وتنبيهات وحماية.",
  keywords: [
    "J16PRO Max 4G",
    "J16PRO Max",
    "J16PRO Max مصر",
    "جهاز J16PRO Max 4G",
    "GPS J16PRO Max",
    "جهاز تتبع سيارات",
    "جهاز تتبع سيارات 4G",
    "جهاز تتبع GPS",
    "جهاز GPS للسيارات",
    "جهاز GPS 4G",
    "GPS Tracker",
    "GPS Tracker Egypt",
    "GPS Tracker مصر",
    "GPS مصر",
    "أجهزة GPS مصر",
    "أجهزة GPS",
    "تتبع السيارات",
    "تتبع السيارة",
    "تتبع المركبات",
    "تتبع الشاحنات",
    "جهاز تتبع مركبات",
    "تتبع السيارات من الموبايل",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/j16pro-max",
  },
  openGraph: {
    title: "J16PRO Max 4G | جهاز تتبع سيارات GPS 4G في مصر",
    description:
      "جهاز J16PRO Max 4G صغير الحجم لتتبع السيارات والمركبات، بجهد تشغيل 9–90V وبطارية احتياطية 150mAh وتتبع مباشر وتنبيهات حماية.",
    url: "https://gpsworld-eg.com/devices/j16pro-max",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/J16PRO max.jpeg",
        width: 1024,
        height: 1024,
        alt: "J16PRO Max 4G جهاز تتبع سيارات GPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J16PRO Max 4G | جهاز تتبع سيارات GPS 4G",
    description:
      "جهاز J16PRO Max 4G صغير الحجم بجهد 9–90V وبطارية احتياطية 150mAh.",
    images: ["/images/J16PRO max.jpeg"],
  },
};

const product = {
  name: "J16PRO Max 4G",
  price: "سعر",
  image: "/images/J16PRO max.jpeg",
  url: "https://gpsworld-eg.com/devices/j16pro-max",
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز J16PRO Max 4G"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز J16PRO Max 4G"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

const faqs = [
  {
    question: "ما هو جهاز J16PRO Max 4G؟",
    answer:
      "جهاز J16PRO Max 4G هو جهاز تتبع GPS سلكي صغير الحجم يتم توصيله مباشرة بكهرباء المركبة، ويعمل على شبكة 4G LTE، مع نطاق جهد تشغيل واسع من 9 إلى 90 فولت وبطارية احتياطية داخلية 150mAh.",
  },
  {
    question: "هل جهاز J16PRO Max 4G يعمل على شبكة 4G؟",
    answer:
      "نعم، يعمل الجهاز على شبكة 4G LTE، وبعض الإصدارات تدعم الانتقال إلى 2G عند ضعف أو عدم توافر تغطية 4G، حسب نسخة الجهاز والشبكة المستخدمة.",
  },
  {
    question: "ما جهد تشغيل جهاز J16PRO Max 4G؟",
    answer:
      "يعمل الجهاز على نطاق جهد من 9V إلى 90V DC، مما يجعله مناسبًا لمجموعة واسعة من السيارات والموتوسيكلات والشاحنات والمركبات والمعدات، مع مراعاة توافق المركبة وطريقة التركيب.",
  },
  {
    question: "ما حجم جهاز J16PRO Max 4G؟",
    answer:
      "مقاس الجهاز حوالي 80 × 35 × 17 مم، ووزنه حوالي 49 جرامًا، لذلك يتميز بحجم صغير يساعد على تركيبه وإخفائه داخل المركبة.",
  },
  {
    question: "هل يدعم الجهاز تتبع السيارة بشكل مباشر؟",
    answer:
      "نعم، يمكن متابعة موقع المركبة وحركتها وسرعتها وخط سيرها من خلال نظام التتبع المتوافق مع الجهاز.",
  },
  {
    question: "هل يمكن فصل محرك السيارة عن بُعد؟",
    answer:
      "يمكن استخدام الجهاز في فصل المحرك عن بُعد عند تركيب الريلاي والتوصيل بالطريقة الصحيحة، وفقًا لدعم الجهاز وطريقة التجهيز.",
  },
  {
    question: "هل يدعم J16PRO Max 4G ريلي لاسلكي؟",
    answer:
      "بعض إصدارات الجهاز تدعم استخدام ريلي لاسلكي عبر Bluetooth للتحكم في فصل المحرك، ويجب التأكد من دعم النسخة قبل التركيب.",
  },
  {
    question: "هل يوجد بطارية احتياطية؟",
    answer:
      "نعم، يحتوي الجهاز على بطارية داخلية احتياطية بسعة 150mAh تساعد على استمرار الجهاز لفترة عند فصل مصدر الكهرباء الرئيسي، حسب ظروف الاستخدام.",
  },
  {
    question: "هل يدعم الجهاز Geo-Fence والتنبيهات؟",
    answer:
      "نعم، يدعم الجهاز مجموعة من وظائف التنبيه مثل فصل الكهرباء والحركة والاهتزاز وتجاوز السرعة والسياج الجغرافي وACC، وفقًا لإعدادات الجهاز ونظام التتبع المستخدم.",
  },
  {
    question: "هل الجهاز مناسب للموتوسيكلات والشاحنات؟",
    answer:
      "نعم، يمكن استخدامه في السيارات والموتوسيكلات والتوك توك والشاحنات والمركبات التجارية وبعض المعدات، مع ضرورة التأكد من توافق جهد المركبة وطريقة التوصيل.",
  },
  {
    question: "هل يوجد ضمان على جهاز J16PRO Max 4G؟",
    answer:
      "نعم، يوجد ضمان لمدة سنة ضد عيوب الصناعة.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: ["https://gpsworld-eg.com/images/J16PRO%20max.jpeg"],
      url: product.url,
      description:
        "جهاز J16PRO Max 4G لتتبع السيارات والمركبات، يعمل على شبكة 4G LTE بجهد تشغيل 9–90V، مع بطارية احتياطية 150mAh وحجم صغير ووظائف تتبع وتنبيهات.",
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
          name: "J16PRO Max 4G",
          item: product.url,
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

export default function J16ProMaxPage() {
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

        {/* ================= BACK ================= */}

        <div className="mx-auto max-w-7xl px-5 pt-6">
          <a
            href="/#products"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-800"
          >
            ← العودة إلى الأجهزة
          </a>
        </div>

        {/* ================= PRODUCT ================= */}

        <section className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* ================= IMAGE ================= */}

            <div className="relative">
              <DeviceGallery
                images={[
                  "/images/J16PRO max.jpeg",
                  "/images/J16PRO max-2.jpeg",
                  "/images/J16PRO max-3.jpeg",
                  "/images/J16PRO max-4.jpeg",
                  "/images/J16PRO max-5.jpeg",
                  "/images/J16PRO max-6.jpeg",
                ]}
                deviceName="J16PRO Max 4G"
              />
            </div>

            {/* ================= DETAILS ================= */}

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز J16PRO Max 4G لتتبع السيارات والمركبات
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                جهاز تتبع GPS سلكي صغير الحجم يعمل بتقنية 4G
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                إنت في الشغل وعايز تعرف العربية أو الموتوسيكل فين؟ جهاز
                J16PRO Max 4G هو جهاز تتبع GPS سلكي صغير الحجم يتم توصيله
                مباشرة بكهرباء المركبة، ويعمل على شبكة 4G LTE مع نطاق جهد
                تشغيل واسع من 9 إلى 90 فولت. ويجمع بين الحجم الصغير وسهولة
                الإخفاء والبطارية الاحتياطية، مع التتبع المباشر والسرعة وخط
                السير والتنبيهات الأساسية للحماية.
              </p>

              {/* ================= QUICK FEATURES ================= */}

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <div className="text-2xl">📡</div>
                  <p className="mt-2 font-extrabold text-blue-950">4G LTE</p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <div className="text-2xl">⚡</div>
                  <p className="mt-2 font-extrabold text-blue-950">9–90V</p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <div className="text-2xl">📏</div>
                  <p className="mt-2 font-extrabold text-blue-950">حجم صغير</p>
                </div>
              </div>

              {/* ================= PRICE ================= */}

              <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <span className="text-sm font-bold text-gray-500">
                  السعر
                </span>

                <div className="mt-1 text-3xl font-extrabold text-blue-900">
                  {product.price}
                </div>
              </div>

              {/* ================= BUTTONS ================= */}

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

        {/* ================= SEO INTRO ================= */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-8 shadow-md md:p-10">
            <h2 className="text-center text-3xl font-extrabold text-blue-950">
              J16PRO Max 4G جهاز تتبع سيارات GPS صغير الحجم في مصر
            </h2>

            <div className="mt-6 text-lg font-semibold leading-9 text-gray-700">
              <p className="mb-5">
                جهاز J16PRO Max 4G هو جهاز GPS سلكي صغير الحجم يتم توصيله
                مباشرة بكهرباء المركبة، ويعمل على شبكة 4G LTE. ويتميز بنطاق
                جهد تشغيل واسع من 9 إلى 90 فولت، مما يجعله مناسبًا لمجموعة
                متنوعة من المركبات.
              </p>

              <p className="mb-5">
                يتميز الجهاز بمقاس حوالي 80 × 35 × 17 مم ووزن حوالي 49 جرامًا،
                لذلك يمكن تركيبه وإخفاؤه في أماكن ضيقة داخل المركبة. كما يحتوي
                على بطارية احتياطية داخلية بسعة 150mAh تساعد على استمرار عمل
                الجهاز عند فصل مصدر الكهرباء الرئيسي، حسب ظروف الاستخدام.
              </p>

              <p className="mb-5">
                يوفر الجهاز التتبع المباشر ومتابعة السرعة وخط السير، بالإضافة
                إلى تنبيهات الحركة والاهتزاز وفصل الكهرباء وتجاوز السرعة
                والسياج الجغرافي وACC، حسب إعدادات الجهاز ونظام التتبع
                المستخدم.
              </p>

              <p>
                ويمكن استخدام J16PRO Max 4G في السيارات والموتوسيكلات والتوك
                توك والشاحنات والمركبات التجارية وبعض المعدات، مع إمكانية
                استخدام ريلاي لفصل المحرك، وبعض الإصدارات تدعم ريلي لاسلكي
                عبر Bluetooth.
              </p>
            </div>
          </div>
        </section>

        {/* ================= MAIN FEATURES ================= */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                J16PRO Max 4G
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                ⭐ أهم مميزات جهاز J16PRO Max 4G
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-600">
                أهم الوظائف والمميزات التي تجعل الجهاز مناسبًا للسيارات
                والموتوسيكلات والشاحنات والمركبات المختلفة.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "1",
                  icon: "📡",
                  title: "اتصال 4G LTE",
                  text: "يعمل الجهاز على شبكات 4G LTE لتوفير اتصال سريع ونقل بيانات التتبع بشكل مستمر، وبعض الإصدارات تدعم 2G حسب النسخة والشبكة.",
                },
                {
                  number: "2",
                  icon: "📏",
                  title: "حجم صغير وسهولة الإخفاء",
                  text: "مقاس الجهاز حوالي 80 × 35 × 17 مم ووزنه حوالي 49 جرامًا، مما يساعد على تركيبه في أماكن ضيقة داخل المركبة.",
                },
                {
                  number: "3",
                  icon: "⚡",
                  title: "جهد تشغيل واسع",
                  text: "يعمل الجهاز على نطاق 9–90V DC، مما يجعله مناسبًا لمجموعة واسعة من السيارات والموتوسيكلات والشاحنات والمركبات والمعدات.",
                },
                {
                  number: "4",
                  icon: "📍",
                  title: "التتبع وتحديد الموقع",
                  text: "متابعة موقع المركبة بشكل مباشر، ومعرفة السرعة وخط السير والرحلات السابقة من خلال نظام التتبع المتوافق.",
                },
                {
                  number: "5",
                  icon: "🛑",
                  title: "فصل المحرك عن بُعد",
                  text: "يمكن استخدام الجهاز لفصل المحرك عن بُعد عند تركيب الريلاي والتوصيل بالطريقة الصحيحة ووفقًا لدعم التجهيز المستخدم.",
                },
                {
                  number: "6",
                  icon: "🔵",
                  title: "ريلي لاسلكي Bluetooth",
                  text: "بعض إصدارات الجهاز تدعم ريلي لاسلكي عبر Bluetooth للتحكم في فصل المحرك، ويجب التأكد من دعم النسخة قبل التركيب.",
                },
                {
                  number: "7",
                  icon: "🔋",
                  title: "بطارية احتياطية 150mAh",
                  text: "يحتوي الجهاز على بطارية داخلية احتياطية بسعة 150mAh تساعد على استمرار عمله عند فصل مصدر الكهرباء الرئيسي حسب ظروف الاستخدام.",
                },
                {
                  number: "8",
                  icon: "🚨",
                  title: "الحركة والاهتزاز",
                  text: "يحتوي الجهاز على مستشعر للحركة والاهتزاز يساعد على اكتشاف بعض الحالات غير الطبيعية ومحاولات السحب أو الرفع حسب الإعدادات.",
                },
                {
                  number: "9",
                  icon: "🗺️",
                  title: "التنبيهات والسياج الجغرافي",
                  text: "يدعم تنبيهات فصل الكهرباء والحركة والاهتزاز وتجاوز السرعة والسياج الجغرافي وACC وفقًا لإعدادات الجهاز والنظام المستخدم.",
                },
                {
                  number: "10",
                  icon: "🚗",
                  title: "مناسب لمركبات متعددة",
                  text: "يمكن استخدامه في السيارات والموتوسيكلات والتوك توك والشاحنات والمركبات التجارية وبعض المعدات مع مراعاة توافق الجهد.",
                },
              ].map((feature) => (
                <div
                  key={feature.number}
                  className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-900 text-xl font-extrabold text-white">
                      {feature.number}
                    </div>

                    <div className="text-3xl">{feature.icon}</div>
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold text-blue-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-8 text-gray-600">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRACTICAL DIFFERENCE ================= */}

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl bg-blue-950 p-8 text-white md:p-12">
              <div className="text-center">
                <span className="font-bold text-blue-200">
                  J16PRO Max 4G
                </span>

                <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                  إيه اللي يميز J16PRO Max 4G؟
                </h2>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-6">
                  <h3 className="text-xl font-extrabold">
                    📏 صغير وسهل الإخفاء
                  </h3>

                  <p className="mt-3 leading-8 text-blue-100">
                    حجمه الصغير يخلي الفني يقدر يختار أماكن تركيب أكثر داخل
                    المركبة، خصوصًا في الأماكن الضيقة.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <h3 className="text-xl font-extrabold">
                    ⚡ جهد 9–90 فولت
                  </h3>

                  <p className="mt-3 leading-8 text-blue-100">
                    نطاق التشغيل الواسع يخليه مناسبًا لمجموعة كبيرة من
                    المركبات، مع ضرورة التأكد من توافق المركبة قبل التركيب.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <h3 className="text-xl font-extrabold">
                    🔋 بطارية احتياطية
                  </h3>

                  <p className="mt-3 leading-8 text-blue-100">
                    وجود بطارية داخلية 150mAh يساعد الجهاز على الاستمرار عند
                    فصل مصدر الكهرباء الرئيسي حسب ظروف الاستخدام.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <h3 className="text-xl font-extrabold">
                    🔵 إمكانية ريلي لاسلكي
                  </h3>

                  <p className="mt-3 leading-8 text-blue-100">
                    بعض الإصدارات تدعم ريلي لاسلكي عبر Bluetooth، وهي ميزة
                    اختيارية تعتمد على نسخة الجهاز والتجهيز المستخدم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= APPLICATIONS ================= */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
                🚘 استخدامات جهاز J16PRO Max 4G
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-600">
                بفضل حجمه الصغير ونطاق جهد التشغيل الواسع، يمكن استخدام الجهاز
                في مجموعة متنوعة من المركبات والاستخدامات.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚗</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  السيارات الملاكي
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚕</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  التاكسي والأجرة
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🏍️</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  الموتوسيكلات
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🛺</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  التوك توك
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚛</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  الشاحنات
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚚</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  المركبات التجارية
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🏗️</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  بعض المعدات
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">📡</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  متابعة المركبات
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SUITABLE FOR ================= */}

        <section className="bg-gray-50 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-white p-8 shadow-md md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
                  👤 جهاز J16PRO Max 4G مناسب لمين؟
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                  الجهاز مناسب لأي شخص أو شركة محتاجة جهاز GPS سلكي صغير
                  الحجم وسهل الإخفاء، مع اتصال 4G ونطاق جهد واسع وبطارية
                  احتياطية وتنبيهات للحركة وفصل الكهرباء.
                </p>
              </div>

              <div className="mt-8 space-y-4 text-lg leading-9 text-gray-700">
                <p>
                  ✅ مناسب للسيارات التي تحتاج إلى جهاز صغير يمكن تركيبه
                  وإخفاؤه بسهولة.
                </p>

                <p>
                  ✅ مناسب للموتوسيكلات والتوك توك والمركبات التي تحتاج إلى
                  جهاز بجهد تشغيل واسع.
                </p>

                <p>
                  ✅ مناسب للشاحنات والمركبات التجارية وبعض المعدات، بعد
                  التأكد من توافق جهد المركبة.
                </p>

                <p>
                  ✅ مناسب لمن يحتاج إلى تتبع مباشر وتنبيهات أساسية للحركة
                  وفصل الكهرباء والسرعة والسياج الجغرافي.
                </p>

                <p>
                  ✅ مناسب لمن يحتاج إلى إمكانية فصل المحرك باستخدام ريلاي،
                  وبعض الإصدارات تدعم الريلي اللاسلكي عبر Bluetooth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SPECIFICATIONS ================= */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
                ⚙️ المواصفات الأساسية
              </h2>

              <p className="mt-4 text-lg text-gray-600">
                أهم البيانات المؤكدة لجهاز J16PRO Max 4G
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-extrabold text-gray-800">
                  الموديل
                </span>
                <span className="text-gray-600">J16PRO Max 4G</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-extrabold text-gray-800">
                  نوع الجهاز
                </span>
                <span className="text-gray-600">
                  GPS Tracker سلكي
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-extrabold text-gray-800">
                  الشبكة
                </span>
                <span className="text-gray-600">4G LTE</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-extrabold text-gray-800">
                  الشبكة الاحتياطية
                </span>
                <span className="text-gray-600">
                  2G في بعض الإصدارات
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-extrabold text-gray-800">
                  جهد التشغيل
                </span>
                <span className="text-gray-600">9–90V DC</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-extrabold text-gray-800">
                  البطارية الاحتياطية
                </span>
                <span className="text-gray-600">150mAh</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-extrabold text-gray-800">
                  المقاس
                </span>
                <span className="text-gray-600">
                  حوالي 80 × 35 × 17 مم
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-extrabold text-gray-800">
                  الوزن
                </span>
                <span className="text-gray-600">حوالي 49 جرامًا</span>
              </div>

              <div className="grid grid-cols-2 p-5">
                <span className="font-extrabold text-gray-800">
                  الضمان
                </span>
                <span className="text-gray-600">
                  سنة ضد عيوب الصناعة
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMPARISON CTA ================= */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-white p-8 text-center shadow-md md:p-12">
              <span className="font-bold text-blue-700">
                محتار بين أكثر من جهاز؟
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                قارن بين الأجهزة قبل ما تختار
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                لو محتار بين J16PRO Max 4G وجهاز GPS تاني، تقدر تشوف الفرق
                بينهم في الاستخدام والمميزات والتوصيل والحجم والجهد المناسب
                لكل مركبة.
              </p>

              <a
                href="/devices/compare"
                className="mt-8 inline-flex rounded-2xl bg-blue-900 px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-blue-800"
              >
                ⚖️ قارن بين جهازين
              </a>
            </div>
          </div>
        </section>

        {/* ================= WARRANTY ================= */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl border border-green-100 bg-green-50 p-8 text-center md:p-12">
            <div className="text-5xl">🛡️</div>

            <h2 className="mt-4 text-3xl font-extrabold text-blue-950">
              ضمان جهاز J16PRO Max 4G
            </h2>

            <p className="mt-4 text-xl font-bold text-green-700">
              سنة ضد عيوب الصناعة
            </p>
          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-center text-3xl font-extrabold text-blue-950 md:text-4xl">
            ❓ الأسئلة الشائعة عن J16PRO Max 4G
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-white p-6 shadow-md"
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
        </section>

        {/* ================= CONTACT ================= */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              عايز تعرف إذا كان J16PRO Max 4G مناسب لعربيتك؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة التفاصيل والتوفر وطريقة التركيب والجهاز
              الأنسب للمركبة والاستخدام.
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