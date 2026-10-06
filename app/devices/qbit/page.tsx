import type { Metadata } from "next";
import QbitGallery from "./QbitGallery";

export const metadata: Metadata = {
  title: "QBIT 4G | جهاز تتبع GPS صغير ومتنقل في مصر",
  description:
    "جهاز QBIT 4G صغير وخفيف لتتبع الأطفال وكبار السن والأشخاص والحقائب والحيوانات الأليفة، مع GPS وLBS وWi-Fi وSOS وتتبع مباشر.",
  keywords: [
    "QBIT",
    "QBIT 4G",
    "QBIT GPS",
    "جهاز QBIT",
    "جهاز تتبع QBIT",
    "جهاز تتبع GPS صغير",
    "جهاز GPS محمول",
    "جهاز تتبع 4G",
    "جهاز تتبع للأطفال",
    "جهاز تتبع كبار السن",
    "جهاز تتبع الأشخاص",
    "جهاز تتبع الحيوانات",
    "جهاز تتبع الحقائب",
    "جهاز تتبع الممتلكات",
    "جهاز تتبع سيارات",
    "GPS Tracker مصر",
    "GPS مصر",
    "أجهزة GPS مصر",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/qbit",
  },
  openGraph: {
    title: "QBIT 4G | جهاز تتبع GPS صغير ومتنقل في مصر",
    description:
      "جهاز QBIT 4G صغير وخفيف مع GPS وLBS وWi-Fi وSOS وتتبع مباشر.",
    url: "https://gpsworld-eg.com/devices/qbit",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/QBIT.jpeg",
        width: 1200,
        height: 630,
        alt: "QBIT 4G جهاز تتبع GPS صغير ومتنقل",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QBIT 4G | جهاز تتبع GPS صغير ومتنقل",
    description:
      "جهاز QBIT 4G صغير وخفيف مع GPS وLBS وWi-Fi وSOS وتتبع مباشر.",
    images: ["/images/QBIT.jpeg"],
  },
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز QBIT 4G"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز QBIT 4G"
);

const whatsappInquiryUrl =
  `https://wa.me/${whatsappNumber}?text=${whatsappInquiry}`;

const whatsappOrderUrl =
  `https://wa.me/${whatsappNumber}?text=${whatsappOrder}`;

const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

const faqs = [
  {
    question: "ما هو جهاز QBIT 4G؟",
    answer:
      "QBIT 4G هو جهاز تتبع GPS صغير جدًا وخفيف ومتنقل، مصمم لمتابعة الأطفال وكبار السن والأشخاص أثناء التنقل، بالإضافة إلى الحقائب والممتلكات والحيوانات الأليفة، ويمكن استخدامه لتتبع السيارة بشكل مؤقت بدون تركيب أو توصيل أسلاك.",
  },
  {
    question: "هل يحتاج QBIT 4G إلى توصيل أسلاك؟",
    answer:
      "لا، الجهاز محمول ويعمل ببطارية داخلية، ولا يحتاج إلى توصيله بكهرباء السيارة أو قطع وتعديل أي أسلاك.",
  },
  {
    question: "هل جهاز QBIT 4G مغناطيسي؟",
    answer:
      "لا، جهاز QBIT 4G غير مزود بمغناطيس للتثبيت، وهو مصمم أساسًا ليكون جهازًا محمولًا يمكن وضعه داخل الجيب أو الحقيبة أو مع الشخص أو الحيوان الأليف.",
  },
  {
    question: "كم وزن جهاز QBIT 4G؟",
    answer:
      "وزن الجهاز حوالي 30 جرامًا، مما يجعله خفيفًا ومناسبًا للاستخدام اليومي والحمل والتنقل.",
  },
  {
    question: "كم تستمر بطارية QBIT 4G؟",
    answer:
      "مدة تشغيل البطارية حوالي يوم إلى يومين، وتختلف حسب معدل تحديث الموقع وطريقة الاستخدام وحركة الجهاز وجودة الشبكة وإعدادات توفير الطاقة.",
  },
  {
    question: "هل يدعم QBIT تحديد الموقع بأكثر من طريقة؟",
    answer:
      "نعم، يدعم الجهاز GPS وWi-Fi وLBS للمساعدة في تحديد الموقع حسب الظروف المتاحة والتغطية والنظام المستخدم.",
  },
  {
    question: "هل يدعم QBIT زر SOS؟",
    answer:
      "نعم، يحتوي الجهاز على زر SOS للطوارئ، ويمكن إعداد ما يصل إلى 3 أرقام حسب إعدادات الجهاز والنظام، مع إمكانية إرسال بيانات الموقع مع تنبيه الاستغاثة وفق الإعدادات.",
  },
  {
    question: "هل يدعم QBIT الاتصال والاستماع الصوتي؟",
    answer:
      "نعم، يحتوي الجهاز على ميكروفون وسماعة مدمجين، ويمكن الاستفادة من الاتصال الصوتي والاستماع عن بُعد حسب تجهيز الجهاز وإعداداته والخدمة المتاحة.",
  },
  {
    question: "هل يدعم QBIT السياج الجغرافي؟",
    answer:
      "نعم، يمكن الاستفادة من خاصية Geo-Fence لإرسال تنبيه عند دخول الجهاز إلى منطقة محددة أو خروجه منها حسب إعدادات النظام.",
  },
  {
    question: "هل يمكن مراجعة خط سير QBIT؟",
    answer:
      "نعم، يمكن متابعة الحركة وخط السير، ويمكن الاحتفاظ بسجل المسارات لمدة تصل إلى 90 يومًا حسب النظام المستخدم وإعداداته.",
  },
  {
    question: "هل جهاز QBIT مقاوم للمياه؟",
    answer:
      "الجهاز حاصل على تصنيف حماية IPX5 وفق مواصفات الإصدار المذكورة، ما يساعد على مقاومة رذاذ الماء، مع ضرورة عدم تعريضه لظروف تتجاوز مستوى الحماية.",
  },
  {
    question: "هل يمكن استخدام QBIT مع السيارة؟",
    answer:
      "نعم، يمكن استخدامه لتتبع السيارة بشكل مؤقت بدون تركيب أو توصيل أسلاك، لكنه جهاز محمول وليس جهازًا مخصصًا للتركيب الدائم داخل السيارة.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "QBIT 4G",
      image: ["https://gpsworld-eg.com/images/QBIT.jpeg"],
      url: "https://gpsworld-eg.com/devices/qbit",
      description:
        "جهاز QBIT 4G صغير وخفيف ومتنقل لتتبع الأطفال وكبار السن والأشخاص والحقائب والحيوانات الأليفة، مع GPS وLBS وWi-Fi وSOS وتتبع مباشر.",
      brand: {
        "@type": "Brand",
        name: "GPS World Egypt",
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
          name: "QBIT 4G",
          item: "https://gpsworld-eg.com/devices/qbit",
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

export default function QBITPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="min-h-screen bg-gray-50" dir="rtl">
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
                  أجهزة GPS وحلول التتبع والمراقبة
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
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
              <QbitGallery />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-5 w-fit rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ متوفر
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                جهاز QBIT 4G لتتبع الأشخاص والممتلكات
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-700">
                جهاز GPS صغير جدًا وخفيف ومتنقل
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                جهاز QBIT 4G هو جهاز تتبع GPS صغير جدًا وخفيف، مصمم
                للاستخدامات التي تحتاج إلى جهاز متنقل وسهل الحمل بدون أي
                توصيلات كهربائية أو تركيب معقد.
              </p>

              <p className="mt-4 text-lg leading-9 text-gray-600">
                مناسب بشكل خاص لمتابعة الأطفال وكبار السن والأشخاص أثناء
                التنقل، بالإضافة إلى الحقائب والممتلكات والحيوانات الأليفة،
                ويمكن استخدامه لتتبع السيارة بشكل مؤقت بدون تركيب.
              </p>

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

        {/* QUICK FEATURES */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">📏</div>
              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                حوالي 30 جرام
              </h2>
              <p className="mt-2 leading-7 text-gray-600">
                صغير وخفيف وسهل الحمل
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">📡</div>
              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                4G
              </h2>
              <p className="mt-2 leading-7 text-gray-600">
                اتصال مناسب لنقل بيانات التتبع
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🆘</div>
              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                SOS
              </h2>
              <p className="mt-2 leading-7 text-gray-600">
                زر استغاثة حتى 3 أرقام حسب الإعدادات
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🔋</div>
              <h2 className="mt-3 text-xl font-extrabold text-blue-950">
                يوم إلى يومين
              </h2>
              <p className="mt-2 leading-7 text-gray-600">
                حسب الاستخدام والإعدادات
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}

        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                مميزات الجهاز
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مميزات جهاز QBIT 4G بالتفصيل
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-gray-600">
                جهاز صغير ومتنقل يجمع بين سهولة الحمل والتتبع المباشر
                ومجموعة من وظائف الطوارئ والتنبيهات والتواصل.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "حجم صغير وسهولة الحمل 📏",
                  text: (
                    <>
                      يتميز الجهاز بحجم صغير جدًا يجعله سهل الحمل والوضع
                      داخل الجيب أو الحقيبة.
                      <br />
                      <br />
                      يبلغ وزنه حوالي <strong>30 جرامًا</strong>، مما
                      يجعله مناسبًا للاستخدام اليومي ويمكن نقله بسهولة
                      من مكان إلى آخر.
                    </>
                  ),
                },
                {
                  title: "يعمل بدون أسلاك 🔌",
                  text: (
                    <>
                      لا يحتاج الجهاز إلى توصيله بكهرباء السيارة أو قطع
                      وتعديل أي أسلاك.
                      <br />
                      <br />
                      كما أنه <strong>غير مزود بمغناطيس</strong>، لأنه
                      مصمم أساسًا ليكون جهازًا محمولًا يمكن نقله بسهولة.
                    </>
                  ),
                },
                {
                  title: "الاتصال بشبكة 4G 📡",
                  text: (
                    <>
                      يعمل الجهاز على شبكة <strong>4G</strong> لتوفير
                      اتصال مناسب لنقل بيانات الموقع والتواصل مع الجهاز
                      وإرسال التنبيهات حسب إعداداته.
                    </>
                  ),
                },
                {
                  title: "تحديد الموقع بأكثر من طريقة 📍",
                  text: (
                    <>
                      يدعم الجهاز <strong>GPS وWi-Fi وLBS</strong> للمساعدة
                      في تحديد الموقع حسب الظروف المتاحة.
                      <br />
                      <br />
                      ويمكن الاستفادة من كل وسيلة حسب المكان والتغطية
                      والنظام المستخدم.
                    </>
                  ),
                },
                {
                  title: "التتبع المباشر ومتابعة الحركة 🗺️",
                  text: (
                    <>
                      يمكن متابعة موقع الجهاز على الخريطة ومعرفة مكانه
                      وحركته أثناء التنقل.
                      <br />
                      <br />
                      ويمكن مراجعة خط السير والرحلات السابقة، مع إمكانية
                      الاحتفاظ بسجل المسارات لمدة تصل إلى{" "}
                      <strong>90 يومًا</strong> حسب النظام وإعداداته.
                    </>
                  ),
                },
                {
                  title: "زر الاستغاثة SOS 🆘",
                  text: (
                    <>
                      يحتوي الجهاز على زر SOS للطوارئ لإرسال تنبيه
                      استغاثة عند الحاجة.
                      <br />
                      <br />
                      ويمكن إعداد ما يصل إلى <strong>3 أرقام</strong>{" "}
                      حسب إعدادات الجهاز والنظام، مع إمكانية إرسال
                      بيانات الموقع مع التنبيه.
                    </>
                  ),
                },
                {
                  title: "التواصل والاستماع الصوتي 🎙️",
                  text: (
                    <>
                      يحتوي الجهاز على ميكروفون وسماعة مدمجين، ويمكن
                      الاستفادة من الوظائف الصوتية حسب تجهيز الجهاز
                      والنظام المستخدم.
                      <br />
                      <br />
                      يدعم الاتصال الصوتي والاستماع عن بُعد حسب إعدادات
                      الجهاز والخدمة المتاحة.
                    </>
                  ),
                },
                {
                  title: "تنبيه الحركة والسياج الجغرافي 🚨",
                  text: (
                    <>
                      يمكن الاستفادة من مستشعر الحركة لاكتشاف تحرك الجهاز
                      وإرسال التنبيهات حسب الإعدادات.
                      <br />
                      <br />
                      كما يدعم <strong>Geo-Fence</strong> للتنبيه عند
                      دخول الجهاز إلى منطقة محددة أو خروجه منها.
                    </>
                  ),
                },
                {
                  title: "البطارية وأنماط توفير الطاقة 🔋",
                  text: (
                    <>
                      يحتوي الجهاز على بطارية داخلية قابلة لإعادة الشحن.
                      <br />
                      <br />
                      مدة التشغيل حوالي <strong>يوم إلى يومين</strong>{" "}
                      وتختلف حسب الاستخدام ومعدل تحديث الموقع وحركة الجهاز
                      وجودة الشبكة وإعدادات توفير الطاقة.
                    </>
                  ),
                },
                {
                  title: "مقاومة رذاذ الماء 💧",
                  text: (
                    <>
                      يتمتع الجهاز بتصنيف حماية <strong>IPX5</strong>{" "}
                      وفق مواصفات الإصدار المذكورة.
                      <br />
                      <br />
                      يساعد ذلك على مقاومة رذاذ الماء، مع ضرورة عدم
                      تعريض الجهاز لظروف تتجاوز مستوى الحماية.
                    </>
                  ),
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-xl font-extrabold text-white">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-blue-950">
                        {feature.title}
                      </h3>

                      <div className="mt-3 leading-8 text-gray-600">
                        {feature.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECS */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                المواصفات الأساسية
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مواصفات جهاز QBIT 4G
              </h2>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
              {[
                ["الموديل", "QBIT 4G"],
                ["نوع الجهاز", "GPS Tracker محمول"],
                ["الشبكة", "4G"],
                ["تحديد الموقع", "GPS / Wi-Fi / LBS"],
                ["البطارية", "بطارية داخلية قابلة لإعادة الشحن"],
                ["مدة التشغيل", "حوالي يوم إلى يومين حسب الاستخدام"],
                ["الوزن", "حوالي 30 جرامًا"],
                ["زر SOS", "يدعم حتى 3 أرقام حسب الإعدادات"],
                ["التواصل الصوتي", "اتصال واستماع حسب تجهيز الجهاز والخدمة"],
                ["سجل المسارات", "حتى 90 يومًا حسب النظام"],
                ["التنبيهات", "حركة / Geo-Fence / SOS حسب الإعدادات"],
                ["المغناطيس", "غير مزود بمغناطيس"],
                ["الحماية", "IPX5"],
                ["الضمان", "سنة ضد عيوب الصناعة"],
              ].map(([label, value], index, array) => (
                <div
                  key={label}
                  className={`grid grid-cols-2 p-5 ${
                    index !== array.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  } ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <span className="font-bold text-gray-800">
                    {label}
                  </span>

                  <span className="text-gray-600">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USES */}

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                استخدامات متعددة
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                مناسب لمين؟
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                QBIT مناسب للاستخدامات التي تحتاج إلى جهاز GPS صغير
                ومتنقل يمكن نقله بسهولة من مكان إلى آخر.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["👦", "الأطفال", "متابعة الحركة والتنقل مع زر SOS للطوارئ."],
                ["👴", "كبار السن", "وسيلة متابعة إضافية أثناء التنقل."],
                ["🐕", "الحيوانات الأليفة", "جهاز صغير يمكن حمله مع الحيوان الأليف."],
                ["🎒", "الحقائب والممتلكات", "مناسب لمتابعة الحقائب والمقتنيات المهمة."],
                ["🚗", "السيارة", "تتبع مؤقت للسيارة بدون تركيب أو توصيل أسلاك."],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <div className="text-3xl">{icon}</div>

                  <h3 className="mt-3 text-lg font-bold text-blue-950">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTE */}

        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8 text-center shadow-sm">
            <div className="text-4xl">⚠️</div>

            <h2 className="mt-3 text-2xl font-extrabold text-blue-950">
              نقطة مهمة قبل الشراء
            </h2>

            <p className="mt-4 text-lg font-bold leading-9 text-gray-700">
              QBIT جهاز محمول وليس جهازًا سلكيًا أو مغناطيسيًا.
            </p>

            <p className="mt-3 leading-8 text-gray-600">
              يعتمد الجهاز على البطارية الداخلية، لذلك يجب مراعاة إعادة
              شحنه بشكل منتظم حسب معدل الاستخدام ومعدل تحديث الموقع
              وجودة الشبكة وإعدادات الجهاز.
            </p>
          </div>
        </section>

        {/* COMPARISON */}

        <section className="mx-auto max-w-5xl px-5 pb-16">
          <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <span className="font-bold text-blue-200">
              محتار بين جهازين؟
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              قارن بين أجهزة GPS واختار الأنسب
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تعرف على الفرق بين الأجهزة من حيث طريقة التركيب والشبكة
              والبطارية والمميزات والاستخدام المناسب لكل جهاز.
            </p>

            <a
              href="/devices/compare"
              className="mt-8 inline-flex rounded-xl bg-yellow-400 px-8 py-4 text-lg font-extrabold text-blue-950 transition hover:bg-yellow-300"
            >
              🔍 مقارنة بين الأجهزة
            </a>
          </div>
        </section>

        {/* WARRANTY */}

        <section className="mx-auto max-w-4xl px-5 pb-16">
          <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
            <div className="text-4xl">🛡️</div>

            <h2 className="mt-3 text-2xl font-extrabold text-blue-950">
              الضمان
            </h2>

            <p className="mt-3 text-xl font-bold text-green-700">
              سنة ضد عيوب الصناعة.
            </p>
          </div>
        </section>

        {/* FAQ */}

        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="font-bold text-blue-700">
                الأسئلة الشائعة
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
                أسئلة مهمة عن جهاز QBIT 4G
              </h2>
            </div>

            <div className="mt-10 space-y-5">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl bg-gray-50 p-6 shadow-sm"
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
              هل تريد معرفة المزيد عن جهاز QBIT 4G؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-blue-200">
              تواصل معنا لمعرفة التفاصيل والتوفر وطلب جهاز التتبع.
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
          aria-label="التواصل عبر واتساب مع GPS World Egypt"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:bg-green-600"
        >
          💬
        </a>
      </main>
    </>
  );
}