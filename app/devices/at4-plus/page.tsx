import Image from "next/image";

const product = {
  name: "AT4 PLUS",
  image: "/images/AT4 PLUS.jpeg",
};

export default function AT4PlusPage() {
  return (
    <main className="min-h-screen bg-gray-50" dir="rtl">
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

      <div className="mx-auto max-w-7xl px-5 pt-6">
        <a
          href="/#products"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-800"
        >
          ← العودة إلى الأجهزة
        </a>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white p-8 shadow-md">
            <Image
              src={product.image}
              alt={product.name}
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
              {product.name}
            </h1>

            <p className="mt-3 text-xl font-bold text-blue-700">
              جهاز تتبع GPS احترافي
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              جهاز AT4 PLUS مصمم لتوفير حل عملي لمتابعة المركبات وإدارتها
              من خلال أنظمة التتبع GPS، مع تصميم مناسب للاستخدام في العديد
              من تطبيقات المراقبة وتتبع السيارات.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href="https://wa.me/201006687163?text=مرحباً، أريد الاستفسار عن جهاز AT4 PLUS"
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

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-md">
            <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
              ⭐ أهم مميزات الجهاز
            </h2>

            <ul className="space-y-4 text-lg leading-8 text-gray-700">
              <li>✓ تتبع موقع المركبة ومتابعة حركتها.</li>
              <li>✓ مناسب لمراقبة السيارات والمركبات.</li>
              <li>✓ تصميم عملي وسهل الاستخدام.</li>
              <li>✓ إمكانية المتابعة من خلال منصة GPS.</li>
              <li>✓ مناسب للأفراد والشركات وأصحاب الأساطيل.</li>
              <li>✓ يساعد على تنظيم ومتابعة المركبات.</li>
              <li>✓ قابل للاستخدام في تطبيقات التتبع المختلفة.</li>
              <li>✓ حل عملي لمتابعة المركبات وإدارتها.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-md">
            <h2 className="mb-6 text-2xl font-extrabold text-blue-950">
              ⚙️ المواصفات الفنية
            </h2>

            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  الموديل
                </div>
                <div className="p-4 text-gray-600">AT4 PLUS</div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  النوع
                </div>
                <div className="p-4 text-gray-600">جهاز تتبع GPS</div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  الاستخدام
                </div>
                <div className="p-4 text-gray-600">تتبع المركبات</div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  المتابعة
                </div>
                <div className="p-4 text-gray-600">منصة GPS</div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 p-4 font-bold text-gray-700">
                  التركيب
                </div>
                <div className="p-4 text-gray-600">داخل المركبة</div>
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

      <section className="bg-blue-50 px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="font-bold text-blue-700">GPS World Egypt</span>

          <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
            لماذا AT4 PLUS؟
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-gray-600">
            AT4 PLUS يوفر حلاً عمليًا لمتابعة المركبات وإدارتها من خلال
            نظام التتبع GPS، وهو مناسب للأفراد والشركات وأصحاب الأساطيل
            الذين يحتاجون إلى متابعة مركباتهم بصورة أفضل وأكثر تنظيمًا.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            هل تريد معرفة المزيد عن الجهاز؟
          </h2>

          <p className="mt-4 text-lg leading-8 text-blue-200">
            تواصل معنا لمعرفة التفاصيل والتوفر وطلب الجهاز.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/201006687163?text=مرحباً، أريد طلب جهاز AT4 PLUS"
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

      <footer className="bg-blue-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 text-center">
          <h3 className="text-2xl font-extrabold">GPS World Egypt</h3>

          <p className="mt-3 text-blue-200">
            أجهزة GPS للتتبع والمراقبة
          </p>

          <p className="mt-5 text-blue-300">📞 01006687163</p>

          <a
            href="https://wa.me/201006687163"
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

      <a
        href="https://wa.me/201006687163"
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
