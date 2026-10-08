import Link from "next/link";

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

const devices: Device[] = [
  {
    name: "GT06N 2G",
    slug: "gt06n-2g",
    intro:
      "جهاز GPS سلكي عملي لمتابعة السيارة ومعرفة الموقع والسرعة وسجل الرحلات والتنبيهات، مع إمكانية فصل المحرك عند تركيب الريلاي.",
    installation: "سلكي – يتم توصيله بكهرباء المركبة",
    usage: "السيارات الملاكي والاستخدام الشخصي",
    network: "2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts:
      "حركة، سرعة، فصل الكهرباء، اهتزاز وسحب السيارة وغيرها حسب الإعدادات",
    battery: "450mAh",
    voltage: "9–36V DC",
    audio: "يدعم الميكروفون الخارجي حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي حسب التوصيل",
    special:
      "جهاز سلكي عملي لمن يريد وظائف التتبع والحماية الأساسية مع بطارية داخلية 450mAh.",
  },

  {
    name: "GT06N 4G",
    slug: "gt06n-4g",
    intro:
      "نسخة أحدث من GT06N تعمل بشبكة 4G مع دعم 2G، وتوفر استجابة أسرع ونطاق جهد واسع يصل إلى 90 فولت.",
    installation: "سلكي – يتم توصيله بكهرباء المركبة",
    usage: "السيارات والمركبات والاستخدامات التي تحتاج اتصالًا حديثًا",
    network: "4G LTE مع دعم 2G",
    tracking: "تتبع مباشر سريع + سجل ومسارات حتى 3 أشهر",
    alerts:
      "سرعة، سياج جغرافي، فصل الكهرباء، اهتزاز وسحب السيارة وغيرها حسب الإعدادات",
    battery: "250mAh",
    voltage: "9–90V DC",
    audio: "يدعم الميكروفون الخارجي حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي حسب التوصيل",
    special:
      "يمتاز باتصال 4G مع دعم 2G، ونطاق جهد واسع 9–90V، وحفظ سجل الحركة حتى 3 أشهر.",
  },

  {
    name: "EV402",
    slug: "ev402",
    intro:
      "جهاز GPS سلكي 2G عملي بتصميم أصغر وأحدث، مناسب للاستخدام اليومي في السيارات عندما تكون سهولة التركيب والحجم الصغير من الأولويات.",
    installation: "سلكي – توصيل مباشر بكهرباء المركبة",
    usage: "السيارات الملاكي والاستخدام الشخصي",
    network: "2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "سرعة، حركة، اهتزاز، فصل الكهرباء وغيرها حسب الإعدادات",
    battery: "بطارية داخلية احتياطية",
    voltage: "9–36V DC",
    audio: "حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي حسب التوصيل",
    special:
      "يتميز بحجم أصغر وتصميم أحدث ومكونات عالية الجودة واستجابة مستقرة وسريعة ضمن فئة أجهزة 2G.",
  },

  {
    name: "EV404",
    slug: "ev404",
    intro:
      "جهاز GPS 4G مناسب للسيارات والاستخدام الشخصي، ويجمع بين التتبع والحماية والمراقبة الصوتية مع نطاق جهد واسع.",
    installation: "سلكي – توصيل مباشر بكهرباء المركبة",
    usage: "الأفراد والسيارات الملاكي وحافلات المدارس",
    network: "4G LTE مع دعم 2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "فصل الكهرباء، الاهتزاز، السحب، السرعة والتنبيهات الأمنية",
    battery: "بطارية داخلية احتياطية",
    voltage: "9–90V DC",
    audio: "يدعم المراقبة الصوتية",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي حسب التوصيل",
    special:
      "يجمع بين اتصال 4G ونطاق جهد يصل إلى 90V مع المراقبة الصوتية ووظائف الحماية.",
  },

  {
    name: "J16PRO Max",
    slug: "j16pro-max",
    intro:
      "جهاز GPS سلكي 4G صغير الحجم نسبيًا، مزود بهوائيين، ومناسب للمركبات التي تحتاج اتصالًا سريعًا ونطاق جهد واسع.",
    installation: "سلكي",
    usage: "السيارات والموتوسيكلات والشاحنات والمركبات المختلفة",
    network: "4G مع دعم 2G",
    tracking:
      "تتبع مباشر + سجل الرحلات مع إمكانية حفظ البيانات وإرسالها بعد عودة الاتصال",
    alerts:
      "حركة، سرعة، سياج جغرافي، فصل الكهرباء، اهتزاز وسحب السيارة وغيرها حسب التجهيز",
    battery: "بطارية داخلية حسب الإصدار",
    voltage: "9–90V DC",
    audio: "يدعم المراقبة الصوتية حسب التوصيل",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي حسب التوصيل",
    special:
      "يتميز بدعم 4G و2G وهوائيين وحجم صغير نسبيًا، مع إمكانية الاحتفاظ ببيانات الموقع أثناء انقطاع الشبكة وإرسالها بعد عودة الاتصال.",
  },

  {
    name: "AK300",
    slug: "ak300",
    intro:
      "جهاز GPS احترافي موجه أكثر لإدارة المركبات والأساطيل، مع إمكانيات توسعة وربط حساسات وبيانات المركبة.",
    installation: "سلكي",
    usage: "الشركات والأساطيل والنقل والمعدات",
    network: "4G LTE Cat.1 مع دعم 2G",
    tracking: "تتبع مباشر وإدارة تشغيلية",
    alerts:
      "تنبيهات وسلوك قيادة مثل التسارع العنيف والفرملة المفاجئة والانعطافات حسب التجهيز",
    battery: "250mAh",
    voltage: "9–90V DC",
    audio: "يدعم الميكروفون حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي حسب التوصيل",
    special:
      "يتجه أكثر لإدارة الأساطيل وربط بيانات المركبة والحساسات والتوسعات، مع دعم مراقبة سلوك القيادة وCAN Bus حسب التوافق والتوصيل.",
  },

  {
    name: "B100",
    slug: "b100",
    intro:
      "جهاز GPS سلكي صغير الحجم، مناسب للسيارات والاستخدام الشخصي، ويتميز بسهولة التركيب وسرعة الاستجابة.",
    installation: "سلكي",
    usage: "السيارات والاستخدام الشخصي",
    network: "2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "تنبيهات التتبع والحماية الأساسية",
    battery: "بطارية داخلية احتياطية",
    voltage: "9–36V DC",
    audio: "حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي حسب التوصيل",
    special:
      "حجمه الصغير وسرعة استجابته وسهولة تركيبه تجعله مناسبًا عندما تكون مساحة التركيب محدودة.",
  },

  {
    name: "EV505",
    slug: "ev505",
    intro:
      "جهاز GPS 4G احترافي موجه أكثر للشركات والأساطيل والمعدات والمركبات التي تحتاج إمكانيات تشغيلية وتوسعات أكبر.",
    installation: "سلكي",
    usage: "الشركات والأساطيل والمعدات الثقيلة",
    network: "4G LTE Cat.1 مع دعم 2G",
    tracking: "تتبع مباشر وإدارة تشغيلية",
    alerts: "تنبيهات السرعة والتسارع والتباطؤ والاهتزاز حسب التجهيز",
    battery: "بطارية داخلية احتياطية",
    voltage: "9–90V DC",
    audio: "حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي حسب التوصيل",
    special:
      "قوته الأساسية في الاستخدام الاحترافي والتوسعات وإدارة المركبات، لذلك يختلف عن الأجهزة الموجهة أساسًا للسيارة الشخصية.",
  },

  {
    name: "TK303",
    slug: "tk303",
    intro:
      "جهاز GPS سلكي 2G عملي لمتابعة المركبات مع وظائف الحماية والتنبيهات، ومناسب لمن يريد جهازًا بسيطًا ومباشرًا بدون ريموت تحكم خارجي.",
    installation: "سلكي",
    usage: "السيارات والمركبات والاستخدام الشخصي",
    network: "2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts:
      "حركة، سرعة، فصل الكهرباء، اهتزاز وسحب السيارة حسب الإعدادات",
    battery: "بطارية داخلية حسب نسخة الجهاز",
    voltage: "حسب نسخة الجهاز",
    audio: "يدعم الميكروفون حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي حسب التوصيل",
    special:
      "تصميم مناسب للاستخدام في ظروف أكثر تعرضًا حسب الإصدار، وبعض النسخ قد تدعم بطاقة ذاكرة لتخزين بيانات التتبع. بدون ريموت تحكم خارجي.",
  },

  {
    name: "OBD22",
    slug: "obd22",
    intro:
      "جهاز تتبع GPS يعمل بطريقة Plug & Play، يتم تركيبه مباشرة في منفذ OBD-II بالسيارة بدون قص أو تعديل في ضفيرة السيارة.",
    installation: "Plug & Play – تركيب مباشر في منفذ OBD-II",
    usage: "السيارات الشخصية والمستأجرة والاستخدام الفردي",
    network: "حسب إصدار الجهاز",
    tracking: "تتبع مباشر + تحديد السرعة + التقارير والمسارات",
    alerts: "تنبيهات الحركة والسرعة وغيرها حسب الإعدادات",
    battery: "يعمل من منفذ OBD-II",
    voltage: "من خلال منفذ OBD-II",
    audio: "يدعم المايك حسب الإصدار",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "أهم ما يميزه سهولة التركيب؛ مجرد توصيله في منفذ OBD-II بدون قص أسلاك أو تعديل في ضفيرة السيارة.",
  },

  {
    name: "OBD VL505",
    slug: "obd-vl505",
    intro:
      "جهاز تتبع OBD بتقنية Plug & Play يعمل مباشرة من منفذ OBD-II، ويتميز باتصال 4G وإمكانيات متقدمة لمتابعة سلوك القيادة.",
    installation: "Plug & Play – تركيب مباشر في منفذ OBD-II",
    usage: "السيارات والشركات والأساطيل",
    network: "4G LTE",
    tracking: "تتبع مباشر سريع + تحديد السرعة + التقارير والمسارات",
    alerts: "تنبيهات متقدمة وتحليل سلوك القيادة حسب التجهيز",
    battery: "يعمل من منفذ OBD-II",
    voltage: "من خلال منفذ OBD-II",
    audio: "حسب الإصدار",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "يتميز بشبكة 4G وإمكانيات متقدمة لمتابعة سلوك القيادة مثل الفرملة المفاجئة والتسارع العنيف والانعطافات الحادة.",
  },

  {
    name: "QBIT",
    slug: "qbit",
    intro:
      "جهاز تتبع محمول صغير الحجم يمكن استخدامه للأشخاص والأطفال وكبار السن والحيوانات والحقائب والمقتنيات، بدون تركيب سلكي.",
    installation: "محمول – بدون توصيل أسلاك",
    usage:
      "الأطفال وكبار السن والحيوانات والحقائب والمقتنيات حسب الاستخدام",
    network: "حسب إصدار الجهاز",
    tracking: "تتبع مباشر + سجل الحركة حتى 90 يومًا",
    alerts: "تنبيهات الحركة والسرعة والسياج الجغرافي حسب الإعدادات",
    battery: "بطارية داخلية حسب الإصدار",
    voltage: "بطارية داخلية",
    audio: "مايك ومكالمات صوتية حسب تجهيز الجهاز",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "صغير جدًا وسهل الحمل ولا يحتوي على مغناطيس، ويمكن استخدامه لمتابعة الأشخاص والحيوانات والشنط والمقتنيات.",
  },

  {
    name: "W15L",
    slug: "w15l",
    intro:
      "جهاز تتبع لاسلكي مغناطيسي 4G ببطارية 7500mAh، مناسب للسيارات والمعدات والحاويات والمقتنيات التي تحتاج تثبيتًا سريعًا بدون أسلاك.",
    installation: "مغناطيسي – بدون أسلاك",
    usage: "السيارات والمعدات والحاويات والمقتنيات والأصول",
    network: "4G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts:
      "حركة، اهتزاز، نزع الجهاز، سرعة وسياج جغرافي حسب التجهيز",
    battery: "7500mAh",
    voltage: "بطارية داخلية",
    audio: "مايكروفون مدمج",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "يتميز بمغناطيس قوي وبطارية 7500mAh وحماية IP65، مع دعم GPS+BDS+LBS وأوضاع لتوفير استهلاك البطارية.",
  },

  {
    name: "AT4",
    slug: "at4",
    intro:
      "جهاز تتبع لاسلكي مغناطيسي 2G ببطارية 10000mAh، مناسب لمن يريد تركيبًا بدون أسلاك مع متابعة المركبة أو الأصل لفترات طويلة.",
    installation: "مغناطيسي – بدون أسلاك",
    usage: "المركبات والأصول والمعدات",
    network: "2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts:
      "حركة، اهتزاز، نزع الجهاز، سرعة وسياج جغرافي حسب التجهيز",
    battery: "10000mAh",
    voltage: "بطارية داخلية",
    audio: "مايكروفون مدمج",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "يمتاز ببطارية 10000mAh ومغناطيس قوي وتصميم IPX5، مع إمكانية العمل لفترات طويلة حسب طريقة الاستخدام.",
  },

  {
    name: "AT4 PLUS",
    slug: "at4-plus",
    intro:
      "جهاز تتبع لاسلكي مغناطيسي 4G + 2G ببطارية 10000mAh، يجمع بين سهولة التركيب والحماية ومتابعة المركبة لفترات طويلة.",
    installation: "مغناطيسي – بدون أسلاك",
    usage: "المركبات والأصول والمعدات",
    network: "4G مع دعم 2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts:
      "حركة، اهتزاز، نزع الجهاز، سرعة وسياج جغرافي حسب التجهيز",
    battery: "10000mAh",
    voltage: "بطارية داخلية",
    audio: "مايكروفون مدمج",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "يمتاز ببطارية 10000mAh ومغناطيس قوي وحماية IPX5 وزر Tamper ميكانيكي لاكتشاف نزع الجهاز، مع دعم 4G و2G.",
  },
];

function getDevice(slug: string) {
  const normalizedSlug = decodeURIComponent(slug)
    .trim()
    .toLowerCase();

  const aliases: Record<string, string> = {
    "j16-pro": "j16pro-max",
    j16pro: "j16pro-max",
    "j16pro-max": "j16pro-max",
    obdvl505: "obd-vl505",
    "obd-vl505": "obd-vl505",
    at4plus: "at4-plus",
    "at4-plus": "at4-plus",
  };

  const targetSlug = aliases[normalizedSlug] ?? normalizedSlug;

  return devices.find((device) => device.slug === targetSlug);
}

function getPairDifference(first: Device, second: Device) {
  const pair = [first.slug, second.slug].sort().join("|");

  const differences: Record<string, string> = {
    "b100|ev402":
      "الجهازان من فئة الأجهزة السلكية الموجهة للاستخدام الشخصي، لكن B100 أصغر حجمًا وأسهل عندما تكون مساحة التركيب محدودة، بينما EV402 يتميز بتصميم أحدث ومكونات عالية الجودة واستجابة مستقرة وسريعة. والاتنين 2G ويعملان على 9–36V.",

    "gt06n-2g|gt06n-4g":
      "الفرق الأساسي هنا هو جيل الاتصال ونطاق الجهد والبطارية. GT06N 2G يعمل على 2G ببطارية 450mAh وجهد 9–36V، بينما GT06N 4G يعمل على 4G مع دعم 2G ببطارية 250mAh وجهد 9–90V، مع حفظ سجل الحركة حتى 3 أشهر. يعني الفرق الحقيقي ليس في وظائف التتبع الأساسية، وإنما في الاتصال ونطاق الجهد وحفظ السجل.",

    "ev402|gt06n-4g":
      "الفرق هنا مهم لأن EV402 وGT06N 4G ليسا من نفس جيل الشبكة. EV402 يعمل على 2G فقط وجهده 9–36V، بينما GT06N 4G يعمل على 4G مع دعم 2G وجهده يصل إلى 90V، مع سجل حركة حتى 3 أشهر. EV402 يركز أكثر على الحجم الصغير والتصميم الأحدث ضمن فئة 2G، بينما GT06N 4G يقدم اتصالًا أحدث ونطاق جهد أوسع.",

    "ev404|ev505":
      "الاتنين أجهزة 4G سلكية بنطاق جهد واسع، لكن EV404 أقرب لاستخدام السيارة الشخصية ويتميز بالمراقبة الصوتية، بينما EV505 موجه أكثر للشركات والأساطيل والمعدات والاستخدام التشغيلي الاحترافي.",

    "ev404|gt06n-4g":
      "الاتنين أجهزة GPS سلكية 4G وتدعم وظائف التتبع والحماية الأساسية. EV404 يتميز بالمراقبة الصوتية ونطاق 9–90V، بينما GT06N 4G يتميز ببطارية 250mAh وحفظ سجل الحركة حتى 3 أشهر مع دعم 4G و2G. الفرق هنا يرتبط بالأولوية بين المراقبة الصوتية وتجهيز السيارة من جهة، وحفظ السجل والاتصال المرن من جهة أخرى.",

    "at4-plus|w15l":
      "الاتنين أجهزة مغناطيسية لاسلكية 4G ومناسبين للمركبات والأصول، لكن W15L يأتي ببطارية 7500mAh وحماية IP65 ويدعم GPS+BDS+LBS، بينما AT4 PLUS يأتي ببطارية 10000mAh ويدعم 4G مع 2G وحماية IPX5 وزر Tamper ميكانيكي.",

    "at4|at4-plus":
      "الجهازان متقاربان جدًا في التصميم والاستخدام، والاتنين مغناطيسيين وبطارية 10000mAh. الفرق الأساسي أن AT4 يعمل على 2G، بينما AT4 PLUS يعمل على 4G مع دعم 2G، ويضيف زر Tamper ميكانيكي وحماية IPX5. يعني لو الاتصال 4G مهم بالنسبة لك، فـ AT4 PLUS هو الأقرب لاحتياجك.",

    "ak300|gt06n-2g":
      "GT06N 2G مناسب أكثر للاستخدام الشخصي والتتبع الأساسي، بينما AK300 موجه أكثر لإدارة الأساطيل وربط بيانات المركبة والحساسات والتوسعات. AK300 يعمل 4G LTE Cat.1 مع 2G ويضيف إمكانيات مثل سلوك القيادة وCAN Bus حسب التوافق والتوصيل.",

    "ev402|gt06n-2g":
      "الاتنين يعملان على 2G و9–36V، لكن EV402 يتميز بتصميم أحدث وحجم أصغر واستجابة مستقرة وسريعة ومكونات عالية الجودة، بينما GT06N 2G يتميز ببطارية 450mAh. لذلك الفرق العملي هنا في التصميم والحجم والاستجابة مقابل سعة البطارية.",

    "ev404|gt06n-2g":
      "EV404 يعمل 4G مع دعم 2G وجهده يصل إلى 90V ويتميز بالمراقبة الصوتية، بينما GT06N 2G يعمل على 2G وجهده 9–36V وبطاريته 450mAh. وظائف التتبع والحماية الأساسية موجودة في الجهازين، لكن EV404 يقدم اتصالًا أحدث ونطاق جهد أوسع.",

    "ev505|gt06n-2g":
      "GT06N 2G مناسب أكثر للمتابعة الشخصية، بينما EV505 موجه أكثر للشركات والأساطيل والمعدات ويعمل 4G LTE Cat.1 مع دعم 2G وجهد 9–90V وإمكانيات تشغيلية وتوسعات أكبر.",

    "gt06n-4g|ev505":
      "الاتنين أجهزة GPS سلكية 4G وتدعم فصل المحرك عن طريق الريلاي حسب التوصيل، لكن طبيعة الاستخدام مختلفة. GT06N 4G أقرب للسيارة والاستخدام الشخصي، بينما EV505 موجه أكثر للشركات والأساطيل والمعدات ويقدم إمكانيات تشغيلية وتوسعات أكبر.",

    "gt06n-4g|tk303":
      "الاتنين أجهزة GPS سلكية لمتابعة وحماية المركبات، لكن GT06N 4G يعمل 4G مع دعم 2G وجهد 9–90V، بينما TK303 يعمل 2G ويقدم حلًا أبسط ومباشرًا. كما أن TK303 مناسب أكثر لبعض الاستخدامات التي تحتاج تصميمًا مقاومًا للرطوبة حسب الإصدار، وبدون ريموت تحكم خارجي.",

    "j16pro-max|ak300":
      "الاتنين أجهزة GPS سلكية 4G، لكن J16PRO Max مناسب أكثر لجهاز صغير وعملي لمركبة أو استخدام متنوع، ويتميز بهوائيين وإمكانية حفظ البيانات أثناء انقطاع الشبكة. أما AK300 فهو موجه أكثر للشركات والأساطيل والمعدات التي تحتاج ربط حساسات وبيانات المركبة وCAN Bus وإمكانيات تشغيلية أكبر.",

    "j16pro-max|gt06n-2g":
      "J16PRO Max يقدم 4G مع دعم 2G وجهد 9–90V وهوائيين وإمكانية حفظ البيانات أثناء انقطاع الشبكة، بينما GT06N 2G يعمل على 2G وجهده 9–36V وبطارية 450mAh. لذلك الفرق الأساسي في جيل الاتصال والجهد والهوائيات وإدارة البيانات أثناء انقطاع الشبكة.",

    "tk303|gt06n-2g":
      "الجهازان سلكيان ويقدمان وظائف التتبع والحماية الأساسية ويعملان على 2G. GT06N 2G يتميز ببطارية 450mAh وجهد 9–36V، بينما TK303 يتميز حسب الإصدار بتصميم أكثر مقاومة للرطوبة وقد يدعم بطاقة ذاكرة لتخزين بيانات التتبع. TK303 بدون ريموت تحكم خارجي.",

    "obd-vl505|obd22":
      "الجهازان Plug & Play ويعملان مباشرة من منفذ OBD-II بدون قص أو تعديل في ضفيرة السيارة، لذلك لا يوجد فرق جوهري في طريقة التركيب. الفرق الحقيقي أن OBD VL505 يعمل 4G ويوفر إمكانيات متقدمة لمتابعة سلوك القيادة مثل الفرملة المفاجئة والتسارع العنيف والانعطافات الحادة، بينما شبكة OBD22 تعتمد على إصدار الجهاز ويركز أكثر على التتبع الأساسي والاستخدام الشخصي.",

    "qbit|w15l":
      "QBIT جهاز محمول صغير بدون مغناطيس، مناسب للأشخاص والأطفال والحيوانات والشنط والمقتنيات، بينما W15L جهاز مغناطيسي 4G ببطارية 7500mAh وحماية IP65 موجه أكثر للسيارات والمعدات والحاويات والأصول. QBIT يتميز بسهولة الحمل، بينما W15L يتميز بالتثبيت القوي والبطارية الكبيرة.",

    "at4|w15l":
      "الاتنين أجهزة مغناطيسية بدون أسلاك، لكن W15L يعمل 4G وبطارية 7500mAh وحماية IP65 ويدعم GPS+BDS+LBS، بينما AT4 يعمل 2G وبطارية 10000mAh وحماية IPX5. يعني W15L يتفوق في جيل الاتصال والحماية ودعم أنظمة تحديد المواقع، بينما AT4 يتفوق في سعة البطارية.",

    "obd22|obd-vl505":
      "الجهازان من نوع Plug & Play ويعملان مباشرة من منفذ OBD-II بدون قص أو تعديل الأسلاك. OBD22 مناسب أكثر للتتبع الأساسي والاستخدام الشخصي، بينما OBD VL505 يعمل 4G ويضيف إمكانيات متقدمة لمتابعة سلوك السائق مثل الفرملة المفاجئة والتسارع العنيف والانعطافات الحادة.",

    "w15l|at4-plus":
      "الاتنين أجهزة مغناطيسية 4G ببطاريات كبيرة، لكن W15L يأتي ببطارية 7500mAh وحماية IP65 وGPS+BDS+LBS، بينما AT4 PLUS يأتي ببطارية 10000mAh و4G مع دعم 2G وحماية IPX5 وزر Tamper. لذلك الاختيار يعتمد على أولوية البطارية والحماية وأنظمة تحديد الموقع ودعم 2G.",
  };

  if (differences[pair]) {
    return differences[pair];
  }

  const firstIsWired = first.installation.includes("سلكي");
  const secondIsWired = second.installation.includes("سلكي");

  if (firstIsWired !== secondIsWired) {
    return `الفرق الأوضح بين الجهازين هو طريقة التركيب: ${first.name} يعتمد على ${first.installation}، بينما ${second.name} يعتمد على ${second.installation}. وده بيخلي الاختيار مرتبط بمكان التركيب وهل تفضل جهازًا سلكيًا ثابتًا أو جهازًا بدون توصيلات تقليدية.`;
  }

  if (first.network !== second.network) {
    return `الجهازان متقاربان في الاستخدام، لكن الفرق الواضح بينهما هو الاتصال: ${first.name} يعمل على ${first.network}، بينما ${second.name} يعمل على ${second.network}.`;
  }

  if (first.battery !== second.battery) {
    return `الجهازان متقاربان في الاستخدام، لكن البطارية تمثل فرقًا مهمًا هنا: ${first.name} يأتي بـ ${first.battery}، بينما ${second.name} يأتي بـ ${second.battery}.`;
  }

  if (first.usage !== second.usage) {
    return `الفرق العملي بين الجهازين يظهر بشكل أكبر في طبيعة الاستخدام: ${first.name} مناسب أكثر لـ ${first.usage}، بينما ${second.name} مناسب أكثر لـ ${second.usage}.`;
  }

  return `الجهازان متقاربان في الوظائف الأساسية، والاختيار الأفضل يعتمد على الأولوية عندك: طريقة التركيب، حجم الجهاز، البطارية، نوع الاستخدام، أو المميزات الإضافية الموجودة في كل موديل.`;
}

function getRecommendation(first: Device, second: Device) {
  const pair = [first.slug, second.slug].sort().join("|");

  const recommendations: Record<string, string> = {
    "b100|ev402":
      "لو أهم حاجة عندك الحجم الصغير وسهولة التركيب في مساحة محدودة: B100 أقرب لاحتياجك. أما لو عايز تصميم أحدث ومكونات عالية الجودة مع استجابة مستقرة وسريعة: EV402 مناسب ليك.",

    "gt06n-2g|gt06n-4g":
      "لو عايز 4G مع دعم 2G وجهد تشغيل واسع يصل إلى 90V وسجل حركة حتى 3 أشهر: GT06N 4G. لو استخدامك مناسب لـ2G وعايز بطارية 450mAh وجهد 9–36V: GT06N 2G.",

    "ev402|gt06n-4g":
      "لو محتاج 4G وجهد تشغيل يصل إلى 90V وحفظ سجل الحركة حتى 3 أشهر: GT06N 4G. لو عايز جهاز 2G أصغر بتصميم أحدث واستجابة مستقرة: EV402.",

    "ev404|ev505":
      "للسيارة الشخصية والمراقبة الصوتية: EV404 أقرب لاحتياجك. للأساطيل والمعدات والاستخدام التشغيلي الاحترافي: EV505 أنسب.",

    "at4-plus|w15l":
      "لو أولويتك البطارية الأكبر ودعم 4G مع 2G ووجود Tamper: AT4 PLUS. لو تهتم بحماية IP65 ودعم GPS+BDS+LBS: W15L.",

    "at4|at4-plus":
      "لو عايز جهاز مغناطيسي ببطارية 10000mAh ويكفيك 2G: AT4. لو عايز 4G مع دعم 2G وإضافة Tamper: AT4 PLUS.",

    "ak300|gt06n-2g":
      "لو استخدامك شخصي وهدفك التتبع والحماية الأساسية: GT06N 2G. لو عندك أسطول أو معدات وعايز سلوك قيادة وحساسات وCAN Bus وتوسعات أكبر: AK300.",

    "ev402|gt06n-2g":
      "لو الحجم الصغير والتصميم الأحدث والاستجابة المستقرة أهم عندك: EV402. لو بطارية 450mAh وجهد 9–36V هما الأولوية: GT06N 2G.",

    "ev404|gt06n-2g":
      "لو عايز 4G وجهد يصل إلى 90V ومراقبة صوتية: EV404. لو عايز حل 2G عملي ببطارية 450mAh وجهد 9–36V: GT06N 2G.",

    "ev505|gt06n-2g":
      "لو استخدامك شخصي: GT06N 2G أقرب لاحتياجك. لو شركة أو أسطول أو معدات وعايز إمكانيات تشغيلية وتوسعات أكبر: EV505.",

    "gt06n-4g|ev505":
      "لو استخدامك سيارة شخصية وعايز جهاز 4G عملي: GT06N 4G. لو بتدير أسطول أو شاحنات أو معدات وعايز إمكانيات تشغيلية وتوسعات أكبر: EV505.",

    "gt06n-4g|tk303":
      "لو عايز 4G وجهد تشغيل واسع من 9–90V: GT06N 4G. لو استخدامك أبسط ومناسب لـ2G وتهتم بتصميم مقاوم للرطوبة حسب الإصدار: TK303.",

    "j16pro-max|ak300":
      "لو عايز جهاز صغير وعملي لمركبة مع 4G و2G وهوائيين: J16PRO Max. لو عندك أسطول أو معدات وعايز ربط حساسات وبيانات المركبة وإمكانيات تشغيلية أكبر: AK300.",

    "j16pro-max|gt06n-2g":
      "لو عايز 4G و2G وجهد 9–90V وهوائيين: J16PRO Max. لو استخدامك مناسب لـ2G وعايز بطارية 450mAh وجهد 9–36V: GT06N 2G.",

    "gt06n-2g|tk303":
      "لو عايز بطارية 450mAh وجهد 9–36V: GT06N 2G. لو تهتم بتصميم مقاوم للرطوبة حسب الإصدار أو تحتاج بطاقة ذاكرة في النسخة التي تدعمها: TK303.",

    "obd22|obd-vl505":
      "لو عايز جهاز OBD بسيط وسهل للاستخدام الشخصي: OBD22. لو محتاج 4G وتحليل سلوك القيادة وإمكانيات أكبر للأساطيل: OBD VL505.",

    "qbit|w15l":
      "لو عايز جهاز صغير تحمله أو تحطه في شنطة أو تستخدمه لمتابعة شخص أو حيوان: QBIT. لو عايز جهاز يثبت على سيارة أو معدة أو سطح معدني بدون أسلاك: W15L.",

    "at4|w15l":
      "لو أولويتك 4G وحماية IP65 وGPS+BDS+LBS: W15L. لو أولويتك بطارية أكبر 10000mAh: AT4.",

    "w15l|at4-plus":
      "لو أهم حاجة البطارية الأكبر مع 4G و2G وTamper: AT4 PLUS. لو تهتم بـIP65 وGPS+BDS+LBS: W15L.",
  };

  if (recommendations[pair]) {
    return recommendations[pair];
  }

  if (first.installation !== second.installation) {
    return `${first.name} مناسب لو طريقة تركيبه تناسبك، بينما ${second.name} أفضل إذا كانت طريقة تركيبه هي الأسهل في مكان الاستخدام عندك.`;
  }

  if (first.network !== second.network) {
    return `لو أولويتك هي الاتصال ${first.network} فاختار ${first.name}، أما لو احتياجك أقرب إلى ${second.network} فاختار ${second.name}.`;
  }

  if (first.usage !== second.usage) {
    return `اختار ${first.name} لو استخدامك أقرب إلى ${first.usage}، واختار ${second.name} لو استخدامك أقرب إلى ${second.usage}.`;
  }

  return `لو استخدامك قريب من الاثنين، ركز على الفرق المذكور فوق واختار الجهاز الذي تتوافق مميزاته أكثر مع استخدامك الفعلي.`;
}

export default async function ComparisonResultPage({
  params,
}: {
  params: Promise<{
    device1: string;
    device2: string;
  }>;
}) {
  const { device1, device2 } = await params;

  const first = getDevice(device1);
  const second = getDevice(device2);

  if (!first || !second || first.slug === second.slug) {
    return (
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#f8fafc",
          color: "#0f172a",
          padding: "60px 20px",
          textAlign: "center",
          direction: "rtl",
        }}
      >
        <h1
          style={{
            color: "#0f172a",
            fontSize: "32px",
            fontWeight: 800,
          }}
        >
          المقارنة غير متاحة
        </h1>

        <p
          style={{
            color: "#475569",
            marginTop: "15px",
          }}
        >
          من فضلك اختار جهازين مختلفين من صفحة المقارنة.
        </p>

        <Link
          href="/comparison"
          style={{
            display: "inline-block",
            marginTop: "25px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            padding: "14px 25px",
            borderRadius: "12px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          ← العودة للمقارنة
        </Link>
      </main>
    );
  }

  const difference = getPairDifference(first, second);
  const recommendation = getRecommendation(first, second);

  const rows = [
    ["طريقة التركيب", first.installation, second.installation],
    ["نوع الاستخدام", first.usage, second.usage],
    ["الشبكة", first.network, second.network],
    ["التتبع", first.tracking, second.tracking],
    ["التنبيهات", first.alerts, second.alerts],
    ["البطارية", first.battery, second.battery],
    ["الجهد / مصدر الطاقة", first.voltage, second.voltage],
    ["المراقبة الصوتية", first.audio, second.audio],
    ["فصل المحرك", first.engineCutoff, second.engineCutoff],
    ["الميزة الأهم", first.special, second.special],
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        color: "#0f172a",
        direction: "rtl",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px 70px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p
            style={{
              color: "#2563eb",
              fontWeight: 800,
              marginBottom: "10px",
              fontSize: "17px",
            }}
          >
            مقارنة أجهزة GPS
          </p>

          <h1
            style={{
              color: "#0f172a",
              fontSize: "clamp(30px, 5vw, 48px)",
              fontWeight: 900,
              margin: 0,
            }}
          >
            {first.name} × {second.name}
          </h1>

          <p
            style={{
              color: "#475569",
              fontSize: "18px",
              lineHeight: 1.9,
              maxWidth: "780px",
              margin: "16px auto 0",
            }}
          >
            مش كل أجهزة GPS واحدة. هنا هنوضح لك الفرق الحقيقي بين الجهازين
            عشان تختار حسب استخدامك واحتياجاتك.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {[first, second].map((device, index) => (
            <section
              key={device.slug}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  backgroundColor:
                    index === 0 ? "#eff6ff" : "#ecfdf5",
                  color: "#0f172a",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 800,
                  marginBottom: "15px",
                }}
              >
                الجهاز {index + 1}
              </div>

              <h2
                style={{
                  color: "#0f172a",
                  fontSize: "28px",
                  fontWeight: 900,
                  margin: 0,
                }}
              >
                {device.name}
              </h2>

              <p
                style={{
                  color: "#475569",
                  lineHeight: 2,
                  marginTop: "15px",
                  fontSize: "16px",
                }}
              >
                {device.intro}
              </p>

              <div
                style={{
                  marginTop: "20px",
                  padding: "18px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "16px",
                  lineHeight: 2,
                  color: "#334155",
                }}
              >
                <strong>أهم ميزة:</strong>
                <br />
                {device.special}
              </div>
            </section>
          ))}
        </div>

        <section
          style={{
            marginTop: "30px",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "30px",
            boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
          }}
        >
          <h2
            style={{
              color: "#0f172a",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 900,
              marginBottom: "25px",
            }}
          >
            المقارنة التفصيلية
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                minWidth: "760px",
                borderCollapse: "collapse",
                color: "#0f172a",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "16px",
                      border: "1px solid #cbd5e1",
                      backgroundColor: "#f1f5f9",
                      textAlign: "right",
                      fontWeight: 900,
                    }}
                  >
                    وجه المقارنة
                  </th>

                  <th
                    style={{
                      padding: "16px",
                      border: "1px solid #cbd5e1",
                      backgroundColor: "#eff6ff",
                      textAlign: "right",
                      fontWeight: 900,
                    }}
                  >
                    {first.name}
                  </th>

                  <th
                    style={{
                      padding: "16px",
                      border: "1px solid #cbd5e1",
                      backgroundColor: "#ecfdf5",
                      textAlign: "right",
                      fontWeight: 900,
                    }}
                  >
                    {second.name}
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map(([label, firstValue, secondValue]) => (
                  <tr key={label}>
                    <td
                      style={{
                        padding: "16px",
                        border: "1px solid #cbd5e1",
                        fontWeight: 800,
                        backgroundColor: "#f8fafc",
                        verticalAlign: "top",
                      }}
                    >
                      {label}
                    </td>

                    <td
                      style={{
                        padding: "16px",
                        border: "1px solid #cbd5e1",
                        color: "#334155",
                        lineHeight: 1.8,
                        verticalAlign: "top",
                      }}
                    >
                      {firstValue}
                    </td>

                    <td
                      style={{
                        padding: "16px",
                        border: "1px solid #cbd5e1",
                        color: "#334155",
                        lineHeight: 1.8,
                        verticalAlign: "top",
                      }}
                    >
                      {secondValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          style={{
            marginTop: "30px",
            backgroundColor: "#0f172a",
            color: "#ffffff",
            borderRadius: "24px",
            padding: "32px",
          }}
        >
          <p
            style={{
              color: "#93c5fd",
              fontWeight: 800,
              margin: 0,
            }}
          >
            الفرق الحقيقي
          </p>

          <h2
            style={{
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: 900,
              margin: "8px 0 0",
            }}
          >
            إيه اللي يفرق بين {first.name} و {second.name}؟
          </h2>

          <p
            style={{
              color: "#e2e8f0",
              lineHeight: 2.1,
              marginTop: "18px",
              fontSize: "17px",
            }}
          >
            {difference}
          </p>
        </section>

        <section
          style={{
            marginTop: "30px",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "30px",
            boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
          }}
        >
          <h2
            style={{
              color: "#0f172a",
              fontSize: "28px",
              fontWeight: 900,
              margin: 0,
            }}
          >
            أنهي جهاز أنسب ليك؟
          </h2>

          <p
            style={{
              color: "#475569",
              lineHeight: 2,
              marginTop: "15px",
              fontSize: "17px",
            }}
          >
            {recommendation}
          </p>
        </section>

        <section
          style={{
            marginTop: "30px",
            backgroundColor: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: "24px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#0f172a",
              fontSize: "25px",
              fontWeight: 900,
              margin: 0,
            }}
          >
            محتار بين الجهازين؟
          </h2>

          <p
            style={{
              color: "#475569",
              lineHeight: 1.9,
              margin: "12px auto 20px",
              maxWidth: "650px",
            }}
          >
            ابعتلنا استخدامك ونوع المركبة، ونساعدك تختار الجهاز الأنسب بدل ما
            تشتري جهاز بإمكانيات مش محتاجها.
          </p>

          <a
            href="https://wa.me/201006687163"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#16a34a",
              color: "#ffffff",
              padding: "15px 28px",
              borderRadius: "14px",
              fontWeight: 900,
              textDecoration: "none",
              fontSize: "17px",
            }}
          >
            💬 اسألنا على واتساب
          </a>
        </section>

        <div
          style={{
            textAlign: "center",
            marginTop: "35px",
          }}
        >
          <Link
            href="/comparison"
            style={{
              display: "inline-block",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "15px 30px",
              borderRadius: "12px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            ← مقارنة أجهزة أخرى
          </Link>
        </div>
      </section>
    </main>
  );
}