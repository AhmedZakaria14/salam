const fs = require('fs');

const OPERATOR = "زين";
const PHONE = "0596620358";
const BRAND = "زين";
const DOMAIN = "xn-----ctdcm0aqck5plajre8a.com";
const PRICE_500 = "299 ريال";
const PRICE_200 = "239 ريال";
const DATE_IN_ARABIC = "28 أبريل 2026";

const articles = [
  { id: 1, title: "موظف 5G زين الرياض", template: "A", city: "الرياض", hood: "الرياض" },
  { id: 2, title: "خدمات موظف 5G فى الربيع", template: "A", city: "الرياض", hood: "الربيع" },
  { id: 3, title: "عروض ألياف بصرية فى الصحافة", template: "B", hood: "الصحافة" },
  { id: 4, title: "أسعار 5G زين 2026", template: "C" },
  { id: 5, title: "موظف تأسيس وتركيب 5G زين الرياض", template: "A", city: "الرياض", hood: "الرياض" },
  { id: 6, title: "موظف ألياف زين النرجس", template: "A", city: "الرياض", hood: "النرجس" },
  { id: 7, title: "موظف ألياف زين الياسمين", template: "A", city: "الرياض", hood: "الياسمين" },
  { id: 8, title: "موظف ألياف زين الملقا", template: "A", city: "الرياض", hood: "الملقا" },
  { id: 9, title: "موظف ألياف زين السعادة", template: "A", city: "الرياض", hood: "السعادة" },
  { id: 10, title: "موظف ألياف زين القيروان", template: "A", city: "الرياض", hood: "القيروان" },
  { id: 11, title: "موظف ألياف زين الحزم", template: "A", city: "الرياض", hood: "الحزم" },
  { id: 12, title: "موظف ألياف زين النهضة", template: "A", city: "الرياض", hood: "النهضة" },
  { id: 13, title: "عروض ألياف بصرية فى النسيم الغربي", template: "B", hood: "النسيم الغربي" },
  { id: 14, title: "عروض ألياف بصرية فى ظهرات لبن", template: "B", hood: "ظهرات لبن" },
  { id: 15, title: "عروض ألياف بصرية فى طويق", template: "B", hood: "طويق" },
  { id: 16, title: "عروض ألياف بصرية فى العريجاء", template: "B", hood: "العريجاء" },
  { id: 17, title: "عروض ألياف بصرية فى ظهرات نمار", template: "B", hood: "ظهرات نمار" },
  { id: 18, title: "عروض ألياف بصرية فى البديعة", template: "B", hood: "البديعة" },
  { id: 21, title: "عروض ألياف بصرية فى عنيزة", template: "B", hood: "عنيزة" },
  { id: 23, title: "عروض ألياف بصرية فى الزلفي", template: "B", hood: "الزلفي" },
  { id: 26, title: "عروض ألياف بصرية فى النسيم الشرقي", template: "B", hood: "النسيم الشرقي" }
];

function replaceTags(text, data) {
  let res = text;
  res = res.replace(/\[OPERATOR\]/g, OPERATOR);
  res = res.replace(/\[PHONE\]/g, PHONE);
  res = res.replace(/\[MY_PHONE\]/g, PHONE);
  res = res.replace(/\[BRAND\]/g, BRAND);
  if(data && data.city) res = res.replace(/\[CITY\]/g, data.city);
  if(data && data.hood) res = res.replace(/\[NEIGHBORHOOD\]/g, data.hood);
  res = res.replace(/\[MY_PRICE_500\]/g, PRICE_500);
  res = res.replace(/\[MY_PRICE_200\]/g, PRICE_200);
  return res;
}

const templateA = `<h1>موظف 5G [OPERATOR] [NEIGHBORHOOD]</h1>\n\n<p>[CITY] تغطية 5G [BRAND] [PHONE] ممثلو شركة الدليل السعودي [OPERATOR] تعتبر الشركة الرائدة في مجال الاتصالات على مستوى منطقة الخليج والمملكة العربية السعودية وصاحبة العروض والسرعات الممتازة في 5G بـ[CITY] وغيرها من مدن المملكة.</p>\n\n<p>بالإضافة إلى كل المزايا التي ذكرناها عن تصنيعنا لشبكات 5G من خلال موظف [OPERATOR] Fiber Optics، هناك ميزة أخرى تتمتع بها هذه الشبكة وهي العرض من خلال شركة [OPERATOR] السعودية لباقات الإنترنت المتنوعة التي تناسب جميع العملاء سواء الأفراد أو رجال الأعمال أو الشركات والمؤسسات المختلفة.</p>\n\n<p>يمكنك التعرف على العروض الدائمة المتوفرة من خلال الشركة من خلال تحميل تطبيق [OPERATOR] السعودية على جهازك المحمول والذي يمكن تحميله على جهازك الأندرويد أو جهاز الأيفون والاستفادة من الميزات العديدة التي يمكننا الحصول عليها من هذا التطبيق مثل معرفة العروض المتنوعة للشركة بالإضافة إلى معرفة الاستهلاك الشهري ومدة تجديد الاشتراك وغيرها من البيانات الهامة.</p>\n\n<h3>كيفية طلب 5G</h3>\n<p>يتم طلب خدمة 5G المقدمة من شركة [OPERATOR] للألياف البصرية من خلال موظفي الشركة. هناك عدة طرق قانونية للتواصل مع ممثلي [OPERATOR] فايبر أوبتيك بـ[CITY]، مثل التواصل المباشر على الموقع الإلكتروني الخاص بالشركة أو من خلال الإعلانات المنشورة في الشوارع والأسوار، أو من خلال المقابلات المباشرة مع الموظف شخصيًا في المولات والمحلات التجارية. نحرص على التواصل شخصياً وتقديم كتيبات بالعروض والأسعار والسرعات الجديدة والمحدثة.</p>\n\n<p>التواصل مع ممثلي شركة [OPERATOR] [CITY] للألياف البصرية يتم من خلال التواصل المباشر أي لقاءات شخصية وجهاً لوجه مع الممثلين في الشوارع أو في المحلات التجارية والمولات.</p>\n\n<h3>ما هى اسعار الالياف البصرية [OPERATOR]؟</h3>\n<p>اسأل ممثل الألياف الذي يقدم خدمة [OPERATOR] فايبر الأسئلة الشائعة حول أسعار [OPERATOR] فايبر. هنا، يقوم ممثل [OPERATOR] فايبر بعرض باقات الأسعار التي تقدمها [OPERATOR]، سواء كانت شهرية، ربع سنوية، نصف سنوية أو سنوية، ليختار منها العميل. اختر الباقة أو السعر الأنسب من بين جميع العروض المقدمة والمتاحة.</p>\n\n<h3>رقم موظف 5G بـ[CITY]</h3>\n<p>يمكنك الاتصال مباشرة على هذا الرقم <span dir="ltr">[PHONE]</span> لتقديم الخدمات، لدينا موظفين خدمة مؤهلين يتميزون باللطف والصدق والأدب، ومن خلال هذه الأرقام يمكنك التواصل معهم على مدار الساعة للحصول على الخدمات.</p>\n\n<h3>[CITY] تغطية 5G [OPERATOR] [PHONE]</h3>\n<p>ولذلك قدمنا لكم أرقام هواتف ممثلي [OPERATOR] للألياف البصرية في [CITY] لتتمكنوا من التواصل معهم بسهولة والحصول على أفضل الخدمات وأفضل الأسعار للألياف البصرية في [CITY].</p>\n\n<h3>كلمات بحثية</h3>\n<p>فايبر انترنت [OPERATOR]، طلب توصيل الياف [OPERATOR]، تقديم طلب 5G [OPERATOR]، طلب تغطية 5G، طريقة طلب فايبر [OPERATOR]، الياف [OPERATOR] تغطية، كيف اطلب الياف، طريقة تركيب 5G [OPERATOR]، موظف ألياف بصرية [OPERATOR]، موظف [OPERATOR] [CITY]، 5G [OPERATOR]، الياف [OPERATOR]، تركيب الياف، فايبر [OPERATOR]، طلب تأسيس 5G [OPERATOR]، fiber [OPERATOR]، موظف الياف [OPERATOR]، الموظف ألياف بصرية [OPERATOR]، موظف 5G</p>`;

const templateB = `<h1>عروض ألياف بصرية فى [NEIGHBORHOOD]</h1>\n\n<p>إن عروض 5G التي تقدمها [OPERATOR] لعملائها بـ[NEIGHBORHOOD] كثيرة جدا، فلك أن تختار ما يناسب استخداماتك اليومية والشهرية، فهناك عروض تناسب الأشخاص العاديين والعروض الخاصة بالبزنس وعروض الشركات الكبيرة ذات الاستخدامات المحدودة واللامحدودة. والعروض جميعها تتميز بالمرونة والتنوع لتناسب جميع الفئات العمرية والمجتمعية.</p>\n\n<h3>طريقة الاشتراك في الالياف البصرية [OPERATOR] بـ[NEIGHBORHOOD]</h3>\n<p>كل ما يجول بخاطرك عزيزي العميل حول كيفية الاشتراك في خدمة 5G بـ[NEIGHBORHOOD] له إجابة. الاتصال بأحد موظفينا حيث يوفر لكم موقعنا أرقام هواتف موظفي كل الخدمات بكافة أرجاء المملكة، والاستفسار ومعرفة نوع الخدمة والباقة التي تريدها، سواء محدودة أو لامحدودة. بعدها سيتوجه الموظف لإتمام إجراءات التعاقد على الخدمة المختارة ودفع الرسوم المستحقة وتوصيل الخدمة لكم في سهولة ويسر.</p>\n\n<h3>طريقة تركيب الالياف البصرية [OPERATOR]</h3>\n<p>إن شركة [OPERATOR] لخدمة 5G بـ[NEIGHBORHOOD] توفر لعملائها أجود أنواع الكابلات المعدة خصيصاً لخدمات 5G التي تقاوم عوامل التعرية والعوامل المناخية من حرارة مرتفعة ورطوبة عالية من حيث القوة والمتانة، حيث يقوم الموظف بتوصيل الأسلاك ووضعها في أماكنها الصحيحة لضمان عدم انقطاع الخدمة عن عملائها طوال الوقت وبجودة منقطعة النظير.</p>\n\n<h3>أسعار 5G [OPERATOR] 2026</h3>\n<p>توفر شركة [OPERATOR] أرخص الأسعار للألياف البصرية بـ[NEIGHBORHOOD] لجذب أكبر عدد من المشتركين والعملاء، حيث تسعى [OPERATOR] لتكوين قاعدة عريضة من العملاء وجعلهم يثقون في خدماتها. لذلك تقدم أجود أنواع الخدمات بأرخص الأسعار ليس في [NEIGHBORHOOD] فحسب بل في كل أنحاء المملكة العربية السعودية.</p>\n\n<h3>ما هو سعر اشتراك الالياف البصرية [OPERATOR] فى [NEIGHBORHOOD]؟</h3>\n<p>بمجرد اتصالك بنا على رقم <span dir="ltr">[PHONE]</span> بـ[NEIGHBORHOOD] ستصبح بعدها على دراية بكافة العروض والأسعار المختلفة للألياف البصرية التي تلاءم الجميع.</p>\n\n<h3>الالياف البصرية [OPERATOR] التغطية [NEIGHBORHOOD]</h3>\n<p>إن تغطية [OPERATOR] للألياف البصرية بـ[NEIGHBORHOOD] لهي الأقوى والأسرع، حيث تسعى لتحسين خدماتها دوماً من خلال أحدث الأجهزة والكوادر البشرية المدربة بعناية وعلى أحدث النظم الحديثة والمسايرة للتطورات العالمية، لجعلك عزيزي العميل في الصدارة من حيث قوة الشبكات وسرعة الاستجابة وتوصيل الخدمة على الفور.</p>\n\n<h3>كلمات بحثية</h3>\n<p>عروض الياف بصرية [NEIGHBORHOOD]، فايبر [OPERATOR] [NEIGHBORHOOD]، تركيب الياف [NEIGHBORHOOD]، انترنت منزلي [NEIGHBORHOOD]، 5G [OPERATOR] [NEIGHBORHOOD]، اشتراك الياف بصرية [NEIGHBORHOOD]، سعر فايبر [OPERATOR] [NEIGHBORHOOD]، موظف 5G [NEIGHBORHOOD]، تغطية [OPERATOR] [NEIGHBORHOOD]، طريقة الاشتراك في فايبر [OPERATOR]</p>`;

const templateC = `<h1>أسعار 5G [OPERATOR] 2026</h1>\n\n<p>اسعار الالياف البصرية [OPERATOR] — كيفية الاشتراك في فايبر [OPERATOR]</p>\n\n<p>للحصول على إنترنت ثابت بدون تقطيع وذو سرعة فائقة تعادل سرعة الضوء، نتيجة نقل البيانات عبر ألياف مصنوعة من الزجاج عالي النقاوة على عكس الكابلات التقليدية المصنوعة من النحاس. ولأن شركة [OPERATOR] حريصة على تقديم الأفضل لعملائها فقد عملت على التوسع في تقديم هذه الخدمة حتى أصبحت تغطي معظم مناطق ومدن المملكة العربية السعودية.</p>\n\n<h3>اسعار الالياف البصرية [OPERATOR]</h3>\n<p>تختلف اسعار الالياف البصرية [OPERATOR] بحسب حجم الباقة ونظامها، حيث يمكن تقسيمها إلى:</p>\n<ul>\n  <li>باقات فايبر إنترنت [OPERATOR] المفوترة</li>\n  <li>باقات فايبر إنترنت [OPERATOR] المسبقة الدفع</li>\n</ul>\n\n<h3>كيفية الاشتراك في فايبر [OPERATOR]</h3>\n<p>يمكن الاشتراك في فايبر [OPERATOR] من خلال الاتصال بالرقم <span dir="ltr">[PHONE]</span>، أو من خلال اتباع الخطوات التالية:</p>\n<ul>\n  <li>اذهب إلى موقع شركة [OPERATOR]</li>\n  <li>انقر على تبويب فايبر</li>\n  <li>حدد الباقة التي ترغب بالاشتراك بها</li>\n  <li>انقر على الاشتراك</li>\n  <li>أدخل رقم الهوية الوطنية أو الإقامة</li>\n  <li>أدخل تاريخ الميلاد</li>\n  <li>أدخل رمز التحقق المرئي</li>\n  <li>أدخل المعلومات الخاصة باستمارة التقديم</li>\n  <li>انقر على تقديم الطلب</li>\n</ul>\n<p>بعد ذلك سيتم التواصل مع صاحب الطلب من قبل خدمة الدعم الفني للشركة لتأكيد الاشتراك.</p>\n\n<h3>باقة الالياف البصرية فايبر 500 [OPERATOR]</h3>\n<p>تعمل هذه الباقة بنظام 5G FTTH. السعر الشهري للاشتراك الجديد: [MY_PRICE_500]. تتيح هذه الباقة الحصول على إنترنت لا محدود طوال الشهر بسرعة تحميل 500 ميجابت وسرعة رفع تصل إلى 80 ميجابايت. يحصل المشتركون الجدد على مكالمات محلية مجانية وجهاز مودم مجاني.</p>\n\n<h3>باقة الالياف البصرية فايبر 200 [OPERATOR]</h3>\n<p>تعمل هذه الباقة بنظام 5G FTTH. السعر الشهري للاشتراك الجديد: [MY_PRICE_200]. تتيح هذه الباقة الحصول على إنترنت لا محدود طوال الشهر بسرعة تحميل 200 ميجابت وسرعة رفع تصل إلى 80 ميجابايت. يحصل المشتركون الجدد على مكالمات محلية مجانية وجهاز مودم مجاني.</p>\n\n<h3>كلمات بحثية</h3>\n<p>أسعار فايبر [OPERATOR] 2026، اسعار الالياف البصرية [OPERATOR]، باقات فايبر [OPERATOR]، سعر فايبر 200 [OPERATOR]، سعر فايبر 500 [OPERATOR]، كيفية الاشتراك في فايبر [OPERATOR]، فايبر انترنت [OPERATOR]، باقات الياف بصرية 2026، أسعار انترنت منزلي الرياض 2026</p>`;

const relatedLinksHTML = articles.map(a => {
  let t = replaceTags(a.title, a);
  return `  <li><a href="/${a.id}">${t}</a></li>`;
}).join('\\n');

const outputDir = process.cwd() + '/exported-articles';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

articles.forEach(article => {
  let contentTemplate = templateA;
  if(article.template === 'B') contentTemplate = templateB;
  if(article.template === 'C') contentTemplate = templateC;

  const bodyContent = replaceTags(contentTemplate, article);
  const articleTitle = replaceTags(article.title, article);
  let metaDesc = `تفاصيل وعروض ${articleTitle} لتأسيس إنترنت منزلي 5G وألياف بصرية. بادر بالطلب الآن.`;

  const phpFile = `<?php
$article_id = ${article.id};
$article_title = "${articleTitle}";
$meta_description = "${metaDesc}";
$canonical = "https://${DOMAIN}/${article.id}";
include('header.php');
?>

<article dir="rtl" lang="ar">
  <img src="/uploads/hero.jpg"
       alt="${articleTitle}"
       loading="lazy"
       width="800"
       height="450">
  <time>${DATE_IN_ARABIC}</time>

  ${bodyContent}

  <a href="tel:${PHONE}">
    <a href="https://wa.me/966596620358" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; justify-content:center; gap:10px; background-color:#25D366; color:white; font-weight:bold; font-size:1.5rem; text-decoration:none; padding:15px 30px; border-radius:50px; box-shadow:0 8px 20px rgba(37,211,102,0.4); margin-bottom:1rem; transition:all 0.3s;">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      <span dir="ltr">${PHONE}</span>
    </a>
  </a>

  <h3>قد يهمك أيضاً:</h3>
  <ul>
${relatedLinksHTML}
  </ul>

</article>

<?php include('footer.php'); ?>
`;

  fs.writeFileSync(`${outputDir}/${article.id}.php`, phpFile, 'utf8');
});
console.log("Files generated in " + outputDir);
