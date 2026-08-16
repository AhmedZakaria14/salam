export type BlogArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  keywords: string[];
  image: string;
  sourcePath: string;
  sourceDocument: string;
  relatedSlugs: string[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: 'salam-fiber-home-packages',
    title: 'باقات سلام فايبر للإنترنت المنزلي',
    seoTitle: 'باقات سلام فايبر للإنترنت المنزلي | فايبر سلام وخدمة السلام فايبر',
    description: 'دليل باقات سلام فايبر للإنترنت المنزلي، السرعات وأنواع الاشتراك وكيفية اختيار الباقة المناسبة والتحقق من توفر خدمة فايبر سلام في منزلك.',
    excerpt: 'يتنقل يومك بين العمل والمشاهدة والألعاب ومكالمات الفيديو، ولذلك تحتاج إلى سرعة تحافظ على أدائها مع الاستخدام المتواصل.',
    keywords: ['فايبر سلام','السلام فايبر','شركة سلام فايبر','شركة السلام فايبر','خدمة سلام فايبر','باقات سلام','باقات فايبر سلام','باقة سلام فايبر','سلام فايبر ١٠٠'],
    image: '/blog/salam-fiber-home-packages.svg',
    sourcePath: 'content/blog/salam-fiber-home-packages.md',
    sourceDocument: 'https://docs.google.com/document/d/11BpGJIBdpQDFjTmUcXmnAZD7jTnIy3WPPry07xkuroA/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-plans-guide','salam-fiber-offers','salam-fiber-coverage','salam-fiber-internet-service'],
  },
  {
    slug: 'salam-fiber-offers',
    title: 'استفد الآن من عروض سلام فايبر واستمتع بسرعة أعلى وفاتورة أخف',
    seoTitle: 'عروض سلام فايبر | عروض فايبر سلام وباقات سلام للاتصالات',
    description: 'تعرف على عروض سلام فايبر والباقات المفوترة ومسبقة الدفع، وكيف تقارن عروض فايبر سلام وتعرف قيمة التوفير والشروط قبل الاشتراك.',
    excerpt: 'تساعدك عروض سلام فايبر على مقارنة السرعات والأسعار وفترات الخصم قبل اختيار الاشتراك الأنسب لاستخدام منزلك.',
    keywords: ['عروض فايبر سلام','عروض سلام','سلام عروض','عروض باقة سلام','عروض شركة سلام','عروض شركه سلام','عروض سلام للاتصالات','عروض السلام للاتصالات','عروض شركة سلام للاتصالات','عروض سلام مسبق الدفع'],
    image: '/blog/salam-fiber-offers.svg',
    sourcePath: 'content/blog/salam-fiber-offers.md',
    sourceDocument: 'https://docs.google.com/document/d/1S86eiBx9XqQ9AgbqLjosiKm9AEiQ8BBvAMfMAJQoi6g/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-plans-guide','salam-fiber-home-packages','salam-sim-offers','salam-fiber-coverage'],
  },
  {
    slug: 'salam-fiber-plans-guide',
    title: 'اكتشف الآن باقات سلام فايبر في نظرة واحدة',
    seoTitle: 'باقات سلام فايبر | المفوتر وسلام فايبر مسبق الدفع',
    description: 'مقارنة باقات سلام فايبر المفوترة ومسبقة الدفع، وسرعات 100 و300 و500 و1000 ميجابت، لمساعدتك على اختيار باقة سلام فايبر المناسبة.',
    excerpt: 'مقارنة منظمة لباقات سلام فايبر المفوترة ومسبقة الدفع والسرعات المختلفة وما يناسب طبيعة استخدام المنزل.',
    keywords: ['باقات سلام','باقات فايبر سلام','باقة سلام فايبر','عروض باقات سلام','سلام فايبر ١٠٠','سلام فايبر مسبق الدفع','عروض سلام مسبق الدفع'],
    image: '/blog/salam-fiber-plans-guide.svg',
    sourcePath: 'content/blog/salam-fiber-plans-guide.md',
    sourceDocument: 'https://docs.google.com/document/d/1X7wrx7DbRdTAN8PRKS8ThK6ag5RjtBMN4B72Ub2m4Q0/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-offers','salam-fiber-home-packages','salam-fiber-internet-service','salam-fiber-modem-router'],
  },
  {
    slug: 'salam-fiber-representative',
    title: 'مندوب سلام فايبر لتأسيس الإنترنت المنزلي ومعرفة أحدث الباقات',
    seoTitle: 'مندوب سلام فايبر | مندوب شركة سلام لتأسيس الإنترنت المنزلي',
    description: 'تعرف على دور مندوب سلام فايبر في فحص التغطية وشرح الباقات وتجهيز طلب التأسيس ومتابعته، وخطوات الاشتراك في خدمة سلام فايبر.',
    excerpt: 'يوضح الدليل دور مندوب سلام فايبر في فحص التغطية ومعرفة الباقات المتاحة وتجهيز طلب التأسيس ومتابعة الإجراءات.',
    keywords: ['مندوب سلام','مندوب شركة سلام','مندوب سلام موبايلي','شركة سلام فايبر','شركة السلام فايبر','خدمة سلام فايبر'],
    image: '/blog/salam-fiber-representative.svg',
    sourcePath: 'content/blog/salam-fiber-representative.md',
    sourceDocument: 'https://docs.google.com/document/d/1VSdp5aoCqAcYuJf-gXOiwx5AXOojOT6y38O6Pz15QtQ/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-home-packages','salam-fiber-coverage','salam-fiber-number-payment','salam-fiber-website-guide'],
  },
  {
    slug: 'salam-fiber-number-payment',
    title: 'رقم سلام فايبر للتواصل السريع',
    seoTitle: 'رقم سلام فايبر | رقم سداد سلام فايبر وخدمة العملاء',
    description: 'دليل رقم سلام فايبر للتواصل والاشتراك، والفرق بين أرقام الخدمة، وطريقة سلام فايبر سداد ومعرفة رقم الحساب ومتابعة الفاتورة.',
    excerpt: 'دليل يوضح أرقام التواصل حسب نوع الطلب وخطوات سداد سلام فايبر ومعرفة رقم الحساب ومتابعة الفاتورة.',
    keywords: ['رقم فايبر سلام','سلام فايبر رقم','رقم سداد سلام فايبر','سلام فايبر سداد','مندوب سلام','مندوب شركة سلام'],
    image: '/blog/salam-fiber-number-payment.svg',
    sourcePath: 'content/blog/salam-fiber-number-payment.md',
    sourceDocument: 'https://docs.google.com/document/d/13rjT3XMwk2ZMW0qUfu-Et7nWY0WcGy-rvijpLvIt-EI/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-representative','salam-fiber-website-guide','salam-fiber-coverage','salam-fiber-home-packages'],
  },
  {
    slug: 'salam-fiber-coverage',
    title: 'تحقق من تغطية سلام فايبر في منزلك',
    seoTitle: 'تغطية سلام فايبر | سلام فايبر تغطية وخريطة الفايبر',
    description: 'تحقق من تغطية سلام فايبر في منزلك عبر الخريطة ولوحة الألياف، واعرف جاهزية المبنى والسرعات المتاحة والخطوة التالية قبل طلب التأسيس.',
    excerpt: 'دليل عملي لفحص تغطية سلام فايبر في المبنى ومعرفة دور الخريطة ولوحة الألياف والبوكسية والسرعات المتاحة قبل الاشتراك.',
    keywords: ['تغطية سلام فايبر','سلام فايبر تغطية','تغطية فايبر سلام'],
    image: '/blog/salam-fiber-coverage.svg',
    sourcePath: 'content/blog/salam-fiber-coverage.md',
    sourceDocument: 'https://docs.google.com/document/d/1Vn8jPE_BjzK22SRh27xGTJgWY8pckOL3ewYUKdfULX8/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-home-packages','salam-fiber-representative','salam-fiber-internet-service','salam-fiber-website-guide'],
  },
  {
    slug: 'salam-fiber-internet-service',
    title: 'ما هي خدمة انترنت سلام فايبر؟',
    seoTitle: 'انترنت سلام فايبر | نت سلام فايبر وعروض سلام انترنت',
    description: 'تعرف على خدمة انترنت سلام فايبر وطريقة وصول الألياف إلى المنزل، واستخدامات نت سلام فايبر والعوامل التي تؤثر في السرعة واختيار الاشتراك المناسب.',
    excerpt: 'شرح خدمة انترنت سلام فايبر وطريقة وصول الاتصال إلى الأجهزة والعوامل التي تؤثر في الأداء وكيفية اختيار الاشتراك المناسب للمنزل.',
    keywords: ['انترنت سلام فايبر','نت سلام فايبر','سلام نت فايبر','عروض سلام نت','عروض نت سلام','عروض سلام انترنت','عروض انترنت سلام'],
    image: '/blog/salam-fiber-internet-service.svg',
    sourcePath: 'content/blog/salam-fiber-internet-service.md',
    sourceDocument: 'https://docs.google.com/document/d/18gJiyhiQCJy_QVgp3lkHn5ycKuwKZTCOIyFvPwlfeDA/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-home-packages','salam-fiber-plans-guide','salam-fiber-modem-router','salam-fiber-coverage'],
  },
  {
    slug: 'salam-fiber-modem-router',
    title: 'ما هو مودم سلام فايبر؟',
    seoTitle: 'مودم سلام فايبر | راوتر سلام فايبر والإعدادات وحل المشاكل',
    description: 'دليل مودم سلام فايبر وراوتر سلام فايبر: التشغيل، مؤشرات اللمبات، الدخول إلى الإعدادات، تغيير اسم الشبكة وكلمة المرور والتعامل مع مشكلات الاتصال.',
    excerpt: 'دليل تشغيل مودم سلام فايبر وراوتر سلام فايبر وفهم مؤشرات الجهاز وتغيير إعدادات الواي فاي والتعامل مع مشكلات الاتصال الشائعة.',
    keywords: ['مودم سلام فايبر','راوتر سلام فايبر'],
    image: '/blog/salam-fiber-modem-router.svg',
    sourcePath: 'content/blog/salam-fiber-modem-router.md',
    sourceDocument: 'https://docs.google.com/document/d/1E8GphIhilNnpNPkkxbRZvEBJW0LfarPPDduC_BZ2TBo/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-internet-service','salam-fiber-website-guide','salam-fiber-coverage','salam-fiber-home-packages'],
  },
  {
    slug: 'salam-fiber-website-guide',
    title: 'كيف تستخدم موقع سلام فايبر لمعرفة الخدمة المناسبة؟',
    seoTitle: 'موقع سلام فايبر | التغطية والباقات والخدمة الذاتية',
    description: 'تعرف على كيفية استخدام موقع سلام فايبر للوصول إلى خدمات الفايبر والباقات وفحص التغطية والدعم وبوابة الخدمة الذاتية واختيار القسم المناسب لاحتياجك.',
    excerpt: 'دليل استخدام موقع سلام فايبر لمعرفة الباقات وفحص تغطية المنزل وتقديم الطلب والتمييز بين صفحات الخدمة وبوابة المشتركين.',
    keywords: ['موقع سلام فايبر'],
    image: '/blog/salam-fiber-website-guide.svg',
    sourcePath: 'content/blog/salam-fiber-website-guide.md',
    sourceDocument: 'https://docs.google.com/document/d/1AreYZXXKEJk8TC8AAojcm01pFNQI6pHzmownV0C4njI/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-coverage','salam-fiber-internet-service','salam-fiber-number-payment','salam-fiber-representative'],
  },
  {
    slug: 'salam-sim-offers',
    title: 'عروض شريحة سلام',
    seoTitle: 'عروض شريحة سلام | عروض شرائح سلام وشريحة سلام 85 ريال',
    description: 'تعرف على عروض شريحة سلام مسبقة الدفع وعروض شرائح سلام للمكالمات المحلية والدولية والبيانات، بما فيها عروض شريحة سلام 85 ريال.',
    excerpt: 'مقارنة عروض شريحة سلام سولو وفليكس وشرائح البيانات مع الأسعار شاملة الضريبة ومدة الصلاحية لمساعدتك على اختيار العرض المناسب.',
    keywords: ['عروض شريحة سلام','عروض شريحه سلام','عروض شرائح سلام','عروض شريحة سلام 85 ريال'],
    image: '/blog/salam-sim-offers.svg',
    sourcePath: 'content/blog/salam-sim-offers.md',
    sourceDocument: 'https://docs.google.com/document/d/1oCs6JKAuH9nktdXVDhV-iZlpA3Jgztxik3K29zYQCwM/edit?usp=sharing',
    relatedSlugs: ['salam-fiber-offers','salam-fiber-website-guide','salam-fiber-number-payment','salam-fiber-representative'],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
