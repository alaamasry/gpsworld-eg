
import Link from "next/link";
import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

const model = "AK300PRO";
const pageUrl = "https://gpsworld-eg.com/devices/ak300-pro";
const mainImage = "/images/AK300PRO.jpeg";
const whatsappNumber = "201006687163";

export const metadata: Metadata = {
  title: "AK300PRO | جهاز تتبع سيارات GPS في مصر",
  description:
    "جهاز AK300PRO لتتبع السيارات والمركبات، مع تتبع مباشر وتنبيهات وإمكانية توصيل إنذار فتح أبواب السيارة على التطبيق.",
  keywords: [
    "AK300PRO",
    "AK300PRO GPS",
    "جهاز AK300PRO",
    "AK300PRO مصر",
    "جهاز تتبع سيارات",
    "جهاز تتبع GPS",
    "GPS Tracker Egypt",
    "أجهزة GPS مصر",
    "تتبع السيارات",
    "إنذار فتح أبواب السيارة",
    "تنبيه فتح باب السيارة",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "AK300PRO | جهاز تتبع سيارات GPS في مصر",
    description:
      "تتبع مباشر وتنبيهات للمركبة، مع إمكانية توصيل إنذار فتح أبواب السيارة على التطبيق.",
    url: pageUrl,
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: mainImage,
        width: 1024,
        height: 1024,
        alt: "جهاز AK300PRO لتتبع السيارات GPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK300PRO | جهاز تتبع سيارات GPS",
    description:
      "جهاز AK300PRO لتتبع السيارات مع تنبيهات وإمكانية إنذار فتح الأبواب.",
    images: [mainImage],
  },
};

const product = {
  name: model,
  price: "سعر",
  image: mainImage,
  url: pageUrl,
};

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز AK300PRO"
);
const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز AK300PRO"
);
const whatsappInquiryUrl =
  `https://wa.me/${whatsappNumber}?text=${whatsappInquiry}`;
const whatsappOrderUrl =
  `https://wa.me/${whatsappNumber}?text=${whatsappOrder}`;
const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

const faqs = [
  {
    question: "ما هو جهاز AK300PRO؟",
    answer:
      "جهاز AK300PRO هو جهاز لتتبع السيارات والمركبات، يتيح متابعة الموقع وخط السير والاستفادة من التنبيهات المتاحة وفقًا لإعدادات الجهاز ونظام التتبع المستخدم.",
  },
  {
    question: "هل يمكن استقبال تنبيه عند فتح باب السيارة؟",
    answer:
      "نعم، يمكن توصيل الطرف المخصص بإشارة أبواب السيارة، بحيث يصل تنبيه إلى تطبيق التتبع عند فتح الباب، بعد تنفيذ التوصيلات الصحيحة وضبط إعدادات التنبيه.",
  },
  {
    question: "هل يمكن متابعة السيارة بشكل مباشر؟",
    answer:
      "يمكن متابعة موقع المركبة وحركتها وسرعتها وخط سيرها من خلال نظام التتبع المتوافق مع الجهاز.",
  },
  {
    question: "هل يمكن فصل محرك السيارة عن بُعد؟",
    answer:
      "يمكن استخدام خاصية فصل المحرك إذا كان الجهاز والتجهيز المستخدم يدعمانها، وبعد تركيب الريلاي والتوصيل بالطريقة الصحيحة.",
  },
  {
    question: "هل يمكن استخدام الجهاز في أنواع مختلفة من المركبات؟",
    answer:
      "يمكن تحديد مدى ملاءمة الجهاز للسيارة أو المركبة المطلوبة بعد التأكد من جهد التشغيل والتوصيلات المتوافقة معها.",
  },
  {
    question: "هل يوجد ضمان على جهاز AK300PRO؟",
    answer: "يوجد ضمان لمدة سنة ضد عيوب الصناعة.",
  },
];

const features = [
  {
    number: "1",
    icon: "📡",
    title: "متابعة موقع المركبة",
    text: "تابع موقع السيارة وحركتها وخط سيرها من خلال نظام التتبع المتوافق مع الجهاز.",
  },
  {
    number: "2",
    icon: "🚪",
    title: "إنذار فتح أبواب السيارة",
    text: "يمكن توصيل الطرف المخصص بإشارة أبواب السيارة لإرسال تنبيه إلى التطبيق عند فتح الباب، بعد التوصيل وضبط الإعدادات.",
  },
  {
    number: "3",
    icon: "🚨",
    title: "تنبيهات للمركبة",
    text: "استفد من التنبيهات التي يدعمها الجهاز ونظام التتبع، وفقًا للتوصيلات والإعدادات المستخدمة.",
  },
  {
    number: "4",
    icon: "📍",
    title: "متابعة السرعة وخط السير",
    text: "راجع سرعة المركبة ومسارات الرحلات السابقة من خلال نظام التتبع المتوافق.",
  },
  {
    number: "5",
    icon: "🗺️",
    title: "السياج الجغرافي",
    text: "يمكن إعداد تنبيهات دخول المركبة إلى منطقة محددة أو خروجها منها إذا كانت الخاصية مدعومة ومفعلة.",
  },
  {
    number: "6",
    icon: "🛡️",
    title: "مساعدة في حماية المركبة",
    text: "اجمع بين متابعة المركبة والتنبيهات المتاحة للمساعدة على اكتشاف بعض الحالات غير المعتادة.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: [`https://gpsworld-eg.com${mainImage}`],
      url: product.url,
      description:
        "جهاز AK300PRO لتتبع السيارات والمركبات، مع إمكانية توصيل إنذار فتح أبواب السيارة على التطبيق.",
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
          name: model,
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

export default function Ak300ProPage() {
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
              <Link
                href="/"
                className="flex flex-col leading-tight transition hover:text-yellow-300"
              >
                <span className="text-2xl font-extrabold md:text-3xl">
                  GPS World Egypt
                </span>
                <span className="mt-1 text-xs text-blue-200 md:text-sm">
                  حلول التتبع والمراقبة GPS
                </span>
              </Link>

              <Link
                href="/#products"
                className="rounded-xl bg-blue-900 px-4 py-3 font-bold transition hover:bg-blue-800"
              >
                📡 الأجهزة
              </Link>
            </div>
          </div>
        </header>

        {/* BACK */}
        <div className="mx-auto max-w-7xl px-5 pt-6">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-800"
          >
            ← العودة إلى الأجهزة
          </Link>
        </div>

        {/* PRODUCT */}
        <section className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative">
              <DeviceGallery
                images={[
                  "/images/AK300PRO.jpeg",
                  "/images/AK300PRO-2.jpeg",
                  "/images/AK300PRO-3.jpeg",
                  "/images/AK300PRO-4.jpeg",
                  "/images/AK300PRO-5.jpeg",
                  "/images/AK300PRO-6.jpeg",
                ]}
                deviceName={model}
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز AK300PRO لتتبع السيارات والمركبات
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                تتبع GPS وتنبيهات إضافية للمركبة
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                عايز تتابع عربيتك وتعرف موقعها؟ جهاز AK300PRO يساعدك على متابعة
                المركبة من خلال نظام التتبع المتوافق. ومن مميزاته الإضافية
                إمكانية توصيل طرف مخصص بإشارة أبواب السيارة، لإرسال تنبيه على
                التطبيق عند فتح الباب، بعد تنفيذ التوصيلات وضبط الإعدادات
                بالشكل الصحيح.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <div className="text-2xl">📡</div>
                  <p className="mt-2 font-extrabold text-blue-950">
                    تتبع GPS
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <div className="text-2xl">🚪</div>
                  <p className="mt-2 font-extrabold text-blue-950">
                    إنذار فتح الباب
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                  <div className="text-2xl">🚨</div>
                  <p className="mt-2 font-extrabold text-blue-950">
                    تنبيهات التطبيق
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <span className="text-sm font-bold text-gray-500">
                  السعر
                </span>
                <div className="mt-1 text-3xl font-extrabold text-blue-900">
                  {product.price}
                </div>
              </div>

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

        {/* SEO INTRO */}
        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-8 shadow-md md:p-10">
            <h2 className="text-center text-3xl font-extrabold text-blue-950">
              AK300PRO جهاز تتبع سيارات GPS في مصر
            </h2>

            <div className="mt-6 text-lg font-semibold leading-9 text-gray-700">
              <p className="mb-5">
                يوفر جهاز AK300PRO إمكانية متابعة المركبة من خلال نظام التتبع
                المتوافق، بما يساعد على معرفة الموقع ومراجعة الحركة وخط السير
                وفقًا للخدمات المتاحة.
              </p>

              <p className="mb-5">
                ومن المميزات الإضافية إمكانية توصيل الطرف المخصص بإشارة أبواب
                السيارة. عند فتح الباب، يمكن إرسال تنبيه إلى تطبيق التتبع بعد
                تنفيذ التوصيلات الكهربائية المناسبة وتفعيل إعدادات التنبيه.
              </p>

              <p>
                يُفضّل تنفيذ توصيل إشارة الأبواب بواسطة فني متخصص، مع التأكد
                من توافق إشارة السيارة مع مدخل الجهاز، حتى تعمل الميزة بالشكل
                الصحيح.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN FEATURES */}
        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">{model}</span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                ⭐ أهم مميزات جهاز AK300PRO
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-600">
                تعرف على وظائف التتبع والتنبيهات، ومن بينها إمكانية استقبال
                تنبيه عند فتح أبواب السيارة.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
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

        {/* PRACTICAL DIFFERENCE */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl bg-blue-950 p-8 text-white md:p-12">
              <div className="text-center">
                <span className="font-bold text-blue-200">{model}</span>
                <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                  إيه الميزة الإضافية في AK300PRO؟
                </h2>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-6">
                  <h3 className="text-xl font-extrabold">
                    🚪 تنبيه عند فتح الباب
                  </h3>
                  <p className="mt-3 leading-8 text-blue-100">
                    إمكانية توصيل إشارة أبواب السيارة بالجهاز لإرسال تنبيه على
                    التطبيق عند فتح الباب، بعد ضبط التوصيلات والإعدادات.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <h3 className="text-xl font-extrabold">
                    📱 متابعة التنبيه على التطبيق
                  </h3>
                  <p className="mt-3 leading-8 text-blue-100">
                    عند اكتمال التوصيل وضبط النظام، يصل التنبيه من خلال تطبيق
                    التتبع المتوافق مع الجهاز.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <h3 className="text-xl font-extrabold">
                    📍 متابعة المركبة
                  </h3>
                  <p className="mt-3 leading-8 text-blue-100">
                    متابعة موقع المركبة وحركتها من خلال نظام التتبع المتوافق.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <h3 className="text-xl font-extrabold">
                    🛠️ توصيل بواسطة فني
                  </h3>
                  <p className="mt-3 leading-8 text-blue-100">
                    يراعى توصيل مدخل الأبواب بالإشارة الصحيحة في السيارة،
                    والتأكد من توافقها مع الجهاز قبل تشغيل التنبيه.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
                🚘 استخدامات جهاز AK300PRO
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-600">
                يمكن تحديد الاستخدام المناسب وفقًا لنوع المركبة والتوصيلات
                والوظائف المدعومة في التجهيز المستخدم.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["🚗", "السيارات الملاكي"],
                ["🚕", "التاكسي والأجرة"],
                ["🏍️", "الموتوسيكلات"],
                ["🛺", "التوك توك"],
                ["🚛", "الشاحنات"],
                ["🚚", "المركبات التجارية"],
                ["📍", "متابعة المركبات"],
                ["🚪", "تنبيه فتح الأبواب"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <div className="text-4xl">{icon}</div>
                  <h3 className="mt-3 font-extrabold text-blue-950">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUITABLE FOR */}
        <section className="bg-gray-50 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-white p-8 shadow-md md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
                  👤 جهاز AK300PRO مناسب لمين؟
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
                  مناسب لمن يحتاج إلى متابعة المركبة، مع إمكانية الاستفادة من
                  تنبيه فتح الأبواب بعد توصيل الإشارة وضبط إعدادات الجهاز.
                </p>
              </div>

              <div className="mt-8 space-y-4 text-lg leading-9 text-gray-700">
                <p>✅ لمن يريد متابعة موقع المركبة من خلال تطبيق التتبع.</p>
                <p>✅ لمن يحتاج إلى مراجعة حركة المركبة وخط سيرها.</p>
                <p>
                  ✅ لمن يريد استقبال تنبيه عند فتح باب السيارة، بعد توصيل
                  الطرف المخصص وضبط إعدادات التنبيه.
                </p>
                <p>
                  ✅ لأصحاب السيارات والشركات التي تحتاج إلى متابعة مركباتها،
                  بعد التأكد من توافق الجهاز مع المركبة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
                ⚙️ المواصفات الأساسية
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                البيانات المؤكدة الخاصة بموديل AK300PRO
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-extrabold text-gray-800">الموديل</span>
                <span className="text-gray-600">AK300PRO</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-extrabold text-gray-800">نوع الجهاز</span>
                <span className="text-gray-600">جهاز تتبع GPS</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-extrabold text-gray-800">المصنع</span>
                <span className="text-gray-600">نفس مصنع الموديل المرجعي</span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 p-5">
                <span className="font-extrabold text-gray-800">المقاس</span>
                <span className="text-gray-600">
                  نفس مقاس الموديل المرجعي
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 p-5">
                <span className="font-extrabold text-gray-800">
                  إنذار فتح الأبواب
                </span>
                <span className="text-gray-600">
                  عبر طرف مخصص وإشارة أبواب السيارة
                </span>
              </div>

              <div className="grid grid-cols-2 p-5">
                <span className="font-extrabold text-gray-800">الضمان</span>
                <span className="text-gray-600">سنة ضد عيوب الصناعة</span>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON CTA */}
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
                قارن بين AK300PRO وأجهزة GPS الأخرى لمعرفة الفروق والمميزات
                واختيار الجهاز الأنسب لاستخدامك.
              </p>
              <Link
                href="/devices/compare"
                className="mt-8 inline-flex rounded-2xl bg-blue-900 px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-blue-800"
              >
                ⚖️ قارن بين جهازين
              </Link>
            </div>
          </div>
        </section>

        {/* WARRANTY */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl border border-green-100 bg-green-50 p-8 text-center md:p-12">
            <div className="text-5xl">🛡️</div>
            <h2 className="mt-4 text-3xl font-extrabold text-blue-950">
              ضمان جهاز AK300PRO
            </h2>
            <p className="mt-4 text-xl font-bold text-green-700">
              سنة ضد عيوب الصناعة
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-center text-3xl font-extrabold text-blue-950 md:text-4xl">
            ❓ الأسئلة الشائعة عن AK300PRO
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
                <p className="mt-3 leading-8 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              عايز تعرف إذا كان AK300PRO مناسب لعربيتك؟
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة التفاصيل والتوفر وطريقة التركيب والوظائف
              المناسبة لمركبتك.
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

              <Link
                href="/#products"
                className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-950 transition hover:bg-gray-100"
              >
                📡 مشاهدة باقي الأجهزة
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-blue-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-10 text-center">
            <h3 className="text-2xl font-extrabold">GPS World Egypt</h3>
            <p className="mt-3 text-blue-200">
              أجهزة GPS للتتبع والمراقبة في مصر
            </p>
            <p className="mt-5 text-blue-300">📞 01006687163</p>

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
