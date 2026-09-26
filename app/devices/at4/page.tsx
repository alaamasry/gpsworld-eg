import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AT4 | جهاز تتبع سيارات GPS مغناطيسي بدون أسلاك في مصر",
  description:
    "جهاز AT4 المغناطيسي لتتبع السيارات والمركبات بدون أسلاك، ببطارية 10000mAh ومغناطيس قوي، مع متابعة موقع المركبة عبر Tracksolid Pro وتنبيهات الحركة والسرعة والسياج الجغرافي.",
  keywords: [
    "AT4",
    "جهاز AT4",
    "جهاز تتبع AT4",
    "جهاز GPS AT4",
    "جهاز تتبع سيارات بدون أسلاك",
    "جهاز تتبع السيارات بدون أسلاك",
    "GPS مغناطيسي للسيارات",
    "جهاز تتبع بمغناطيس قوي",
    "جهاز تتبع سيارات",
    "جهاز GPS للسيارات",
    "جهاز تتبع للسيارة",
    "جهاز تتبع GPS",
    "GPS Tracker",
    "GPS Tracker مصر",
    "أجهزة GPS مصر",
    "أجهزة تتبع السيارات",
    "تتبع السيارات",
    "تتبع المركبات",
    "تتبع السيارة من الموبايل",
    "Tracksolid Pro",
    "جهاز تتبع سيارات ضد السرقة",
    "جهاز GPS مغناطيسي",
  ],
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/at4",
  },
  openGraph: {
    title: "AT4 | جهاز تتبع سيارات GPS مغناطيسي بدون أسلاك",
    description:
      "جهاز AT4 المغناطيسي لتتبع السيارات والمركبات بدون أسلاك، مع بطارية 10000mAh ومتابعة عبر Tracksolid Pro.",
    url: "https://gpsworld-eg.com/devices/at4",
    siteName: "GPS World Egypt",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/AT4.jpeg",
        width: 650,
        height: 500,
        alt: "AT4 جهاز تتبع سيارات GPS مغناطيسي بدون أسلاك",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AT4 | جهاز تتبع سيارات GPS مغناطيسي",
    description:
      "جهاز AT4 لتتبع السيارات والمركبات بدون أسلاك، مع بطارية 10000mAh ومتابعة عبر Tracksolid Pro.",
    images: ["/images/AT4.jpeg"],
  },
};

const product = {
  name: "AT4",
  image: "/images/AT4.jpeg",
  url: "https://gpsworld-eg.com/devices/at4",
};

const whatsappNumber = "201006687163";

const whatsappInquiry = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن جهاز AT4 المغناطيسي"
);

const whatsappOrder = encodeURIComponent(
  "مرحبًا، أريد طلب جهاز AT4 المغناطيسي"
);

const whatsappInquiryUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappInquiry;

const whatsappOrderUrl =
  "https://wa.me/" + whatsappNumber + "?text=" + whatsappOrder;

const whatsappBaseUrl = "https://wa.me/201006687163";

const faqs = [
  {
    question: "ما هو جهاز AT4؟",
    answer:
      "AT4 هو جهاز تتبع GPS مغناطيسي للسيارات والمركبات، مصمم للعمل بدون توصيل أسلاك داخل المركبة، ويحتوي على بطارية 10000mAh ومغناطيس قوي للتثبيت على الأسطح المعدنية.",
  },
  {
    question: "هل جهاز AT4 يحتاج إلى تركيب أسلاك؟",
    answer:
      "لا، جهاز AT4 مصمم للعمل بدون توصيل أسلاك داخل السيارة، ويتم تثبيته باستخدام المغناطيس القوي، مع شحن البطارية عند الحاجة.",
  },
  {
    question: "كم سعة بطارية جهاز AT4؟",
    answer:
      "بطارية جهاز AT4 بسعة 10000mAh، وهي سعة كبيرة تساعد على تشغيل الجهاز لفترة طويلة، وتختلف مدة التشغيل الفعلية حسب معدل التتبع والاستخدام وإعدادات الجهاز.",
  },
  {
    question: "هل يمكن متابعة جهاز AT4 من الموبايل؟",
    answer:
      "نعم، يمكن متابعة جهاز AT4 من خلال منصة وتطبيق Tracksolid Pro على الهواتف التي تعمل بنظام Android وiOS، وفقًا لإعداد الجهاز والحساب والمنصة المستخدمة.",
  },
  {
    question: "هل جهاز AT4 مناسب لتتبع السيارات ضد السرقة؟",
    answer:
      "يمكن استخدام AT4 لمتابعة موقع السيارة وحركتها وإرسال تنبيهات مرتبطة بالحركة والسرعة والسياج الجغرافي، مما يساعد في متابعة المركبة واكتشاف الاستخدام غير المصرح به.",
  },
  {
    question: "هل جهاز AT4 مناسب للسيارات الخاصة والمركبات؟",
    answer:
      "نعم، يمكن استخدام الجهاز لمتابعة السيارات الخاصة والمركبات المختلفة والأصول والمعدات التي تحتاج إلى معرفة موقعها وحركتها.",
  },
  {
    question: "هل جهاز AT4 مقاوم للماء والغبار؟",
    answer:
      "الجهاز مصمم ليكون مناسبًا للاستخدام في ظروف الطقس المختلفة، مع مقاومة للماء والغبار وفقًا لمواصفات الجهاز وطريقة الاستخدام والتركيب.",
  },
  {
    question: "هل يوجد ميكروفون داخل جهاز AT4؟",
    answer:
      "يحتوي جهاز AT4 على ميكروفون داخلي، ويمكن الاستفادة من خاصية الاستماع وفقًا لدعم الجهاز والمنصة والإعدادات المتاحة.",
  },
  {
    question: "هل يمكن معرفة مستوى بطارية جهاز AT4؟",
    answer:
      "نعم، يمكن متابعة حالة بطارية الجهاز من خلال النظام أو المنصة الداعمة للجهاز، حسب إعدادات الجهاز ونظام التتبع المستخدم.",
  },
  {
    question: "هل يوجد ضمان على جهاز AT4؟",
    answer:
      "يوجد ضمان لمدة سنة ضد عيوب التصنيع، ولا يشمل الحرق أو الكسر أو التلف الناتج عن سوء الاستخدام.",
  },
  {
    question: "هل يمكن مراجعة سجل حركة السيارة؟",
    answer:
      "يمكن مراجعة سجل ومسار حركة المركبة من خلال منصة التتبع، وتختلف مدة الاحتفاظ بالسجل حسب إعدادات النظام والمنصة المستخدمة.",
  },
  {
    question: "كيف يتم تشغيل جهاز AT4؟",
    answer:
      "يتم تجهيز شريحة SIM المناسبة داخل الجهاز، ثم تشغيل الجهاز وشحن البطارية عند الحاجة، وبعد ذلك يتم إعداد الجهاز على منصة Tracksolid Pro لبدء متابعة المركبة.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: product.name,
      image: [
        "https://gpsworld-eg.com/images/AT4.jpeg",
      ],
      url: product.url,
      description:
        "جهاز AT4 المغناطيسي لتتبع السيارات والمركبات بدون أسلاك، ببطارية 10000mAh ومغناطيس قوي ومتابعة عبر Tracksolid Pro.",
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
          name: "AT4",
          item: "https://gpsworld-eg.com/devices/at4",
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

export default function AT4Page() {
  return (
    <main className="min-h-screen bg-gray-50" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Header */}
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

      {/* Back */}
      <div className="mx-auto max-w-7xl px-5 pt-6">
        <a
          href="/#products"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-800"
        >
          ← العودة إلى الأجهزة
        </a>
      </div>

      {/* Product Hero */}
      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
            <Image
              src={product.image}
              alt="AT4 جهاز تتبع سيارات GPS مغناطيسي بدون أسلاك"
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
              جهاز AT4 المغناطيسي لتتبع السيارات والمركبات
            </h1>

            <p className="mt-3 text-xl font-bold text-blue-700">
              جهاز تتبع GPS بدون أسلاك
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              جهاز AT4 هو جهاز تتبع سيارات GPS مغناطيسي مصمم لمتابعة السيارات
              والمركبات بدون الحاجة إلى توصيل أسلاك داخل المركبة. يتميز
              ببطارية ليثيوم كبيرة بسعة 10000mAh ومغناطيس قوي يساعد على
              تثبيته بسهولة على الأسطح المعدنية، مع إمكانية متابعة موقع
              المركبة وحركتها من خلال منصة Tracksolid Pro.
            </p>

            <p className="mt-4 text-lg leading-9 text-gray-600">
              ويعتبر AT4 خيارًا مناسبًا لمن يبحث عن جهاز GPS مغناطيسي للسيارات
              يمكن تركيبه بسرعة، خصوصًا في الحالات التي يكون فيها التتبع
              بدون توصيلات كهربائية داخل السيارة هو الاختيار الأنسب.
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

      {/* SEO Introduction */}
      <section className="mx-auto max-w-7xl px-5 pb-10">
        <div className="rounded-3xl bg-white p-7 shadow-md md:p-10">
          <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
            جهاز AT4 لتتبع السيارات GPS في مصر
          </h2>

          <div className="mt-5 space-y-4 text-lg leading-9 text-gray-600">
            <p>
              إذا كنت تبحث عن جهاز تتبع سيارات GPS بدون أسلاك، فإن جهاز AT4
              يوفر طريقة مختلفة لتركيب جهاز التتبع داخل أو خارج المركبة
              باستخدام المغناطيس القوي والبطارية الداخلية.
            </p>

            <p>
              يمكن استخدام جهاز AT4 في تتبع السيارات والمركبات والأصول
              والمعدات، مع إمكانية متابعة موقع المركبة وحركتها من خلال
              Tracksolid Pro، بالإضافة إلى التنبيهات المتاحة مثل الحركة
              والسرعة والسياج الجغرافي وفقًا لإعدادات النظام.
            </p>

            <p>
              البطارية بسعة 10000mAh تساعد الجهاز على العمل لفترة طويلة،
              بينما يتيح التصميم المغناطيسي تثبيت الجهاز على الأسطح المعدنية
              دون الحاجة إلى تركيب أسلاك كهربائية داخل السيارة.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-md">
            <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
              ⭐ أهم مميزات جهاز AT4
            </h2>

            <ul className="space-y-4 text-lg leading-8 text-gray-700">
              <li>✓ جهاز تتبع سيارات GPS مغناطيسي بدون أسلاك.</li>

              <li>
                ✓ بطارية ليثيوم بسعة 10000mAh لتشغيل الجهاز لفترات طويلة.
              </li>

              <li>
                ✓ يمكن أن يصل التشغيل المستمر إلى حوالي 30 يومًا حسب
                الاستخدام وإعدادات التتبع.
              </li>

              <li>✓ مغناطيس قوي للتثبيت السريع على الأسطح المعدنية.</li>

              <li>
                ✓ إمكانية تركيب الجهاز داخل أو خارج المركبة حسب طبيعة
                الاستخدام.
              </li>

              <li>✓ متابعة موقع المركبة من خلال Tracksolid Pro.</li>

              <li>✓ يعمل مع تطبيق Tracksolid Pro على Android وiOS.</li>

              <li>
                ✓ ميكروفون داخلي، مع توفر خاصية الاستماع وفقًا لدعم النظام
                والإعدادات.
              </li>

              <li>✓ تنبيه عند تجاوز السرعة حسب إعدادات النظام.</li>

              <li>✓ تنبيه عند الاهتزاز أو الحركة غير الطبيعية.</li>

              <li>✓ تنبيه عند الخروج من النطاق الجغرافي Geo-Fence.</li>

              <li>✓ تنبيه عند تغيير شريحة SIM وفقًا لدعم النظام.</li>

              <li>✓ إمكانية متابعة حالة بطارية الجهاز.</li>

              <li>
                ✓ مقاومة للماء والغبار وفقًا لمواصفات الجهاز وطريقة الاستخدام.
              </li>

              <li>✓ شحن الجهاز بسهولة عن طريق USB.</li>

              <li>
                ✓ إمكانية مراجعة مسار وتاريخ حركة المركبة حسب مدة الاحتفاظ
                بالسجل في المنصة.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-md">
            <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
              ⚙️ المواصفات الفنية لجهاز AT4
            </h2>

            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  الموديل
                </div>
                <div className="p-4 text-gray-600">AT4</div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  النوع
                </div>
                <div className="p-4 text-gray-600">
                  جهاز تتبع GPS مغناطيسي
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  طريقة التركيب
                </div>
                <div className="p-4 text-gray-600">
                  مغناطيس قوي - بدون أسلاك
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  البطارية
                </div>
                <div className="p-4 text-gray-600">
                  Lithium 10000mAh
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  مدة التشغيل
                </div>
                <div className="p-4 text-gray-600">
                  حتى حوالي 30 يومًا حسب الاستخدام
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  نظام المتابعة
                </div>
                <div className="p-4 text-gray-600">
                  Tracksolid Pro
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  التطبيق
                </div>
                <div className="p-4 text-gray-600">
                  Android و iOS
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  الميكروفون
                </div>
                <div className="p-4 text-gray-600">
                  ميكروفون داخلي
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  مقاومة الماء والغبار
                </div>
                <div className="p-4 text-gray-600">نعم</div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  الشحن
                </div>
                <div className="p-4 text-gray-600">USB</div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  سجل الحركة
                </div>
                <div className="p-4 text-gray-600">
                  حسب مدة الاحتفاظ بالسجل في المنصة
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  الحالة
                </div>
                <div className="p-4 text-green-600">متوفر</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="font-bold text-blue-700">
              طريقة الاستخدام
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              طريقة تشغيل جهاز AT4
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              جهاز AT4 مصمم ليكون سهل الاستخدام بدون الحاجة إلى توصيل أسلاك
              داخل السيارة. بعد تجهيز شريحة SIM وتشغيل الجهاز وإعداده على
              النظام، يمكن بدء متابعة المركبة من خلال Tracksolid Pro.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-5">
            <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue-900">1</div>

              <h3 className="mt-3 text-lg font-bold text-blue-950">
                تركيب الشريحة
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                ضع شريحة SIM المناسبة داخل الجهاز وفقًا لطريقة تركيب الجهاز.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue-900">2</div>

              <h3 className="mt-3 text-lg font-bold text-blue-950">
                شحن الجهاز
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                تأكد من شحن بطارية AT4 وتجهيز الجهاز للعمل.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue-900">3</div>

              <h3 className="mt-3 text-lg font-bold text-blue-950">
                تشغيل الجهاز
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                قم بتشغيل الجهاز والتأكد من جاهزيته للاتصال بالشبكة.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue-900">4</div>

              <h3 className="mt-3 text-lg font-bold text-blue-950">
                إعداد التطبيق
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                استخدم Tracksolid Pro وبيانات الحساب الخاصة بالجهاز.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue-900">5</div>

              <h3 className="mt-3 text-lg font-bold text-blue-950">
                بدء التتبع
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                ابدأ متابعة موقع المركبة وحركتها من خلال منصة التتبع.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uses */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-3xl bg-blue-50 p-8 md:p-12">
          <div className="text-center">
            <span className="font-bold text-blue-700">
              استخدامات متعددة
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              أين يمكن استخدام جهاز AT4؟
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
              التصميم المغناطيسي والبطارية الكبيرة يجعل جهاز AT4 مناسبًا
              للعديد من الاستخدامات التي تحتاج إلى تتبع موقع المركبة أو الأصل
              بدون تركيب توصيلات كهربائية داخلية.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">🚗</div>

              <h3 className="mt-3 text-lg font-bold text-blue-950">
                السيارات الخاصة
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                متابعة السيارة ومعرفة موقعها وحركتها.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">🚛</div>

              <h3 className="mt-3 text-lg font-bold text-blue-950">
                الشاحنات والمعدات
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                مناسب لمتابعة المركبات والمعدات المختلفة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">🏢</div>

              <h3 className="mt-3 text-lg font-bold text-blue-950">
                الشركات والأساطيل
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                متابعة المركبات وإدارة الحركة بشكل أفضل.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">📦</div>

              <h3 className="mt-3 text-lg font-bold text-blue-950">
                الأصول والمعدات
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                يمكن استخدامه لمتابعة الأصول المهمة والمعدات المتحركة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-blue-50 px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="font-bold text-blue-700">
            GPS World Egypt
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
            لماذا تختار جهاز AT4؟
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
            جهاز AT4 مناسب لمن يبحث عن جهاز تتبع سيارات GPS بدون أسلاك،
            مع إمكانية تثبيته بسهولة باستخدام المغناطيس القوي ومتابعة موقع
            المركبة وحركتها من الموبايل من خلال Tracksolid Pro. كما توفر
            بطارية 10000mAh فترة تشغيل طويلة نسبيًا حسب الاستخدام وإعدادات
            التتبع.
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 text-right sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-blue-950">
                بدون توصيلات كهربائية
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                مناسب لمن يريد جهاز تتبع يمكن تثبيته بسهولة دون تركيب أسلاك
                داخل السيارة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-blue-950">
                بطارية كبيرة
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                بطارية 10000mAh تساعد على تشغيل الجهاز لفترات طويلة حسب
                الاستخدام.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-blue-950">
                تثبيت مغناطيسي
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                المغناطيس القوي يسمح بالتثبيت على الأسطح المعدنية المناسبة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-blue-950">
                متابعة من الموبايل
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                متابعة المركبة من خلال منصة Tracksolid Pro حسب إعداد النظام.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="text-center">
          <span className="font-bold text-blue-700">
            الأسئلة الشائعة
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
            أسئلة شائعة عن جهاز AT4
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            أهم الأسئلة التي يبحث عنها العملاء قبل شراء جهاز تتبع السيارات
            AT4 المغناطيسي.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-bold text-blue-950">
                {faq.question}
              </summary>

              <p className="mt-4 leading-8 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            هل تريد معرفة المزيد عن جهاز AT4؟
          </h2>

          <p className="mt-4 text-lg leading-8 text-blue-200">
            تواصل معنا لمعرفة التفاصيل والتوفر وطلب جهاز التتبع المغناطيسي.
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

            <a
              href="/#products"
              className="rounded-xl bg-blue-800 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
            >
              📡 مشاهدة باقي الأجهزة
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Floating WhatsApp */}
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