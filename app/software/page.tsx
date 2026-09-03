import Link from "next/link";

const services = [
{
icon: "📱",
title: "برامج GPS",
description:
"برامج وتطبيقات متخصصة لمتابعة أجهزة GPS وإدارة المركبات ومعرفة الموقع والحركة بسهولة.",
features: [
"متابعة المركبات على الخريطة",
"عرض الحركة والتوقف",
"متابعة حالة الأجهزة",
"تقارير ومعلومات التتبع",
],
},
{
icon: "🖥️",
title: "سيرفرات GPS",
description:
"حلول سيرفرات GPS لتشغيل أجهزة التتبع وإدارتها ومتابعتها من خلال أنظمة مستقرة وسهلة الاستخدام.",
features: [
"تشغيل أجهزة GPS",
"إدارة الأجهزة والمركبات",
"متابعة مباشرة",
"حلول مناسبة للأفراد والتجار",
],
},
{
icon: "💳",
title: "شحن نقاط السيرفرات",
description:
"خدمة شحن وتجديد نقاط السيرفرات الخاصة بأجهزة GPS لضمان استمرار الخدمة والمتابعة.",
features: [
"شحن نقاط السيرفر",
"تجديد الخدمة",
"متابعة حالة الحساب",
"دعم فني عند الحاجة",
],
},
{
icon: "🛠️",
title: "الدعم الفني",
description:
"مساعدة فنية في إعداد أجهزة GPS وربطها بالسيرفر وحل المشاكل المتعلقة بالتشغيل والمتابعة.",
features: [
"إعداد الأجهزة",
"ضبط إعدادات GPS",
"المساعدة في ربط السيرفر",
"حل مشاكل التشغيل",
],
},
];

export default function SoftwarePage() {
return (
<main className="min-h-screen bg-white text-gray-900" dir="rtl">
{/* Header */}
<header className="sticky top-0 z-50 bg-[#071a35] text-white shadow-lg">
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
<Link href="/" className="flex flex-col">
<span className="text-xl font-extrabold tracking-wide">
GPS World Egypt
</span>

        <span className="text-xs text-blue-200">
          حلول التتبع والمراقبة GPS
        </span>
      </Link>

      <nav className="flex items-center gap-4 text-sm font-semibold sm:gap-7">
        <Link
          href="/"
          className="transition hover:text-blue-300"
        >
          الرئيسية
        </Link>

        <Link
          href="/#products"
          className="transition hover:text-blue-300"
        >
          الأجهزة
        </Link>

        <Link
          href="/#recharge"
          className="transition hover:text-blue-300"
        >
          شحن النقاط
        </Link>
      </nav>
    </div>
  </header>

  {/* Hero */}
  <section className="bg-gradient-to-b from-blue-50 to-white">
    <div className="mx-auto max-w-7xl px-5 py-20 text-center md:py-28">
      <div className="mb-5 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-800">
        🖥️ برامج وسيرفرات GPS
      </div>

      <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-[#071a35] md:text-6xl">
        برامج وسيرفرات
        <br />
        <span className="text-blue-700">
          لتشغيل ومتابعة أجهزة GPS
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
        نوفر حلولًا متكاملة لتشغيل ومتابعة أجهزة GPS، بداية من
        السيرفرات والبرامج وحتى شحن النقاط والدعم الفني.
      </p>

      <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href="https://wa.me/201006687163"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
        >
          💬 تواصل معنا عبر واتساب
        </a>

        <Link
          href="/"
          className="rounded-xl bg-[#071a35] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-900"
        >
          ← العودة للرئيسية
        </Link>
      </div>
    </div>
  </section>

  {/* Services */}
  <section className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-5">
      <div className="mb-12 text-center">
        <span className="text-sm font-bold text-blue-700">
          خدماتنا
        </span>

        <h2 className="mt-2 text-3xl font-black text-[#071a35] md:text-4xl">
          كل ما تحتاجه لتشغيل GPS
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
          اختر الخدمة التي تحتاجها وتواصل معنا لمعرفة التفاصيل
          والأسعار المناسبة.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {service.icon}
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#071a35]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <h4 className="font-extrabold text-[#071a35]">
                تشمل الخدمة:
              </h4>

              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="font-bold text-green-600">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/201006687163"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              استفسر عن الخدمة
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Why Us */}
  <section className="bg-gray-50 py-20">
    <div className="mx-auto max-w-6xl px-5">
      <div className="rounded-3xl bg-[#071a35] px-6 py-12 text-center text-white shadow-xl md:px-12">
        <div className="text-4xl">⭐</div>

        <h2 className="mt-4 text-3xl font-black md:text-4xl">
          لماذا GPS World Egypt؟
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
          نساعدك في اختيار الحل المناسب لأجهزة GPS الخاصة بك،
          مع توفير الأجهزة والبرامج والسيرفرات وخدمات الشحن
          والدعم الفني في مكان واحد.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-5">
            <div className="text-3xl">📡</div>
            <h3 className="mt-3 font-extrabold">
              حلول متكاملة
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-5">
            <div className="text-3xl">🛠️</div>
            <h3 className="mt-3 font-extrabold">
              دعم فني
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-5">
            <div className="text-3xl">🤝</div>
            <h3 className="mt-3 font-extrabold">
              خدمة ومتابعة
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-white py-20">
    <div className="mx-auto max-w-5xl px-5 text-center">
      <h2 className="text-3xl font-black text-[#071a35] md:text-4xl">
        محتاج تعرف أنسب حل ليك؟
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
        تواصل معنا وسنساعدك في اختيار الجهاز والسيرفر والخدمة
        المناسبة لاحتياجاتك.
      </p>

      <a
        href="https://wa.me/201006687163"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-xl bg-green-600 px-9 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
      >
        💬 تواصل معنا عبر واتساب
      </a>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-[#041225] py-10 text-white">
    <div className="mx-auto max-w-7xl px-5 text-center">
      <h3 className="text-xl font-extrabold">
        GPS World Egypt
      </h3>

      <p className="mt-3 text-sm text-gray-400">
        حلول أجهزة GPS والتتبع والمراقبة والبرامج والسيرفرات.
      </p>

      <div className="mt-5 flex justify-center gap-6 text-sm">
        <Link
          href="/"
          className="text-gray-400 transition hover:text-white"
        >
          الرئيسية
        </Link>

        <Link
          href="/#products"
          className="text-gray-400 transition hover:text-white"
        >
          الأجهزة
        </Link>

        <a
          href="https://wa.me/201006687163"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition hover:text-white"
        >
          واتساب
        </a>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-6 text-sm text-gray-500">
        © 2026 GPS World Egypt - جميع الحقوق محفوظة
      </div>
    </div>
  </footer>

  {/* Floating WhatsApp */}
  <a
    href="https://wa.me/201006687163"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="تواصل معنا عبر واتساب"
    className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-xl transition hover:scale-110 hover:bg-green-700 hover:bg-green-700"
  >
    💬
  </a>
</main>

);
}