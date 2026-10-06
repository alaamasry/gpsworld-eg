import type { Metadata } from "next";
import Link from "next/link";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "AT4 PLUS 4G | جهاز تتبع GPS مغناطيسي بدون أسلاك",
  description:
    "جهاز AT4 PLUS 4G لتتبع السيارات والمركبات، GPS لاسلكي ومغناطيسي ببطارية 10000mAh، مع تتبع مباشر وتنبيهات الحركة ونزع الجهاز وGeo-Fence وIPX5.",
  keywords: [
    "AT4 PLUS",
    "AT4 PLUS 4G",
    "جهاز AT4 PLUS",
    "جهاز GPS AT4 PLUS",
    "جهاز تتبع AT4 PLUS",
    "جهاز تتبع GPS مغناطيسي",
    "جهاز تتبع GPS لاسلكي",
    "جهاز تتبع سيارات",
    "جهاز GPS للسيارات",
    "GPS Tracker",
    "GPS Tracker مصر",
    "أجهزة GPS مصر",
    "تتبع السيارات",
    "تتبع المركبات",
    "جهاز تتبع أصول",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/at4-plus",
  },
  openGraph: {
    title: "AT4 PLUS 4G | جهاز تتبع GPS مغناطيسي",
    description:
      "جهاز AT4 PLUS 4G لاسلكي ومغناطيسي ببطارية 10000mAh، مع تتبع مباشر وتنبيهات الحركة ونزع الجهاز وGeo-Fence وحماية IPX5.",
    url: "https://gpsworld-eg.com/devices/at4-plus",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "https://gpsworld-eg.com/images/AT4%20PLUS.jpeg",
        width: 2000,
        height: 2000,
        alt: "جهاز GPS AT4 PLUS 4G مغناطيسي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AT4 PLUS 4G | جهاز تتبع GPS مغناطيسي",
    description:
      "جهاز AT4 PLUS 4G ببطارية 10000mAh وتصميم مغناطيسي بدون أسلاك، مع تتبع مباشر وتنبيهات متعددة.",
    images: ["https://gpsworld-eg.com/images/AT4%20PLUS.jpeg"],
  },
};

const galleryImages = [
  "/images/AT4 PLUS.jpeg",
  "/images/AT4 PLUS-2.jpeg",
  "/images/AT4 PLUS-3.jpeg",
  "/images/AT4 PLUS-4.jpeg",
  "/images/AT4 PLUS-5.jpeg",
  "/images/AT4 PLUS-6.jpeg",
];

const quickFeatures = [
  "4G LTE Cat.1",
  "10000mAh",
  "مغناطيسي",
  "بدون أسلاك",
  "تتبع مباشر",
  "IPX5",
];

const features = [
  {
    title: "بطارية كبيرة وتشغيل طويل",
    text: "يحتوي AT4 PLUS على بطارية ليثيوم قابلة لإعادة الشحن بسعة 10000mAh، مع أكثر من وضع تشغيل يمكن اختياره حسب طبيعة الاستخدام. وتختلف مدة التشغيل الفعلية حسب معدل تحديث الموقع وحركة المركبة وإعدادات الجهاز وطريقة الاستخدام.",
  },
  {
    title: "الاتصال بشبكات 4G",
    text: "يعمل الجهاز على شبكة 4G LTE Cat.1، مما يساعد على سرعة نقل البيانات وتحديث موقع المركبة بصورة أكثر سلاسة. وبعض إصدارات الجهاز تدعم الانتقال إلى شبكة 2G عند عدم توافر تغطية 4G حسب نسخة الجهاز والشبكة المستخدمة.",
  },
  {
    title: "تثبيت مغناطيسي بدون أسلاك",
    text: "لا يحتاج الجهاز إلى توصيله بضفيرة السيارة أو كهرباء المركبة، ويحتوي على قاعدة مغناطيسية قوية تساعد على تثبيته بسهولة على الأسطح المعدنية المناسبة.",
  },
  {
    title: "سهولة الفك والنقل",
    text: "يمكن فك الجهاز وإعادة تركيبه أو نقله من مركبة إلى أخرى عند الحاجة، مما يجعله مناسبًا للاستخدامات التي تحتاج إلى جهاز تتبع قابل للنقل.",
  },
  {
    title: "تنبيه نزع الجهاز والحماية من العبث",
    text: "يحتوي الجهاز على مستشعر يساعد على اكتشاف محاولة إزالة الجهاز من مكان تثبيته، ويمكن إرسال تنبيه إلى الهاتف من خلال النظام المستخدم عند اكتشاف النزع أو العبث حسب إعدادات الجهاز والنظام.",
  },
  {
    title: "تحديد موقع المركبة ومتابعة الحركة",
    text: "يدعم AT4 PLUS تتبع موقع السيارة على الخريطة ومتابعة حركتها وخط سيرها، مع إمكانية مراجعة الرحلات والتحركات السابقة من خلال النظام المستخدم.",
  },
  {
    title: "الاستماع داخل السيارة",
    text: "يحتوي الجهاز على ميكروفون داخلي للاستماع إلى الأصوات المحيطة بالجهاز، ويمكن استخدام خاصية الاستماع عن بُعد حسب تجهيز الجهاز والنظام المستخدم وإعدادات الخدمة.",
  },
  {
    title: "مستشعر الحركة والاهتزاز",
    text: "يحتوي الجهاز على مستشعر للحركة والاهتزاز يساعد على اكتشاف تحرك السيارة أثناء توقفها أو الاهتزاز ومحاولة تحريك المركبة، ويمكن إرسال تنبيه عند اكتشاف حركة غير طبيعية.",
  },
  {
    title: "تنبيه السحب أو الرفع",
    text: "يمكن للجهاز الاستفادة من مستشعر الحركة لاكتشاف حالات السحب أو الرفع حسب إعدادات الجهاز وطريقة اكتشاف الحركة.",
  },
  {
    title: "السياج الجغرافي Geo-Fence",
    text: "يمكن تحديد منطقة معينة على الخريطة واستقبال تنبيه عند دخول المركبة إليها أو خروجها منها حسب إعدادات النظام.",
  },
  {
    title: "تنبيه تجاوز السرعة",
    text: "يمكن ضبط سرعة محددة واستقبال تنبيه عند تجاوز الحد المسموح به حسب إعدادات النظام.",
  },
  {
    title: "حماية IPX5",
    text: "يتمتع الجهاز بتصنيف حماية IPX5 وفق مواصفات الإصدار المذكورة، مما يساعد على مقاومة رذاذ الماء والأمطار والاستخدام في بيئات مختلفة، مع ضرورة اختيار مكان تركيب مناسب.",
  },
];

const applications = [
  "السيارات الملاكي",
  "السيارات الأجرة",
  "المركبات التي لا يرغب صاحبها في عمل توصيلات كهربائية لها",
  "تأمين المركبات أثناء التوقف",
  "السيارات التي تحتاج إلى جهاز يمكن فكه ونقله",
  "المركبات التي تحتاج إلى تشغيل طويل حسب إعدادات توفير الطاقة",
];

const faqs = [
  {
    question: "ما هو جهاز AT4 PLUS 4G؟",
    answer:
      "AT4 PLUS 4G هو جهاز تتبع GPS لاسلكي ومغناطيسي، لا يحتاج إلى توصيل بأسلاك السيارة، ويعتمد على بطارية داخلية كبيرة بسعة 10000mAh.",
  },
  {
    question: "هل يحتاج AT4 PLUS إلى توصيل أسلاك؟",
    answer:
      "لا، الجهاز مصمم للعمل بالبطارية ويمكن تثبيته باستخدام القاعدة المغناطيسية على الأسطح المعدنية المناسبة.",
  },
  {
    question: "ما سعة بطارية AT4 PLUS؟",
    answer:
      "يحتوي الجهاز على بطارية ليثيوم قابلة لإعادة الشحن بسعة 10000mAh.",
  },
  {
    question: "هل AT4 PLUS يعمل على شبكة 4G؟",
    answer:
      "نعم، يعمل الجهاز على شبكة 4G LTE Cat.1، وبعض الإصدارات قد تدعم 2G عند عدم توافر تغطية 4G حسب نسخة الجهاز والشبكة.",
  },
  {
    question: "هل يمكن نقل AT4 PLUS من سيارة إلى أخرى؟",
    answer:
      "نعم، من مميزات التصميم المغناطيسي أنه يمكن فك الجهاز وإعادة تثبيته أو نقله من مركبة إلى أخرى عند الحاجة.",
  },
  {
    question: "هل يوجد تنبيه عند نزع الجهاز؟",
    answer:
      "نعم، يدعم الجهاز تنبيه نزع الجهاز حسب المستشعرات وإعدادات الجهاز والنظام المستخدم.",
  },
  {
    question: "هل يدعم الجهاز الاستماع الصوتي؟",
    answer:
      "نعم، يحتوي AT4 PLUS على ميكروفون داخلي، ويمكن استخدام خاصية الاستماع عن بُعد حسب تجهيز الجهاز والنظام المستخدم.",
  },
  {
    question: "هل يدعم AT4 PLUS السياج الجغرافي؟",
    answer:
      "نعم، يمكن إعداد Geo-Fence لاستقبال تنبيه عند دخول المركبة إلى منطقة محددة أو خروجها منها حسب النظام.",
  },
  {
    question: "هل يدعم تنبيه السرعة؟",
    answer:
      "نعم، يمكن ضبط حد معين للسرعة واستقبال تنبيه عند تجاوزه حسب إعدادات النظام.",
  },
  {
    question: "هل AT4 PLUS مقاوم للماء؟",
    answer:
      "الجهاز حاصل على تصنيف حماية IPX5 وفق مواصفات الإصدار المذكورة، ويساعد ذلك على مقاومة رذاذ الماء والأمطار مع ضرورة اختيار مكان تركيب مناسب.",
  },
  {
    question: "هل يمكن استخدام AT4 PLUS في حالة توقف السيارة؟",
    answer:
      "نعم، الجهاز مناسب لمتابعة المركبة أثناء التوقف، ويمكن الاستفادة من تنبيهات الحركة والاهتزاز ونزع الجهاز حسب الإعدادات.",
  },
  {
    question: "هل يوجد ضمان على AT4 PLUS؟",
    answer:
      "نعم، الجهاز عليه ضمان لمدة سنة ضد عيوب الصناعة.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "AT4 PLUS 4G",
      image: ["https://gpsworld-eg.com/images/AT4%20PLUS.jpeg"],
      url: "https://gpsworld-eg.com/devices/at4-plus",
      description:
        "جهاز AT4 PLUS 4G لتتبع السيارات والمركبات، لاسلكي ومغناطيسي ببطارية 10000mAh، مع تتبع مباشر وتنبيهات متعددة وحماية IPX5.",
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
          name: "AT4 PLUS",
          item: "https://gpsworld-eg.com/devices/at4-plus",
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

export default function AT4PlusPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="text-lg font-bold text-gray-900 transition hover:text-blue-600"
          >
            GPS World Egypt
          </Link>

          <Link
            href="/#products"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            كل الأجهزة
          </Link>
        </div>
      </header>

      {/* Back */}
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← العودة إلى أجهزة GPS
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              AT4 PLUS 4G
            </div>

            <h1 className="text-3xl font-black leading-tight md:text-5xl">
              جهاز GPS AT4 PLUS 4G
              <span className="mt-2 block text-blue-600">
                مغناطيسي بدون أسلاك
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              إنت محتاج جهاز تتبع للسيارة من غير توصيلات كهربائية؟ جهاز AT4
              PLUS 4G يجمع بين البطارية الكبيرة والتثبيت المغناطيسي، مع
              إمكانية متابعة موقع المركبة وحركتها واستقبال التنبيهات المختلفة
              حسب إعدادات الجهاز والنظام المستخدم.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {quickFeatures.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/201006687163?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AC%D9%87%D8%A7%D8%B2%20AT4%20PLUS"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
              >
                اسأل عن الجهاز
              </a>

              <a
                href="#comparison"
                className="rounded-xl border border-gray-300 px-6 py-3 font-bold text-gray-800 transition hover:border-blue-600 hover:text-blue-600"
              >
                مقارنة بين الأجهزة
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
            <DeviceGallery
              images={galleryImages}
              deviceName="جهاز GPS AT4 PLUS 4G"
            />
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {quickFeatures.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="text-2xl font-black text-blue-600">
                  {index + 1}
                </div>

                <p className="mt-2 font-bold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            مميزات جهاز GPS AT4 PLUS 4G بالتفصيل
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            جهاز لاسلكي ومغناطيسي مصمم لمن يريد تتبع المركبة بدون توصيلات
            كهربائية، مع بطارية كبيرة وإمكانيات متعددة للتتبع والتنبيهات.
          </p>
        </div>

        <div className="space-y-5">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-black text-gray-900">
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
      </section>

      {/* Why AT4 PLUS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold text-blue-600">
                ليه AT4 PLUS؟
              </span>

              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                حل عملي للتتبع بدون أسلاك
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                AT4 PLUS مناسب لمن يريد جهاز GPS يمكن تثبيته وفكه بسهولة دون
                الدخول في توصيلات كهربائية داخل المركبة، مع بطارية كبيرة
                وإمكانية استخدام أوضاع مختلفة للتشغيل وتوفير الطاقة.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "بطارية 10000mAh.",
                  "شبكة 4G LTE Cat.1.",
                  "تثبيت مغناطيسي بدون أسلاك.",
                  "سهولة الفك والنقل من مركبة إلى أخرى.",
                  "تنبيه نزع الجهاز والعبث حسب الإعدادات.",
                  "تتبع مباشر وتنبيهات الحركة والاهتزاز.",
                  "Geo-Fence وتنبيه تجاوز السرعة.",
                  "حماية IPX5.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 font-black text-green-600">✓</span>

                    <p className="leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gray-900 p-8 text-white">
              <h3 className="text-2xl font-black">مناسب لمين؟</h3>

              <div className="mt-6 space-y-4">
                {applications.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ملاحظات مهمة عن AT4 PLUS
          </h2>

          <div className="mt-6 space-y-4 leading-8 text-gray-600">
            <p>
              مدة تشغيل البطارية تختلف حسب معدل تحديث الموقع وحركة المركبة
              ووضع التشغيل وإعدادات توفير الطاقة وقوة الشبكة وطريقة الاستخدام.
            </p>

            <p>
              يمكن اختيار وضع التشغيل المناسب حسب طبيعة الاستخدام، مثل
              التتبع المستمر أو توفير الطاقة أو الاستعداد وإرسال الموقع على
              فترات متباعدة.
            </p>

            <p>
              بعض وظائف التنبيهات والاستماع تعتمد على تجهيز الجهاز والنظام
              المستخدم والإعدادات المتاحة.
            </p>

            <p>
              تصنيف الحماية هو <strong>IPX5</strong> وفق مواصفات الإصدار
              المذكورة، لذلك يجب اختيار مكان تركيب مناسب وعدم تعريض الجهاز
              لظروف تتجاوز مستوى الحماية.
            </p>

            <p className="font-bold text-gray-900">
              الضمان: سنة ضد عيوب الصناعة.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section
        id="comparison"
        className="mx-auto max-w-5xl px-4 py-14 md:py-20"
      >
        <div className="rounded-3xl bg-blue-600 p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">
            محتار بين AT4 PLUS وجهاز تاني؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-50">
            قارن بين AT4 PLUS والأجهزة الأخرى واختار الجهاز المناسب حسب
            طريقة استخدامك واحتياجات مركبتك.
          </p>

          <Link
            href="/comparison"
            className="mt-7 inline-flex rounded-xl bg-white px-7 py-3 font-black text-blue-700 transition hover:bg-gray-100"
          >
            قارن بين جهازين
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              الأسئلة الشائعة عن AT4 PLUS
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none font-black text-gray-900">
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

      {/* Contact */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center md:py-20">
          <h2 className="text-3xl font-black md:text-4xl">
            عايز تعرف AT4 PLUS مناسب لاستخدامك؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
            ابعتلنا نوع المركبة وطريقة الاستخدام، ونساعدك تعرف هل AT4 PLUS
            هو الاختيار المناسب ليك.
          </p>

          <a
            href="https://wa.me/201006687163?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AC%D9%87%D8%A7%D8%B2%20AT4%20PLUS"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-xl bg-green-600 px-8 py-4 font-black text-white transition hover:bg-green-700"
          >
            تواصل معنا على واتساب
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black px-4 py-8 text-center text-sm text-gray-400">
        <p>
          GPS World Egypt — أجهزة تتبع GPS للسيارات وإدارة الأساطيل
        </p>

        <p className="mt-2">
          جميع الحقوق محفوظة © {new Date().getFullYear()}
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/201006687163"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا على واتساب"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
      >
        ☎
      </a>
    </main>
  );
}