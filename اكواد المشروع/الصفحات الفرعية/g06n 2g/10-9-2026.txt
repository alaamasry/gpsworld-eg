import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GT06N 2G | جهاز تتبع سيارات GPS في مصر",
  description:
    "جهاز GT06N 2G لتتبع السيارات والمركبات ومراقبة الموقع والحركة، مع التتبع اللحظي والتنبيهات وتقارير خط السير ووظيفة فصل المحرك حسب إعدادات الجهاز والنظام.",
  keywords: [
    "GT06N",
    "GT06N 2G",
    "جهاز GT06N",
    "جهاز تتبع سيارات",
    "جهاز تتبع سيارة",
    "جهاز GPS للسيارات",
    "جهاز تتبع GPS",
    "GPS Tracker",
    "GPS Tracker مصر",
    "أجهزة GPS مصر",
    "جهاز تتبع السيارة",
    "تتبع السيارات",
    "تتبع المركبات",
    "تتبع السيارة من الموبايل",
    "جهاز تتبع بسلك",
    "GPS مصر",
    "GPS للسيارات",
    "جهاز GPS 2G",
    "جهاز تتبع 2G",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/gt06n-2g",
  },
  openGraph: {
    title: "GT06N 2G | جهاز تتبع سيارات GPS في مصر",
    description:
      "جهاز GT06N 2G لتتبع السيارات والمركبات مع التتبع اللحظي والتنبيهات وتقارير خط السير ووظيفة فصل المحرك حسب إعدادات الجهاز والنظام.",
    url: "https://gpsworld-eg.com/devices/gt06n-2g",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/gt06n2g.jpeg",
        width: 650,
        height: 500,
        alt: "GT06N 2G جهاز تتبع سيارات GPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GT06N 2G | جهاز تتبع سيارات GPS في مصر",
    description:
      "جهاز GT06N 2G لتتبع السيارات والمركبات ومراقبة الموقع والحركة.",
    images: ["/images/gt06n2g.jpeg"],
  },
};

const product = {
  name: "GT06N 2G",
  image: "/images/gt06n2g.jpeg",
  url: "https://gpsworld-eg.com/devices/gt06n-2g",
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز GT06N 2G"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز GT06N 2G"
);

const faqs = [
  {
    question: "ما هو جهاز GT06N 2G؟",
    answer:
      "GT06N 2G هو جهاز تتبع GPS يتم استخدامه لمتابعة السيارات والمركبات ومعرفة موقعها وحركتها من خلال نظام التتبع المتوافق مع الجهاز.",
  },
  {
    question: "هل جهاز GT06N مناسب لتتبع السيارات؟",
    answer:
      "نعم، جهاز GT06N مناسب لتتبع السيارات والمركبات، ويمكن استخدامه لمتابعة الموقع والحركة من خلال نظام GPS Tracking المتوافق.",
  },
  {
    question: "هل يمكن متابعة السيارة من الموبايل؟",
    answer:
      "يمكن متابعة السيارة من خلال الموبايل عند استخدام الجهاز مع نظام أو برنامج تتبع متوافق، وذلك حسب إعدادات الجهاز والسيرفر المستخدم.",
  },
  {
    question: "هل جهاز GT06N يدعم تتبع الموقع بشكل مباشر؟",
    answer:
      "يدعم الجهاز التتبع اللحظي ومتابعة موقع المركبة من خلال نظام التتبع المستخدم مع الجهاز.",
  },
  {
    question: "هل يدعم GT06N تقارير خط السير؟",
    answer:
      "يمكن لنظام التتبع المتوافق عرض سجل الحركة وتقارير خط السير الخاصة بالمركبة حسب إعدادات السيرفر والبرنامج المستخدم.",
  },
  {
    question: "هل يدعم GT06N فصل المحرك؟",
    answer:
      "يدعم الجهاز وظيفة فصل المحرك عن بُعد عند توافرها وتركيبها وإعدادها بالشكل الصحيح، ويجب استخدام هذه الوظيفة بطريقة آمنة.",
  },
  {
    question: "كيف يتم تركيب جهاز GT06N؟",
    answer:
      "يتم تركيب الجهاز داخل المركبة وتوصيله بالدائرة الكهربائية المناسبة، ويفضل أن يتم التركيب بواسطة فني متخصص لضمان التوصيل الصحيح.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: "https://gpsworld-eg.com/images/gt06n2g.jpeg",
      description:
        "جهاز GT06N 2G لتتبع السيارات والمركبات ومراقبة الموقع والحركة باستخدام نظام GPS Tracking.",
      url: product.url,
      brand: {
        "@type": "Brand",
        name: "GT06N",
      },
      category: "GPS Tracker",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://gpsworld-eg.com",
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
          name: "GT06N 2G",
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

export default function GT06N2GPage() {
  return (
    <main className="min-h-screen bg-gray-50" dir="rtl">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

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
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
            <Image
              src={product.image}
              alt="GT06N 2G جهاز تتبع سيارات GPS في مصر"
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
              جهاز GT06N 2G لتتبع السيارات والمركبات في مصر
            </h1>

            <p className="mt-3 text-xl font-bold text-blue-700">
              جهاز تتبع GPS عملي للسيارات والمركبات
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              جهاز GT06N 2G هو جهاز تتبع GPS لمتابعة السيارات والمركبات
              ومراقبة الموقع والحركة بشكل مستمر. يوفر مجموعة من وظائف التتبع
              والتنبيهات التي تساعدك على متابعة مركبتك من خلال الموبايل أو
              الكمبيوتر، مع إمكانية استخدامه ضمن أنظمة وسيرفرات GPS المتوافقة.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={
                  "https://wa.me/" +
                  whatsappNumber +
                  "?text=" +
                  whatsappInquiry
                }
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

      {/* SEO INTRO */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-md md:p-10">
          <h2 className="text-3xl font-extrabold text-blue-950">
            GT06N 2G جهاز تتبع سيارات GPS
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-9 text-gray-700">
            <p>
              إذا كنت تبحث عن جهاز تتبع سيارة أو جهاز GPS للسيارات، فإن
              GT06N 2G يوفر حلًا عمليًا لمتابعة موقع المركبة وحركتها من خلال
              نظام GPS Tracking متوافق.
            </p>

            <p>
              يمكن استخدام جهاز GT06N مع السيارات والمركبات لمتابعة الموقع
              ومعرفة الحركة ومراجعة سجل خط السير، بالإضافة إلى التنبيهات
              والوظائف التي يدعمها الجهاز والنظام المستخدم.
            </p>

            <p>
              ويُستخدم جهاز التتبع ضمن منظومة تشمل الجهاز وشريحة الاتصال
              والسيرفر أو برنامج المتابعة، لذلك تختلف بعض الوظائف حسب إعدادات
              الجهاز ونظام التتبع المتوافق معه.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES + SPECS */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* FEATURES */}
          <div className="rounded-3xl bg-white p-7 shadow-md">
            <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
              ⭐ أهم مميزات جهاز GT06N 2G
            </h2>

            <ul className="space-y-4 text-lg leading-8 text-gray-700">
              <li>
                📍 <strong>تتبع حي ومباشر:</strong> متابعة موقع المركبة وحركتها
                على الخريطة.
              </li>

              <li>
                🚗 <strong>متابعة المركبات:</strong> مناسب للسيارات والمركبات
                والاستخدام الشخصي والتجاري.
              </li>

              <li>
                📊 <strong>تقارير خط السير:</strong> إمكانية مراجعة سجل حركة
                المركبة والتعرف على مساراتها السابقة.
              </li>

              <li>
                🗺️ <strong>تحديد المنطقة الجغرافية:</strong> إنشاء منطقة
                جغرافية آمنة واستقبال تنبيه عند خروج المركبة منها.
              </li>

              <li>
                🚨 <strong>تنبيهات ذكية:</strong> تنبيهات مرتبطة بالسرعة
                والاهتزاز وفصل الكهرباء وفتح الأبواب حسب إعدادات النظام.
              </li>

              <li>
                🛑 <strong>التحكم في فصل المحرك:</strong> يدعم وظيفة فصل
                المحرك عن بُعد عند توافرها وإعدادها بشكل صحيح.
              </li>

              <li>
                🎙️ <strong>مايك داخلي:</strong> إمكانية استخدام وظيفة
                الاستماع الصوتي داخل المركبة حسب إعدادات الجهاز والنظام.
              </li>

              <li>
                🔋 <strong>بطارية داخلية:</strong> تساعد على استمرار الجهاز
                في العمل عند فصل بطارية المركبة لفترة محدودة.
              </li>

              <li>
                📱 <strong>طرق متابعة متعددة:</strong> يمكن متابعة المركبة من
                خلال الموبايل أو الكمبيوتر أو رسائل SMS وفق النظام المستخدم.
              </li>

              <li>
                🤝 <strong>دعم ومتابعة:</strong> دعم فني ومتابعة من GPS World
                Egypt.
              </li>
            </ul>
          </div>

          {/* SPECS */}
          <div className="rounded-3xl bg-white p-7 shadow-md">
            <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
              ⚙️ المواصفات الفنية لجهاز GT06N 2G
            </h2>

            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">الموديل</span>
                <span className="text-gray-600">GT06N 2G</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                <span className="font-bold text-gray-800">نوع الجهاز</span>
                <span className="text-gray-600">GPS Tracker</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">
                  تحديد الموقع
                </span>
                <span className="text-gray-600">GPS</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                <span className="font-bold text-gray-800">الشبكة</span>
                <span className="text-gray-600">2G</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">التتبع</span>
                <span className="text-gray-600">تتبع لحظي</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                <span className="font-bold text-gray-800">التقارير</span>
                <span className="text-gray-600">
                  سجل خط السير والحركة
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">
                  غلق المحرك
                </span>
                <span className="text-gray-600">متاح</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                <span className="font-bold text-gray-800">
                  الميكروفون
                </span>
                <span className="text-gray-600">مايك داخلي</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                <span className="font-bold text-gray-800">
                  البطارية الداخلية
                </span>
                <span className="text-gray-600">
                  بطارية احتياطية داخلية
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                <span className="font-bold text-gray-800">
                  مقاومة الرطوبة
                </span>
                <span className="text-gray-600">حتى 95%</span>
              </div>

              <div className="grid grid-cols-2 p-4">
                <span className="font-bold text-gray-800">الاستخدام</span>
                <span className="text-gray-600">
                  سيارات ومركبات واستخدامات تجارية
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
            🚗 استخدامات جهاز GT06N 2G
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border bg-gray-50 p-6">
              <h3 className="text-xl font-extrabold text-blue-950">
                تتبع السيارات
              </h3>

              <p className="mt-3 text-lg leading-8 text-gray-700">
                مناسب لمتابعة موقع السيارة ومعرفة حركتها من خلال نظام التتبع
                المتوافق مع الجهاز.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6">
              <h3 className="text-xl font-extrabold text-blue-950">
                متابعة المركبات
              </h3>

              <p className="mt-3 text-lg leading-8 text-gray-700">
                يمكن استخدامه مع المركبات في الاستخدام الشخصي أو التجاري
                ومتابعة سجل الحركة والمسارات.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6">
              <h3 className="text-xl font-extrabold text-blue-950">
                متابعة الأسطول
              </h3>

              <p className="mt-3 text-lg leading-8 text-gray-700">
                يمكن استخدام أجهزة التتبع ضمن حلول متابعة وإدارة المركبات
                والأساطيل حسب نظام GPS المستخدم.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6">
              <h3 className="text-xl font-extrabold text-blue-950">
                المتابعة من الموبايل
              </h3>

              <p className="mt-3 text-lg leading-8 text-gray-700">
                يمكن متابعة السيارة من الموبايل عند ربط الجهاز بنظام أو برنامج
                GPS متوافق.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
              🛠️ تركيب جهاز GT06N 2G
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-9 text-gray-700">
              <p>
                يتم تركيب الجهاز داخل المركبة وتوصيله بالضفيرة الكهربائية في
                مكان مناسب وغير ظاهر قدر الإمكان.
              </p>

              <p>
                يتم تركيب شريحة اتصال مناسبة داخل الجهاز لتفعيل الاتصال مع
                نظام التتبع والسيرفر المستخدم.
              </p>

              <p>
                يُفضل أن يتم تركيب الجهاز بواسطة فني متخصص لضمان التوصيل
                الصحيح والحفاظ على أمان الدائرة الكهربائية للمركبة.
              </p>

              <p>
                بعد التركيب يتم إعداد الجهاز وربطه بنظام التتبع المناسب حتى
                يستطيع المستخدم متابعة المركبة ومعرفة موقعها وحركتها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GT06N */}
      <section className="bg-blue-50 px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="font-bold text-blue-700">
            GPS World Egypt
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
            لماذا تختار جهاز GT06N 2G؟
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
            جهاز GT06N 2G يجمع بين التتبع المباشر والتنبيهات وتقارير الحركة
            وبعض وظائف الحماية والتحكم، مما يجعله حلًا عمليًا لمتابعة
            السيارات والمركبات للاستخدام الشخصي أو التجاري.
          </p>

          <div className="mt-8 grid gap-5 text-right sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                📍 متابعة مستمرة
              </h3>

              <p className="mt-2 leading-8 text-gray-600">
                معرفة موقع المركبة ومتابعة حركتها من خلال نظام التتبع.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                🚨 تنبيهات للحماية
              </h3>

              <p className="mt-2 leading-8 text-gray-600">
                استقبال تنبيهات مرتبطة بالأحداث التي يتم إعدادها على النظام.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                📊 تقارير الحركة
              </h3>

              <p className="mt-2 leading-8 text-gray-600">
                مراجعة حركة المركبة ومساراتها السابقة من خلال نظام التتبع.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950">
                🚗 استخدامات متعددة
              </h3>

              <p className="mt-2 leading-8 text-gray-600">
                مناسب للسيارات والمركبات والاستخدام الشخصي وإدارة الأساطيل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
          الأسئلة الشائعة عن جهاز GT06N 2G
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          أهم الأسئلة التي قد تحتاج إلى معرفتها قبل شراء أو تركيب جهاز تتبع
          GPS للسيارة.
        </p>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-extrabold text-blue-950">
                {faq.question}
              </summary>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* RELATED DEVICES */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold text-blue-950">
            أجهزة GPS أخرى
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            يمكنك مشاهدة باقي أجهزة GPS وأجهزة تتبع السيارات والمركبات المتاحة
            على GPS World Egypt ومقارنة الموديلات حسب احتياجاتك.
          </p>

          <a
            href="/#products"
            className="mt-7 inline-block rounded-xl bg-blue-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-blue-800"
          >
            📡 مشاهدة جميع الأجهزة
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            هل تريد معرفة المزيد عن جهاز GT06N 2G؟
          </h2>

          <p className="mt-4 text-lg leading-8 text-blue-200">
            تواصل معنا لمعرفة التفاصيل والتوفر وطلب جهاز التتبع.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                whatsappOrder
              }
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
            href="https://wa.me/201006687163"
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
        href="https://wa.me/201006687163"
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