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
    number: "1",
    title: "تتبع مباشر ومعرفة مكان السيارة",
    text: "يوفر AK300 تتبعًا مباشرًا لموقع السيارة على الخريطة، مع إمكانية متابعة السرعة والحركة والمسار السابق للسيارة، وهو مناسب للاستخدام الشخصي وإدارة المركبات والأساطيل.",
  },
  {
    number: "2",
    title: "شبكة 4G LTE مع دعم 2G",
    text: "يعمل الجهاز على شبكة 4G LTE Cat.1 للحصول على اتصال سريع ومستقر، مع إمكانية الرجوع إلى 2G عند ضعف تغطية 4G حسب إصدار الجهاز والشبكة المتاحة.",
  },
  {
    number: "3",
    title: "قراءة بيانات السيارة عن طريق CAN Bus",
    text: "من أهم مميزات AK300 إمكانية قراءة بعض بيانات السيارة من خلال CAN Bus، مثل عدد الكيلومترات واستهلاك الوقود وحالة المحرك وبعض الأعطال، وذلك حسب نوع السيارة ونظام CAN وطريقة التوصيل والتوافق.",
  },
  {
    number: "4",
    title: "Bluetooth 5.1 والحساسات اللاسلكية",
    text: "يدعم AK300 تقنية Bluetooth 5.1، ويمكن استخدامه مع بعض الحساسات والإضافات المتوافقة، مثل حساسات درجة الحرارة والرطوبة، وهو مفيد بشكل خاص في سيارات نقل الأغذية والأدوية.",
  },
  {
    number: "5",
    title: "دعم بعض حساسات ضغط الإطارات TPMS",
    text: "يمكن استخدام الجهاز مع بعض حلول وحساسات TPMS المتوافقة لمتابعة بيانات ضغط الإطارات، حسب نوع الحساس والنظام المستخدم والتوافق.",
  },
  {
    number: "6",
    title: "التعرف على السائق RFID",
    text: "يمكن في بعض التجهيزات والأنظمة استخدام RFID للتعرف على السائق، وهو حل مفيد للشركات والأساطيل التي تحتاج إلى معرفة السائق المستخدم للمركبة.",
  },
  {
    number: "7",
    title: "فصل المحرك عن بُعد",
    text: "يمكن توصيل الجهاز بريلاي للتحكم في دائرة الوقود أو الكهرباء واستخدام خاصية فصل المحرك عن بُعد من خلال النظام، مع ضرورة تنفيذ التوصيل والتركيب بطريقة صحيحة وآمنة.",
  },
  {
    number: "8",
    title: "متابعة سلوك القيادة",
    text: "يستفيد الجهاز من حساس الحركة للمساعدة في اكتشاف بعض أنماط القيادة مثل التسارع المفاجئ والفرملة الشديدة والانعطاف الحاد، مما يساعد الشركات على متابعة أداء السائقين وتحسين أسلوب القيادة.",
  },
  {
    number: "9",
    title: "بطارية داخلية احتياطية",
    text: "يحتوي AK300 على بطارية داخلية بسعة 250mAh تساعد الجهاز على الاستمرار في العمل عند انقطاع التغذية الرئيسية، كما تساعد في إرسال تنبيهات مرتبطة بفصل الكهرباء أو العبث حسب إعدادات النظام.",
  },
  {
    number: "10",
    title: "جهد تشغيل واسع من 9 إلى 90 فولت",
    text: "يعمل AK300 على نطاق جهد واسع من 9 إلى 90V DC، لذلك يمكن استخدامه مع أنواع مختلفة من المركبات مثل السيارات والموتوسيكلات والشاحنات وبعض المعدات الثقيلة، بشرط توافق الجهد وطريقة التركيب.",
  },
  {
    number: "11",
    title: "مداخل ومخارج لإضافات وحساسات مختلفة",
    text: "يحتوي الجهاز على إمكانيات توصيل متعددة تسمح باستخدام بعض الإضافات والحساسات حسب احتياج المركبة ونوع النظام والتجهيز المطلوب.",
  },
  {
    number: "12",
    title: "حماية IPX5",
    text: "إصدار AK300 المستخدم في هذه المواصفات مصنف بحماية IPX5، ما يجعله مناسبًا لبيئات العمل التي تتعرض للاهتزاز والحركة مع ضرورة تركيبه في المكان والطريقة المناسبة.",
  },
];

const applications = [
  "شركات إدارة الأساطيل",
  "الشاحنات والسيارات التجارية",
  "المركبات التي تحتاج إلى قراءة بيانات CAN Bus",
  "سيارات نقل الأغذية والأدوية",
  "المركبات التي تحتاج إلى حساسات حرارة ورطوبة",
  "الشركات التي تحتاج إلى متابعة سلوك السائقين",
  "المركبات التي تحتاج إلى فصل المحرك عن بُعد",
];

const faqs = [
  {
    question: "هل جهاز AK300 يعمل 4G؟",
    answer:
      "نعم، AK300 يعمل على شبكة 4G LTE Cat.1، ويمكن أن يدعم الرجوع إلى 2G حسب إصدار الجهاز والشبكة المتاحة.",
  },
  {
    question: "هل AK300 يقرأ بيانات السيارة؟",
    answer:
      "نعم، يدعم الجهاز قراءة بعض بيانات السيارة عن طريق CAN Bus، ولكن البيانات التي يمكن قراءتها تختلف حسب نوع السيارة ونظام CAN والتوافق وطريقة التوصيل.",
  },
  {
    question: "هل يمكن تركيب حساسات حرارة ورطوبة؟",
    answer:
      "نعم، يمكن استخدام AK300 مع بعض حساسات الحرارة والرطوبة المتوافقة عن طريق Bluetooth، وهو مناسب بشكل خاص لبعض سيارات نقل الأغذية والأدوية.",
  },
  {
    question: "هل يمكن فصل محرك السيارة عن بُعد؟",
    answer:
      "نعم، يمكن استخدام ريلاي مناسب للتحكم في دائرة الوقود أو الكهرباء، وتفعيل فصل المحرك عن بُعد من خلال النظام، بشرط التركيب والتوصيل الصحيح.",
  },
  {
    question: "ما جهد تشغيل AK300؟",
    answer:
      "جهد التشغيل من 9 إلى 90V DC، لذلك يناسب مجموعة كبيرة من المركبات مع مراعاة توافق الجهد وطريقة التركيب.",
  },
  {
    question: "هل AK300 مناسب للشركات والأساطيل؟",
    answer:
      "نعم، الجهاز مناسب بشكل خاص للشركات والأساطيل التي تحتاج إلى تتبع المركبات ومتابعة سلوك السائقين وقراءة بعض بيانات السيارة واستخدام الحساسات والإضافات.",
  },
];

export default function AK300Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AK300 4G",
    description:
      "جهاز تتبع سيارات GPS AK300 4G لتتبع المركبات وإدارة الأساطيل مع دعم CAN Bus وBluetooth 5.1 والحساسات.",
    image: "https://gpsworld-eg.com/images/AK300.jpeg",
    brand: {
      "@type": "Brand",
      name: "GPS World Egypt",
    },
    category: "GPS Vehicle Tracker",
    url: "https://gpsworld-eg.com/devices/ak300",
  };

  return (
    <main dir="rtl" className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight text-gray-900"
          >
            GPS World Egypt
          </Link>

          <a
            href="https://wa.me/201006687163"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-700"
          >
            واتساب
          </a>
        </div>
      </header>

      {/* Back */}
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <Link
          href="/devices"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-gray-900"
        >
          ← العودة إلى أجهزة GPS
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700">
              جهاز GPS احترافي 4G
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              جهاز GPS AK300 4G
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              إنت في الشغل ومحتاج تعرف العربية أو الشاحنة فين، سرعتها إيه،
              ومسارها اتحرك إزاي؟ AK300 مش مجرد جهاز تتبع، لكنه حل احترافي
              مناسب لإدارة الأساطيل والمركبات التجارية، مع دعم CAN Bus
              والحساسات والـ Bluetooth حسب احتياج المركبة.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {quickFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border bg-gray-50 p-4 text-center text-sm font-bold"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/201006687163"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-600 px-6 py-3 font-extrabold text-white transition hover:bg-green-700"
              >
                اسأل عن AK300
              </a>

              <a
                href="#comparison"
                className="rounded-xl border-2 border-gray-900 px-6 py-3 font-extrabold text-gray-900 transition hover:bg-gray-900 hover:text-white"
              >
                قارن بين الأجهزة
              </a>
            </div>
          </div>

          <div className="rounded-3xl border bg-gray-50 p-4 shadow-sm">
            <DeviceGallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black sm:text-4xl">
              مميزات جهاز GPS AK300 4G بالتفصيل
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              AK300 جهاز تتبع سيارات احترافي سلكي يعمل بتقنية 4G، ومصمم
              خصوصًا للاستخدامات التي تحتاج أكثر من مجرد معرفة مكان السيارة،
              مثل إدارة الأساطيل وقراءة بيانات المركبة وربط الحساسات.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-900 text-lg font-black text-white">
                    {feature.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-black">{feature.title}</h3>
                    <p className="mt-3 text-base leading-8 text-gray-600">
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
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-black text-gray-500">
              ليه AK300؟
            </span>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              لما تكون محتاج جهاز تتبع يتعامل مع المركبة نفسها
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              الفرق الأساسي في AK300 إنه مناسب للاستخدامات الاحترافية التي
              تحتاج ربط الجهاز بالمركبة والحساسات، وليس مجرد متابعة الموقع.
              لذلك يعتبر اختيارًا قويًا للشركات والأساطيل والمركبات التجارية.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "تتبع مباشر",
              "قراءة بيانات CAN Bus",
              "Bluetooth 5.1",
              "حساسات حرارة ورطوبة",
              "دعم بعض حلول TPMS",
              "متابعة سلوك القيادة",
              "فصل المحرك بريلاي",
              "جهد تشغيل 9–90V",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-gray-50 p-5 font-bold"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black sm:text-4xl">
              AK300 مناسب لمين؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              الجهاز مناسب بشكل خاص للاستخدامات التي تحتاج تتبع ومتابعة
              المركبة مع إمكانية إضافة بيانات وحساسات حسب طبيعة العمل.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical notes */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-3xl border bg-gray-50 p-7 sm:p-10">
          <h2 className="text-2xl font-black sm:text-3xl">
            ملاحظات مهمة قبل التركيب
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-gray-600">
            <p>
              <strong className="text-gray-900">جهد التشغيل:</strong> من
              9 إلى 90V DC.
            </p>

            <p>
              <strong className="text-gray-900">CAN Bus:</strong> البيانات
              التي يمكن قراءتها تختلف حسب نوع السيارة ونظام CAN والتوافق
              وطريقة التوصيل.
            </p>

            <p>
              <strong className="text-gray-900">الحساسات والإضافات:</strong>{" "}
              بعض الوظائف مثل الحرارة والرطوبة وTPMS وRFID تعتمد على نوع
              الحساس أو الإضافة ومدى توافقها مع النظام.
            </p>

            <p>
              <strong className="text-gray-900">فصل المحرك:</strong> يحتاج
              إلى ريلاي وتركيب صحيح على دائرة مناسبة، ويتم تنفيذ التركيب
              بطريقة آمنة حسب نوع المركبة.
            </p>

            <p>
              <strong className="text-gray-900">الحماية:</strong> إصدار
              المواصفات المستخدمة هنا مصنف IPX5.
            </p>

            <p>
              <strong className="text-gray-900">الضمان:</strong> سنة ضد
              عيوب الصناعة.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="border-y bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            محتار بين AK300 وجهاز تاني؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            كل جهاز له استخدام مختلف. في المقارنة هنوضح لك الفرق العملي بين
            الأجهزة ومين أنسب لاحتياجك.
          </p>

          <Link
            href="/comparison"
            className="mt-8 inline-flex rounded-xl bg-gray-900 px-7 py-4 font-black text-white transition hover:bg-gray-700"
          >
            مقارنة بين الأجهزة
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-black sm:text-4xl">
          الأسئلة الشائعة عن AK300
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border bg-white p-5"
            >
              <summary className="cursor-pointer list-none font-black">
                {faq.question}
              </summary>

              <p className="mt-4 leading-8 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="text-3xl font-black">
            محتاج تعرف هل AK300 مناسب لعربيتك؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            ابعت لنا نوع العربية واستخدامك، ونوضح لك هل AK300 هو الاختيار
            المناسب ولا فيه جهاز تاني أنسب لحالتك.
          </p>

          <a
            href="https://wa.me/201006687163"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-xl bg-green-600 px-8 py-4 font-black text-white transition hover:bg-green-700"
          >
            تواصل على واتساب
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-center text-sm text-gray-500">
          <p className="font-bold text-gray-800">GPS World Egypt</p>
          <p>أجهزة تتبع GPS وتركيب وصيانة في مصر</p>
          <p>القاهرة – الزاوية الحمراء</p>
          <a
            href="https://wa.me/201006687163"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-green-600"
          >
            01006687163
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/201006687163"
        target="_blank"
        rel="noreferrer"
        aria-label="التواصل عبر واتساب"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
      >
        وات
      </a>
    </main>
  );
}