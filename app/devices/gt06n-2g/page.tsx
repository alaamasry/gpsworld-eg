"use client";

import { useState } from "react";
import Image from "next/image";

const devices = [
  {
    id: "gt06n-2g",
    name: "GT06N 2G",
    image: "/images/gt06n2g.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS 2G لتتبع السيارات والمركبات، مناسب للمراقبة ومعرفة موقع السيارة ومتابعة الحركة عبر نظام GPS Tracking.",
  },
  {
    id: "gt06n-4g",
    name: "GT06N 4G",
    image: "/images/GT06N 4G.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS Tracker بتقنية 4G لتتبع السيارات والمركبات، مناسب للمراقبة ومتابعة الموقع والحركة عبر أنظمة GPS Tracking.",
  },
  {
    id: "ev402-2g",
    name: "EV402 2G",
    image: "/images/ev402.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS 2G لتتبع السيارات والمركبات، مناسب للمراقبة ومتابعة الموقع والحركة عبر نظام GPS Tracking.",
  },
  {
    id: "ev404-4g",
    name: "EV404 4G",
    image: "/images/ev404.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS 4G لتتبع السيارات والمركبات، مناسب للمراقبة ومتابعة الموقع والحركة عبر نظام GPS Tracking.",
  },
  {
    id: "j16pro-max",
    name: "J16PRO Max",
    image: "/images/J16PRO max.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS احترافي لتتبع السيارات والمركبات، مناسب لمتابعة الموقع والحركة والمراقبة باستخدام أنظمة GPS Tracking.",
  },
  {
    id: "AK300",
    name: "AK300",
    image: "/images/AK300.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS للتتبع والمراقبة، مناسب لمتابعة السيارات والمركبات ومعرفة الموقع والحركة عبر نظام GPS Tracking.",
  },
  {
    id: "B100",
    name: "B100",
    image: "/images/B100.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS لتتبع السيارات والمركبات، يوفر حلًا عمليًا للمراقبة ومتابعة الموقع والحركة عبر أنظمة GPS Tracking.",
  },
  {
    id: "EV505",
    name: "EV505",
    image: "/images/EV505.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS لتتبع السيارات والمركبات، مناسب للمراقبة ومتابعة الموقع والحركة ضمن حلول GPS Tracking.",
  },
  {
    id: "tk303",
    name: "TK303",
    image: "/images/TK303.jpeg",
    badge: "الأكثر مبيعًا",
    badgeColor: "bg-yellow-500",
    description:
      "جهاز تتبع GPS مناسب للسيارات والدراجات النارية، يساعد على متابعة الموقع والحركة ضمن أنظمة GPS Tracking.",
  },
  {
    id: "obd22",
    name: "OBD22",
    image: "/images/OBD22.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS Tracker يعمل من خلال منفذ OBD، مناسب لتتبع السيارات ومتابعة الموقع والحركة بطريقة عملية وسهلة.",
  },
  {
    id: "obdvl505",
    name: "OBD VL505",
    image: "/images/OBDVL505.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز تتبع GPS عملي وسهل التركيب من خلال منفذ OBD، مناسب لتتبع السيارات ومتابعة الموقع والحركة.",
  },
  {
    id: "qbit",
    name: "QBIT",
    image: "/images/QBIT.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS صغير الحجم للتتبع والمراقبة، مناسب لمتابعة الموقع والحركة واستخدامه ضمن حلول GPS Tracking.",
  },
  {
    id: "w15l",
    name: "W15L",
    image: "/images/W15L.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS لاسلكي للتتبع والمراقبة، مناسب لمتابعة السيارات والمركبات والأصول مع تصميم عملي وبطارية كبيرة.",
  },
  {
    id: "at4",
    name: "AT4",
    image: "/images/AT4.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS احترافي لتتبع السيارات والمركبات، مناسب للمراقبة ومتابعة الموقع والحركة باستخدام حلول GPS Tracking.",
  },
  {
    id: "at4-plus",
    name: "AT4 PLUS",
    image: "/images/AT4 PLUS.jpeg",
    badge: "متوفر",
    badgeColor: "bg-blue-600",
    description:
      "جهاز GPS لاسلكي لتتبع السيارات والمركبات والأصول، مع بطارية كبيرة وتثبيت مغناطيسي ومتابعة عبر GPS Tracking.",
  },
];

const faqs = [
  {
    question: "ما هو جهاز GPS لتتبع السيارات؟",
    answer:
      "جهاز GPS لتتبع السيارات هو جهاز يتم تركيبه في السيارة أو المركبة ويستخدم نظام تحديد المواقع لمساعدة المستخدم على معرفة موقع المركبة ومتابعة حركتها من خلال نظام أو برنامج التتبع المتوافق مع الجهاز.",
  },
  {
    question: "ما الفرق بين أجهزة GPS 2G و4G؟",
    answer:
      "الفرق الأساسي يتعلق بشبكة الاتصال التي يستخدمها الجهاز لإرسال بيانات الموقع. اختيار جهاز 2G أو 4G يعتمد على نوع الجهاز، الشبكة المتاحة، وطبيعة الاستخدام المطلوبة.",
  },
  {
    question: "هل توجد أجهزة GPS للموتوسيكلات والتروسيكلات؟",
    answer:
      "نعم، توجد أجهزة تتبع GPS يمكن استخدامها مع أنواع مختلفة من المركبات، ومنها السيارات والموتوسيكلات والتروسيكلات، ويتم اختيار الجهاز المناسب حسب نوع المركبة وطريقة التركيب والاستخدام.",
  },
  {
    question: "كيف أختار جهاز GPS المناسب لسيارتي؟",
    answer:
      "اختيار جهاز GPS المناسب يعتمد على نوع السيارة أو المركبة، طريقة التركيب المطلوبة، نوع شبكة الاتصال، وطبيعة الاستخدام. يمكنك التواصل معنا لمعرفة الجهاز الأنسب لاحتياجاتك.",
  },
  {
    question: "هل يوجد دعم فني لأجهزة GPS؟",
    answer:
      "نعم، يتوفر الدعم والمساعدة في تشغيل أجهزة GPS ومتابعة المشكلات المتعلقة بالتركيب أو التشغيل أو أنظمة وبرامج التتبع حسب نوع الجهاز والخدمة المستخدمة.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = "201006687163";

  const whatsappBaseUrl = "https://wa.me/201006687163";

  const whatsappInquiryUrl =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent("مرحبًا، أريد الاستفسار عن أجهزة GPS");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "GPS World Egypt",
        url: "https://gpsworld-eg.com",
        telephone: "+201006687163",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cairo",
          addressCountry: "EG",
        },
      },
      {
        "@type": "WebSite",
        name: "GPS World Egypt",
        url: "https://gpsworld-eg.com",
        description:
          "أجهزة GPS وأجهزة تتبع السيارات والمركبات والموتوسيكلات والتروسيكلات في مصر وحلول GPS Tracking.",
        inLanguage: "ar-EG",
      },
      {
        "@type": "ItemList",
        name: "أجهزة GPS وأجهزة تتبع السيارات",
        itemListElement: devices.map((device, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: device.name,
          url: "https://gpsworld-eg.com/devices/" + device.id,
        })),
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
    <main className="min-h-screen bg-white">
      <style>{`
        @keyframes priceMove {
          0%, 100% {
            transform: translateX(0);
          }

          20% {
            transform: translateX(10px);
          }

          40% {
            transform: translateX(-10px);
          }

          60% {
            transform: translateX(8px);
          }

          80% {
            transform: translateX(-6px);
          }
        }

        .animate-price-move {
          display: inline-block;
          animation: priceMove 1.2s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-2xl font-bold hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              GPS World Egypt
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl hover:text-yellow-300 transition"
              aria-label="فتح القائمة"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {menuOpen && (
            <nav className="mt-5 border-t border-blue-700 pt-4">
              <div className="flex flex-col gap-3 text-right" dir="rtl">
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-bold hover:bg-blue-800 transition"
                >
                  الرئيسية
                </a>

                <a
                  href="#products"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-bold hover:bg-blue-800 transition"
                >
                  الأجهزة
                </a>

                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-bold hover:bg-blue-800 transition"
                >
                  كروت الشحن
                </a>

                <a
                  href="#software"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-bold hover:bg-blue-800 transition"
                >
                  السوفت وير
                </a>

                <a
                  href="#faq"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-bold hover:bg-blue-800 transition"
                >
                  الأسئلة الشائعة
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-bold hover:bg-blue-800 transition"
                >
                  تواصل معنا
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-5" dir="rtl">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          أجهزة GPS وأجهزة تتبع السيارات في مصر
        </h1>

        <p className="max-w-4xl mx-auto text-xl text-gray-800 font-semibold mb-10 leading-9">
          نوفر أجهزة GPS Tracker وحلول GPS Tracking لتتبع السيارات والمركبات
          والموتوسيكلات والتروسيكلات، مع أجهزة 2G و4G والدعم الفني لمساعدتك في
          اختيار جهاز التتبع المناسب لاحتياجاتك.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-bold"
          >
            تواصل واتساب
          </a>

          <a
            href="#products"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-bold"
          >
            عرض أجهزة GPS
          </a>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="max-w-7xl mx-auto py-16 px-5"
        dir="rtl"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
          أجهزة GPS وأجهزة تتبع السيارات والمركبات
        </h2>

        <p className="max-w-4xl mx-auto text-center text-gray-800 font-semibold text-lg mb-10 leading-8">
          مجموعة من أجهزة GPS وأجهزة تتبع السيارات والمركبات والموتوسيكلات
          والتروسيكلات، المناسبة لمختلف احتياجات التتبع والمراقبة في مصر.
          اختر الجهاز المناسب وشاهد تفاصيل الموديل قبل التواصل معنا.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {devices.map((device) => (
            <div
              key={device.id}
              className="border rounded-xl p-5 shadow-lg hover:shadow-2xl transition bg-white"
            >
              <Image
                src={device.image}
                alt={device.name + " - جهاز GPS لتتبع السيارات والمركبات"}
                width={300}
                height={220}
                className="rounded-lg w-full h-52 object-contain"
              />

              <span
                className={
                  device.badgeColor +
                  " text-white text-sm px-3 py-1 rounded-full mt-4 inline-block font-bold"
                }
              >
                {device.badge}
              </span>

              <h3 className="text-2xl font-bold mt-4 text-gray-900">
                {device.name}
              </h3>

              <p className="text-gray-900 font-semibold mt-3 leading-7">
                {device.description}
              </p>

              <a
                href={"/devices/" + device.id}
                className="mt-5 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 block text-center font-bold"
              >
                تفاصيل {device.name}
              </a>

              <a
                href={
                  "https://wa.me/201006687163?text=" +
                  encodeURIComponent(
                    "مرحبًا، أريد معرفة سعر جهاز GPS موديل " + device.name
                  )
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 block text-center font-bold text-lg overflow-hidden"
              >
                <span className="inline-block animate-price-move">
                  💰 لمعرفة السعر
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-5xl mx-auto py-16 px-5" dir="rtl">
        <div className="bg-gray-50 border rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
            أجهزة GPS في مصر لتتبع السيارات والمركبات
          </h2>

          <div className="text-gray-900 font-semibold text-lg leading-9 text-right">
            <p className="mb-5">
              إذا كنت تبحث عن أجهزة GPS في مصر أو جهاز تتبع سيارات لمتابعة
              موقع السيارة وحركتها، نوفر مجموعة متنوعة من أجهزة GPS Tracker
              المناسبة للسيارات والمركبات والاستخدامات المختلفة.
            </p>

            <p className="mb-5">
              تتوفر لدينا أجهزة تتبع السيارات بتقنيات اتصال مختلفة مثل 2G و4G،
              بالإضافة إلى أجهزة مناسبة للموتوسيكلات والتروسيكلات وبعض حلول
              تتبع الأصول والمركبات، ويختلف اختيار الجهاز حسب نوع المركبة
              وطريقة التركيب واحتياجات الاستخدام.
            </p>

            <p className="mb-5">
              أجهزة GPS للسيارات تساعد في متابعة الموقع والحركة والرحلات من
              خلال أنظمة وبرامج GPS Tracking المتوافقة مع الجهاز. بعض الموديلات
              توفر خصائص إضافية مثل التنبيهات، سجل الرحلات، التتبع اللحظي،
              والمراقبة حسب إمكانيات كل جهاز والنظام المستخدم.
            </p>

            <p className="mb-5">
              يمكنك من خلال الموقع التعرف على موديلات أجهزة GPS المختلفة مثل
              GT06N وEV402 وEV404 وJ16PRO Max وAK300 وB100 وEV505 وTK303 وOBD22
              وOBD VL505 وQBIT وW15L وAT4 وAT4 PLUS، والانتقال إلى صفحة كل جهاز
              لمعرفة المعلومات المتاحة عنه.
            </p>

            <p>
              نهدف إلى توفير معلومات واضحة تساعد العميل على فهم الفرق بين
              أجهزة GPS واختيار جهاز تتبع السيارة أو المركبة المناسب قبل
              الشراء أو التركيب، مع إمكانية التواصل معنا للحصول على المساعدة
              والدعم الفني.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-16 px-5" dir="rtl">
        <h2 className="text-3xl font-bold text-center mb-5 text-blue-900">
          لماذا تختار GPS World Egypt؟
        </h2>

        <p className="max-w-4xl mx-auto text-center text-gray-800 font-semibold text-lg mb-10 leading-8">
          نساعدك على الوصول إلى جهاز GPS المناسب حسب نوع المركبة وطريقة
          الاستخدام واحتياجات التتبع، مع توفير أجهزة وحلول مختلفة للسيارات
          والمركبات والموتوسيكلات والتروسيكلات.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-xl p-6 shadow-lg bg-white text-center">
            <div className="text-5xl mb-4">🛰️</div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              أجهزة GPS متنوعة
            </h3>

            <p className="text-gray-800 font-semibold leading-7">
              مجموعة متنوعة من أجهزة GPS لتتبع السيارات والمركبات والموتوسيكلات
              والتروسيكلات، مع خيارات مختلفة حسب احتياجات الاستخدام.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-lg bg-white text-center">
            <div className="text-5xl mb-4">📡</div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              خيارات 2G و4G
            </h3>

            <p className="text-gray-800 font-semibold leading-7">
              أجهزة تعمل بتقنيات اتصال مختلفة، لتتمكن من اختيار الجهاز الذي
              يناسب طبيعة الاستخدام والشبكة المتاحة.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-lg bg-white text-center">
            <div className="text-5xl mb-4">🛠️</div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              دعم فني
            </h3>

            <p className="text-gray-800 font-semibold leading-7">
              دعم ومساعدة في تركيب أجهزة GPS وتشغيلها ومتابعة المشكلات المتعلقة
              بأجهزة وأنظمة التتبع.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-lg bg-white text-center">
            <div className="text-5xl mb-4">📱</div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              تواصل مباشر
            </h3>

            <p className="text-gray-800 font-semibold leading-7">
              يمكنك التواصل معنا مباشرة للاستفسار عن الأجهزة ومعرفة الجهاز
              المناسب لسيارتك أو مركبتك قبل الشراء أو التركيب.
            </p>
          </div>
        </div>
      </section>

      {/* How To Choose */}
      <section className="max-w-5xl mx-auto py-16 px-5" dir="rtl">
        <div className="border rounded-2xl p-8 bg-white shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            كيف تختار جهاز GPS المناسب؟
          </h2>

          <div className="text-right text-gray-900 font-semibold text-lg leading-9">
            <p className="mb-5">
              اختيار جهاز GPS المناسب لا يعتمد على اسم الموديل فقط، ولكن يعتمد
              على نوع المركبة وطريقة التركيب ونوع الاتصال واحتياجات التتبع.
            </p>

            <ul className="space-y-4 list-disc pr-7">
              <li>
                إذا كان الاستخدام لسيارة، يتم اختيار الجهاز حسب نظام السيارة
                وطريقة التركيب المطلوبة.
              </li>

              <li>
                إذا كان الاستخدام لموتوسيكل أو تروسيكل، يراعى حجم الجهاز وطريقة
                توصيله ومكان تركيبه.
              </li>

              <li>
                يمكن الاختيار بين أجهزة 2G و4G حسب نوع الجهاز والشبكة المتاحة
                وطبيعة الاستخدام.
              </li>

              <li>
                قبل اختيار الجهاز، من الأفضل معرفة نظام المتابعة أو السيرفر
                والبرنامج المتوافق معه.
              </li>

              <li>
                بعض الأجهزة تكون مناسبة أكثر للتثبيت التقليدي، بينما توجد
                أجهزة لاسلكية أو أجهزة تعمل من خلال منفذ OBD حسب طبيعة الاستخدام.
              </li>
            </ul>

            <div className="mt-8 text-center">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-7 py-3 rounded-lg hover:bg-green-700 transition font-bold"
              >
                اسألنا عن الجهاز المناسب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="max-w-5xl mx-auto py-16 px-5"
        dir="rtl"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
          الأسئلة الشائعة عن أجهزة GPS
        </h2>

        <p className="text-center text-gray-800 font-semibold text-lg mb-10">
          إجابات عن أهم الأسئلة التي تساعدك قبل اختيار جهاز تتبع GPS للسيارات
          والمركبات.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="border rounded-xl p-5 shadow-sm bg-white"
            >
              <summary className="cursor-pointer text-xl font-bold text-blue-900">
                {faq.question}
              </summary>

              <p className="mt-4 text-gray-900 font-semibold leading-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Software */}
      <section
        id="software"
        className="max-w-7xl mx-auto py-16 px-5"
        dir="rtl"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
          برامج وحلول GPS
        </h2>

        <p className="max-w-4xl mx-auto text-center text-gray-900 font-semibold text-lg mb-10 leading-8">
          برامج وحلول GPS لمتابعة وإدارة أجهزة التتبع، مع خدمات شحن نقاط
          السيرفرات والدعم الفني لعملائنا.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="border rounded-xl p-5 shadow-lg hover:shadow-2xl transition bg-white">
            <div className="h-52 flex items-center justify-center bg-gray-50 rounded-lg">
              <span className="text-5xl">💻</span>
            </div>

            <h3 className="text-2xl font-bold mt-4 text-center text-gray-900">
              السوفت وير
            </h3>

            <p className="text-gray-900 font-semibold mt-3 text-center leading-7">
              برامج GPS وحلول متابعة وإدارة أجهزة التتبع.
            </p>

            <a
              href="#"
              className="mt-5 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 block text-center font-bold"
            >
              دخول
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto py-16 px-5"
        dir="rtl"
      >
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-5">
            تواصل معنا
          </h2>

          <p className="text-gray-900 font-semibold text-lg leading-8 mb-7">
            للاستفسار عن أجهزة GPS أو أجهزة تتبع السيارات والمركبات أو معرفة
            الجهاز المناسب لاستخدامك، يمكنك التواصل معنا مباشرة.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01006687163"
              className="bg-blue-900 text-white px-7 py-3 rounded-lg hover:bg-blue-800 transition font-bold"
            >
              📞 اتصل بنا
            </a>

            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-7 py-3 rounded-lg hover:bg-green-700 transition font-bold"
            >
              💬 واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-20" dir="rtl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              GPS World Egypt
            </h3>

            <p className="text-gray-100 font-semibold leading-8">
              بيع أجهزة GPS الأصلية
              <br />
              شحن نقاط السيرفرات
              <br />
              السوفت وير والدعم الفني
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              خدماتنا
            </h3>

            <ul className="space-y-2 text-gray-100 font-semibold">
              <li>🛰️ أجهزة GPS</li>
              <li>📍 أجهزة تتبع السيارات</li>
              <li>💳 شحن نقاط السيرفرات</li>
              <li>💻 السوفت وير</li>
              <li>🛠️ الدعم الفني</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              تواصل معنا
            </h3>

            <ul className="space-y-2 text-gray-100 font-semibold">
              <li>📞 01006687163</li>
              <li>📍 القاهرة - مصر</li>

              <li>
                📱{" "}
                <a
                  href={whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 text-center py-4 text-gray-100 font-semibold">
          © 2026 GPS World Egypt - جميع الحقوق محفوظة
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white text-3xl flex items-center justify-center shadow-2xl transition z-40"
        aria-label="التواصل عبر واتساب"
      >
        💬
      </a>
    </main>
  );
}