import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "GT06N 4G | جهاز تتبع سيارات GPS 4G في مصر",
  description:
    "جهاز GT06N 4G سلكي لتتبع السيارات والمركبات، يعمل بشبكة 4G LTE وجهد تشغيل 9–90V DC، مع تتبع مباشر وسجل مسارات 3 أشهر وتنبيهات وSOS وإمكانية فصل المحرك.",
  keywords: [
    "GT06N 4G",
    "GT06N 4G مصر",
    "جهاز GT06N 4G",
    "جهاز تتبع سيارات 4G",
    "جهاز GPS 4G",
    "جهاز تتبع GPS",
    "GPS Tracker 4G",
    "GPS Tracker مصر",
    "GPS مصر",
    "جهاز GPS للسيارات",
    "جهاز تتبع للسيارة",
    "جهاز تتبع سيارات",
    "تتبع السيارات",
    "تتبع السيارة",
    "تتبع المركبات",
    "تتبع السيارة من الموبايل",
    "أجهزة GPS مصر",
    "أجهزة تتبع السيارات",
    "جهاز تتبع مركبات",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/gt06n-4g",
  },
  openGraph: {
    title: "GT06N 4G | جهاز تتبع سيارات GPS 4G في مصر",
    description:
      "جهاز GT06N 4G سلكي لتتبع السيارات والمركبات، يعمل بشبكة 4G LTE وجهد تشغيل 9–90V DC، مع تتبع مباشر وتنبيهات وSOS وإمكانية فصل المحرك.",
    url: "https://gpsworld-eg.com/devices/gt06n-4g",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/GT06N 4G.jpeg",
        width: 650,
        height: 500,
        alt: "GT06N 4G جهاز تتبع سيارات GPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GT06N 4G | جهاز تتبع سيارات GPS 4G",
    description:
      "جهاز GT06N 4G سلكي لتتبع السيارات والمركبات مع 4G LTE وجهد تشغيل 9–90V DC.",
    images: ["/images/GT06N 4G.jpeg"],
  },
};

const product = {
  name: "GT06N 4G",
  image: "/images/GT06N 4G.jpeg",
  url: "https://gpsworld-eg.com/devices/gt06n-4g",
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز GT06N 4G"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز GT06N 4G"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

const faqItems = [
  {
    question: "ما هو جهاز GT06N 4G؟",
    answer:
      "جهاز GT06N 4G هو جهاز تتبع GPS سلكي للسيارات والمركبات، يعمل على شبكات 4G LTE ويوفر متابعة مباشرة لموقع السيارة وتحركاتها، مع مجموعة من التنبيهات ووظائف التحكم عن بُعد.",
  },
  {
    question: "ما جهد تشغيل جهاز GT06N 4G؟",
    answer:
      "جهد تشغيل جهاز GT06N 4G من 9 إلى 90 فولت DC، مما يجعله مناسبًا لمجموعة متنوعة من المركبات مع مراعاة جهد المركبة وطريقة التركيب.",
  },
  {
    question: "هل يحتفظ الجهاز بالرحلات السابقة؟",
    answer:
      "نعم، يتم الاحتفاظ بتقارير ومسارات حركة السيارة لمدة 3 أشهر، للرجوع إليها ومراجعة التحركات والتوقفات والسرعات السابقة.",
  },
  {
    question: "هل يمكن فصل المحرك عن بُعد؟",
    answer:
      "نعم، يمكن فصل المحرك عن طريق الريلاي عند توصيله بالطريقة الصحيحة، ويمكن تنفيذ أمر الفصل حسب إعدادات الجهاز وطريقة استخدامه.",
  },
  {
    question: "هل يدعم جهاز GT06N 4G الاستماع داخل السيارة؟",
    answer:
      "نعم، يدعم توصيل ميكروفون خارجي للاستماع إلى الصوت داخل السيارة حسب تجهيز الجهاز وطريقة التوصيل.",
  },
  {
    question: "هل يوجد زر SOS؟",
    answer:
      "يمكن توصيل زر SOS بالقرب من السائق، وعند الضغط عليه في حالة الطوارئ يتم إرسال تنبيه إلى الأرقام المحددة مسبقًا مع بيانات الموقع حسب إعدادات النظام.",
  },
  {
    question: "ما سعة البطارية الداخلية؟",
    answer:
      "يحتوي جهاز GT06N 4G على بطارية داخلية بسعة 250mAh تساعد الجهاز على الاستمرار في العمل وإرسال البيانات لفترة عند فصل بطارية السيارة.",
  },
  {
    question: "هل جهاز GT06N 4G مناسب للشاحنات والمركبات الكبيرة؟",
    answer:
      "نعم، نطاق التشغيل من 9 إلى 90 فولت يجعله مناسبًا للعديد من السيارات والشاحنات والأتوبيسات والدراجات النارية والمركبات المتوافقة مع جهد التشغيل.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: ["https://gpsworld-eg.com/images/GT06N%204G.jpeg"],
      url: product.url,
      description:
        "جهاز GT06N 4G سلكي لتتبع السيارات والمركبات، يعمل بشبكة 4G LTE وجهد تشغيل 9–90V DC، مع تتبع مباشر وتقارير ومسارات لمدة 3 أشهر وتنبيهات وSOS وإمكانية فصل المحرك.",
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
          name: "GT06N 4G",
          item: product.url,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const features = [
  {
    number: "1",
    title: "التتبع والمراقبة الحية 📍",
    text: "متابعة موقع السيارة على الخريطة ومعرفة مكانها وحركتها بشكل لحظي، مع إمكانية متابعة السرعة وخط السير والرحلات السابقة.",
  },
  {
    number: "2",
    title: "تقارير ومسارات لمدة 3 أشهر 🗺️",
    text: "يتم الاحتفاظ بتقارير ومسارات حركة السيارة لمدة 3 أشهر، للرجوع إليها ومراجعة التحركات والتوقفات والسرعات السابقة.",
  },
  {
    number: "3",
    title: "فصل المحرك عن بُعد 🛑",
    text: "يمكن فصل المحرك عن طريق الريلاي عند توصيله بالطريقة الصحيحة، مما يتيح التحكم في فصل الوقود أو الكهرباء عن بُعد.",
  },
  {
    number: "4",
    title: "تنبيهات فصل الكهرباء والعبث 🔌",
    text: "يمكن للجهاز إرسال تنبيه عند فصل مصدر الكهرباء أو حدوث عبث بتوصيلات الجهاز حسب الإعدادات المتاحة.",
  },
  {
    number: "5",
    title: "تنبيه الاهتزاز والحركة 🚨",
    text: "يساعد الجهاز في اكتشاف الحركة أو الاهتزاز غير الطبيعي للمركبة، حسب إعدادات التنبيه المستخدمة.",
  },
  {
    number: "6",
    title: "تنبيه السحب أو الرفع 🚗",
    text: "يمكن إعداد تنبيه عند اكتشاف سحب أو رفع السيارة وهي في وضع التوقف، حسب إعدادات الجهاز.",
  },
  {
    number: "7",
    title: "السياج الجغرافي Geo-Fence 🗺️",
    text: "يمكن تحديد منطقة معينة على الخريطة واستقبال تنبيه عند دخول السيارة إليها أو خروجها منها.",
  },
  {
    number: "8",
    title: "تنبيه تجاوز السرعة ⚠️",
    text: "يمكن إعداد سرعة محددة واستقبال تنبيه عند تجاوزها أثناء قيادة السيارة.",
  },
  {
    number: "9",
    title: "متابعة تشغيل وإيقاف السيارة ACC 🔑",
    text: "متابعة حالة تشغيل وإيقاف السيارة من خلال إشارة ACC حسب طريقة التوصيل والإعدادات المستخدمة.",
  },
  {
    number: "10",
    title: "الاستماع داخل السيارة 🎙️",
    text: "يدعم توصيل ميكروفون خارجي للاستماع إلى الصوت داخل السيارة حسب تجهيز الجهاز وطريقة التوصيل.",
  },
  {
    number: "11",
    title: "زر الاستغاثة SOS 🆘",
    text: "يمكن توصيل زر SOS بالقرب من السائق، وعند الضغط عليه في حالة الطوارئ يتم إرسال تنبيه إلى الأرقام المحددة مسبقًا مع بيانات الموقع حسب الإعدادات.",
  },
  {
    number: "12",
    title: "بطارية احتياطية 250mAh 🔋",
    text: "يحتوي الجهاز على بطارية داخلية بسعة 250mAh تساعده على الاستمرار في العمل وإرسال بيانات الموقع لفترة عند فصل بطارية السيارة.",
  },
];

export default function GT06N4GPage() {
  return (
    <main className="min-h-screen bg-gray-50" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

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
                "/images/GT06N 4G.jpeg",
                "/images/GT06N 4G-2.jpeg",
                "/images/GT06N 4G-3.jpeg",
                "/images/GT06N 4G-4.jpeg",
                "/images/GT06N 4G-5.jpeg",
                "/images/GT06N 4G-6.jpeg",
              ]}
              deviceName="GT06N 4G"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
              ✓ GT06N 4G
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
              جهاز GT06N 4G لتتبع السيارات والمركبات
            </h1>

            <p className="mt-3 text-xl font-bold text-blue-700">
              جهاز تتبع GPS سلكي بتقنية 4G LTE
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              جهاز GT06N 4G هو جهاز تتبع GPS سلكي للسيارات والمركبات، يعمل على
              شبكات 4G LTE ويوفر متابعة مباشرة لموقع السيارة وتحركاتها، مع
              مجموعة من التنبيهات ووظائف التحكم عن بُعد، بالإضافة إلى بطارية
              داخلية 250mAh ونطاق جهد تشغيل واسع من 9 إلى 90 فولت DC.
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
              4G LTE
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              يعمل على شبكات الجيل الرابع.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-md">
            <div className="text-4xl">⚡</div>

            <h3 className="mt-3 text-lg font-extrabold text-blue-950">
              9–90V DC
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              نطاق جهد تشغيل واسع للمركبات المتوافقة.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-md">
            <div className="text-4xl">🗺️</div>

            <h3 className="mt-3 text-lg font-extrabold text-blue-950">
              3 أشهر
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              الاحتفاظ بالتقارير والمسارات السابقة.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-md">
            <div className="text-4xl">🔋</div>

            <h3 className="mt-3 text-lg font-extrabold text-blue-950">
              250mAh
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              بطارية داخلية احتياطية.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-md md:p-10">
          <h2 className="text-center text-3xl font-extrabold text-blue-950 md:text-4xl">
            GT06N 4G جهاز تتبع سيارات GPS
          </h2>

          <div className="mt-7 text-lg leading-9 text-gray-700">
            <p className="mb-5">
              جهاز GT06N 4G هو جهاز تتبع GPS سلكي مناسب للسيارات والمركبات،
              يعمل على شبكات 4G LTE ويوفر متابعة مباشرة لموقع السيارة
              وتحركاتها.
            </p>

            <p className="mb-5">
              الجهاز مناسب لمن يحتاج إلى متابعة السيارة ومعرفة سرعتها وخط
              سيرها، مع إمكانية الرجوع إلى التقارير والمسارات السابقة لمدة
              3 أشهر.
            </p>

            <p>
              كما يوفر الجهاز مجموعة من وظائف التنبيه والحماية، بالإضافة إلى
              إمكانية فصل المحرك عن بُعد عند تركيب الريلاي والتوصيل بالطريقة
              الصحيحة.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
              مميزات جهاز GT06N 4G بالتفصيل
            </h2>

            <p className="mt-5 text-lg leading-9 text-gray-600">
              مجموعة متكاملة من وظائف التتبع والمراقبة والتنبيهات والتحكم
              لتوفير متابعة أفضل للمركبة.
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
            <span className="font-bold text-blue-700">
              GT06N 4G
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              إيه اللي يميز GT06N 4G؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              جهاز سلكي صغير وخفيف، يجمع بين شبكة 4G ونطاق جهد تشغيل واسع،
              مع وظائف متعددة لمتابعة السيارة وحمايتها.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                📡 اتصال 4G
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                مناسب لتطبيقات تتبع المركبات التي تعتمد على شبكة الجيل الرابع.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                📏 صغير وخفيف
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                مقاس حوالي 6 × 2 سم، بسمك 16.4 مم ووزن 60 جرام، مما يساعد على
                تركيبه وإخفائه بسهولة داخل السيارة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                🛡️ وظائف حماية متعددة
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                تنبيهات للحركة والاهتزاز والسحب والسرعة والسياج الجغرافي
                وفصل الكهرباء، مع إمكانية SOS وفصل المحرك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}

      <section className="bg-gray-100 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
              ⚙️ المواصفات الأساسية
            </h2>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">الموديل</span>
                <span className="text-gray-600">GT06N 4G</span>
              </div>

              <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                <span className="font-bold text-gray-800">نوع الجهاز</span>
                <span className="text-gray-600">GPS Tracker سلكي</span>
              </div>

              <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">الشبكة</span>
                <span className="font-bold text-blue-700">
                  4G LTE
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

              <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">
                  البطارية الداخلية
                </span>
                <span className="text-gray-600">250mAh</span>
              </div>

              <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                <span className="font-bold text-gray-800">
                  حفظ التقارير والمسارات
                </span>
                <span className="text-gray-600">3 أشهر</span>
              </div>

              <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">
                  المقاس التقريبي
                </span>
                <span className="text-gray-600">6 × 2 سم</span>
              </div>

              <div className="grid grid-cols-[42%_58%] border-b border-gray-200 p-4">
                <span className="font-bold text-gray-800">السُمك</span>
                <span className="text-gray-600">16.4 مم</span>
              </div>

              <div className="grid grid-cols-[42%_58%] border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">الوزن</span>
                <span className="text-gray-600">60 جرام</span>
              </div>

              <div className="grid grid-cols-[42%_58%] p-4">
                <span className="font-bold text-gray-800">الضمان</span>
                <span className="text-gray-600">
                  سنة ضد عيوب الصناعة
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-gray-500">
              بعض الوظائف مثل الاستماع وفصل المحرك وSOS تعتمد على تجهيز الجهاز
              وطريقة التوصيل والإعدادات المستخدمة.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
          <div className="text-center">
            <span className="font-bold text-blue-700">
              الاستخدامات
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              مناسب لمين؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              مناسب لمن يبحث عن جهاز GPS سلكي صغير وخفيف يعمل على شبكة 4G
              لمتابعة السيارة والمركبة مع مجموعة من وظائف الحماية والتنبيهات.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "🚘 السيارات الملاكي",
              "🚕 سيارات الأجرة",
              "🚛 الشاحنات",
              "🚌 الأتوبيسات",
              "🏍️ الدراجات النارية",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <h3 className="font-extrabold text-blue-950">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE NOTE */}

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 md:p-9">
          <h2 className="text-2xl font-extrabold text-blue-950">
            📡 نقطة مهمة قبل الشراء
          </h2>

          <p className="mt-4 text-lg leading-9 text-gray-700">
            لأن الجهاز يعمل على شبكة 4G LTE، يُفضّل التأكد من توافر تغطية 4G
            في مكان استخدام السيارة قبل الشراء.
          </p>
        </div>
      </section>

      {/* COMPARISON CTA */}

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            محتار بين GT06N 4G وجهاز تاني؟
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-blue-200">
            قريبًا تقدر تقارن بين GT06N 4G والموديلات الأخرى وتشوف الفرق بينهم
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
          <h2 className="text-center text-3xl font-extrabold text-blue-950 md:text-4xl">
            الأسئلة الشائعة عن جهاز GT06N 4G
          </h2>

          <div className="mt-10 space-y-5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <summary className="cursor-pointer text-lg font-extrabold text-blue-950">
                  {item.question}
                </summary>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.answer}
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
            هل تريد معرفة المزيد عن جهاز GT06N 4G؟
          </h2>

          <p className="mt-4 text-lg leading-8 text-blue-200">
            تواصل معنا لمعرفة التفاصيل والتوفر وطريقة التركيب المناسبة لسيارتك
            أو مركبتك.
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
  );
}