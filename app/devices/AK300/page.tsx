import type { Metadata } from "next";
import Link from "next/link";
import DeviceGallery from "../DeviceGallery";

export const metadata: Metadata = {
  title: "AK300 4G | جهاز تتبع سيارات GPS احترافي في مصر",
  description:
    "جهاز GPS AK300 4G لتتبع السيارات وإدارة الأساطيل، مع 4G LTE Cat.1 وCAN Bus وBluetooth 5.1 وحساسات متعددة ودعم فصل المحرك.",
  alternates: {
    canonical: "https://gpsworld-eg.com/devices/ak300",
  },
  openGraph: {
    title: "AK300 4G | جهاز تتبع سيارات GPS",
    description:
      "تتبع مباشر وإدارة أساطيل وقراءة بيانات المركبة عبر CAN Bus ودعم الحساسات والـ Bluetooth.",
    url: "https://gpsworld-eg.com/devices/ak300",
    type: "website",
    images: [
      {
        url: "https://gpsworld-eg.com/images/AK300.jpeg",
        width: 2000,
        height: 2000,
        alt: "جهاز GPS AK300 4G",
      },
    ],
  },
};

const galleryImages = [
  "/images/AK300.jpeg",
  "/images/AK300-2.jpeg",
  "/images/AK300-3.jpeg",
  "/images/AK300-4.jpeg",
  "/images/AK300-5.jpeg",
  "/images/AK300-6.jpeg",
];

const quickFeatures = [
  "تتبع مباشر على الخريطة",
  "4G LTE Cat.1",
  "CAN Bus",
  "Bluetooth 5.1",
  "دعم الحساسات والإضافات",
  "9–90V DC",
];

const features = [
  {
    title: "التتبع وتحديد الموقع",
    text: "يوفر AK300 تتبعًا مباشرًا للمركبة على الخريطة، مع متابعة السرعة والحركة والمسافة وسجل الرحلات. ويمكن الاستفادة من LBS للمساعدة في تحديد الموقع عند ضعف إشارة الأقمار الصناعية، حسب النظام والإعدادات المتاحة.",
  },
  {
    title: "شبكة 4G مع دعم 2G",
    text: "يعمل الجهاز على شبكة 4G LTE Cat.1 لتوفير اتصال سريع ومستقر، مع إمكانية الرجوع إلى 2G عند ضعف تغطية 4G، وذلك حسب الشبكة وإصدار الجهاز.",
  },
  {
    title: "قراءة بيانات المركبة عبر CAN Bus",
    text: "يدعم AK300 قراءة بعض بيانات المركبة من خلال CAN Bus، مثل عدد الكيلومترات وحالة المحرك واستهلاك الوقود وبعض الأعطال، حسب نوع السيارة وتوافقها وطريقة التوصيل.",
  },
  {
    title: "Bluetooth 5.1",
    text: "يحتوي الجهاز على Bluetooth 5.1 للتعامل مع بعض الحساسات والإضافات اللاسلكية المتوافقة، مما يوسع استخدام الجهاز في السيارات التجارية وإدارة الأساطيل.",
  },
  {
    title: "حساسات الحرارة والرطوبة",
    text: "يمكن استخدام الجهاز مع حساسات متوافقة لقياس درجة الحرارة والرطوبة، وهو ما يجعله مناسبًا بشكل خاص لسيارات نقل الأغذية والأدوية والبضائع التي تحتاج إلى متابعة ظروف النقل.",
  },
  {
    title: "دعم بعض أنظمة TPMS",
    text: "يمكن أن يدعم AK300 بعض أنظمة مراقبة ضغط الإطارات TPMS المتوافقة، حسب نوع الحساس والنظام المستخدم.",
  },
  {
    title: "التعرف على السائق RFID",
    text: "يمكن استخدام بعض حلول RFID المتوافقة للتعرف على السائق وتسجيل بيانات الاستخدام، حسب النظام والإعدادات والتجهيزات المستخدمة.",
  },
  {
    title: "فصل المحرك عن بُعد",
    text: "يمكن توصيل الجهاز بريلاي للتحكم في فصل دائرة الوقود أو الكهرباء بالمركبة عن بُعد من خلال النظام، مع ضرورة تنفيذ التوصيل والتركيب بطريقة صحيحة وآمنة.",
  },
  {
    title: "متابعة أسلوب القيادة",
    text: "يساعد مستشعر الحركة في اكتشاف بعض سلوكيات القيادة مثل التسارع المفاجئ والفرملة الشديدة والانعطاف الحاد، مما يفيد في متابعة أداء السائقين وإدارة الأساطيل.",
  },
  {
    title: "بطارية احتياطية داخلية",
    text: "يحتوي الجهاز على بطارية داخلية بسعة 250mAh تساعده على الاستمرار في العمل عند انقطاع التغذية، كما تساعد في إرسال تنبيهات فصل الكهرباء أو العبث حسب إعدادات النظام.",
  },
  {
    title: "جهد تشغيل واسع",
    text: "يعمل AK300 على جهد من 9 إلى 90 فولت DC، مما يجعله مناسبًا لمجموعة واسعة من السيارات والمركبات والدراجات والشاحنات وبعض المعدات، مع مراعاة جهد المركبة وطريقة التركيب.",
  },
  {
    title: "مداخل ومخارج متعددة",
    text: "يحتوي الجهاز على مداخل ومخارج يمكن استخدامها مع بعض الملحقات والحساسات والتجهيزات الإضافية، حسب نوع الاستخدام والتوصيلات المطلوبة.",
  },
];

const applications = [
  "شركات إدارة الأساطيل والنقل",
  "الشاحنات والمركبات التجارية",
  "المركبات التي تحتاج إلى قراءة بيانات CAN Bus",
  "سيارات نقل الأغذية والأدوية",
  "متابعة استهلاك الوقود وبيانات المركبة",
  "متابعة أسلوب القيادة والسائقين",
  "المركبات التي تحتاج إلى حساسات وإضافات متعددة",
];

const faqs = [
  {
    question: "هل جهاز AK300 يعمل 4G؟",
    answer:
      "نعم، AK300 يعمل على شبكة 4G LTE Cat.1، مع دعم 2G كشبكة بديلة حسب الشبكة وإصدار الجهاز.",
  },
  {
    question: "هل يدعم AK300 قراءة بيانات السيارة؟",
    answer:
      "نعم، يدعم CAN Bus ويمكنه قراءة بعض بيانات المركبة مثل المسافة وحالة المحرك واستهلاك الوقود وبعض الأعطال، حسب نوع السيارة والتوافق.",
  },
  {
    question: "هل يمكن تركيب حساسات حرارة ورطوبة؟",
    answer:
      "نعم، يمكن استخدام حساسات متوافقة عبر Bluetooth، ولذلك يناسب الجهاز بعض تطبيقات نقل الأغذية والأدوية.",
  },
  {
    question: "هل يمكن فصل المحرك عن بُعد؟",
    answer:
      "نعم، يمكن تنفيذ فصل المحرك عن طريق ريلاي مناسب وتوصيل صحيح بدائرة الوقود أو الكهرباء، حسب المركبة وطريقة التركيب.",
  },
  {
    question: "ما جهد تشغيل جهاز AK300؟",
    answer:
      "جهد التشغيل من 9 إلى 90 فولت DC.",
  },
  {
    question: "هل الجهاز مناسب للشاحنات وإدارة الأساطيل؟",
    answer:
      "نعم، AK300 مناسب بشكل خاص للشاحنات والمركبات التجارية وإدارة الأساطيل، خصوصًا عند الحاجة إلى CAN Bus والحساسات ومتابعة سلوك القيادة.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AK300 4G GPS Tracker",
  description:
    "جهاز تتبع GPS AK300 4G لتتبع المركبات وإدارة الأساطيل مع CAN Bus وBluetooth 5.1 ودعم الحساسات.",
  image: "https://gpsworld-eg.com/images/AK300.jpeg",
  brand: {
    "@type": "Brand",
    name: "GPS World Egypt",
  },
  category: "GPS Vehicle Tracker",
  url: "https://gpsworld-eg.com/devices/ak300",
};

export default function AK300Page() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              AK300 4G
            </div>

            <h1 className="text-3xl font-black leading-tight md:text-5xl">
              جهاز GPS AK300 4G
              <span className="mt-2 block text-blue-600">
                للتتبع الاحترافي وإدارة الأساطيل
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              لو محتاج جهاز تتبع مش بس يحدد مكان العربية، لكن كمان يديك
              إمكانيات أكبر لإدارة المركبة والأسطول، فـ AK300 بيجمع بين
              التتبع المباشر وشبكة 4G ودعم CAN Bus وBluetooth والحساسات
              والإضافات المختلفة.
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
              deviceName="جهاز GPS AK300 4G"
            />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              مميزات جهاز GPS AK300 4G بالتفصيل
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              AK300 جهاز تتبع سلكي احترافي مناسب للسيارات والشاحنات وإدارة
              الأساطيل، وبيجمع بين التتبع والمراقبة وإمكانية التوسع بحساسات
              وإضافات حسب احتياج المركبة.
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

      {/* Why AK300 */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold text-blue-600">
              ليه AK300؟
            </span>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              جهاز مناسب للاستخدام الاحترافي
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              الفرق الأساسي في AK300 إنه مش مجرد جهاز لتحديد مكان المركبة.
              إمكانيات CAN Bus وBluetooth والمداخل والمخارج بتخليه قابل
              للتوسع حسب طبيعة المركبة ونظام التشغيل المطلوب.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "مناسب لإدارة الأساطيل والمركبات التجارية.",
                "يدعم 4G LTE Cat.1 مع 2G حسب الشبكة والإصدار.",
                "إمكانية قراءة بيانات المركبة عبر CAN Bus.",
                "إمكانية إضافة حساسات وملحقات متوافقة.",
                "متابعة أسلوب القيادة وبعض الأحداث المهمة.",
                "إمكانية التحكم في فصل المحرك عن بُعد بالتركيب المناسب.",
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

      {/* Technical Notes */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-3xl font-black">ملاحظات مهمة</h2>

            <div className="mt-6 space-y-4 leading-8 text-gray-600">
              <p>
                بعض وظائف CAN Bus والحساسات وTPMS وRFID تعتمد على توافق
                المركبة والحساس أو الإضافة المستخدمة وطريقة التركيب.
              </p>

              <p>
                فصل المحرك يتم من خلال ريلاي وتوصيل مناسب للمركبة، ويجب أن
                يتم التركيب بواسطة فني متخصص وبطريقة آمنة.
              </p>

              <p>
                الجهاز يعمل على جهد من 9 إلى 90 فولت DC، ويجب التأكد من
                توافق جهد المركبة قبل التركيب.
              </p>

              <p>
                الجهاز حاصل على حماية IPX5 حسب الإصدار المذكور، مع ضرورة
                تركيبه في مكان مناسب يحافظ على الجهاز من العوامل الخارجية.
              </p>

              <p className="font-bold text-gray-900">
                الضمان: سنة ضد عيوب الصناعة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <div className="rounded-3xl bg-blue-600 p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">
            محتار بين AK300 وجهاز تاني؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-50">
            هنوضحلك الفرق بين الأجهزة حسب استخدامك، سواء عربية شخصية أو
            شاحنة أو أسطول أو محتاج CAN Bus وحساسات وإمكانيات إضافية.
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
              الأسئلة الشائعة عن AK300
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

                <p className="mt-4 leading-8 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center md:py-20">
          <h2 className="text-3xl font-black md:text-4xl">
            عايز تعرف AK300 مناسب لعربيتك ولا لأ؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
            ابعتلنا نوع المركبة واستخدامك، ونساعدك تختار الجهاز المناسب
            وطريقة التركيب.
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