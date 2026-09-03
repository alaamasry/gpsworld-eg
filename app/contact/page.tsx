import Link from "next/link";

const whatsappNumber = "201006687163";
const phoneNumber = "01006687163";

export default function ContactPage() {
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

            <Link
              href="/recharge"
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
            📞 تواصل معنا
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-[#071a35] md:text-6xl">
            نحن هنا
            <br />
            <span className="text-blue-700">
              لمساعدتك
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            سواء كنت تبحث عن جهاز GPS أو سيرفر أو برنامج أو تحتاج
            إلى دعم فني، تواصل معنا وسنساعدك في اختيار الحل المناسب.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-green-50 text-4xl">
                💬
              </div>

              <h2 className="mt-6 text-2xl font-black text-[#071a35]">
                واتساب
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                أسرع طريقة للتواصل والاستفسار عن الأجهزة والخدمات.
              </p>

              <span className="mt-6 inline-flex rounded-xl bg-green-600 px-7 py-3 font-bold text-white transition group-hover:bg-green-700">
                تواصل عبر واتساب
              </span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${phoneNumber}`}
              className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-4xl">
                📞
              </div>

              <h2 className="mt-6 text-2xl font-black text-[#071a35]">
                اتصال مباشر
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                يمكنك الاتصال بنا مباشرة للاستفسار عن خدماتنا.
              </p>

              <span className="mt-6 inline-flex rounded-xl bg-blue-700 px-7 py-3 font-bold text-white transition group-hover:bg-blue-800">
                01006687163
              </span>
            </a>

            {/* Location */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gray-100 text-4xl">
                📍
              </div>

              <h2 className="mt-6 text-2xl font-black text-[#071a35]">
                موقعنا
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                القاهرة
                <br />
                جمهورية مصر العربية
              </p>

              <span className="mt-6 inline-flex rounded-xl bg-[#071a35] px-7 py-3 font-bold text-white">
                مصر 🇪🇬
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold text-blue-700">
              ماذا نقدم؟
            </span>

            <h2 className="mt-2 text-3xl font-black text-[#071a35] md:text-4xl">
              تواصل معنا بخصوص أي من خدماتنا
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">📡</div>
              <h3 className="mt-4 font-extrabold text-[#071a35]">
                أجهزة GPS
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                استفسر عن الأجهزة والمواصفات المناسبة لك.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">🖥️</div>
              <h3 className="mt-4 font-extrabold text-[#071a35]">
                السيرفرات
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                حلول سيرفرات لتشغيل ومتابعة أجهزة GPS.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">💳</div>
              <h3 className="mt-4 font-extrabold text-[#071a35]">
                شحن النقاط
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                شحن وتجديد نقاط السيرفرات.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">🛠️</div>
              <h3 className="mt-4 font-extrabold text-[#071a35]">
                الدعم الفني
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                مساعدة في تشغيل وإعداد أجهزة GPS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071a35] py-20 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <div className="text-5xl">🤝</div>

          <h2 className="mt-5 text-3xl font-black md:text-4xl">
            جاهز نساعدك؟
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            ابعت لنا على واتساب احتياجك أو استفسارك، وسنرد عليك
            ونساعدك في اختيار الحل المناسب.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-9 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
            >
              💬 تواصل عبر واتساب
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="rounded-xl bg-white px-9 py-4 font-bold text-[#071a35] transition hover:bg-gray-100"
            >
              📞 اتصل الآن
            </a>
          </div>
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

            <Link
              href="/recharge"
              className="text-gray-400 transition hover:text-white"
            >
              شحن النقاط
            </Link>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-6 text-sm text-gray-500">
            © 2026 GPS World Egypt - جميع الحقوق محفوظة
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
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