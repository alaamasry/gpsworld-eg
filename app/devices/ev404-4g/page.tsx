import type { Metadata } from "next";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "EV404 4G | جهاز تتبع سيارات GPS في مصر",
  description:
    "جهاز EV404 4G لتتبع السيارات والمركبات، يعمل بشبكة 4G LTE مع دعم 2G حسب إصدار الجهاز والشبكة المتاحة، بجهد تشغيل 9–90V DC، مع تتبع مباشر وتنبيهات أمان وإمكانية فصل المحرك.",
  keywords: [
    "EV404",
    "EV404 4G",
    "جهاز EV404",
    "جهاز تتبع سيارات",
    "GPS Tracker",
    "GPS سيارات",
    "جهاز تتبع GPS",
    "تتبع السيارات",
    "تتبع المركبات",
    "GPS 4G",
    "جهاز GPS 4G مصر",
  ],
  alternates: {
    canonical: "/devices/ev404-4g",
  },
  openGraph: {
    title: "EV404 4G | جهاز تتبع سيارات GPS",
    description:
      "جهاز تتبع GPS سلكي يعمل بتقنية 4G LTE، بجهد تشغيل 9–90V DC، مع تتبع مباشر وتنبيهات أمان وإمكانية فصل المحرك.",
    url: "https://gpsworld-eg.com/devices/ev404-4g",
    siteName: "GPS World Egypt",
    type: "website",
    locale: "ar_EG",
    images: [
      {
        url: "https://gpsworld-eg.com/images/ev404.jpeg",
        width: 1200,
        height: 1200,
        alt: "جهاز تتبع السيارات EV404 4G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV404 4G | جهاز تتبع سيارات GPS",
    description:
      "جهاز GPS سلكي 4G لتتبع السيارات والمركبات مع تتبع مباشر وتنبيهات أمان وإمكانية فصل المحرك.",
    images: ["https://gpsworld-eg.com/images/ev404.jpeg"],
  },
};

const images = [
  "/images/ev404.jpeg",
  "/images/ev404-2.jpeg",
  "/images/ev404-3.jpeg",
  "/images/ev404-4.jpeg",
  "/images/ev404-5.jpeg",
  "/images/ev404-6.jpeg",
];

const features = [
  {
    number: "1",
    title: "تتبع مباشر عبر 4G LTE",
    description:
      "يعمل الجهاز بتقنية 4G LTE لمتابعة موقع المركبة بشكل مباشر، مع دعم 2G حسب إصدار الجهاز والشبكة المتاحة.",
  },
  {
    number: "2",
    title: "متابعة الموقع والسرعة",
    description:
      "يمكنك متابعة موقع المركبة ومعرفة سرعتها ومتابعة تحركها أثناء القيادة.",
  },
  {
    number: "3",
    title: "متابعة الرحلات والمسار",
    description:
      "يساعدك الجهاز على متابعة حركة المركبة والرحلات والمسار وفق إعدادات نظام التتبع المستخدم.",
  },
  {
    number: "4",
    title: "فصل المحرك عن بُعد",
    description:
      "يمكن استخدام الجهاز لفصل المحرك عن بُعد عند تركيب الريلاي وتوصيله بطريقة صحيحة، وبما يتوافق مع إعدادات الجهاز.",
  },
  {
    number: "5",
    title: "الاستماع داخل السيارة",
    description:
      "يمكن الاستماع إلى الصوت داخل المركبة من خلال الميكروفون، حسب تجهيز الجهاز وإصداره وطريقة التركيب.",
  },
  {
    number: "6",
    title: "تنبيهات فصل الكهرباء",
    description:
      "يدعم تنبيهات مرتبطة بفصل مصدر الكهرباء أو العبث بتوصيلات الجهاز، للمساعدة في اكتشاف محاولات تعطيل التتبع.",
  },
  {
    number: "7",
    title: "تنبيهات الحركة والأمان",
    description:
      "يمكن استخدام تنبيهات الحركة وبعض التنبيهات الأمنية وفق إعدادات الجهاز ونظام التتبع.",
  },
  {
    number: "8",
    title: "تنبيه المناطق الجغرافية",
    description:
      "يمكن إعداد منطقة جغرافية محددة واستقبال تنبيه عند دخول المركبة إليها أو خروجها منها.",
  },
  {
    number: "9",
    title: "حجم صغير وسهل الإخفاء",
    description:
      "تصميم الجهاز صغير ومناسب للتركيب في أماكن مختلفة داخل المركبة مع سهولة إخفائه أثناء التركيب.",
  },
  {
    number: "10",
    title: "جهد تشغيل 9–90 فولت",
    description:
      "يعمل EV404 على نطاق جهد واسع من 9 إلى 90V DC، مما يجعله مناسبًا لعدد كبير من المركبات والمعدات المتوافقة مع هذا النطاق.",
  },
  {
    number: "11",
    title: "حجم ووزن مناسب",
    description:
      "أبعاد الجهاز حوالي 79 × 33 × 16 مم، ووزنه حوالي 40 جرام، مما يجعله صغيرًا وخفيفًا في التركيب.",
  },
  {
    number: "12",
    title: "مناسب لأكثر من نوع مركبة",
    description:
      "يمكن استخدامه في سيارات الركوب والمركبات التجارية والدراجات النارية وبعض المعدات التي تتوافق مع جهد التشغيل.",
  },
];

const faqs = [
  {
    question: "هل جهاز EV404 يعمل على شبكة 4G؟",
    answer:
      "نعم، EV404 يعمل بتقنية 4G LTE، مع دعم 2G حسب إصدار الجهاز والشبكة المتاحة.",
  },
  {
    question: "ما هو جهد تشغيل جهاز EV404؟",
    answer:
      "جهد التشغيل من 9 إلى 90V DC.",
  },
  {
    question: "هل يمكن فصل محرك السيارة عن بُعد؟",
    answer:
      "نعم، يمكن تنفيذ فصل المحرك عن بُعد عند تركيب الريلاي وتوصيله بطريقة صحيحة، وبحسب إعدادات الجهاز.",
  },
  {
    question: "هل يمكن الاستماع إلى ما يحدث داخل السيارة؟",
    answer:
      "نعم، يمكن استخدام خاصية الاستماع من خلال الميكروفون حسب تجهيز الجهاز وإصداره وطريقة التركيب.",
  },
  {
    question: "هل الجهاز مناسب للدراجات النارية؟",
    answer:
      "يمكن استخدام EV404 مع الدراجات النارية والمركبات الأخرى بشرط توافق جهد المركبة مع نطاق تشغيل الجهاز وطريقة التركيب.",
  },
  {
    question: "ما حجم جهاز EV404؟",
    answer:
      "أبعاد الجهاز حوالي 79 × 33 × 16 مم، ووزنه حوالي 40 جرام.",
  },
  {
    question: "ما مدة ضمان جهاز EV404؟",
    answer:
      "الجهاز عليه ضمان لمدة سنة ضد عيوب الصناعة.",
  },
];

export default function EV404Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "EV404 4G",
    image: [
      "https://gpsworld-eg.com/images/ev404.jpeg",
      "https://gpsworld-eg.com/images/ev404-2.jpeg",
    ],
    description:
      "جهاز تتبع GPS سلكي EV404 4G لتتبع السيارات والمركبات، يعمل بتقنية 4G LTE مع دعم 2G حسب إصدار الجهاز والشبكة المتاحة، وبجهد تشغيل 9–90V DC.",
    brand: {
      "@type": "Brand",
      name: "GPS World Egypt",
    },
    category: "GPS Vehicle Tracker",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "EV404 4G",
        item: "https://gpsworld-eg.com/devices/ev404-4g",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                EV404 4G
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
                جهاز EV404 4G لتتبع السيارات والمركبات
              </h1>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                جهاز تتبع GPS سلكي يعمل بتقنية 4G LTE، مصمم لمتابعة المركبة
                ومعرفة موقعها وسرعتها ومسارها، مع مجموعة من وظائف الحماية
                والتنبيهات وإمكانية فصل المحرك عن بُعد عند تركيب الريلاي.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800">
                  4G LTE
                </span>

                <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800">
                  9–90V DC
                </span>

                <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800">
                  79 × 33 × 16 مم
                </span>

                <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800">
                  حوالي 40 جم
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                دعم 2G حسب إصدار الجهاز والشبكة المتاحة.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
                <DeviceGallery
                  images={images}
                  deviceName="EV404 4G"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-3xl font-black text-blue-600">4G</div>
              <h2 className="mt-3 text-lg font-bold">اتصال 4G LTE</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                تتبع مباشر عبر شبكة 4G LTE مع دعم 2G حسب الإصدار والشبكة.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-3xl font-black text-blue-600">
                9–90V
              </div>
              <h2 className="mt-3 text-lg font-bold">جهد تشغيل واسع</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                مناسب لعدد كبير من المركبات والمعدات المتوافقة مع هذا النطاق.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-3xl font-black text-blue-600">40g</div>
              <h2 className="mt-3 text-lg font-bold">صغير وخفيف</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                وزن حوالي 40 جرام وأبعاد صغيرة تساعد على سهولة التركيب والإخفاء.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-3xl font-black text-blue-600">GPS</div>
              <h2 className="mt-3 text-lg font-bold">حماية ومتابعة</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                تتبع مباشر وتنبيهات أمان وإمكانية فصل المحرك حسب التركيب.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
              مميزات جهاز EV404 4G بالتفصيل
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              لو هدفك متابعة السيارة أو المركبة بشكل مستمر مع مجموعة من وظائف
              الحماية، EV404 يجمع بين الاتصال السريع والحجم الصغير ونطاق
              التشغيل الواسع.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-extrabold text-white">
                    {feature.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-950">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Differences */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-3xl font-extrabold text-gray-950">
              ليه تختار EV404 4G؟
            </h2>

            <div className="mt-7 space-y-5 text-gray-700">
              <p className="leading-8">
                <strong className="text-gray-950">
                  أول فرق مهم هو شبكة الاتصال:
                </strong>{" "}
                EV404 يعمل بتقنية 4G LTE، مع دعم 2G حسب إصدار الجهاز والشبكة
                المتاحة، وده يجعله مناسبًا لمن يريد جهازًا يعمل على شبكات
                أحدث.
              </p>

              <p className="leading-8">
                <strong className="text-gray-950">
                  ثاني نقطة هي جهد التشغيل:
                </strong>{" "}
                الجهاز يعمل من 9 إلى 90 فولت DC، وبالتالي يمكن استخدامه مع
                أنواع مختلفة من المركبات والمعدات المتوافقة مع هذا النطاق.
              </p>

              <p className="leading-8">
                <strong className="text-gray-950">
                  كمان حجمه صغير:
                </strong>{" "}
                أبعاد الجهاز حوالي 79 × 33 × 16 مم ووزنه حوالي 40 جرام، وده
                بيساعد في تركيبه وإخفائه بسهولة داخل المركبة.
              </p>

              <p className="leading-8">
                <strong className="text-gray-950">
                  ومن ناحية الحماية:
                </strong>{" "}
                يمكن الاستفادة من تتبع الموقع والسرعة والمسار، والتنبيهات
                الأمنية، والاستماع داخل المركبة حسب تجهيز الجهاز، بالإضافة إلى
                إمكانية فصل المحرك عند تركيب الريلاي بشكل صحيح.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
              EV404 مناسب لمين؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              يمكن استخدام الجهاز مع أنواع مختلفة من المركبات والمعدات طالما
              جهد التشغيل وطريقة التركيب مناسبين.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "سيارات الركوب",
              "المركبات التجارية",
              "الدراجات النارية",
              "المعدات المتوافقة",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center"
              >
                <h3 className="text-lg font-bold text-gray-950">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Notes */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-3xl font-extrabold text-gray-950">
              معلومات مهمة عن الجهاز
            </h2>

            <div className="mt-7 space-y-4 text-gray-700">
              <p className="leading-8">
                <strong>الموديل:</strong> EV404 4G
              </p>

              <p className="leading-8">
                <strong>نوع الجهاز:</strong> جهاز تتبع GPS سلكي للمركبات
              </p>

              <p className="leading-8">
                <strong>الشبكة:</strong> 4G LTE، مع دعم 2G حسب إصدار الجهاز
                والشبكة المتاحة
              </p>

              <p className="leading-8">
                <strong>جهد التشغيل:</strong> 9–90V DC
              </p>

              <p className="leading-8">
                <strong>الأبعاد:</strong> 79 × 33 × 16 مم تقريبًا
              </p>

              <p className="leading-8">
                <strong>الوزن:</strong> حوالي 40 جرام
              </p>

              <p className="leading-8">
                <strong>الضمان:</strong> سنة ضد عيوب الصناعة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gray-950 px-6 py-10 text-center text-white sm:px-10">
            <h2 className="text-3xl font-extrabold">
              محتار بين EV404 وجهاز تاني؟
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
              قريبًا تقدر تقارن بين EV404 والموديلات الأخرى وتشوف الفرق بينهم
              بشكل واضح وتختار الجهاز الأنسب لاستخدامك.
            </p>

            <a
              href="/devices/compare"
              className="mt-7 inline-flex rounded-xl bg-white px-7 py-3 font-bold text-gray-950 transition hover:bg-gray-100"
            >
              مقارنة بين الأجهزة
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-950">
              الأسئلة الشائعة عن EV404
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-gray-950">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 text-center sm:p-10">
            <h2 className="text-3xl font-extrabold text-gray-950">
              عايز تعرف هل EV404 مناسب لعربيتك؟
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
              تواصل معنا لمعرفة التفاصيل المناسبة حسب نوع المركبة وطريقة
              التركيب المطلوبة.
            </p>

            <a
              href="https://wa.me/201006687163"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-xl bg-green-600 px-8 py-3 font-bold text-white transition hover:bg-green-700"
            >
              تواصل معنا على واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm leading-6 text-gray-500">
            GPS World Egypt — أجهزة تتبع GPS للسيارات والمركبات
          </p>

          <p className="mt-2 text-xs leading-6 text-gray-400">
            بعض الوظائف مثل فصل المحرك أو الاستماع تعتمد على تجهيز الجهاز
            وطريقة التركيب والإعدادات المستخدمة.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/201006687163"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا على واتساب"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.6 5.93L.1 24l6.34-1.66a11.86 11.86 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.45-8.41ZM12.09 21.76h-.01a9.87 9.87 0 0 1-5.03-1.37l-.36-.21-3.76.98 1-3.67-.23-.38a9.86 9.86 0 0 1-1.51-5.23C2.19 6.33 6.62 1.9 12.09 1.9c2.65 0 5.14 1.03 7.01 2.9a9.87 9.87 0 0 1 2.91 7.02c0 5.47-4.45 9.94-9.92 9.94Zm5.44-7.43c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.36.46-.54.15-.18.2-.3.3-.51.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54 0 1.5 1.09 2.95 1.24 3.15.15.2 2.14 3.27 5.19 4.58.73.31 1.3.5 1.74.64.73.23 1.39.2 1.91.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </a>
    </main>
  );
}