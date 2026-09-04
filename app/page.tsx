"use client";

import { useState } from "react";
import Image from "next/image";

const devices = [
  {
    id: "gt06n-2g",
    name: "GT06N 2G",
    image: "/images/gt06n2g.jpeg",
    description: "جهاز تتبع GPS عملي للسيارات والمركبات.",
  },
  {
    id: "gt06n-4g",
    name: "GT06N 4G",
    image: "/images/GT06N 4G.jpeg",
    description: "جهاز تتبع GPS بتقنية 4G وسرعة اتصال عالية.",
  },
  {
    id: "ev402-2g",
    name: "EV402 2G",
    image: "/images/ev402.jpeg",
    description: "جهاز GPS مناسب لمتابعة المركبات والتتبع المستمر.",
  },
  {
    id: "ev404-4g",
    name: "EV404 4G",
    image: "/images/ev404.jpeg",
    description: "جهاز تتبع GPS بتقنية 4G للاستخدام الاحترافي.",
  },
  {
    id: "j16pro-max",
    name: "J16PRO Max",
    image: "/images/J16PRO max.jpeg",
    description: "جهاز GPS عملي للسيارات والمركبات.",
  },
  {
    id: "AK300",
    name: "AK300",
    image: "/images/AK300.jpeg",
    description: "جهاز تتبع GPS مناسب للاستخدامات المتنوعة.",
  },
  {
    id: "B100",
    name: "B100",
    image: "/images/B100.jpeg",
    description: "حل عملي لتتبع ومراقبة المركبات.",
  },
  {
    id: "EV505",
    name: "EV505",
    image: "/images/EV505.jpeg",
    description: "جهاز GPS للتتبع والمراقبة باعتمادية عالية.",
  },
  {
    id: "tk303",
    name: "TK303",
    image: "/images/TK303.jpeg",
    description: "جهاز تتبع GPS من الأجهزة الأكثر طلبًا.",
    bestSeller: true,
  },
  {
    id: "obd22",
    name: "OBD22",
    image: "/images/OBD22.jpeg",
    description: "جهاز GPS يعمل من خلال منفذ OBD للمركبات.",
  },
  {
    id: "obdvl505",
    name: "OBD VL505",
    image: "/images/OBDVL505.jpeg",
    description: "حل عملي للتتبع باستخدام منفذ OBD.",
  },
  {
    id: "qbit",
    name: "QBIT",
    image: "/images/QBIT.jpeg",
    description: "جهاز GPS صغير وعملي لمتابعة المركبات.",
  },
  {
    id: "w15l",
    name: "W15L",
    image: "/images/W15L.jpeg",
    description: "جهاز تتبع GPS مناسب لمختلف الاستخدامات.",
  },
  {
    id: "at4",
    name: "AT4",
    image: "/images/AT4.jpeg",
    description: "جهاز GPS للتتبع والمراقبة باحترافية.",
  },
  {
    id: "at4-plus",
    name: "AT4 PLUS",
    image: "/images/AT4 PLUS.jpeg",
    description: "إصدار متطور للتتبع والمراقبة.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      id="top"
      className="min-h-screen bg-white text-gray-900"
      dir="rtl"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#071a35] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wide">
              GPS World Egypt
            </span>

            <span className="text-xs text-blue-200">
              حلول التتبع والمراقبة GPS
            </span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-blue-400 px-3 py-2 text-xl md:hidden"
            aria-label="فتح القائمة"
          >
            ☰
          </button>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#top" className="transition hover:text-blue-300">
              الرئيسية
            </a>

            <a href="#products" className="transition hover:text-blue-300">
              الأجهزة
            </a>

            <a href="/recharge" className="transition hover:text-blue-300">
              شحن النقاط
            </a>

            <a href="/software" className="transition hover:text-blue-300">
              البرامج والسيرفرات
            </a>

            <a href="/contact" className="transition hover:text-blue-300">
              تواصل معنا
            </a>
          </nav>
        </div>

        {menuOpen && (
          <nav className="border-t border-blue-900 bg-[#071a35] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <a
                href="#top"
                onClick={() => setMenuOpen(false)}
              >
                الرئيسية
              </a>

              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
              >
                الأجهزة
              </a>

              <a
                href="/recharge"
                onClick={() => setMenuOpen(false)}
              >
                شحن النقاط
              </a>

              <a
                href="/software"
                onClick={() => setMenuOpen(false)}
              >
                البرامج والسيرفرات
              </a>

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
              >
                تواصل معنا
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center md:py-28">
          <div className="mb-5 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-800">
            📡 حلول GPS للتتبع والمراقبة
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-[#071a35] md:text-6xl">
            أجهزة GPS وحلول التتبع
            <br />
            <span className="text-blue-700">
              باحترافية وأمان وثقة
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            نوفر أجهزة GPS للتتبع والمراقبة، حلول السيرفرات والبرامج،
            وشحن نقاط السيرفرات، مع دعم فني ومتابعة لمساعدتك في اختيار
            الحل المناسب لاحتياجاتك.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="rounded-xl bg-blue-700 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
            >
              📡 تصفح أجهزة GPS
            </a>

            <a
              href="https://wa.me/201006687163"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
            >
              💬 تواصل عبر واتساب
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <div className="text-3xl">📡</div>

              <h3 className="mt-3 font-extrabold text-[#071a35]">
                أجهزة GPS
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                مجموعة متنوعة من أجهزة التتبع والمراقبة.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
              <div className="text-3xl">🖥️</div>

              <h3 className="mt-3 font-extrabold text-[#071a35]">
                سيرفرات وبرامج
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                حلول تشغيل ومتابعة لأجهزة GPS.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
              <div className="text-3xl">🛠️</div>

              <h3 className="mt-3 font-extrabold text-[#071a35]">
                دعم فني
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                مساعدة فنية ومتابعة مستمرة للعملاء.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold text-blue-700">
              أجهزتنا
            </span>

            <h2 className="mt-2 text-3xl font-black text-[#071a35] md:text-4xl">
              أجهزة GPS المتوفرة
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              اختر الجهاز المناسب لاحتياجاتك وتعرف على التفاصيل
              والمواصفات الخاصة بكل جهاز.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {devices.map((device) => (
              <a
                key={device.id}
                href={`/devices/${device.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-gray-50">
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    unoptimized={device.id === "EV505"}
                    className="object-contain p-5 transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute right-3 top-3">
                    {device.bestSeller ? (
                      <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-white shadow">
                        الأكثر مبيعًا
                      </span>
                    ) : (
                      <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow">
                        متوفر
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 text-right">
                  <h3 className="text-xl font-extrabold text-[#071a35]">
                    {device.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                    {device.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-bold text-blue-700">
                      عرض التفاصيل
                    </span>

                    <span className="text-lg text-blue-700 transition group-hover:-translate-x-1">
                      ←
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recharge */}
      <section
        id="recharge"
        className="bg-gradient-to-l from-[#071a35] to-blue-900 py-20 text-white"
      >
        <div className="mx-auto max-w-5xl px-5 text-center">
          <div className="text-4xl">💳</div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            شحن نقاط السيرفرات
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            نوفر خدمة شحن نقاط السيرفرات ومساعدة العملاء في متابعة
            وتجديد خدمات التتبع وتشغيل الأجهزة.
          </p>

          <a
            href="https://wa.me/201006687163"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
          >
            💬 للاستفسار والشحن عبر واتساب
          </a>
        </div>
      </section>

      {/* Software */}
      <section id="software" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold text-blue-700">
              الخدمات
            </span>

            <h2 className="mt-2 text-3xl font-black text-[#071a35] md:text-4xl">
              البرامج والسيرفرات
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              حلول متكاملة لتشغيل ومتابعة أجهزة GPS وإدارة عمليات
              التتبع.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <div className="text-4xl">📱</div>

              <h3 className="mt-5 text-xl font-extrabold text-[#071a35]">
                برامج GPS
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                برامج وتطبيقات لمتابعة أجهزة GPS وإدارة المركبات.
              </p>

              <a
                href="https://wa.me/201006687163"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                استفسر الآن
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <div className="text-4xl">🖥️</div>

              <h3 className="mt-5 text-xl font-extrabold text-[#071a35]">
                سيرفرات GPS
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                حلول سيرفرات مناسبة لتشغيل ومتابعة أجهزة التتبع.
              </p>

              <a
                href="https://wa.me/201006687163"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                استفسر الآن
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <div className="text-4xl">🛠️</div>

              <h3 className="mt-5 text-xl font-extrabold text-[#071a35]">
                الدعم الفني
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                دعم فني ومساعدة في إعداد وتشغيل أجهزة GPS والسيرفرات.
              </p>

              <a
                href="https://wa.me/201006687163"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="rounded-3xl bg-[#071a35] px-6 py-12 text-center text-white shadow-xl md:px-12">
            <h2 className="text-3xl font-black md:text-4xl">
              محتاج جهاز GPS أو خدمة؟
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              تواصل معنا لمعرفة الأسعار والمواصفات واختيار الحل
              المناسب لاحتياجاتك.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/201006687163"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
              >
                💬 واتساب
              </a>

              <a
                href="tel:01006687163"
                className="rounded-xl bg-white px-8 py-4 font-bold text-[#071a35] transition hover:bg-gray-100"
              >
                📞 01006687163
              </a>
            </div>

            <div className="mt-8 text-sm text-blue-200">
              📍 القاهرة - مصر
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#041225] py-10 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-right">
            <div>
              <h3 className="text-xl font-extrabold">
                GPS World Egypt
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                حلول أجهزة GPS والتتبع والمراقبة والبرامج والسيرفرات
                والدعم الفني.
              </p>
            </div>

            <div>
              <h3 className="font-bold">خدماتنا</h3>

              <div className="mt-3 space-y-2 text-sm text-gray-400">
                <p>أجهزة GPS</p>
                <p>برامج وسيرفرات GPS</p>
                <p>شحن نقاط السيرفرات</p>
                <p>الدعم الفني</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold">تواصل معنا</h3>

              <div className="mt-3 space-y-2 text-sm text-gray-400">
                <p>📞 01006687163</p>
                <p>💬 واتساب</p>
                <p>📍 القاهرة - مصر</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
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