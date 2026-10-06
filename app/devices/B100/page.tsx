import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

const whatsappNumber = "201006687163";

const product = {
  name: "B100",
  image: "/images/B100.jpeg",
  url: "https://gpsworld-eg.com/devices/b100",
};

export const metadata: Metadata = {
  title: "B100 | جهاز تتبع GPS سلكي صغير 2G",
  description:
    "جهاز B100 لتتبع السيارات والمركبات، GPS سلكي صغير الحجم يعمل على شبكة 2G بجهد 9–90V DC، مع تتبع مباشر وتنبيهات الحركة والسرعة وGeo-Fence وإمكانية فصل المحرك.",
  keywords: [
    "B100",
    "جهاز B100",
    "GPS B100",
    "جهاز تتبع B100",
    "جهاز تتبع GPS",
    "GPS Tracker",
    "جهاز تتبع سيارات",
    "جهاز GPS للموتوسيكل",
    "جهاز تتبع 2G",
    "GPS 2G مصر",
  ],
  alternates: {
    canonical: product.url,
  },
  openGraph: {
    title: "B100 | جهاز تتبع GPS سلكي صغير 2G",
    description:
      "جهاز GPS سلكي صغير الحجم للمركبات والموتوسيكلات، يعمل على شبكة 2G وبجهد 9–90V DC مع تتبع مباشر وتنبيهات متعددة.",
    url: product.url,
    type: "website",
    images: [
      {
        url: product.image,
        width: 1200,
        height: 630,
        alt: "جهاز B100 لتتبع السيارات والمركبات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B100 | جهاز تتبع GPS سلكي صغير 2G",
    description:
      "جهاز تتبع GPS سلكي صغير الحجم للمركبات والموتوسيكلات.",
    images: [product.image],
  },
};

const features = [
  {
    number: "1",
    title: "التتبع والمراقبة الحية 📍",
    text: "متابعة موقع المركبة على الخريطة بشكل مباشر، مع معرفة مكانها وحركتها وبياناتها من خلال نظام التتبع المتوافق مع الجهاز.",
  },
  {
    number: "2",
    title: "متابعة خط السير والرحلات 🛣️",
    text: "إمكانية مراجعة تحركات المركبة والرحلات السابقة حسب إمكانيات نظام التتبع المستخدم.",
  },
  {
    number: "3",
    title: "فصل المحرك عن بُعد 🛑",
    text: "يمكن توصيل الجهاز بريلاي لتنفيذ فصل المحرك عن بُعد عند التوصيل بالطريقة الصحيحة، سواء من خلال النظام المستخدم أو برسالة SMS حسب إعدادات الجهاز.",
  },
  {
    number: "4",
    title: "تنبيهات فصل الكهرباء والعبث 🚨",
    text: "يمكن للجهاز إرسال تنبيه عند فصل مصدر الكهرباء أو حدوث عبث بتوصيلات الجهاز.",
  },
  {
    number: "5",
    title: "تنبيه الحركة والاهتزاز 🔔",
    text: "يمكن إعداد الجهاز لإرسال تنبيه عند اكتشاف اهتزاز أو حركة غير طبيعية أثناء توقف المركبة.",
  },
  {
    number: "6",
    title: "تنبيه تجاوز السرعة ⚠️",
    text: "يمكن تحديد سرعة معينة واستقبال تنبيه عند تجاوز السرعة المحددة حسب إمكانيات النظام المستخدم.",
  },
  {
    number: "7",
    title: "السياج الجغرافي Geo-Fence 📍",
    text: "يمكن تحديد منطقة جغرافية على الخريطة واستقبال تنبيه عند دخول المركبة إلى المنطقة أو خروجها منها.",
  },
  {
    number: "8",
    title: "متابعة تشغيل وإيقاف الكونتاكت",
    text: "يدعم متابعة حالة ACC لمعرفة تشغيل وإيقاف الكونتاكت حسب طريقة التركيب والنظام المتوافق.",
  },
  {
    number: "9",
    title: "جهد تشغيل واسع ⚙️",
    text: "يعمل B100 على جهد من 9 إلى 90 فولت DC، مما يجعله مناسبًا لمجموعة واسعة من المركبات التي تقع ضمن نطاق التشغيل.",
  },
  {
    number: "10",
    title: "بطارية داخلية احتياطية 🔋",
    text: "يحتوي الجهاز على بطارية داخلية 55mAh تساعد على إرسال تنبيه عند فصل مصدر الكهرباء الرئيسي عن الجهاز.",
  },
  {
    number: "11",
    title: "حجم صغير جدًا 📦",
    text: "من أهم مميزات B100 حجمه الصغير ووزنه الخفيف، مما يسهل تركيبه وإخفاءه في الأماكن الضيقة داخل المركبة.",
  },
  {
    number: "12",
    title: "يعمل على شبكة 2G 📶",
    text: "الجهاز يعمل على شبكة 2G، لذلك يجب التأكد من توفر تغطية الشبكة المناسبة في مكان استخدام الجهاز.",
  },
];

const applications = [
  "الموتوسيكلات والسكوتر.",
  "السيارات الملاكي والأجرة.",
  "الشاحنات والمركبات المختلفة.",
  "المركبات التي تحتاج إلى جهاز صغير وسهل الإخفاء.",
  "الأماكن التي تكون فيها مساحة التركيب محدودة.",
];

const faqs = [
  {
    question: "ما هو جهاز B100؟",
    answer:
      "B100 هو جهاز تتبع GPS سلكي صغير الحجم يعمل على شبكة 2G، ومخصص لمتابعة المركبات مع التتبع المباشر والتنبيهات الأساسية وإمكانية فصل المحرك عن بُعد عند تركيبه بالطريقة الصحيحة.",
  },
  {
    question: "هل جهاز B100 يعمل على 4G؟",
    answer:
      "لا، النسخة المعتمدة لدينا من B100 تعمل على شبكة 2G.",
  },
  {
    question: "ما هو جهد تشغيل B100؟",
    answer: "يعمل B100 على جهد من 9 إلى 90 فولت DC.",
  },
  {
    question: "هل يحتوي B100 على ميكروفون أو خاصية الاستماع؟",
    answer:
      "لا، B100 في النسخة المعتمدة لدينا لا يدعم الميكروفون أو خاصية الاستماع داخل السيارة.",
  },
  {
    question: "هل يحتوي B100 على زر SOS؟",
    answer:
      "لا، B100 في النسخة المعتمدة لدينا لا يحتوي على زر SOS.",
  },
  {
    question: "هل يمكن فصل محرك السيارة عن بُعد؟",
    answer:
      "نعم، يمكن تنفيذ فصل المحرك عن بُعد عند تركيب الريلاي وتوصيله بالطريقة الصحيحة، وحسب النظام المستخدم وإعدادات الجهاز.",
  },
  {
    question: "هل B100 مناسب للموتوسيكلات؟",
    answer:
      "نعم، حجمه الصغير وجهد تشغيله من 9 إلى 90 فولت يجعلان الجهاز مناسبًا للموتوسيكلات والسكوتر، مع مراعاة طريقة التركيب وجهد المركبة.",
  },
  {
    question: "ما مقاس ووزن جهاز B100؟",
    answer:
      "مقاس الجهاز حوالي 72 × 31 × 12 مم، ووزنه حوالي 30 جرام.",
  },
  {
    question: "ما مدة ضمان جهاز B100؟",
    answer: "الجهاز بضمان سنة ضد عيوب الصناعة.",
  },
];

function WhatsAppLink({
  children,
  message,
  className = "",
}: {
  children: React.ReactNode;
  message: string;
  className?: string;
}) {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function B100Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.name,
        image: [product.image],
        description:
          "جهاز B100 لتتبع السيارات والمركبات، سلكي وصغير الحجم، يعمل على شبكة 2G بجهد 9–90V DC.",
        url: product.url,
        brand: {
          "@type": "Brand",
          name: "GPS World Egypt",
        },
        offers: {
          "@type": "Offer",
          url: product.url,
          availability: "https://schema.org/InStock",
          priceCurrency: "EGP",
        },
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
            item: "https://gpsworld-eg.com/devices",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "B100",
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

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white text-slate-900"
      style={{
        backgroundColor: "#ffffff",
        color: "#0f172a",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b border-slate-200 bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a
            href="/devices"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
            style={{
              backgroundColor: "#ffffff",
              color: "#334155",
            }}
          >
            ← أجهزة GPS
          </a>

          <div className="text-right">
            <div className="text-sm font-black text-blue-900">
              GPS World Egypt
            </div>
            <div className="text-xs text-slate-500">
              أجهزة تتبع GPS
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="bg-gradient-to-b from-blue-950 via-blue-900 to-white"
        style={{ color: "#ffffff" }}
      >
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-8">
          <div className="mb-6">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              ✓ متوفر
            </span>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                جهاز B100 لتتبع السيارات والمركبات
              </h1>

              <p className="mt-4 text-lg font-bold text-blue-100">
                جهاز تتبع GPS سلكي صغير جدًا يعمل على شبكة 2G
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50">
                جهاز GPS سلكي صغير وخفيف، مناسب لمتابعة السيارات والموتوسيكلات
                والسكوتر والمركبات المختلفة، مع التتبع المباشر والتنبيهات
                الأساسية وإمكانية فصل المحرك عن بُعد عند التوصيل الصحيح.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["2G", "شبكة التشغيل"],
                  ["9–90V", "جهد التشغيل"],
                  ["55mAh", "بطارية داخلية"],
                  ["30g", "وزن خفيف"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center"
                  >
                    <div className="text-lg font-black text-white">
                      {value}
                    </div>
                    <div className="mt-1 text-xs text-blue-100">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink
                  message="السلام عليكم، عايز أعرف تفاصيل جهاز B100 وسعره."
                  className="rounded-2xl bg-emerald-500 px-6 py-4 text-center font-black text-white shadow-lg"
                >
                  اسأل عن B100 على واتساب
                </WhatsAppLink>

                <a
                  href="tel:01006687163"
                  className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-center font-black text-white"
                >
                  اتصل بنا
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl"
                style={{ backgroundColor: "#ffffff" }}
              >
                <DeviceGallery
                  images={[
                    "/images/B100.jpeg",
                    "/images/B100-2.jpeg",
                    "/images/B100-3.jpeg",
                    "/images/B100-4.jpeg",
                    "/images/B100-5.jpeg",
                    "/images/B100-6.jpeg",
                  ]}
                  deviceName="B100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section
        className="mx-auto max-w-6xl px-4 py-10"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8"
          style={{ backgroundColor: "#ffffff" }}
        >
          <h2 className="text-2xl font-black text-blue-950">
            B100 — جهاز صغير لكن عملي
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            أهم نقطة تميز B100 هي حجمه الصغير جدًا ووزنه الخفيف، مع جهد تشغيل
            واسع من 9 إلى 90 فولت. وده يجعله اختيارًا عمليًا خصوصًا للموتوسيكلات
            والسكوتر والمركبات التي تحتاج إلى جهاز يسهل تركيبه وإخفاؤه في مساحة
            ضيقة.
          </p>
        </div>
      </section>

      {/* Features */}
      <section
        className="mx-auto max-w-6xl bg-white px-4 py-6"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mb-8 text-center">
          <span className="text-sm font-black text-blue-700">
            مميزات الجهاز
          </span>

          <h2 className="mt-2 text-3xl font-black text-slate-950">
            مميزات جهاز B100 بالتفصيل
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            كل المميزات المهمة في جهاز واحد، مع تصميم صغير مناسب للتركيب في
            الأماكن الضيقة.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-lg font-black text-white">
                  {feature.number}
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {feature.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Practical Difference */}
      <section
        className="mx-auto max-w-6xl bg-white px-4 py-12"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="overflow-hidden rounded-3xl bg-blue-950 text-white shadow-xl">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-black sm:text-3xl">
              ليه تختار B100؟
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5">
                <div className="text-xl font-black">
                  📦 حجم صغير
                </div>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  حجمه 72 × 31 × 12 مم فقط، وده بيساعد في تركيبه وإخفائه في
                  الأماكن الضيقة.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <div className="text-xl font-black">
                  ⚙️ 9–90V
                </div>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  جهد تشغيل واسع مناسب لمجموعة كبيرة من المركبات ضمن نطاق
                  التشغيل.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <div className="text-xl font-black">
                  🏍️ مناسب للموتوسيكلات
                </div>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  حجمه ووزنه الخفيف يجعلاه مناسبًا جدًا للموتوسيكلات والسكوتر
                  والأماكن التي لا تسمح بتركيب جهاز كبير.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section
        className="mx-auto max-w-6xl bg-white px-4 py-6"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          style={{ backgroundColor: "#ffffff" }}
        >
          <h2 className="text-2xl font-black text-slate-950">
            مناسب لمين؟
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {applications.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-900 text-sm font-black text-white">
                  {index + 1}
                </span>

                <span className="font-bold leading-7 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Notes */}
      <section
        className="mx-auto max-w-6xl bg-white px-4 py-12"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            style={{ backgroundColor: "#ffffff" }}
          >
            <h2 className="text-xl font-black text-slate-950">
              معلومات مهمة عن B100
            </h2>

            <div className="mt-5 space-y-3">
              <div
                className="rounded-2xl bg-slate-50 p-4"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <span className="font-black">الشبكة:</span>{" "}
                <span className="text-slate-600">2G</span>
              </div>

              <div
                className="rounded-2xl bg-slate-50 p-4"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <span className="font-black">جهد التشغيل:</span>{" "}
                <span className="text-slate-600">9–90V DC</span>
              </div>

              <div
                className="rounded-2xl bg-slate-50 p-4"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <span className="font-black">البطارية:</span>{" "}
                <span className="text-slate-600">55mAh</span>
              </div>

              <div
                className="rounded-2xl bg-slate-50 p-4"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <span className="font-black">المقاس:</span>{" "}
                <span className="text-slate-600">
                  72 × 31 × 12 مم
                </span>
              </div>

              <div
                className="rounded-2xl bg-slate-50 p-4"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <span className="font-black">الوزن:</span>{" "}
                <span className="text-slate-600">حوالي 30 جرام</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm"
            style={{ backgroundColor: "#ecfdf5" }}
          >
            <h2 className="text-xl font-black text-emerald-950">
              الضمان 🛡️
            </h2>

            <p className="mt-5 text-lg font-bold leading-9 text-emerald-900">
              جهاز B100 بضمان سنة ضد عيوب الصناعة.
            </p>

            <p className="mt-3 leading-8 text-emerald-800">
              ويتم التركيب والتوصيل بالطريقة المناسبة لنوع المركبة ووظائف
              الجهاز المطلوبة.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section
        id="comparison"
        className="mx-auto max-w-6xl bg-white px-4 py-6"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-center sm:p-8"
          style={{ backgroundColor: "#eff6ff" }}
        >
          <h2 className="text-2xl font-black text-blue-950">
            محتار بين B100 وجهاز تاني؟
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            قارن بين الأجهزة وشوف الفرق العملي بينهم قبل ما تختار الجهاز
            المناسب لمركبتك.
          </p>

          <a
            href="/comparison"
            className="mt-6 inline-flex rounded-2xl bg-blue-900 px-7 py-4 font-black text-white shadow-lg"
          >
            قارن بين جهازين
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="mx-auto max-w-6xl bg-white px-4 py-12"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mb-7">
          <h2 className="text-2xl font-black text-slate-950">
            الأسئلة الشائعة عن B100
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <summary className="cursor-pointer list-none font-black text-slate-900">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-xl text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-4 border-t border-slate-100 pt-4 leading-8 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-950">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-3xl font-black text-white">
            عايز تعرف هل B100 مناسب لمركبتك؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-blue-100">
            تواصل معنا قبل الشراء، ونحدد لك الجهاز المناسب حسب نوع المركبة
            وطريقة التركيب المطلوبة.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppLink
              message="السلام عليكم، عايز أعرف تفاصيل جهاز B100 وهل مناسب لمركبتي."
              className="rounded-2xl bg-emerald-500 px-7 py-4 font-black text-white shadow-lg"
            >
              تواصل معنا على واتساب
            </WhatsAppLink>

            <a
              href="tel:01006687163"
              className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 font-black text-white"
            >
              01006687163
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center">
          <div className="font-black text-white">
            GPS World Egypt
          </div>

          <p className="mt-2 text-sm">
            أجهزة تتبع GPS للسيارات والمركبات
          </p>

          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} GPS World Egypt. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <WhatsAppLink
        message="السلام عليكم، عايز أعرف تفاصيل جهاز B100 وسعره."
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white shadow-2xl"
      >
        <span aria-hidden="true">◉</span>
      </WhatsAppLink>
    </main>
  );
}