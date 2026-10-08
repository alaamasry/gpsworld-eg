import Link from "next/link";

const devices = [
  { name: "EV402", slug: "ev402" },
  { name: "EV404", slug: "ev404" },
  { name: "J16PRO Max", slug: "j16pro-max" },
  { name: "AK300", slug: "ak300" },
  { name: "B100", slug: "b100" },
  { name: "EV505", slug: "ev505" },
  { name: "TK303", slug: "tk303" },
  { name: "OBD22", slug: "obd22" },
  { name: "OBD VL505", slug: "obd-vl505" },
  { name: "QBIT", slug: "qbit" },
  { name: "W15L", slug: "w15l" },
  { name: "AT4", slug: "at4" },
  { name: "AT4 PLUS", slug: "at4-plus" },
  { name: "GT06N 4G", slug: "gt06n-4g" },
];

export default function ComparisonPage() {
  return (
    <main
      className="min-h-screen bg-gray-50 text-gray-900"
      dir="rtl"
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-blue-950 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <div className="text-xl font-extrabold">
              GPS World Egypt
            </div>

            <div className="text-sm text-blue-200">
              أجهزة تتبع GPS في مصر
            </div>
          </div>

          <Link
            href="/#products"
            className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-blue-950 transition hover:bg-gray-100"
          >
            📡 الأجهزة
          </Link>
        </div>
      </header>

      {/* TITLE */}
      <section className="px-5 pb-10 pt-12 text-center">
        <span className="text-sm font-bold text-blue-700">
          مقارنة أجهزة GPS
        </span>

        <h1 className="mt-3 text-3xl font-extrabold md:text-5xl">
          قارن بين أجهزة تتبع GPS
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
          اختار الجهاز المناسب ليك وقارن بين المميزات والإمكانيات
          وطريقة الاستخدام قبل ما تاخد قرارك.
        </p>
      </section>

      {/* DEVICES */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2">

          {/* DEVICE 1 */}
          <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
            <div className="mb-5">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
                الجهاز الأول
              </span>
            </div>

            <h2 className="text-2xl font-extrabold">
              GT06N 2G
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              جهاز تتبع GPS سلكي للسيارات، مناسب للمتابعة المباشرة
              ومعرفة المكان والسرعة وسجل الرحلات والتنبيهات، مع
              إمكانية فصل المحرك عند التجهيز لذلك.
            </p>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <div className="text-sm font-bold text-gray-500">
                الجهاز الأساسي
              </div>

              <div className="mt-1 text-lg font-extrabold text-blue-950">
                GT06N 2G
              </div>
            </div>
          </div>

          {/* DEVICE 2 */}
          <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
            <div className="mb-5">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
                الجهاز الثاني
              </span>
            </div>

            <h2 className="text-2xl font-extrabold">
              اختار الجهاز
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              اختار الجهاز اللي عايز تعرف الفرق بينه وبين GT06N 2G.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {devices.map((device) => (
                <Link
                  key={device.slug}
                  href={`/comparison/${device.slug}`}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-center font-extrabold text-blue-950 transition hover:border-blue-600 hover:bg-blue-50"
                >
                  {device.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="mt-8 rounded-3xl bg-blue-950 p-7 text-center text-white shadow-xl md:p-10">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            اختار جهاز للمقارنة
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-8 text-blue-200">
            بعد اختيار الجهاز الثاني هنعرض لك المقارنة بينه وبين
            GT06N 2G بالتفصيل وبطريقة سهلة وواضحة.
          </p>
        </div>

        {/* BACK */}
        <div className="mt-8 text-center">
          <Link
            href="/devices/gt06n-2g"
            className="inline-block rounded-xl bg-gray-900 px-6 py-3 font-bold text-white transition hover:bg-gray-700"
          >
            ← العودة إلى GT06N 2G
          </Link>
        </div>
      </section>
    </main>
  );
}