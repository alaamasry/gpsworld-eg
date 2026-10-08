"use client";
import { comparisonDifferences } from "../../comparison-data";

import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";

type Device = {
  name: string;
  slug: string;
  intro: string;
  installation: string;
  usage: string;
  network: string;
  tracking: string;
  alerts: string;
  battery: string;
  voltage: string;
  audio: string;
  engineCutoff: string;
  special: string;
};

type ComparisonRow = {
  label: string;
  left: string;
  right: string;
  highlight?: boolean;
};

type Comparison = {
  left: string;
  right: string;
  title: string;
  difference: string[];
  recommendationLeft: string;
  recommendationRight: string;
  rows: ComparisonRow[];
};

type RowInput = [
  label: string,
  left: string,
  right: string,
  highlight?: boolean,
];

function makeRows(rows: RowInput[]): ComparisonRow[] {
  return rows.map(([label, left, right, highlight]) => ({
    label,
    left,
    right,
    highlight: Boolean(highlight),
  }));
}

/* =========================================================
   الأجهزة
========================================================= */

const devices: Device[] = [
  {
    name: "GT06N 2G",
    slug: "gt06n-2g",
    intro:
      "جهاز GPS سلكي عملي لمتابعة السيارات لحظة بلحظة، مع معرفة الموقع والسرعة والمسارات والتنبيهات، ومناسب للاستخدام اليومي.",
    installation:
      "يتم تركيبه وتوصيله مباشرة بكهرباء السيارة.",
    usage:
      "مناسب للسيارات والمركبات التي تحتاج إلى جهاز سلكي ثابت ومتابعة مستمرة.",
    network: "2G",
    tracking:
      "تتبع مباشر ومعرفة الموقع والسرعة والمسارات والتقارير والتنبيهات.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات، مع إمكانية متابعة حالة المركبة.",
    battery:
      "بطارية داخلية 450mAh للمساعدة عند انقطاع كهرباء السيارة.",
    voltage: "9–36V DC",
    audio:
      "مايك مدمج حسب الإصدار والتوصيل.",
    engineCutoff:
      "يمكن تنفيذ فصل المحرك عن طريق الريلاي حسب طريقة التوصيل.",
    special:
      "جهاز سلكي عملي ومناسب للاستخدام اليومي.",
  },

  {
    name: "GT06N 4G",
    slug: "gt06n-4g",
    intro:
      "نسخة أحدث من GT06N تعمل بشبكة 4G LTE مع دعم 2G، وتوفر استجابة أفضل في المتابعة المباشرة مع إمكانيات مناسبة للاستخدام اليومي.",
    installation:
      "يتم تركيبه وتوصيله مباشرة بكهرباء السيارة.",
    usage:
      "مناسب للسيارات والمركبات التي تحتاج إلى متابعة مباشرة واستجابة أفضل على شبكات 4G.",
    network: "4G LTE + 2G",
    tracking:
      "تتبع مباشر، سرعة، تنبيهات، وتقارير ومسارات مع حفظ السجل لمدة تصل إلى 3 أشهر.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات مع متابعة حالة المركبة.",
    battery:
      "بطارية داخلية 250mAh.",
    voltage: "9–90V DC",
    audio:
      "مايك مدمج حسب الإصدار والتوصيل.",
    engineCutoff:
      "يمكن تنفيذ فصل المحرك عن طريق الريلاي حسب طريقة التوصيل.",
    special:
      "4G LTE مع إمكانية الرجوع إلى 2G وجهد تشغيل واسع حتى 90V.",
  },

  {
    name: "EV402",
    slug: "ev402",
    intro:
      "جهاز GPS سلكي بتصميم أصغر وأحدث، يعمل على شبكة 2G، ويتميز باستجابة أسرع واتصال أكثر استقرارًا وسهولة في التركيب.",
    installation:
      "يتم تركيبه وتوصيله مباشرة بكهرباء السيارة.",
    usage:
      "مناسب للسيارات والمركبات التي تحتاج إلى جهاز صغير وسريع الاستجابة.",
    network: "2G",
    tracking:
      "تتبع مباشر ومعرفة الموقع والسرعة والمسارات والتنبيهات.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات.",
    battery:
      "بطارية داخلية للمساعدة عند انقطاع الكهرباء.",
    voltage: "9–36V DC",
    audio:
      "مايك مدمج حسب الإصدار والتوصيل.",
    engineCutoff:
      "يمكن تنفيذ فصل المحرك عن طريق الريلاي حسب طريقة التوصيل.",
    special:
      "تصميم أحدث في 2026، حجم أصغر واستجابة أسرع.",
  },

  {
    name: "EV404",
    slug: "ev404",
    intro:
      "جهاز GPS سلكي يعمل بشبكة 4G مع دعم 2G، مناسب للسيارات التي تحتاج إلى متابعة مباشرة واستجابة سريعة.",
    installation:
      "يتم تركيبه وتوصيله مباشرة بكهرباء السيارة.",
    usage:
      "مناسب للسيارات والمركبات والاستخدامات التي تحتاج إلى شبكة 4G.",
    network: "4G LTE + 2G",
    tracking:
      "تتبع مباشر، سرعة، مسارات وتقارير وتنبيهات.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات.",
    battery:
      "بطارية داخلية حسب الإصدار.",
    voltage: "9–90V DC",
    audio:
      "مايك مدمج حسب الإصدار والتوصيل.",
    engineCutoff:
      "يمكن تنفيذ فصل المحرك عن طريق الريلاي حسب طريقة التوصيل.",
    special:
      "يدعم 4G مع الرجوع إلى 2G.",
  },

  {
    name: "B100",
    slug: "b100",
    intro:
      "جهاز GPS سلكي صغير الحجم، يعتمد على مكونات جيدة ويتميز بسرعة استجابة وسهولة في التركيب، مع بطارية احتياطية مدمجة.",
    installation:
      "تركيب سلكي مباشر في السيارة.",
    usage:
      "مناسب للسيارات التي تحتاج إلى جهاز صغير وسهل التركيب.",
    network: "2G",
    tracking:
      "تتبع مباشر ومعرفة الموقع والسرعة والمسارات والتنبيهات.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات.",
    battery:
      "بطارية احتياطية مدمجة.",
    voltage: "9–36V DC",
    audio:
      "مايك مدمج حسب الإصدار والتوصيل.",
    engineCutoff:
      "يمكن تنفيذ فصل المحرك عن طريق الريلاي حسب طريقة التوصيل.",
    special:
      "حجم صغير، استجابة أسرع وسهولة في التركيب.",
  },

  {
    name: "J16 PRO",
    slug: "j16-pro",
    intro:
      "جهاز GPS سلكي 4G مصمم للمتابعة المباشرة، ويتميز بوجود هوائيين لتحسين الاتصال حسب ظروف الاستخدام.",
    installation:
      "يتم تركيبه وتوصيله مباشرة بكهرباء السيارة.",
    usage:
      "مناسب للسيارات والمركبات التي تحتاج إلى اتصال 4G ومتابعة مستمرة.",
    network: "4G LTE + 2G",
    tracking:
      "تتبع مباشر، سرعة، مسارات وتقارير وتنبيهات.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات.",
    battery:
      "بطارية داخلية حسب الإصدار.",
    voltage: "9–90V DC",
    audio:
      "مايك مدمج حسب الإصدار والتوصيل.",
    engineCutoff:
      "يمكن تنفيذ فصل المحرك عن طريق الريلاي حسب طريقة التوصيل.",
    special:
      "وجود هوائيين يساعد على تحسين الاتصال حسب ظروف الاستخدام.",
  },

  {
    name: "AK300",
    slug: "ak300",
    intro:
      "جهاز GPS متقدم يعمل بشبكة 4G LTE Cat.1 مع دعم 2G، ومناسب للاستخدامات التي تحتاج إلى بيانات أكثر تفصيلًا عن السيارة والسائق.",
    installation:
      "تركيب سلكي مباشر في المركبة.",
    usage:
      "مناسب للشركات والمركبات التي تحتاج إلى متابعة متقدمة لسلوك السائق وحالة السيارة.",
    network: "4G LTE Cat.1 + 2G",
    tracking:
      "تتبع مباشر ومسارات وتقارير ومعلومات متقدمة عن استخدام المركبة.",
    alerts:
      "تنبيهات مرتبطة بسلوك القيادة وحالة المركبة حسب التوصيل والإعدادات.",
    battery:
      "بطارية داخلية 250mAh.",
    voltage: "9–90V DC",
    audio:
      "مايك مدمج حسب الإصدار والتوصيل.",
    engineCutoff:
      "يمكن تنفيذ فصل المحرك عن طريق الريلاي حسب طريقة التوصيل.",
    special:
      "CAN Bus وواجهات I/O متعددة، مع بيانات عن التسارع والفرملة العنيفة ووقت التوقف.",
  },

  {
    name: "TK303",
    slug: "tk303",
    intro:
      "جهاز GPS سلكي عملي لمتابعة السيارات، مع تصميم مناسب للتركيب الثابت ومقاومة جيدة للرطوبة حسب الإصدار.",
    installation:
      "تركيب سلكي مباشر في السيارة.",
    usage:
      "مناسب للسيارات والمركبات التي تحتاج إلى جهاز ثابت للمتابعة.",
    network: "2G",
    tracking:
      "تتبع مباشر ومعرفة الموقع والسرعة والمسارات والتنبيهات.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات.",
    battery:
      "بطارية داخلية حسب الإصدار.",
    voltage: "حسب الإصدار.",
    audio:
      "مايك مدمج حسب الإصدار والتوصيل.",
    engineCutoff:
      "يمكن تنفيذ فصل المحرك عن طريق الريلاي حسب طريقة التوصيل.",
    special:
      "مقاومة للرطوبة حسب الإصدار، وبدون ريموت كنترول.",
  },

  {
    name: "AT4",
    slug: "at4",
    intro:
      "جهاز GPS لاسلكي مغناطيسي يعمل بالبطارية، مناسب لمن يريد تركيب الجهاز بدون توصيلات ثابتة داخل السيارة.",
    installation:
      "لاسلكي، ويتم تثبيته باستخدام المغناطيس.",
    usage:
      "مناسب للسيارات والمركبات التي تحتاج إلى جهاز يمكن نقله وتركيبه بسهولة.",
    network: "2G",
    tracking:
      "تتبع مباشر ومسارات وتنبيهات حسب الإعدادات.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات.",
    battery:
      "بطارية 10,000mAh، وتصل مدة التشغيل إلى حوالي 30 يومًا حسب الاستخدام.",
    voltage:
      "يعمل بالبطارية ولا يحتاج إلى توصيل مباشر بكهرباء السيارة.",
    audio:
      "مايك مدمج.",
    engineCutoff:
      "لا يدعم فصل المحرك لأنه جهاز لاسلكي.",
    special:
      "مغناطيسي، بطارية كبيرة، وتصنيف IPX5.",
  },

  {
    name: "AT4 PLUS",
    slug: "at4-plus",
    intro:
      "جهاز GPS لاسلكي مغناطيسي يعمل بشبكة 4G مع دعم 2G، وبطارية كبيرة مناسبة للمتابعة لفترات طويلة بدون توصيل ثابت.",
    installation:
      "لاسلكي، ويتم تثبيته باستخدام المغناطيس.",
    usage:
      "مناسب للسيارات والمركبات التي تحتاج إلى جهاز 4G لاسلكي قابل للنقل.",
    network: "4G LTE + 2G",
    tracking:
      "تتبع مباشر ومسارات وتنبيهات حسب الإعدادات.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات.",
    battery:
      "بطارية 10,000mAh، وتصل مدة التشغيل إلى حوالي 30–36 يومًا حسب الاستخدام.",
    voltage:
      "يعمل بالبطارية ولا يحتاج إلى توصيل مباشر بكهرباء السيارة.",
    audio:
      "مايك مدمج.",
    engineCutoff:
      "لا يدعم فصل المحرك لأنه جهاز لاسلكي.",
    special:
      "مغناطيسي، 4G، بطارية 10,000mAh وتصنيف IPX5.",
  },

  {
    name: "W15L 4G",
    slug: "w15l",
    intro:
      "جهاز GPS لاسلكي مغناطيسي 4G ببطارية 7500mAh، مصمم للمتابعة لفترات طويلة مع مقاومة جيدة للعوامل الخارجية.",
    installation:
      "لاسلكي، ويتم تثبيته باستخدام المغناطيس.",
    usage:
      "مناسب للسيارات والمركبات التي تحتاج إلى جهاز مغناطيسي ببطارية كبيرة.",
    network: "4G",
    tracking:
      "تتبع مباشر ومسارات وتنبيهات مع GPS وBDS وLBS.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات.",
    battery:
      "بطارية 7500mAh.",
    voltage:
      "يعمل بالبطارية ولا يحتاج إلى توصيل مباشر بكهرباء السيارة.",
    audio:
      "مايك مدمج.",
    engineCutoff:
      "لا يدعم فصل المحرك لأنه جهاز لاسلكي.",
    special:
      "مغناطيسي، 4G، GPS + BDS + LBS، وتصنيف IP65.",
  },

  {
    name: "OBD22",
    slug: "obd22",
    intro:
      "جهاز GPS بنظام Plug & Play يتم توصيله مباشرة بمنفذ OBD-II في السيارة بدون الحاجة إلى تمديدات كهربائية معقدة.",
    installation:
      "Plug & Play عن طريق منفذ OBD-II.",
    usage:
      "مناسب لمن يريد تركيبًا سريعًا وسهلًا بدون فك أو تمديد أسلاك.",
    network: "حسب إصدار الجهاز",
    tracking:
      "تتبع مباشر ومسارات وتقارير وتنبيهات حسب الإصدار.",
    alerts:
      "تنبيهات متعددة حسب الإعدادات والإصدار.",
    battery:
      "يعتمد على كهرباء منفذ OBD-II.",
    voltage:
      "يعمل من خلال منفذ OBD-II.",
    audio:
      "مايك حسب الإصدار.",
    engineCutoff:
      "لا يدعم فصل المحرك.",
    special:
      "تركيب سريع جدًا بدون توصيلات كهربائية خارجية.",
  },

  {
    name: "OBD VL505",
    slug: "obd-vl505",
    intro:
      "جهاز GPS 4G بنظام Plug & Play يتم تركيبه مباشرة في منفذ OBD-II، مع إمكانيات متقدمة لمتابعة السيارة وسلوك السائق.",
    installation:
      "Plug & Play عن طريق منفذ OBD-II.",
    usage:
      "مناسب للسيارات التي تحتاج إلى تركيب سريع مع إمكانيات متابعة متقدمة.",
    network: "4G LTE",
    tracking:
      "تتبع مباشر ومسارات وتقارير وتنبيهات.",
    alerts:
      "تنبيهات متعددة مع بيانات متقدمة حسب الإعدادات.",
    battery:
      "يعتمد على كهرباء منفذ OBD-II.",
    voltage:
      "يعمل من خلال منفذ OBD-II.",
    audio:
      "مايك حسب الإصدار.",
    engineCutoff:
      "لا يدعم فصل المحرك.",
    special:
      "4G مع بيانات متقدمة عن سلوك السائق وتركيب Plug & Play.",
  },

  {
    name: "QBIT",
    slug: "qbit",
    intro:
      "جهاز GPS صغير ومحمول، مناسب للتتبع الشخصي وتتبع الأطفال وكبار السن والحقائب والحيوانات والسيارات، ويمكن استخدامه من أي مكان.",
    installation:
      "محمول ولا يحتاج إلى تركيب ثابت.",
    usage:
      "مناسب للأطفال وكبار السن وذوي الاحتياجات الخاصة والحقائب والحيوانات والسيارات.",
    network: "حسب إصدار الجهاز",
    tracking:
      "تتبع مباشر ومعرفة الموقع وحفظ حركة ومسارات تصل إلى 90 يومًا حسب النظام.",
    alerts:
      "تنبيهات حسب الإعدادات، مع زر SOS.",
    battery:
      "بطارية داخلية، ومدة التشغيل تعتمد على طريقة الاستخدام.",
    voltage:
      "يعمل بالبطارية.",
    audio:
      "يدعم الاتصال/الاستماع حسب الإصدار.",
    engineCutoff:
      "لا يدعم فصل المحرك.",
    special:
      "حجم صغير جدًا، محمول، وبدون مغناطيس.",
  },
];

/* =========================================================
   أسماء بديلة للـ Slugs
========================================================= */

const slugAliases: Record<string, string> = {
  j16pro: "j16-pro",
  "j16pro-max": "j16-pro",
  "j16-pro-max": "j16-pro",

  obd505: "obd-vl505",
  "obd-vl505": "obd-vl505",

  "w15l-4g": "w15l",

  gt06n4g: "gt06n-4g",

  at4plus: "at4-plus",
  "at4-plus": "at4-plus",
};

function normalizeSlug(value: string) {
  const normalized = decodeURIComponent(value)
    .trim()
    .toLowerCase()
    .replace(/_/g, "-");

  return slugAliases[normalized] ?? normalized;
}

function getDevice(slug: string) {
  const normalized = normalizeSlug(slug);

  return devices.find(
    (device) => device.slug === normalized
  );
}

/* =========================================================
   البحث عن المقارنة
========================================================= */

const comparisons: Comparison[] = Object.entries(comparisonDifferences).map(([pair, difference]) => {
  const [left, right] = pair.split("|");
  return {
    left,
    right,
    title: `${left} × ${right}`,
    difference: [difference],
    recommendationLeft: "",
    recommendationRight: "",
    rows: [],
  };
});

function findComparison(
  leftSlug: string,
  rightSlug: string
) {
  const left = normalizeSlug(leftSlug);
  const right = normalizeSlug(rightSlug);

  return comparisons.find(
    (comparison) =>
      (comparison.left === left &&
        comparison.right === right) ||
      (comparison.left === right &&
        comparison.right === left)
  );
}

/* =========================================================
   ترتيب المقارنة حسب ترتيب الرابط
========================================================= */

function getOrderedComparison(
  leftSlug: string,
  rightSlug: string,
  comparison: Comparison
): Comparison {
  const left = normalizeSlug(leftSlug);
  const right = normalizeSlug(rightSlug);

  if (
    comparison.left === left &&
    comparison.right === right
  ) {
    return comparison;
  }

  return {
    ...comparison,
    left: comparison.right,
    right: comparison.left,
    recommendationLeft:
      comparison.recommendationRight,
    recommendationRight:
      comparison.recommendationLeft,
    rows: comparison.rows.map((row) => ({
      ...row,
      left: row.right,
      right: row.left,
    })),
  };
}

/* =========================================================
   الصفحة
========================================================= */

export default function ComparisonPage() {
  const params = useParams<{
    device1: string;
    device2: string;
  }>();

  const leftSlug = normalizeSlug(params.device1);
  const rightSlug = normalizeSlug(params.device2);

  const leftDevice = getDevice(leftSlug);
  const rightDevice = getDevice(rightSlug);

  const comparison = useMemo(() => {
    if (!leftDevice || !rightDevice) {
      return undefined;
    }

    const found = findComparison(
      leftDevice.slug,
      rightDevice.slug
    );

    if (!found) {
      return undefined;
    }

    return getOrderedComparison(
      leftDevice.slug,
      rightDevice.slug,
      found
    );
  }, [leftDevice, rightDevice]);

  /* =======================================================
     مقارنة غير متاحة
  ======================================================= */

  if (
    !leftDevice ||
    !rightDevice ||
    !comparison
  ) {
    return (
      <main
        dir="rtl"
        className="min-h-screen bg-slate-50 px-4 py-16"
      >
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl">
              ⚖️
            </div>

            <h1 className="text-2xl font-black text-slate-900 md:text-3xl">
              المقارنة غير متاحة حاليًا
            </h1>

            <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-600">
              المقارنة بين الجهازين المختارين لم يتم
              تجهيزها على الموقع حتى الآن.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/comparison"
                className="rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
              >
                اختيار أجهزة أخرى
              </Link>

              <Link
                href="/gps"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
              >
                مشاهدة الأجهزة
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* =======================================================
     صفحة المقارنة
  ======================================================= */

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-50"
    >
      {/* Hero */}

      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200">
              مقارنة أجهزة GPS
            </div>

            <h1 className="text-3xl font-black leading-tight md:text-5xl">
              {comparison.title}
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              شوف الفرق الحقيقي بين الجهازين واعرف
              أنهي جهاز أنسب لاستخدامك قبل ما تختار.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">

        {/* Device Cards */}

        <section className="grid gap-5 md:grid-cols-2">
          <DeviceCard
            device={leftDevice}
            side="الأول"
          />

          <DeviceCard
            device={rightDevice}
            side="الثاني"
          />
        </section>

        {/* Main Difference */}

        <section className="mt-10">
          <div className="mb-5">
            <p className="text-sm font-black text-emerald-600">
              الفرق الحقيقي
            </p>

            <h2 className="mt-1 text-2xl font-black text-slate-900 md:text-3xl">
              الفرق بين {leftDevice.name} و{" "}
              {rightDevice.name}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {comparison.difference.map(
              (item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-black text-emerald-600">
                      {index + 1}
                    </span>

                    <p className="leading-8 text-slate-700">
                      {item}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* Detailed Comparison */}

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-sm font-black text-blue-600">
              بالتفصيل
            </p>

            <h2 className="mt-1 text-2xl font-black text-slate-900 md:text-3xl">
              مقارنة المواصفات والاستخدام
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="w-[25%] px-4 py-5 text-right font-black">
                      المقارنة
                    </th>

                    <th className="w-[37.5%] px-4 py-5 text-center font-black">
                      {leftDevice.name}
                    </th>

                    <th className="w-[37.5%] px-4 py-5 text-center font-black">
                      {rightDevice.name}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparison.rows.map(
                    (row, index) => (
                      <tr
                        key={`${row.label}-${index}`}
                        className={
                          row.highlight
                            ? "bg-emerald-50/70"
                            : index % 2 === 0
                              ? "bg-white"
                              : "bg-slate-50/70"
                        }
                      >
                        <td className="border-b border-slate-200 px-4 py-5 font-black text-slate-900">
                          {row.label}
                        </td>

                        <td className="border-b border-slate-200 px-4 py-5 text-center leading-7 text-slate-700">
                          {row.left}
                        </td>

                        <td className="border-b border-slate-200 px-4 py-5 text-center leading-7 text-slate-700">
                          {row.right}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recommendations */}

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-sm font-black text-orange-600">
              تختار أنهي؟
            </p>

            <h2 className="mt-1 text-2xl font-black text-slate-900 md:text-3xl">
              الجهاز الأنسب حسب احتياجك
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <RecommendationCard
              device={leftDevice}
              text={comparison.recommendationLeft}
            />

            <RecommendationCard
              device={rightDevice}
              text={comparison.recommendationRight}
            />
          </div>
        </section>

        {/* WhatsApp CTA */}

        <section className="mt-12 overflow-hidden rounded-3xl bg-emerald-600 p-7 text-white shadow-lg md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-3xl">
              📱
            </div>

            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              لسه محتار بين الجهازين؟
            </h2>

            <p className="mt-3 leading-8 text-emerald-50">
              ابعتلنا استخدامك وهنقولك أنهي جهاز
              أنسب ليك قبل الشراء.
            </p>

            <a
              href="https://wa.me/201006687163"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3.5 font-black text-emerald-700 shadow-sm transition hover:bg-emerald-50"
            >
              تواصل معنا على واتساب
            </a>
          </div>
        </section>

        {/* Bottom Navigation */}

        <div className="mt-8 flex justify-center">
          <Link
            href="/gps"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-800 transition hover:bg-slate-50"
          >
            ← مشاهدة جميع أجهزة GPS
          </Link>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   Device Card
========================================================= */

function DeviceCard({
  device,
  side,
}: {
  device: Device;
  side: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
        <span className="text-sm font-black text-slate-500">
          الجهاز {side}
        </span>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-black text-slate-900">
          {device.name}
        </h2>

        <p className="mt-4 leading-8 text-slate-600">
          {device.intro}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <MiniInfo
            label="الشبكة"
            value={device.network}
          />

          <MiniInfo
            label="طريقة التركيب"
            value={device.installation}
          />

          <MiniInfo
            label="البطارية"
            value={device.battery}
          />

          <MiniInfo
            label="جهد التشغيل"
            value={device.voltage}
          />
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-black text-slate-900">
            مناسب لـ
          </p>

          <p className="mt-2 leading-7 text-slate-600">
            {device.usage}
          </p>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   Mini Info
========================================================= */

function MiniInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-black text-slate-400">
        {label}
      </p>

      <p className="mt-1 font-bold leading-7 text-slate-800">
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   Recommendation Card
========================================================= */

function RecommendationCard({
  device,
  text,
}: {
  device: Device;
  text: string;
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-xl">
          ✓
        </div>

        <div>
          <p className="text-xs font-black text-slate-400">
            أنسب اختيار
          </p>

          <h3 className="text-xl font-black text-slate-900">
            {device.name}
          </h3>
        </div>
      </div>

      <p className="mt-5 leading-8 text-slate-600">
        {text}
      </p>
    </article>
  );
}





