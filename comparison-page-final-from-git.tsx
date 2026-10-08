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
    alerts: "حركة، سرعة، فصل الكهرباء وغيرها حسب الإعدادات",
    battery: "450mAh",
    voltage: "9–36V DC",
    audio: "يدعم الميكروفون الخارجي حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي",
    special:
      "اختيار عملي لمن يريد جهازًا سلكيًا تقليديًا مع وظائف التتبع والحماية الأساسية.",
  },

  {
    name: "GT06N 4G",
    slug: "gt06n-4g",
    intro:
      "نسخة أحدث من GT06N مخصصة لمن يريد تتبعًا أسرع واتصال 4G مع مدى جهد واسع يصلح لعدد كبير من المركبات.",
    installation: "سلكي – يتم توصيله بكهرباء المركبة",
    usage: "السيارات والمركبات والاستخدامات التي تحتاج اتصالًا 4G",
    network: "4G LTE",
    tracking: "تتبع مباشر سريع + سجل ومسارات",
    alerts: "تنبيهات الحركة والسرعة وفصل الكهرباء وغيرها",
    battery: "250mAh",
    voltage: "9–90V DC",
    audio: "حسب التجهيز والتوصيل",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي",
    special:
      "يمتاز عن GT06N 2G بالاتصال الأحدث ونطاق الجهد الأوسع، مع الحفاظ على فكرة الجهاز السلكي العملية.",
  },

  {
    name: "EV402",
    slug: "ev402",
    intro:
      "جهاز GPS سلكي 4G عملي يجمع بين التتبع المباشر والتنبيهات والحماية، ومناسب جدًا للاستخدام اليومي في السيارات.",
    installation: "سلكي – توصيل مباشر بكهرباء المركبة",
    usage: "السيارات الملاكي والاستخدام الشخصي",
    network: "4G مع دعم 2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "سرعة، اهتزاز، فصل الكهرباء وغيرها",
    battery: "بطارية داخلية احتياطية",
    voltage: "9–36V DC",
    audio: "حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي",
    special:
      "جهاز عملي ومتوازن للاستخدام الشخصي، خصوصًا لمن يريد الانتقال إلى جهاز 4G.",
  },

  {
    name: "EV404",
    slug: "ev404",
    intro:
      "جهاز GPS 4G مناسب للسيارات الملاكي والاستخدام الشخصي، ويجمع بين التتبع والحماية مع إمكانية المراقبة الصوتية.",
    installation: "سلكي – توصيل مباشر بكهرباء المركبة",
    usage: "الأفراد والسيارات الملاكي وحافلات المدارس",
    network: "4G LTE مع دعم 2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "فصل الكهرباء والاهتزاز والتنبيهات الأمنية",
    battery: "بطارية داخلية احتياطية",
    voltage: "9–90V DC",
    audio: "يدعم المراقبة الصوتية",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي",
    special:
      "من أهم نقاط قوته الجمع بين التتبع 4G والمراقبة الصوتية ونطاق الجهد الواسع.",
  },

  {
    name: "J16PRO Max",
    slug: "j16pro-max",
    intro:
      "جهاز GPS سلكي 4G صغير الحجم نسبيًا، مناسب للسيارات والمركبات التي تحتاج اتصالًا حديثًا ونطاق جهد واسع.",
    installation: "سلكي",
    usage: "السيارات والموتوسيكلات والشاحنات والمركبات المختلفة",
    network: "4G مع دعم 2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "حركة وسرعة وسلوك قيادة حسب التجهيز",
    battery: "150mAh",
    voltage: "9–90V DC",
    audio: "يدعم المراقبة الصوتية حسب التوصيل",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي",
    special:
      "حجمه الصغير ونطاق الجهد الواسع يجعلان منه اختيارًا عمليًا لمجموعة متنوعة من المركبات.",
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
    alerts: "تنبيهات وسلوك قيادة مثل التسارع والفرملة والانعطاف حسب التجهيز",
    battery: "بطارية داخلية احتياطية",
    voltage: "9–90V DC",
    audio: "لا يعتمد على المراقبة الصوتية كميزة أساسية",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي",
    special:
      "الفرق الحقيقي هنا أن AK300 يتجه أكثر لإدارة الأساطيل وقراءة بيانات المركبة والحساسات والتوسعات، وليس مجرد تتبع سيارة.",
  },

  {
    name: "B100",
    slug: "b100",
    intro:
      "جهاز GPS عملي قريب في فكرته واستخدامه من EV402، لكنه يتميز بحجم أصغر يجعله مناسبًا عندما تكون مساحة التركيب محدودة.",
    installation: "سلكي",
    usage: "السيارات والاستخدام الشخصي",
    network: "نفس فئة EV402 في الاستخدام",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "تنبيهات التتبع والحماية الأساسية",
    battery: "حسب نسخة الجهاز",
    voltage: "حسب نسخة الجهاز",
    audio: "حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي",
    special:
      "أهم فرق عملي عن EV402 هو الحجم الأصغر؛ لذلك يكون B100 مناسبًا عندما يكون مكان التركيب ضيقًا.",
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
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي",
    special:
      "قوته الأساسية في الاستخدام الاحترافي والتوسعات وإدارة المركبات، لذلك يختلف عن الأجهزة الموجهة أساسًا للسيارة الشخصية.",
  },

  {
    name: "TK303",
    slug: "tk303",
    intro:
      "جهاز GPS سلكي عملي لمتابعة المركبات مع وظائف الحماية والتنبيهات، ومناسب لمن يريد جهازًا بسيطًا ومباشرًا.",
    installation: "سلكي",
    usage: "السيارات والمركبات والاستخدام الشخصي",
    network: "2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "حركة وسرعة وفصل الكهرباء حسب الإعدادات",
    battery: "بطارية داخلية حسب نسخة الجهاز",
    voltage: "حسب نسخة الجهاز",
    audio: "يدعم الميكروفون حسب التجهيز",
    engineCutoff: "يدعم فصل المحرك عن طريق الريلاي",
    special:
      "جهاز عملي في فئة أجهزة التتبع السلكية، وبدون ريموت تحكم خارجي.",
  },

  {
    name: "OBD22",
    slug: "obd22",
    intro:
      "جهاز تتبع OBD يتم تركيبه مباشرة في منفذ OBD في السيارة بدون الحاجة إلى توصيلات كهربائية معقدة.",
    installation: "OBD – تركيب مباشر في منفذ السيارة",
    usage: "السيارات التي يتوفر بها منفذ OBD مناسب",
    network: "2G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "تنبيهات التتبع والحركة والسرعة حسب التجهيز",
    battery: "يعمل من منفذ OBD",
    voltage: "من خلال منفذ OBD",
    audio: "حسب التجهيز",
    engineCutoff: "ليس الميزة الأساسية",
    special:
      "أكبر فرق عملي هو سهولة التركيب؛ لا يحتاج إلى تركيب سلكي تقليدي داخل السيارة.",
  },

  {
    name: "OBD VL505",
    slug: "obd-vl505",
    intro:
      "جهاز تتبع OBD مصمم لمن يريد تركيبًا سريعًا وسهلًا دون الدخول في توصيلات الجهاز السلكي التقليدي.",
    installation: "OBD – تركيب مباشر",
    usage: "السيارات المزودة بمنفذ OBD مناسب",
    network: "4G LTE",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "تنبيهات وتحليل سلوك القيادة حسب التجهيز",
    battery: "من خلال منفذ OBD",
    voltage: "من خلال منفذ OBD",
    audio: "حسب التجهيز",
    engineCutoff: "ليس الميزة الأساسية",
    special:
      "يمتاز باتصال 4G LTE وإمكانيات أكثر تطورًا في التتبع وتحليل سلوك القيادة، مع سهولة التركيب المباشر في منفذ OBD.",
  },

  {
    name: "QBIT",
    slug: "qbit",
    intro:
      "جهاز تتبع محمول صغير الحجم يمكن استخدامه للأشخاص والحقائب والمركبات والأغراض التي تحتاج إلى تتبع بدون تركيب سلكي.",
    installation: "محمول – بدون توصيل أسلاك",
    usage: "الأطفال وكبار السن والحقائب والحيوانات والمركبات حسب الاستخدام",
    network: "غير محددة في هذه الصفحة",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "SOS وتنبيهات حسب الإعدادات",
    battery: "حوالي 2000mAh",
    voltage: "بطارية داخلية",
    audio: "مايكروفون ومكالمات حسب التجهيز",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "أهم نقطة فيه هي صغر الحجم وسهولة حمله واستخدامه بدون تركيب سلكي أو تثبيت دائم.",
  },

  {
    name: "W15L",
    slug: "w15l",
    intro:
      "جهاز تتبع لاسلكي مغناطيسي ببطارية كبيرة، مناسب للمركبات والأصول التي تحتاج إلى تركيب سريع وبدون أسلاك.",
    installation: "مغناطيسي – بدون أسلاك",
    usage: "السيارات والمركبات والأصول والشحنات",
    network: "4G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "حركة ونزع الجهاز وحساسات حماية حسب التجهيز",
    battery: "7500mAh",
    voltage: "بطارية داخلية",
    audio: "مايكروفون مدمج",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "يمتاز ببطارية 7500mAh ومغناطيس قوي وحساس ضوء للمساعدة في اكتشاف نزع الجهاز، مع حماية IP65.",
  },

  {
    name: "AT4",
    slug: "at4",
    intro:
      "جهاز تتبع لاسلكي مغناطيسي ببطارية كبيرة، مناسب لمن يريد تركيبًا بدون أسلاك مع متابعة المركبة لفترات طويلة.",
    installation: "مغناطيسي – بدون أسلاك",
    usage: "المركبات والأصول والمعدات",
    network: "حسب النسخة المعتمدة",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "حركة ونزع الجهاز والسرعة حسب التجهيز",
    battery: "10000mAh",
    voltage: "بطارية داخلية",
    audio: "مايكروفون مدمج",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "أهم ما يميزه البطارية الكبيرة 10000mAh مع التصميم المغناطيسي والمايكروفون.",
  },

  {
    name: "AT4 PLUS",
    slug: "at4-plus",
    intro:
      "جهاز تتبع لاسلكي مغناطيسي 4G ببطارية 10000mAh، يجمع بين سهولة التركيب والحماية ومتابعة المركبة لفترات طويلة.",
    installation: "مغناطيسي – بدون أسلاك",
    usage: "المركبات والأصول والمعدات",
    network: "4G",
    tracking: "تتبع مباشر + سجل الرحلات",
    alerts: "حركة ونزع الجهاز وتنبيهات الحماية حسب التجهيز",
    battery: "10000mAh",
    voltage: "بطارية داخلية",
    audio: "مايكروفون مدمج",
    engineCutoff: "غير مخصص لفصل محرك السيارة",
    special:
      "يمتاز ببطارية 10000mAh، مغناطيس قوي، حماية IPX5، وزر Tamper ميكانيكي لاكتشاف نزع الجهاز.",
  },
];

function getDevice(slug: string) {
  return devices.find((device) => device.slug === slug);
}

function getPairDifference(first: Device, second: Device) {
  const pair = [first.slug, second.slug].sort().join("|");

  const differences: Record<string, string> = {
    "b100|ev402":
      "الجهازان قريبان جدًا في الفئة والاستخدام، لكن B100 يتميز بالحجم الأصغر. لذلك لو مساحة التركيب مهمة بالنسبة لك، فـ B100 هو الاختيار العملي الأفضل.",

    "gt06n-2g|gt06n-4g":
      "الفرق الأساسي هنا هو جيل الاتصال ونطاق الجهد. GT06N 4G يقدم اتصالًا أحدث ونطاق جهد أوسع، بينما GT06N 2G يظل خيارًا أبسط لمن يناسبه نظام 2G.",

    "ev402|gt06n-4g":
      "الاتنين أجهزة GPS سلكية ومناسبين جدًا للسيارات والاستخدام الشخصي، لكن بينهم فرق عملي واضح. GT06N 4G يتميز بنطاق جهد تشغيل أوسع من 9 إلى 90 فولت، بينما EV402 يعمل على 9–36 فولت ويضيف دعم 2G بجانب 4G. لذلك لو محتاج مرونة أكبر في جهد التشغيل فـ GT06N 4G أقوى، ولو وجود 2G بجانب 4G مهم بالنسبة لك فـ EV402 هو الأنسب.",

    "ev404|ev505":
      "EV404 أقرب لاستخدام السيارة الشخصية ويتميز بالمراقبة الصوتية، بينما EV505 موجه أكثر للأساطيل والمعدات والاستخدام التشغيلي الاحترافي.",

    "at4-plus|w15l":
      "الاتنين أجهزة مغناطيسية 4G ببطاريات كبيرة، لكن W15L يتميز ببطارية 7500mAh وحساس ضوء وحماية IP65، بينما AT4 PLUS يأتي ببطارية 10000mAh وزر Tamper ميكانيكي وحماية IPX5.",

    "at4|at4-plus":
      "الجهازان متقاربان جدًا في التصميم والاستخدام، والاتنين مغناطيسيين وبطارية 10000mAh ومايكروفون مدمج. لكن AT4 PLUS يضيف اتصال 4G مع حماية IPX5 وزر Tamper ميكانيكي لاكتشاف نزع الجهاز، وده يخليه أقرب للي عايز مستوى حماية وتجهيز أعلى.",

    "ak300|gt06n-2g":
      "GT06N 2G مناسب أكثر للاستخدام الشخصي والتتبع الأساسي، بينما AK300 يتجه إلى إدارة الأساطيل وربط بيانات المركبة والحساسات والتوسعات.",

    "ev402|gt06n-2g":
      "EV402 ينقل الاستخدام إلى فئة 4G مع دعم 2G، بينما GT06N 2G يعتمد على 2G فقط. لذلك EV402 أنسب لمن يريد جهازًا أحدث للاستخدام طويل المدى.",

    "ev404|gt06n-2g":
      "EV404 يتميز بالاتصال 4G ونطاق الجهد الواسع والمراقبة الصوتية، بينما GT06N 2G جهاز أبسط من حيث الشبكة وموجه للاستخدام التقليدي.",

    "ev505|gt06n-2g":
      "GT06N 2G مناسب أكثر للمتابعة الشخصية، بينما EV505 مصمم بشكل أقرب للاستخدام الاحترافي وإدارة الأساطيل والمعدات مع نطاق جهد 9–90V.",

    "gt06n-4g|ev505":
      "الاتنين أجهزة GPS سلكية 4G ويدعمان فصل المحرك عن طريق الريلاي، لكن الفرق الأساسي في طبيعة الاستخدام. GT06N 4G مناسب أكثر للسيارة والاستخدام الشخصي، بينما EV505 موجه أكثر للشركات والأساطيل والمعدات ويقدم إمكانيات تشغيلية وتوسعات أكبر. يعني لو استخدامك سيارة شخصية فـ GT06N 4G أقرب لاحتياجك، ولو عندك أسطول أو استخدام احترافي فـ EV505 هو الاختيار الأقوى.",

    "gt06n-4g|tk303":
      "الاتنين أجهزة GPS سلكية لمتابعة وحماية المركبات، لكن الفرق الحقيقي يظهر في نوع الشبكة ونطاق الجهد. GT06N 4G يعمل بتقنية 4G LTE ويدعم جهد تشغيل واسع من 9–90V، وده يخليه اختيارًا أقوى للمركبات والاستخدامات اللي تحتاج اتصالًا أحدث ومرونة أكبر في جهد التشغيل. أما TK303 فيعتمد على 2G وبيقدم حلًا أبسط ومباشرًا للتتبع والحماية، وبدون ريموت تحكم خارجي.",

    "j16pro-max|ak300":
      "الاتنين أجهزة GPS سلكية 4G وتقدر تعتمد عليهم في التتبع والحماية، لكن الفرق الحقيقي في طبيعة الاستخدام والإمكانيات المطلوبة. J16PRO Max مناسب أكثر لو عايز جهاز صغير وعملي لمركبة واحدة أو استخدام متنوع، بينما AK300 موجه أكثر للشركات والأساطيل والمعدات اللي تحتاج ربط حساسات وبيانات إضافية وإمكانيات تشغيلية أكبر.",

    "j16pro-max|gt06n-2g":
      "J16PRO Max يقدم اتصال 4G ونطاق جهد 9–90V وحجمًا صغيرًا نسبيًا، بينما GT06N 2G أبسط ويعتمد على 2G ونطاق 9–36V.",

    "tk303|gt06n-2g":
      "الجهازان سلكيان ويقدمان وظائف التتبع والحماية، لكن الاختيار بينهما يعتمد على التجهيز المطلوب وشكل الاستخدام. TK303 بدون ريموت خارجي.",

    "obd-vl505|obd22":
      "الاتنين أجهزة OBD سهلة التركيب وبتشتغل مباشرة من منفذ السيارة، لكن الفرق الحقيقي بينهم في جيل الشبكة والإمكانيات. OBD22 يعتمد على شبكة 2G وبيقدم حل بسيط واقتصادي للتتبع الشخصي، بينما OBD VL505 يعمل بتقنية 4G LTE وبيوفر إمكانيات تحديد موقع أكثر تطورًا وتحليلًا أفضل لسلوك القيادة، لذلك هو أقرب للاستخدام الاحترافي وإدارة الأساطيل.",

    "qbit|w15l":
      "QBIT جهاز محمول صغير للاستخدام الشخصي والحقائب والأشخاص، بينما W15L جهاز مغناطيسي أكبر ببطارية 7500mAh موجه أكثر للمركبات والأصول والتثبيت طويل المدى.",

    "at4|w15l":
      "W15L و AT4 الاتنين أجهزة مغناطيسية بدون أسلاك، لكن لكل واحد نقطة قوة مختلفة. W15L يتميز ببطارية 7500mAh مع حساس ضوء وحماية IP65، بينما AT4 يتميز ببطارية أكبر 10000mAh مع مايكروفون مدمج. يعني لو محتاج جهاز مغناطيسي مع حماية إضافية وحساس يساعد في اكتشاف نزع الجهاز، W15L أقرب لاحتياجك، ولو أهم حاجة عندك سعة البطارية الأكبر، فـ AT4 هو الأقوى.",
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
  if (first.slug === "b100" || second.slug === "b100") {
    const other = first.slug === "b100" ? second : first;

    if (other.slug === "ev402") {
      return "لو أهم حاجة عندك الحجم الصغير: اختار B100. أما لو الحجم مش فارق معاك، فالجهازين قريبين جدًا في الاستخدام.";
    }
  }

  if (
    (first.slug === "ev404" && second.slug === "ev505") ||
    (first.slug === "ev505" && second.slug === "ev404")
  ) {
    return "للسيارة الشخصية والمراقبة الصوتية: EV404 أقرب لاحتياجك. للأساطيل والمعدات والاستخدام الاحترافي: EV505 هو الاختيار الأنسب.";
  }

  if (
    (first.slug === "gt06n-4g" && second.slug === "ev505") ||
    (first.slug === "ev505" && second.slug === "gt06n-4g")
  ) {
    return "لو استخدامك سيارة شخصية وعايز جهاز 4G عملي للتتبع والحماية وفصل المحرك: GT06N 4G أقرب لاحتياجك. لو بتدير أسطول أو شاحنات أو معدات وعايز إمكانيات تشغيلية وتوسعات أكبر: EV505 هو الاختيار الأنسب.";
  }

  if (
    (first.slug === "gt06n-4g" && second.slug === "ev402") ||
    (first.slug === "ev402" && second.slug === "gt06n-4g")
  ) {
    return "لو أولويتك جهد تشغيل واسع يصل إلى 90 فولت: GT06N 4G هو الاختيار الأقوى. أما لو مهم بالنسبة لك وجود دعم 2G بجانب 4G: EV402 هو الأنسب.";
  }

  if (
    (first.slug === "w15l" && second.slug === "at4-plus") ||
    (first.slug === "at4-plus" && second.slug === "w15l")
  ) {
    return "لو أولويتك البطارية الأكبر: AT4 PLUS. لو تهتم بحساس الضوء والحماية IP65: W15L.";
  }

  if (
    (first.slug === "gt06n-2g" && second.slug === "gt06n-4g") ||
    (first.slug === "gt06n-4g" && second.slug === "gt06n-2g")
  ) {
    return "لو تريد اتصال 4G ونطاق جهد أوسع: GT06N 4G. لو استخدامك مناسب لشبكة 2G وتريد الحل الأبسط: GT06N 2G.";
  }

  if (
    (first.slug === "gt06n-4g" && second.slug === "tk303") ||
    (first.slug === "tk303" && second.slug === "gt06n-4g")
  ) {
    return "لو عايز 4G واتصال أحدث وجهد تشغيل واسع من 9–90V: GT06N 4G هو الاختيار الأقوى. أما لو استخدامك بسيط وعايز جهاز GPS سلكي عملي على 2G وبدون ريموت تحكم خارجي: TK303 مناسب ليك.";
  }

  if (
    (first.slug === "j16pro-max" && second.slug === "ak300") ||
    (first.slug === "ak300" && second.slug === "j16pro-max")
  ) {
    return "لو استخدامك سيارة أو مركبة وعايز جهاز GPS صغير وعملي للتتبع والحماية: J16PRO Max أقرب لاحتياجك. أما لو بتدير أسطول أو معدات وعايز إمكانيات توسعة وربط حساسات وبيانات المركبة: AK300 هو الاختيار الأقوى.";
  }

  if (
    (first.slug === "obd22" && second.slug === "obd-vl505") ||
    (first.slug === "obd-vl505" && second.slug === "obd22")
  ) {
    return "لو عايز جهاز OBD بسيط واقتصادي للاستخدام الشخصي: OBD22 مناسب ليك. أما لو محتاج 4G وإمكانيات أقوى وتحليل سلوك القيادة أو بتدير شركة أو أسطول: OBD VL505 هو الاختيار الأقوى.";
  }

  if (
    (first.slug === "w15l" && second.slug === "at4") ||
    (first.slug === "at4" && second.slug === "w15l")
  ) {
    return "لو عايز حماية IP65 وحساس ضوء مع جهاز مغناطيسي 4G: W15L. لو أولويتك بطارية أكبر 10000mAh مع مايكروفون: AT4.";
  }

  if (
    (first.slug === "at4" && second.slug === "at4-plus") ||
    (first.slug === "at4-plus" && second.slug === "at4")
  ) {
    return "لو عايز جهاز مغناطيسي ببطارية 10000mAh ومايكروفون واستخدام عملي: AT4 مناسب. أما لو عايز 4G مع حماية IPX5 وTamper مع نفس سعة البطارية: AT4 PLUS هو الاختيار الأقوى.";
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

  return `لو استخدامك قريب من الاثنين، ركز على الفرق المذكور فوق: اختار ${first.name} إذا كانت مميزاته هي الأهم بالنسبة لك، واختار ${second.name} إذا كانت أولوياتك أقرب لمميزاته.`;
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

  if (!first || !second || device1 === device2) {
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
                  backgroundColor: index === 0 ? "#eff6ff" : "#ecfdf5",
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
