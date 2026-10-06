import type { Metadata } from "next";
import Link from "next/link";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "AT4 4G | جهاز تتبع سيارات GPS مغناطيسي في مصر",
  description:
    "جهاز GPS AT4 4G مغناطيسي لتتبع السيارات والمركبات بدون أسلاك، ببطارية 10000mAh وتشغيل طويل مع متابعة الموقع والحركة والتنبيهات.",
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/at4",
  },
  openGraph: {
    title: "AT4 4G | جهاز تتبع سيارات GPS مغناطيسي",
    description:
      "جهاز AT4 4G المغناطيسي لتتبع السيارات والمركبات بدون أسلاك، ببطارية 10000mAh وتشغيل طويل.",
    url: "https://gpsworld-eg.com/devices/at4",
    type: "website",
    images: [
      {
        url: "https://gpsworld-eg.com/images/AT4.jpeg",
        width: 2000,
        height: 2000,
        alt: "جهاز GPS AT4 4G مغناطيسي",
      },
    ],
  },
};

const galleryImages = [
  "/images/AT4.jpeg",
  "/images/AT4-2.jpeg",
  "/images/AT4-3.jpeg",
  "/images/AT4-4.jpeg",
  "/images/AT4-5.jpeg",
  "/images/AT4-6.jpeg",
];

const quickFeatures = [
  "تتبع مباشر",
  "4G",
  "مغناطيسي",
  "10000mAh",
  "تشغيل طويل",
  "ميكروفون",
];

const features = [
  {
    title: "تتبع مباشر للمركبة",
    text: "يوفر AT4 إمكانية متابعة موقع المركبة وحركتها من خلال نظام التتبع، مع معرفة الموقع الحالي ومتابعة حركة السيارة حسب إعدادات الجهاز والنظام المستخدم.",
  },
  {
    title: "شبكة 4G",
    text: "يعمل الجهاز على شبكة 4G لتوفير اتصال سريع ومستقر أثناء متابعة المركبة وإرسال بيانات التتبع والتنبيهات.",
  },
  {
    title: "تصميم مغناطيسي بدون أسلاك",
    text: "من أهم مميزات AT4 أنه لا يحتاج إلى توصيل أسلاك داخل السيارة، ويمكن تثبيته باستخدام المغناطيس القوي على الأسطح المعدنية المناسبة.",
  },
  {
    title: "بطارية كبيرة 10000mAh",
    text: "يحتوي الجهاز على بطارية داخلية بسعة 10000mAh، وهي مناسبة للاستخدام لفترات طويلة مقارنة بأجهزة التتبع الصغيرة ذات البطاريات الأقل.",
  },
  {
    title: "تشغيل طويل في وضع السكون",
    text: "يمكن أن يصل تشغيل الجهاز في وضع السكون إلى حوالي 30 يومًا حسب الاستخدام وإعدادات التتبع وظروف التشغيل.",
  },
  {
    title: "تشغيل مستمر",
    text: "في حالة التشغيل المستمر يمكن أن يعمل الجهاز تقريبًا من 10 إلى 15 يومًا، وتختلف المدة الفعلية حسب قوة الشبكة ومعدل إرسال البيانات وإعدادات الجهاز.",
  },
  {
    title: "متابعة السرعة والحركة",
    text: "يمكن متابعة سرعة المركبة وحركتها من خلال نظام التتبع، مع إمكانية الاستفادة من التنبيهات المرتبطة بالحركة والسرعة حسب الإعدادات المتاحة.",
  },
  {
    title: "تنبيهات الحركة والاهتزاز",
    text: "يمكن للجهاز إرسال تنبيهات مرتبطة بالحركة أو الاهتزاز، مما يساعد في اكتشاف تحرك المركبة أو استخدامها في وقت غير متوقع.",
  },
  {
    title: "السياج الجغرافي Geo-Fence",
    text: "يمكن إعداد نطاق جغرافي للمركبة واستقبال تنبيه عند خروجها من المنطقة المحددة، حسب النظام وإعدادات الجهاز.",
  },
  {
    title: "ميكروفون داخلي",
    text: "يحتوي AT4 على ميكروفون داخلي، ويمكن الاستفادة من خاصية الاستماع حسب دعم الجهاز والنظام والإعدادات المستخدمة.",
  },
  {
    title: "متابعة حالة البطارية",
    text: "يمكن متابعة مستوى بطارية الجهاز من خلال نظام التتبع، مما يساعد على معرفة حالة الجهاز ووقت الحاجة إلى إعادة الشحن.",
  },
  {
    title: "مناسب للاستخدامات المختلفة",
    text: "يمكن استخدام AT4 مع السيارات والمركبات والأصول والمعدات التي تحتاج إلى جهاز تتبع يعمل بالبطارية ويمكن تثبيته بسهولة دون توصيل كهربائي مباشر.",
  },
];

const applications = [
  "السيارات الخاصة",
  "السيارات التي تحتاج إلى تتبع بدون أسلاك",
  "المركبات التجارية",
  "الشاحنات والمعدات",
  "الأصول والمعدات المتحركة",
  "متابعة المركبات لفترات طويلة",
];

const faqs = [
  {
    question: "ما هو جهاز AT4؟",
    answer:
      "AT4 هو جهاز تتبع GPS 4G مغناطيسي يعمل بالبطارية، ومصمم لمتابعة السيارات والمركبات بدون الحاجة إلى توصيل أسلاك داخل المركبة.",
  },
  {
    question: "هل جهاز AT4 يحتاج إلى توصيل أسلاك؟",
    answer:
      "لا، الجهاز مصمم للعمل بالبطارية ويمكن تثبيته باستخدام المغناطيس القوي على الأسطح المعدنية المناسبة.",
  },
  {
    question: "ما سعة بطارية AT4؟",
    answer:
      "بطارية الجهاز بسعة 10000mAh.",
  },
  {
    question: "كم تستمر بطارية AT4؟",
    answer:
      "يمكن أن يصل التشغيل في وضع السكون إلى حوالي 30 يومًا، بينما التشغيل المستمر يكون تقريبًا من 10 إلى 15 يومًا، وتختلف المدة حسب الاستخدام وإعدادات الجهاز.",
  },
  {
    question: "هل جهاز AT4 يعمل 4G؟",
    answer:
      "نعم، جهاز AT4 يعمل على شبكة 4G.",
  },
  {
    question: "هل يوجد ميكروفون في جهاز AT4؟",
    answer:
      "نعم، يحتوي الجهاز على ميكروفون داخلي، ويمكن استخدام خاصية الاستماع حسب دعم الجهاز والنظام والإعدادات المتاحة.",
  },
  {
    question: "هل يمكن متابعة السيارة من الموبايل؟",
    answer:
      "نعم، يمكن متابعة الجهاز من خلال نظام التتبع والتطبيق المتوافق مع الجهاز والحساب المستخدم.",
  },
  {
    question: "هل AT4 مناسب لتتبع السيارة ضد السرقة؟",
    answer:
      "يمكن استخدامه لمتابعة موقع السيارة وحركتها واستقبال التنبيهات المرتبطة بالحركة والسرعة والسياج الجغرافي، مما يساعد في متابعة المركبة واكتشاف الاستخدام غير المصرح به.",
  },
  {
    question: "هل يمكن تركيب AT4 داخل أو خارج السيارة؟",
    answer:
      "يمكن تثبيته على الأسطح المعدنية المناسبة، ويعتمد مكان التركيب الأفضل على طبيعة السيارة والاستخدام وقوة إشارة الشبكة ومكان وضع الجهاز.",
  },
  {
    question: "هل جهاز AT4 مقاوم للماء؟",
    answer:
      "الجهاز مناسب للاستخدام في ظروف مختلفة حسب مواصفات الإصدار وطريقة التركيب، ويجب اختيار مكان تركيب مناسب يحافظ على الجهاز من التعرض المباشر للمياه والعوامل الخارجية.",
  },
  {
    question: "هل يوجد ضمان على AT4؟",
    answer:
      "نعم، يوجد ضمان لمدة سنة ضد عيوب الصناعة.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AT4 4G GPS Tracker",
  image: "https://gpsworld-eg.com/images/AT4.jpeg",
  description:
    "جهاز GPS AT4 4G مغناطيسي لتتبع السيارات والمركبات بدون أسلاك، ببطارية 10000mAh وتشغيل طويل.",
  brand: {
    "@type": "Brand",
    name: "GPS World Egypt",
  },
  category: "GPS Vehicle Tracker",
  url: "https://gpsworld-eg.com/devices/at4",
};

export default function AT4Page() {
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
            href="/devices"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            كل الأجهزة
          </Link>
        </div>
      </header>

      {/* Back */}
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <Link
          href="/devices"
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
              AT4 4G
            </div>

            <h1 className="text-3xl font-black leading-tight md:text-5xl">
              جهاز GPS AT4 4G
              <span className="mt-2 block text-blue-600">
                مغناطيسي بدون أسلاك
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              إنت محتاج جهاز تتبع للسيارة من غير ما تدخل في توصيلات وأسلاك؟
              جهاز AT4 مصمم للتتبع بالبطارية، مع مغناطيس قوي للتثبيت وبطارية
              10000mAh تساعده على العمل لفترات طويلة حسب طريقة الاستخدام.
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
                href="https://wa.me/201006687163"
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
              deviceName="جهاز GPS AT4 4G"
            />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              مميزات جهاز GPS AT4 4G بالتفصيل
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              جهاز AT4 مناسب لمن يريد تتبع المركبة بدون توصيل كهرباء مباشر،
              مع بطارية كبيرة وتصميم مغناطيسي يساعد على التركيب السريع.
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
        </div>
      </section>

      {/* Why AT4 */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold text-blue-600">
              ليه AT4؟
            </span>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              حل عملي للتتبع بدون أسلاك
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              ميزة AT4 الأساسية هي الجمع بين البطارية الكبيرة والتثبيت
              المغناطيسي، وبالتالي تقدر تستخدمه في الحالات اللي يكون فيها
              تركيب جهاز سلكي داخل المركبة مش هو الاختيار المناسب.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "لا يحتاج إلى توصيل كهربائي داخل السيارة.",
                "بطارية كبيرة بسعة 10000mAh.",
                "تشغيل طويل حسب طريقة الاستخدام وإعدادات التتبع.",
                "مغناطيس قوي للتثبيت على الأسطح المعدنية المناسبة.",
                "يدعم 4G للتواصل وإرسال بيانات التتبع.",
                "مناسب للسيارات والمركبات والأصول والمعدات.",
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
      </section>

      {/* Important Notes */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-3xl font-black">
              ملاحظات مهمة عن AT4
            </h2>

            <div className="mt-6 space-y-4 leading-8 text-gray-600">
              <p>
                مدة تشغيل البطارية تختلف حسب طريقة استخدام الجهاز، وقوة
                الشبكة، ومعدل إرسال البيانات، وإعدادات التتبع.
              </p>

              <p>
                التشغيل في وضع السكون يمكن أن يصل إلى حوالي 30 يومًا، بينما
                التشغيل المستمر يكون تقريبًا من 10 إلى 15 يومًا حسب ظروف
                الاستخدام.
              </p>

              <p>
                مكان تركيب الجهاز مهم للحصول على أفضل أداء للشبكة وتحديد
                الموقع، كما يجب تثبيته جيدًا على سطح معدني مناسب.
              </p>

              <p>
                بعض وظائف التنبيهات والاستماع تعتمد على دعم الجهاز والنظام
                والإعدادات المستخدمة.
              </p>

              <p className="font-bold text-gray-900">
                الضمان: سنة ضد عيوب الصناعة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section
        id="comparison"
        className="mx-auto max-w-5xl px-4 py-14 md:py-20"
      >
        <div className="rounded-3xl bg-blue-600 p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">
            محتار بين AT4 وجهاز تاني؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-50">
            قارن بين الأجهزة حسب استخدامك، سواء محتاج جهاز مغناطيسي ببطارية
            كبيرة أو جهاز سلكي بإمكانيات مختلفة.
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
              الأسئلة الشائعة عن AT4
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
            عايز تعرف AT4 مناسب لاستخدامك؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
            ابعتلنا نوع المركبة وطريقة الاستخدام، ونساعدك تعرف هل AT4 هو
            الاختيار المناسب ليك.
          </p>

          <a
            href="https://wa.me/201006687163"
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