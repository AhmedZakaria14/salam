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
    relatedSlugs: ['salam-fiber-plans-guide','salam-fiber-offers','salam-fiber-representative'],
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
    relatedSlugs: ['salam-fiber-plans-guide','salam-fiber-home-packages','salam-fiber-representative'],
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
    relatedSlugs: ['salam-fiber-offers','salam-fiber-home-packages','salam-fiber-number-payment'],
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
    relatedSlugs: ['salam-fiber-home-packages','salam-fiber-offers','salam-fiber-number-payment'],
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
    relatedSlugs: ['salam-fiber-representative','salam-fiber-home-packages','salam-fiber-plans-guide'],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
