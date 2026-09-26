import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AK300 | جهاز تتبع سيارات GPS 4G في مصر",
  description:
    "جهاز AK300 لتتبع السيارات والمركبات بتقنية GPS و4G، مع تتبع لحظي، سجل الرحلات، تنبيهات ذكية، حماية من السرقة ووظائف مناسبة لإدارة الأساطيل في مصر.",
  keywords: [
    "AK300",
    "AK300 GPS",
    "جهاز AK300",
    "جهاز تتبع AK300",
    "GPS AK300",
    "جهاز تتبع سيارات",
    "جهاز GPS للسيارات",
    "أجهزة GPS مصر",
    "GPS مصر",
    "GPS Tracker",
    "GPS Tracker Egypt",
    "GPS 4G",
    "جهاز تتبع سيارات 4G",
    "تتبع السيارات",
    "تتبع المركبات",
    "إدارة الأساطيل",
    "جهاز تتبع مركبات",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/ak300",
  },
  openGraph: {
    title: "AK300 | جهاز تتبع سيارات GPS 4G في مصر",
    description:
      "تعرف على مواصفات ومميزات جهاز AK300 لتتبع السيارات والمركبات بتقنية 4G، ومتابعة الرحلات والتنبيهات وإدارة الأساطيل.",
    url: "https://gpsworld-eg.com/devices/ak300",
    siteName: "GPS World Egypt",
    images: [
      {
        url: "/images/AK300.jpeg",
        width: 1200,
        height: 1200,
        alt: "جهاز AK300 لتتبع السيارات GPS 4G",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AK300 | جهاز تتبع سيارات GPS 4G",
    description:
      "جهاز AK300 لتتبع السيارات والمركبات بتقنية GPS و4G في مصر.",
    images: ["/images/AK300.jpeg"],
  },
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز AK300 لتتبع السيارات."
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز AK300 لتتبع السيارات."
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

const product = {
  name: "AK300",
  image: "/images/AK300.jpeg",
  url: "https://gpsworld-eg.com/devices/ak300",
};

const quickFeatures = [
  {
    icon: "📍",
    title: "تتبع لحظي",
    text: "متابعة موقع السيارة أو المركبة بشكل مباشر من خلال نظام التتبع المتوافق.",
  },
  {
    icon: "📡",
    title: "4G + 2G",
    text: "يدعم شبكة 4G LTE Cat.1 مع إمكانية الرجوع إلى 2G حسب الشبكة والتجهيز.",
  },
  {
    icon: "🛡️",
    title: "حماية وأمان",
    text: "تنبيهات تساعد على متابعة الحركة وفصل الطاقة والعبث بالمركبة حسب إعدادات النظام.",
  },
  {
    icon: "🚚",
    title: "إدارة الأساطيل",
    text: "مناسب للشركات والمركبات التجارية ومتابعة أكثر من مركبة.",
  },
];

const specifications = [
  ["الموديل", "AK300"],
  ["نوع الجهاز", "GPS Tracker"],
  ["الشبكة الرئيسية", "4G LTE Cat.1"],
  ["الشبكات الاحتياطية", "2G Fallback"],
  ["تحديد الموقع", "GNSS + LBS"],
  ["دقة الموقع", "تحديد موقع عالي الدقة"],
  ["جهد التشغيل", "9V – 90V DC"],
  ["البطارية الاحتياطية", "250mAh / 3.7V"],
  ["درجة حرارة التشغيل", "-20°C ~ +75°C"],
  ["حساسية الاستقبال", "-162dBm"],
  ["مقاومة الماء والغبار", "IPX5"],
  ["استهلاك الطاقة", "أقل من 4mA"],
  ["التوسعات", "دعم الحساسات والإكسسوارات"],
];

const fleetFeatures = [
  {
    icon: "🚛",
    title: "شركات النقل",
    text: "متابعة مركبات النقل والشاحنات ومعرفة الحركة والمسارات السابقة حسب النظام.",
  },
  {
    icon: "🏢",
    title: "الشركات والمؤسسات",
    text: "حل عملي لمتابعة سيارات ومركبات الشركات وتقليل صعوبة متابعة المركبات ميدانيًا.",
  },
  {
    icon: "🚐",
    title: "المركبات التجارية",
    text: "مناسب للتاكسي والحافلات والفانات ومركبات التأجير والاستخدام التجاري.",
  },
  {
    icon: "🔐",
    title: "الحماية والمتابعة",
    text: "يساعد على اكتشاف الحركة غير الطبيعية ومحاولات العبث أو فصل الطاقة حسب إعدادات النظام.",
  },
];

const smartFeatures = [
  {
    icon: "⚡",
    title: "متابعة سلوك القيادة",
    text: "إمكانية متابعة السرعة والتسارع والتوقفات وبعض مؤشرات القيادة حسب النظام المستخدم.",
  },
  {
    icon: "🗺️",
    title: "سجل الرحلات",
    text: "الرجوع إلى مسارات وتحركات المركبة السابقة لمعرفة الأماكن التي تحركت إليها السيارة.",
  },
  {
    icon: "🔔",
    title: "التنبيهات",
    text: "تنبيهات عند بعض الحالات مثل فصل الطاقة أو السرعة أو الخروج من النطاق الجغرافي حسب إعدادات النظام.",
  },
  {
    icon: "🆘",
    title: "SOS",
    text: "دعم وظيفة SOS حسب تجهيز الجهاز والنظام المتوافق وطريقة التركيب.",
  },
  {
    icon: "🎙️",
    title: "المراقبة الصوتية",
    text: "إمكانية المراقبة الصوتية حسب التجهيز والنظام المستخدم والملحقات المتوافقة.",
  },
  {
    icon: "🚨",
    title: "متابعة المركبة",
    text: "يساعد في متابعة المركبة والوصول إلى بيانات موقعها عند الحاجة من خلال منصة التتبع.",
  },
];

const applications = [
  "النقل والخدمات اللوجستية",
  "شركات تأجير السيارات",
  "الشركات والمؤسسات",
  "الحافلات والفانات",
  "سيارات الأجرة",
  "المركبات التجارية",
];

const faqs = [
  {
    question: "ما هو جهاز AK300؟",
    answer:
      "AK300 هو جهاز تتبع GPS للمركبات يعمل بتقنية 4G LTE Cat.1 مع دعم 2G Fallback، ويستخدم لمتابعة موقع المركبة والرحلات والتنبيهات ووظائف إدارة المركبات من خلال نظام التتبع المتوافق.",
  },
  {
    question: "هل AK300 جهاز تتبع سيارات 4G؟",
    answer:
      "نعم، AK300 يدعم شبكة 4G LTE Cat.1، مع دعم 2G Fallback، ولذلك يمكن استخدامه كجهاز GPS لتتبع السيارات والمركبات ضمن نظام متوافق مع الجهاز.",
  },
  {
    question: "ما جهد تشغيل جهاز AK300؟",
    answer:
      "جهد تشغيل AK300 هو 9V – 90V DC، وهو نطاق واسع يسمح باستخدام الجهاز مع أنواع مختلفة من المركبات بعد التركيب بالطريقة الصحيحة.",
  },
  {
    question: "هل يمكن متابعة السيارة من الموبايل؟",
    answer:
      "يمكن متابعة السيارة من الهاتف عند استخدام الجهاز مع منصة أو تطبيق تتبع متوافق، وتختلف طريقة عرض الموقع والتقارير والتنبيهات حسب النظام والسيرفر المستخدم.",
  },
  {
    question: "هل AK300 مناسب للشركات وإدارة الأساطيل؟",
    answer:
      "نعم، من الاستخدامات المناسبة لـ AK300 متابعة المركبات التجارية والسيارات التابعة للشركات والأساطيل، خصوصًا عندما تحتاج الشركة إلى معرفة مواقع المركبات ومساراتها وتنبيهاتها من خلال نظام مركزي.",
  },
  {
    question: "هل يدعم AK300 سجل الرحلات؟",
    answer:
      "يمكن عرض سجل ومسارات الرحلات السابقة عند تشغيل الجهاز على نظام تتبع يدعم حفظ وعرض التاريخ، وتختلف مدة وطريقة حفظ البيانات حسب السيرفر والمنصة المستخدمة.",
  },
  {
    question: "هل يمكن إيقاف السيارة عن بعد؟",
    answer:
      "يمكن أن يدعم الجهاز وظيفة إيقاف المركبة عن بعد حسب التجهيز وطريقة التركيب والنظام المستخدم، ويجب تنفيذ هذه الوظيفة من خلال تركيب صحيح وإعدادات متوافقة مع الجهاز والمركبة.",
  },
  {
    question: "هل يوجد بطارية احتياطية داخل AK300؟",
    answer:
      "نعم، المواصفات المذكورة للجهاز تتضمن بطارية احتياطية مدمجة بسعة 250mAh وبجهد 3.7V.",
  },
  {
    question: "هل AK300 مقاوم للماء والغبار؟",
    answer:
      "المواصفات المذكورة للجهاز تتضمن درجة حماية IPX5، مع ضرورة مراعاة مكان التركيب وطريقة الحماية أثناء استخدام الجهاز داخل المركبة.",
  },
  {
    question: "هل يدعم AK300 المراقبة الصوتية؟",
    answer:
      "يمكن أن تتوفر وظيفة المراقبة الصوتية حسب تجهيز الجهاز والنظام والملحقات المتوافقة، لذلك يتم التأكد من هذه الوظيفة قبل التركيب حسب النسخة المتاحة.",
  },
  {
    question: "ما أنواع المركبات التي يمكن استخدام AK300 معها؟",
    answer:
      "يمكن استخدام AK300 مع السيارات والمركبات التجارية ومركبات الشركات والنقل وغيرها، مع مراعاة جهد تشغيل المركبة وطريقة التركيب المناسبة.",
  },
  {
    question: "هل يوجد ضمان على جهاز AK300؟",
    answer:
      "يوجد ضمان لمدة سنة ضد عيوب التصنيع، ولا يشمل الحرق أو الكسر أو التلف الناتج عن سوء الاستخدام.",
  },
  {
    question: "كيف أعرف سعر وتوفر AK300؟",
    answer:
      "يمكنك التواصل مع GPS World Egypt عبر واتساب لمعرفة السعر الحالي والتوفر وخيارات السيرفر والتركيب المناسبة لاستخدامك.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: [
        "https://gpsworld-eg.com/images/AK300.jpeg",
      ],
      url: product.url,
      description:
        "جهاز AK300 لتتبع السيارات والمركبات بتقنية GPS و4G، مع وظائف التتبع والتنبيهات وسجل الرحلات وإدارة الأساطيل.",
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
          name: "AK300",
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

export default function AK300Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div>
            <div className="text-xl font-black tracking-wide">
              GPS WORLD
            </div>

            <div className="text-xs text-cyan-400">
              EGYPT
            </div>
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-green-400"
          >
            واتساب
          </a>
        </div>
      </header>

      {/* BACK */}
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <a
          href="/#products"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
        >
          ← العودة للأجهزة
        </a>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div className="order-2 lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-bold text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              متوفر
            </div>

            <div className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              GPS TRACKING SYSTEM
            </div>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl">
              AK300
            </h1>

            <h2 className="mt-3 text-2xl font-bold text-slate-200">
              جهاز تتبع سيارات GPS 4G
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-400">
              جهاز AK300 لتتبع السيارات والمركبات بتقنية 4G، مع دعم تحديد
              الموقع عبر GNSS وLBS، وسجل الرحلات والتنبيهات ووظائف مناسبة
              للشركات وإدارة الأساطيل.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-7 py-4 font-black text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-1 hover:bg-green-400"
              >
                💬 اسأل عن AK300
              </a>

              <a
                href="tel:01006687163"
                className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-7 py-4 font-black text-cyan-300 transition hover:bg-cyan-400/20"
              >
                📞 اتصل بنا
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute inset-10 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/40">
                <div className="absolute right-5 top-5 rounded-full border border-cyan-400/30 bg-slate-950/80 px-4 py-2 text-xs font-bold text-cyan-300">
                  AK300 • 4G
                </div>

                <Image
                  src={product.image}
                  alt="جهاز AK300 لتتبع السيارات GPS 4G"
                  width={900}
                  height={900}
                  priority
                  className="relative h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FEATURES */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {quickFeatures.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="text-3xl">{item.icon}</div>

              <h3 className="mt-4 font-black">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES + SPECS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <div className="text-sm font-bold tracking-[0.25em] text-cyan-400">
            AK300 DETAILS
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            مواصفات ومميزات جهاز AK300
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
            تعرف على أهم مواصفات جهاز AK300 ووظائفه واستخداماته في تتبع
            السيارات والمركبات وإدارة الأساطيل.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* FEATURES */}
          <div className="rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] to-transparent p-7">
            <h3 className="text-2xl font-black">
              أهم مميزات AK300
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "تتبع لحظي لموقع المركبة.",
                "دعم GNSS + LBS لتحديد الموقع.",
                "شبكة 4G LTE Cat.1 مع 2G Fallback.",
                "عرض سجل ومسار الرحلات من خلال النظام المتوافق.",
                "تنبيهات عند فصل الطاقة أو بعض حالات العبث حسب النظام.",
                "تنبيهات السرعة الزائدة حسب الإعدادات.",
                "تنبيهات الخروج من النطاق الجغرافي حسب النظام.",
                "إمكانية إيقاف المركبة عن بعد من خلال النظام المتوافق.",
                "إمكانية المراقبة الصوتية حسب التجهيز والنظام.",
                "وظائف مناسبة لإدارة الأساطيل.",
                "متابعة بعض مؤشرات سلوك القيادة حسب النظام.",
                "دعم SOS حسب التجهيز المتوافق.",
                "بطارية احتياطية مدمجة.",
                "دعم الحساسات والإكسسوارات.",
                "دعم فني ومتابعة من GPS World Egypt.",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 rounded-xl border border-white/5 bg-slate-950/40 p-4"
                >
                  <span className="text-cyan-400">
                    ✓
                  </span>

                  <span className="text-sm leading-7 text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SPECS */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7">
            <h3 className="text-2xl font-black">
              المواصفات الفنية
            </h3>

            <div className="mt-7 overflow-hidden rounded-2xl border border-white/10">
              {specifications.map(([label, value], index) => (
                <div
                  key={label}
                  className={
                    "grid grid-cols-2 gap-4 px-4 py-4 text-sm " +
                    (index % 2 === 0
                      ? "bg-white/[0.03]"
                      : "bg-transparent")
                  }
                >
                  <span className="font-bold text-slate-300">
                    {label}
                  </span>

                  <span className="text-left text-cyan-300">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="bg-cyan-950/20 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <div className="text-sm font-bold tracking-[0.25em] text-cyan-400">
              FLEET MANAGEMENT
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              AK300 لإدارة الأساطيل وتتبع المركبات
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-400">
              جهاز AK300 مناسب للشركات التي تحتاج إلى متابعة السيارات
              والمركبات التجارية ومعرفة مواقعها ومساراتها وتنبيهاتها من
              خلال نظام تتبع متوافق.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fleetFeatures.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-cyan-400/10 bg-slate-950/70 p-7 transition hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <div className="text-4xl transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-lg font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMART FUNCTIONS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <div className="text-sm font-bold tracking-[0.25em] text-cyan-400">
            SMART FUNCTIONS
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            وظائف ذكية تساعدك في التحكم والمتابعة
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-400">
            تختلف بعض الوظائف حسب إصدار الجهاز والسيرفر ومنصة التتبع
            والتجهيز المستخدم، لذلك يتم التأكد من الوظائف المطلوبة قبل
            التركيب.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {smartFeatures.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-7"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl" />

              <div className="relative">
                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-y border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="text-sm font-bold tracking-[0.25em] text-cyan-400">
              APPLICATIONS
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              استخدامات جهاز AK300
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
              يمكن استخدام AK300 في مجموعة من تطبيقات تتبع السيارات
              والمركبات وإدارة الأساطيل.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-400/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="font-bold text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-black">
              الشهادات والاعتمادات
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              تشمل المواصفات المتوفرة للجهاز الاعتمادات التالية:
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {["CE", "FCC", "RoHS", "ANATEL"].map(
                (certificate) => (
                  <div
                    key={certificate}
                    className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center"
                  >
                    <div className="text-2xl font-black text-cyan-300">
                      {certificate}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-green-400/10 bg-green-400/[0.04] p-8">
            <h2 className="text-2xl font-black">
              الضمان والسيرفر
            </h2>

            <div className="mt-7 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="font-black text-green-300">
                  مدة تشغيل السيرفر
                </div>

                <p className="mt-2 leading-7 text-slate-400">
                  سنة واحدة، والتجديد يكون حسب السيرفر المستخدم.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="font-black text-green-300">
                  الضمان
                </div>

                <p className="mt-2 leading-7 text-slate-400">
                  ضمان لمدة سنة ضد عيوب التصنيع، ولا يشمل الحرق أو الكسر أو
                  التلف الناتج عن سوء الاستخدام.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-900/60 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <div className="text-sm font-bold tracking-[0.25em] text-cyan-400">
              FAQ
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              الأسئلة الشائعة عن جهاز AK300
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-slate-950 p-6"
              >
                <summary className="cursor-pointer list-none font-black text-slate-100">
                  <div className="flex items-center justify-between gap-5">
                    <span>
                      {index + 1}. {faq.question}
                    </span>

                    <span className="text-xl text-cyan-400 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-5 border-t border-white/10 pt-5 leading-8 text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-green-500/10 p-8 text-center sm:p-12">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <div className="text-sm font-bold tracking-[0.25em] text-cyan-400">
              GPS WORLD EGYPT
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              مهتم بجهاز AK300؟
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
              تواصل معنا لمعرفة السعر والتوفر والتفاصيل المناسبة لاستخدامك
              وتركيب الجهاز.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-8 py-4 font-black text-white transition hover:bg-green-400"
              >
                💬 اطلب AK300 عبر واتساب
              </a>

              <a
                href="tel:01006687163"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-black transition hover:bg-white/10"
              >
                📞 01006687163
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-right">
          <div>
            <div className="font-black">
              GPS World Egypt
            </div>

            <div className="mt-1 text-sm text-slate-500">
              أجهزة تتبع GPS وحلول متابعة المركبات في مصر
            </div>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} GPS World Egypt
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="التواصل عبر واتساب"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-2xl shadow-green-500/30 transition hover:scale-110 hover:bg-green-400"
      >
        💬
      </a>
    </main>
  );
}