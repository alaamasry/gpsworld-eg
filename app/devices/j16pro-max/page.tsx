import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "J16PRO Max Intel | جهاز تتبع سيارات GPS 4G في مصر",
  description:
    "جهاز J16PRO Max Intel لتتبع السيارات والمركبات في مصر، يدعم 4G LTE Cat.1 و2G Fallback وتحديد الموقع GPS وLBS والتتبع اللحظي وتنبيهات الحماية وإدارة الأساطيل.",
  keywords: [
    "J16PRO Max Intel",
    "J16 PRO Max Intel",
    "J16PRO Max",
    "J16PRO Max مصر",
    "جهاز J16PRO Max Intel",
    "GPS J16PRO Max Intel",
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
    "إدارة أسطول السيارات",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/j16pro-max",
  },
  openGraph: {
    title: "J16PRO Max Intel | جهاز تتبع سيارات GPS 4G في مصر",
    description:
      "جهاز J16PRO Max Intel لتتبع السيارات والمركبات مع 4G LTE Cat.1 و2G Fallback وتحديد الموقع GPS وLBS والتتبع اللحظي وتنبيهات الحماية.",
    url: "https://gpsworld-eg.com/devices/j16pro-max",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/J16PRO max.jpeg",
        width: 1024,
        height: 1024,
        alt: "J16PRO Max Intel جهاز تتبع سيارات GPS 4G في مصر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J16PRO Max Intel | جهاز تتبع سيارات GPS 4G",
    description:
      "جهاز J16PRO Max Intel لتتبع السيارات والمركبات مع 4G و2G وتحديد الموقع GPS وLBS.",
    images: ["/images/J16PRO max.jpeg"],
  },
};

const product = {
  name: "J16PRO Max Intel",
  price: "سعر",
  image: "/images/J16PRO max.jpeg",
  url: "https://gpsworld-eg.com/devices/j16pro-max",
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز J16PRO Max Intel"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز J16PRO Max Intel"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

const faqs = [
  {
    question: "ما هو جهاز J16PRO Max Intel؟",
    answer:
      "جهاز J16PRO Max Intel هو جهاز تتبع GPS للسيارات والمركبات، ويدعم شبكة 4G LTE Cat.1 مع 2G Fallback، بالإضافة إلى تحديد الموقع باستخدام GPS وLBS ومجموعة من وظائف التتبع والتنبيهات والحماية.",
  },
  {
    question: "هل جهاز J16PRO Max Intel يعمل على شبكة 4G؟",
    answer:
      "نعم، يدعم J16PRO Max Intel شبكة 4G LTE Cat.1، مع دعم 2G Fallback كشبكة احتياطية.",
  },
  {
    question: "ما جهد تشغيل جهاز J16PRO Max Intel؟",
    answer:
      "يعمل الجهاز على نطاق جهد من 9V إلى 90V DC، ولذلك فهو مناسب لمجموعة واسعة من السيارات والمركبات.",
  },
  {
    question: "هل الجهاز مناسب للشاحنات والمركبات الكبيرة؟",
    answer:
      "نعم، الجهاز مناسب للسيارات والشاحنات والأتوبيسات والمركبات التجارية وتطبيقات إدارة الأساطيل.",
  },
  {
    question: "هل يوجد تتبع لحظي للسيارة؟",
    answer:
      "نعم، يدعم الجهاز التتبع اللحظي من خلال نظام GPS المتوافق مع الجهاز والسيرفر المستخدم.",
  },
  {
    question: "هل يمكن استخدام الجهاز لتتبع السيارة من الموبايل؟",
    answer:
      "يمكن متابعة بيانات وموقع المركبة من الهاتف عند استخدام تطبيق أو نظام تتبع متوافق مع جهاز J16PRO Max Intel.",
  },
  {
    question: "هل يدعم الجهاز السياج الجغرافي؟",
    answer:
      "نعم، يدعم الجهاز وظيفة السياج الجغرافي Geo-Fence من خلال نظام التتبع المتوافق، ويمكن استخدامها لمتابعة دخول المركبة إلى منطقة محددة أو خروجها منها.",
  },
  {
    question: "هل يدعم الجهاز التحكم في فصل الكهرباء أو الوقود؟",
    answer:
      "يمكن استخدام وظيفة فصل الكهرباء أو الوقود عند تجهيز المركبة بالتوصيل المناسب، وتوفر دعم هذه الوظيفة في نظام التتبع المستخدم.",
  },
  {
    question: "هل يوجد ضمان على الجهاز؟",
    answer:
      "يوجد ضمان لمدة سنة ضد عيوب الصناعة، ولا يشمل الحرق أو الكسر أو التلف الناتج عن سوء الاستخدام.",
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
        "جهاز J16PRO Max Intel لتتبع السيارات والمركبات في مصر بتقنية 4G LTE Cat.1 مع 2G Fallback وتحديد الموقع GPS وLBS وتتبع لحظي وتنبيهات الحماية.",
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
          name: "J16PRO Max Intel",
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

export default function J16ProMaxIntelPage() {
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

            <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
              <Image
                src={product.image}
                alt="J16PRO Max Intel جهاز تتبع سيارات GPS 4G في مصر"
                width={650}
                height={500}
                priority
                className="max-h-[500px] w-full object-contain"
              />
            </div>

            {/* ================= DETAILS ================= */}

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز J16PRO Max Intel لتتبع السيارات والمركبات
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                جهاز تتبع سيارات GPS احترافي 4G
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز J16PRO Max Intel هو جهاز تتبع GPS للسيارات والمركبات
                بتقنية 4G LTE Cat.1، مع دعم 2G Fallback كشبكة احتياطية. يوفر
                الجهاز تحديد الموقع باستخدام GPS وLBS، ومتابعة المركبة بشكل
                لحظي، بالإضافة إلى مجموعة من التنبيهات ووظائف الحماية وإدارة
                الأساطيل.
              </p>

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
              J16PRO Max Intel جهاز تتبع سيارات GPS 4G في مصر
            </h2>

            <div className="mt-6 text-lg font-semibold leading-9 text-gray-700">
              <p className="mb-5">
                جهاز J16PRO Max Intel هو جهاز GPS لتتبع السيارات والمركبات
                باستخدام شبكة 4G LTE Cat.1، مع دعم 2G Fallback عند الحاجة.
                ويتيح الجهاز متابعة موقع المركبة وحركتها من خلال نظام أو
                سيرفر GPS متوافق.
              </p>

              <p className="mb-5">
                يعتمد الجهاز على تحديد الموقع GPS وLBS، ويقدم مجموعة من وظائف
                التتبع والتنبيهات التي تناسب الاستخدام الشخصي والتجاري، مثل
                متابعة حركة السيارة وتنبيهات السرعة والسياج الجغرافي وفصل
                مصدر الكهرباء، وفقًا لإمكانيات نظام التتبع المستخدم.
              </p>

              <p className="mb-5">
                ويمكن استخدام جهاز تتبع السيارات J16PRO Max Intel في السيارات
                الخاصة والشاحنات والأتوبيسات والمركبات التجارية وسيارات الأجرة،
                كما يناسب الشركات التي تحتاج إلى متابعة وإدارة أسطول من
                المركبات من خلال نظام GPS.
              </p>

              <p>
                إذا كنت تبحث عن جهاز GPS للسيارات أو GPS Tracker 4G في مصر،
                يمكنك التواصل معنا لمعرفة تفاصيل جهاز J16PRO Max Intel
                والتوفر وطريقة التركيب والنظام المناسب لاستخدامك.
              </p>
            </div>
          </div>
        </section>

        {/* ================= MAIN FEATURES ================= */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* ================= FEATURES ================= */}

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
                ⭐ أهم مميزات جهاز J16PRO Max Intel
              </h2>

              <ul className="space-y-4 text-lg leading-8 text-gray-700">
                <li>📍 تتبع موقع المركبة بشكل لحظي.</li>
                <li>📡 دعم شبكة 4G LTE Cat.1.</li>
                <li>📶 دعم 2G Fallback كشبكة احتياطية.</li>
                <li>🛰️ تحديد الموقع باستخدام GPS وLBS.</li>
                <li>🚨 تنبيهات السرعة والحركة والاهتزاز.</li>
                <li>🔌 تنبيه عند فصل مصدر الكهرباء.</li>
                <li>🛡️ تنبيهات الحماية ومحاولات العبث.</li>
                <li>🗺️ دعم السياج الجغرافي Geo-Fence.</li>
                <li>
                  ⛽ إمكانية التحكم في فصل الكهرباء أو الوقود من خلال النظام
                  المتوافق.
                </li>
                <li>🎙️ إمكانية دعم المراقبة الصوتية حسب التجهيز.</li>
                <li>🚛 مناسب لإدارة أساطيل السيارات والمركبات.</li>
                <li>📊 مناسب لمتابعة السائقين وسلوك القيادة.</li>
              </ul>
            </div>

            {/* ================= SPECIFICATIONS ================= */}

            <div className="rounded-3xl bg-white p-7 shadow-md">
              <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
                ⚙️ المواصفات الفنية لجهاز J16PRO Max Intel
              </h2>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الموديل</span>
                  <span className="text-gray-600">J16PRO Max Intel</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">نوع الجهاز</span>
                  <span className="text-gray-600">GPS Vehicle Tracker</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الشبكة</span>
                  <span className="text-gray-600">4G LTE Cat.1</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    الشبكة الاحتياطية
                  </span>
                  <span className="text-gray-600">2G Fallback</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    تحديد الموقع
                  </span>
                  <span className="text-gray-600">GNSS + LBS</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    جهد التشغيل
                  </span>
                  <span className="text-gray-600">9V – 90V DC</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    البطارية الاحتياطية
                  </span>
                  <span className="text-gray-600">250mAh / 3.7V</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">
                    درجة التشغيل
                  </span>
                  <span className="text-gray-600">-20°C ~ +75°C</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">الحساسية</span>
                  <span className="text-gray-600">-162dBm</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 p-4">
                  <span className="font-bold text-gray-800">الحماية</span>
                  <span className="text-gray-600">IPX5</span>
                </div>

                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-4">
                  <span className="font-bold text-gray-800">
                    استهلاك الطاقة
                  </span>
                  <span className="text-gray-600">أقل من 4mA</span>
                </div>

                <div className="grid grid-cols-2 p-4">
                  <span className="font-bold text-gray-800">الاستخدام</span>
                  <span className="text-gray-600">
                    السيارات والشاحنات والأساطيل
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SMART FUNCTIONS ================= */}

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                J16PRO Max Intel
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                وظائف التتبع والحماية
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                تم تصميم جهاز J16PRO Max Intel ليكون مناسبًا لمتابعة السيارات
                والمركبات وإدارة الأساطيل، مع مجموعة من وظائف التتبع والتنبيهات
                والحماية التي تساعد على متابعة المركبة ومعرفة الحالات غير
                الطبيعية.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">📍</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  التتبع اللحظي
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  متابعة موقع المركبة وحركتها بشكل لحظي من خلال نظام التتبع
                  المتوافق مع الجهاز.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🚨</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  تنبيهات السرعة
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  استقبال تنبيهات عند تجاوز السرعة المحددة للمركبة.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🗺️</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  السياج الجغرافي
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  إمكانية إنشاء نطاق جغرافي واستقبال تنبيه عند خروج المركبة
                  من النطاق المحدد أو دخولها إليه.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🔌</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  فصل مصدر الطاقة
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  تنبيه عند اكتشاف فصل مصدر الكهرباء عن الجهاز أو حدوث مشكلة
                  في مصدر الطاقة.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🛡️</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  الحماية ومكافحة السرقة
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  يساعد في متابعة المركبة واكتشاف الحركة أو الحالات غير
                  الطبيعية المرتبطة بالحماية.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">📊</div>

                <h3 className="mt-4 text-xl font-extrabold text-blue-950">
                  إدارة الأساطيل
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  مناسب للشركات والمؤسسات التي تحتاج إلى متابعة عدد من
                  المركبات وإدارتها من خلال نظام GPS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= APPLICATIONS ================= */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
                🚘 استخدامات جهاز J16PRO Max Intel
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-600">
                يمكن استخدام جهاز J16PRO Max Intel في مجموعة متنوعة من تطبيقات
                تتبع وإدارة المركبات، سواء للاستخدام الشخصي أو التجاري أو
                لمتابعة أساطيل الشركات.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚗</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  السيارات
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚛</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  الشاحنات
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚌</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  الأتوبيسات والميني باص
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚕</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  سيارات الأجرة
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🏢</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  الشركات
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🚚</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  النقل واللوجستيات
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">🔑</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  تأجير السيارات
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-4xl">📡</div>
                <h3 className="mt-3 font-extrabold text-blue-950">
                  إدارة الأساطيل
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY ================= */}

        <section className="bg-blue-50 px-5 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <span className="font-bold text-blue-700">
              GPS World Egypt
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              لماذا تختار جهاز J16PRO Max Intel؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              لأنه يجمع بين الاتصال بشبكة 4G LTE Cat.1 ودعم 2G كشبكة
              احتياطية، مع تحديد الموقع GPS وLBS، ومجموعة من وظائف التتبع
              والتنبيهات والحماية المناسبة للاستخدام الشخصي والتجاري وإدارة
              الأساطيل.
            </p>
          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-center text-3xl font-extrabold text-blue-950 md:text-4xl">
            ❓ الأسئلة الشائعة عن J16PRO Max Intel
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
              هل تريد معرفة المزيد عن جهاز J16PRO Max Intel؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة التفاصيل والتوفر وطلب جهاز التتبع المناسب
              لسيارتك أو مركبتك.
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