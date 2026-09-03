import Link from "next/link";

const plans = [
  {
    icon: "💳",
    title: "شحن نقاط السيرفر",
    description:
      "شحن وتجديد نقاط السيرفر الخاصة بأجهزة GPS لضمان استمرار خدمة التتبع والمتابعة.",
  },
  {
    icon: "🔄",
    title: "تجديد الخدمة",
    description:
      "تجديد خدمة أجهزة GPS المرتبطة بالسيرفر ومتابعة حالة الخدمة بسهولة.",
  },
  {
    icon: "🛠️",
    title: "مساعدة فنية",
    description:
      "مساعدة في حالة وجود مشكلة في النقاط أو الجهاز أو ربط الجهاز بالسيرفر.",
  },
];

export default function RechargePage() {
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
              href="/software"
              className="transition hover:text-blue-300"
            >
              البرامج والسيرفرات
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center md:py-28">
          <div className="mb-5 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-800">
            💳 شحن نقاط السيرفرات
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-[#071a35] md:text-6xl">
            شحن وتجديد
            <br />
            <span className="text-blue-700">
              نقاط سيرفرات GPS
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            نوفر خدمة شحن وتجديد نقاط السيرفرات الخاصة بأجهزة GPS،
            مع متابعة ومساعدة فنية لضمان استمرار الخدمة.
          </p>

          <a
            href="https://wa.me/201006687163"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-xl bg-green-600 px-9 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
          >
            💬 اطلب الشحن عبر واتساب
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold text-blue-700">
              خدمات الشحن
            </span>

            <h2 className="mt-2 text-3xl font-black text-[#071a35] md:text-4xl">
              خدماتنا الخاصة بالسيرفر
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              نوفر لك خدمات شحن وتجديد ومتابعة نقاط السيرفرات
              الخاصة بأجهزة GPS.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-4xl">
                  {plan.icon}
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#071a35]">
                  {plan.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {plan.description}
                </p>

                <a
                  href="https://wa.me/201006687163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  استفسر الآن
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold text-blue-700">
              طريقة الخدمة
            </span>

            <h2 className="mt-2 text-3xl font-black text-[#071a35] md:text-4xl">
              الشحن بكل سهولة
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-white">
                1
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#071a35]">
                تواصل معنا
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                أرسل لنا بيانات الخدمة أو الحساب المطلوب شحنه.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-white">
                2
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#071a35]">
                تحديد المطلوب
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                نحدد لك الخدمة المناسبة وعدد النقاط المطلوبة.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-white">
                3
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#071a35]">
                إتمام الشحن
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                يتم تنفيذ الشحن ومتابعة الخدمة معك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 md:p-10">
            <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-right">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-3xl text-white">
                ℹ️
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#071a35]">
                  محتاج تعرف عدد النقاط أو السعر؟
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  تواصل معنا وأرسل بيانات السيرفر أو الخدمة المطلوبة،
                  وسنوضح لك التفاصيل والسعر المناسب.
                </p>
              </div>
            </div>

            <div className="mt-7 text-center">
              <a
                href="https://wa.me/201006687163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
              >
                💬 تواصل معنا عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071a35] py-20 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <div className="text-4xl">📡</div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            حافظ على استمرار خدمة التتبع
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            لو محتاج شحن نقاط السيرفر أو تجديد الخدمة، تواصل معنا
            مباشرة وسنساعدك.
          </p>

          <a
            href="https://wa.me/201006687163"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-green-600 px-9 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
          >
            💬 تواصل عبر واتساب
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

          <div className="mt-5 flex flex-wrap justify-center gap-6 text-sm">
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

            <Link
              href="/software"
              className="text-gray-400 transition hover:text-white"
            >
              البرامج والسيرفرات
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
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-xl transition hover:scale-110 hover:bg-green-700"
      >
        💬
      </a>
    </main>
  );
}