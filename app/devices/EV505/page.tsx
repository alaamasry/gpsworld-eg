import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "EV505 4G | جهاز تتبع سيارات GPS في مصر",
  description:
    "جهاز EV505 4G لتتبع السيارات والمركبات والشاحنات والمعدات الثقيلة، يعمل بشبكة 4G LTE Cat.1 وبجهد تشغيل 9–90V DC، مع تتبع مباشر وتنبيهات وإمكانية فصل المحرك.",
  keywords: [
    "EV505",
    "EV505 4G",
    "جهاز EV505",
    "جهاز تتبع EV505",
    "EV505 GPS",
    "EV505 GPS Tracker",
    "جهاز تتبع سيارات",
    "جهاز GPS للسيارات",
    "GPS Tracker مصر",
    "أجهزة GPS مصر",
    "تتبع السيارات",
    "تتبع المركبات",
    "GPS 4G",
    "جهاز GPS 4G",
    "تتبع الشاحنات",
    "تتبع المعدات الثقيلة",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/ev505",
  },
  openGraph: {
    title: "EV505 4G | جهاز تتبع سيارات GPS في مصر",
    description:
      "جهاز EV505 4G سلكي لتتبع السيارات والشاحنات والمعدات الثقيلة، بجهد تشغيل 9–90V DC ومجموعة من وظائف التتبع والتنبيهات.",
    url: "https://gpsworld-eg.com/devices/ev505",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/EV505.jpeg",
        width: 1200,
        height: 1200,
        alt: "EV505 4G جهاز تتبع سيارات GPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV505 4G | جهاز تتبع سيارات GPS",
    description:
      "جهاز EV505 4G لتتبع السيارات والشاحنات والمعدات الثقيلة بجهد تشغيل 9–90V DC.",
    images: ["/images/EV505.jpeg"],
  },
};

const product = {
  name: "EV505 4G",
  image: "/images/EV505.jpeg",
  url: "https://gpsworld-eg.com/devices/ev505",
};

const images = [
  "/images/EV505.jpeg",
  "/images/EV505-2.jpeg",
  "/images/EV505-3.jpeg",
  "/images/EV505-4.jpeg",
  "/images/EV505-5.jpeg",
  "/images/EV505-6.jpeg",
];

const faqs = [
  {
    question: "ما هو جهاز EV505 4G؟",
    answer:
      "EV505 4G هو جهاز تتبع GPS سلكي يعمل على شبكة 4G LTE Cat.1، ومناسب للسيارات والمركبات التجارية والشاحنات والمعدات الثقيلة.",
  },
  {
    question: "ما هو جهد تشغيل جهاز EV505؟",
    answer:
      "يعمل جهاز EV505 على نطاق جهد من 9 إلى 90 فولت DC.",
  },
  {
    question: "هل يمكن استخدام EV505 في الشاحنات والمعدات الثقيلة؟",
    answer:
      "نعم، نطاق التشغيل من 9 إلى 90 فولت يجعله مناسبًا لعدد كبير من المركبات والمعدات، مع مراعاة طريقة التوصيل ونظام الكهرباء الخاص بالمركبة أو المعدة.",
  },
  {
    question: "هل يمكن فصل المحرك عن بُعد؟",
    answer:
      "نعم، يمكن توصيل الجهاز بريلاي للتحكم في فصل الوقود أو الكهرباء عن بُعد، عند تنفيذ التوصيل بالطريقة الصحيحة.",
  },
  {
    question: "هل يدعم EV505 الميكروفون والسماعة؟",
    answer:
      "يدعم توصيل ميكروفون وسماعة حسب تجهيز الجهاز وطريقة التوصيل، ويمكن استخدامهما للاستماع والتواصل الصوتي في التطبيقات التي تدعم هذه الوظيفة.",
  },
  {
    question: "هل يمكن توصيل حساسات إضافية؟",
    answer:
      "نعم، يحتوي الجهاز على مداخل ومخارج يمكن الاستفادة منها في توصيل بعض الإضافات والحساسات، مثل حساسات الأبواب أو مستوى الوقود، حسب نوع الحساس وطريقة التوصيل.",
  },
  {
    question: "هل يوجد ضمان لجهاز EV505؟",
    answer:
      "يوجد ضمان لمدة سنة ضد عيوب الصناعة.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: ["https://gpsworld-eg.com/images/EV505.jpeg"],
      url: product.url,
      description:
        "جهاز EV505 4G سلكي لتتبع السيارات والمركبات والشاحنات والمعدات الثقيلة، يعمل بشبكة 4G LTE Cat.1 وبجهد تشغيل 9–90V DC.",
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
          name: "EV505 4G",
          item: "https://gpsworld-eg.com/devices/ev505",
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

const features = [
  {
    number: "1",
    title: "التتبع والمراقبة المباشرة 📍",
    text: "متابعة موقع المركبة على الخريطة ومعرفة مكانها وتحركاتها بشكل مستمر، مع إمكانية متابعة السرعة وخط السير.",
  },
  {
    number: "2",
    title: "السياج الجغرافي Geo-Fence 🗺️",
    text: "تحديد منطقة معينة على الخريطة واستقبال تنبيه عند دخول المركبة إلى المنطقة أو خروجها منها.",
  },
  {
    number: "3",
    title: "مناسب للمركبات والمعدات الثقيلة ⚙️",
    text: "يعمل الجهاز بجهد تشغيل واسع من 9 إلى 90 فولت DC، مما يجعله مناسبًا للسيارات والمركبات التجارية والشاحنات والمعدات المتوافقة.",
  },
  {
    number: "4",
    title: "فصل المحرك عن بُعد 🛑",
    text: "يمكن توصيل الجهاز بريلاي للتحكم في فصل الوقود أو الكهرباء عن بُعد عند تنفيذ التوصيل بالطريقة الصحيحة.",
  },
  {
    number: "5",
    title: "الاستماع والتواصل الصوتي 🎙️",
    text: "يدعم توصيل ميكروفون وسماعة حسب تجهيز الجهاز وطريقة التوصيل، للاستماع والتواصل الصوتي في التطبيقات التي تدعم هذه الوظيفة.",
  },
  {
    number: "6",
    title: "مداخل ومخارج إضافية 🔌",
    text: "يمكن الاستفادة من المداخل والمخارج المتاحة في توصيل بعض الإضافات والحساسات مثل حساسات الأبواب أو مستوى الوقود، حسب نوع الحساس وطريقة التوصيل.",
  },
  {
    number: "7",
    title: "تنبيهات وأنظمة أمان 🚨",
    text: "يدعم مجموعة من التنبيهات مثل تجاوز السرعة والسياج الجغرافي والحركة والاهتزاز والسحب أو الرفع وفصل الكهرباء أو العبث بالجهاز.",
  },
  {
    number: "8",
    title: "مراقبة سلوك القيادة 🚗",
    text: "يمكن مراقبة بعض سلوكيات القيادة مثل التسارع المفاجئ والتباطؤ أو الفرملة المفاجئة حسب إعدادات الجهاز والنظام المستخدم.",
  },
  {
    number: "9",
    title: "بطارية احتياطية 🔋",
    text: "يحتوي الجهاز على بطارية داخلية احتياطية تساعد على استمرار إرسال التنبيه عند فصل مصدر الكهرباء الرئيسي عن الجهاز.",
  },
];

export default function EV505Page() {
  const whatsappNumber = "201006687163";

  const whatsappInquiry = encodeURIComponent(
    "مرحبًا، أريد الاستفسار عن جهاز GPS موديل EV505 4G"
  );

  const whatsappOrder = encodeURIComponent(
    "مرحبًا، أريد طلب جهاز GPS موديل EV505 4G"
  );

  const whatsappInquiryUrl =
    "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

  const whatsappOrderUrl =
    "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

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
                images={images}
                deviceName="EV505 4G"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ EV505 4G
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز EV505 4G لتتبع السيارات والمركبات
              </h1>

              <p className="mt-4 text-xl font-bold text-blue-700">
                جهاز تتبع GPS سلكي متعدد الاستخدامات
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز EV505 4G يعمل على شبكات الجيل الرابع 4G LTE Cat.1،
                ومصمم للاستخدام في السيارات والمركبات التجارية والشاحنات
                والمعدات الثقيلة، مع نطاق جهد تشغيل واسع من 9 إلى 90 فولت DC.
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
              <div className="text-4xl">📡</div>
              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                4G LTE Cat.1
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                اتصال عبر شبكة الجيل الرابع لمتابعة المركبة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                9–90V DC
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                نطاق تشغيل واسع مناسب لعدد كبير من المركبات والمعدات.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🚨</div>
              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                تنبيهات أمان
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                سرعة وحركة وسياج جغرافي وفصل كهرباء وغيرها حسب الإعدادات.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🔌</div>
              <h3 className="mt-3 text-lg font-extrabold text-blue-950">
                إضافات وحساسات
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                إمكانية توصيل بعض الحساسات والإضافات حسب التجهيز.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
                مميزات جهاز EV505 4G بالتفصيل
              </h2>

              <p className="mt-5 text-lg leading-9 text-gray-600">
                جهاز سلكي متعدد الاستخدامات، يجمع بين التتبع المباشر ونطاق
                التشغيل الواسع ومجموعة من وظائف الحماية والإضافات.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.number}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-900 text-lg font-extrabold text-white">
                      {feature.number}
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-blue-950">
                        {feature.title}
                      </h3>

                      <p className="mt-3 leading-8 text-gray-600">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRACTICAL DIFFERENCE */}
        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">EV505 4G</span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                ليه EV505 مناسب للاستخدامات المتنوعة؟
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                أهم نقطة في EV505 هي الجمع بين اتصال 4G ونطاق جهد واسع،
                بالإضافة إلى إمكانية الاستفادة من المداخل والمخارج والحساسات
                حسب احتياج المركبة.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-extrabold text-blue-950">
                  ⚡ جهد تشغيل واسع
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  من 9 إلى 90 فولت DC، لذلك يمكن استخدامه مع أنواع متعددة من
                  المركبات والمعدات المتوافقة.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-extrabold text-blue-950">
                  🚛 مناسب للمعدات
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  مناسب للسيارات والشاحنات والمركبات التجارية والموتوسيكلات
                  وبعض المعدات الثقيلة مع مراعاة طريقة التوصيل.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-extrabold text-blue-950">
                  🔌 قابل للتوسعة
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  يمكن توصيل بعض الحساسات والإضافات والميكروفون والسماعة حسب
                  تجهيز الجهاز وطريقة التوصيل.
                </p>
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
              مناسب لمين؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              EV505 مناسب لمن يبحث عن جهاز GPS سلكي 4G متعدد الاستخدامات،
              خصوصًا للمركبات التي تحتاج إلى نطاق جهد تشغيل واسع.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "🚗 السيارات الملاكي والأجرة",
                text: "متابعة الموقع والحركة والسرعة والرحلات.",
              },
              {
                title: "🚛 الشاحنات",
                text: "مناسب لمتابعة الشاحنات والنقل الخفيف والثقيل.",
              },
              {
                title: "🏢 المركبات التجارية",
                text: "حل مناسب للمركبات المستخدمة في الأعمال والخدمات.",
              },
              {
                title: "🏍️ الموتوسيكلات",
                text: "يمكن استخدامه مع المركبات المتوافقة مع جهد التشغيل وطريقة التركيب.",
              },
              {
                title: "⚙️ المعدات الثقيلة",
                text: "مناسب للعديد من المعدات مثل اللوادر والفورك لفت.",
              },
              {
                title: "🚚 الأساطيل",
                text: "مفيد للشركات التي تحتاج إلى متابعة مجموعة من المركبات.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-50 p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL */}
        <section className="bg-gray-100 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
              <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
                ⚙️ المواصفات الأساسية
              </h2>

              <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الموديل</span>
                  <span className="text-gray-600">EV505 4G</span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    نوع الجهاز
                  </span>
                  <span className="text-gray-600">
                    GPS Tracker سلكي
                  </span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    تقنية الاتصال
                  </span>
                  <span className="font-bold text-blue-700">
                    4G LTE Cat.1
                  </span>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    جهد التشغيل
                  </span>
                  <span className="font-bold text-blue-700">
                    9–90V DC
                  </span>
                </div>

                <div className="grid grid-cols-[42%_58%] bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    الضمان
                  </span>
                  <span className="text-gray-600">
                    سنة ضد عيوب الصناعة
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-500">
                بعض الوظائف مثل فصل المحرك والاستماع والتواصل الصوتي وتوصيل
                الحساسات تعتمد على تجهيز الجهاز وطريقة التوصيل والنظام المستخدم.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON CTA */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              محتار بين EV505 وجهاز تاني؟
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-blue-200">
              قريبًا تقدر تقارن بين EV505 والموديلات الأخرى وتشوف الفرق بينهم
              بشكل واضح وتختار الجهاز الأنسب لاستخدامك.
            </p>

            <a
              href="/devices/compare"
              className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-950 transition hover:bg-gray-100"
            >
              📊 مقارنة بين الأجهزة
            </a>
          </div>
        </section>

        {/* WARRANTY */}
        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-white p-8 text-center shadow-md">
              <div className="text-5xl">🛡️</div>

              <h2 className="mt-4 text-3xl font-extrabold text-blue-950">
                الضمان
              </h2>

              <p className="mt-4 text-xl font-bold text-gray-700">
                سنة ضد عيوب الصناعة
              </p>
            </div>
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
                أسئلة عن جهاز EV505 4G
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
              عايز تعرف هل EV505 مناسب لاستخدامك؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة التفاصيل والتوفر وطريقة التركيب المناسبة.
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