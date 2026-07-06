const fs = require('fs');

let content = fs.readFileSync('data/blogs.ts', 'utf8');

const newMeta = {
  19: {
    seoTitle: "عروض مندوب زين إنترنت 5G في الشفا",
    seoDescription: "احصل على أفضل تفاصيل وعروض موظف زين لتأسيس إنترنت منزلي 5G وألياف بصرية في حي الشفا بالرياض وباقات متنوعة."
  },
  20: {
    seoTitle: "عروض مندوب زين إنترنت 5G في السويدي",
    seoDescription: "تعرف على تفاصيل باقات وعروض موظف زين لتأسيس شبكة إنترنت منزلي 5G وألياف بصرية في حي السويدي والتوصيل المجاني."
  },
  22: {
    seoTitle: "عروض مندوب زين إنترنت 5G في العليا",
    seoDescription: "اكتشف أحدث تفاصيل وعروض موظف مبيعات زين لتأسيس إنترنت منزلي 5G وألياف بصرية في حي العليا بالرياض بأفضل الأسعار."
  },
  24: {
    seoTitle: "عروض مندوب زين إنترنت 5G في قرطبة",
    seoDescription: "نوفر لك تفاصيل وعروض ممثل زين لتأسيس إنترنت منزلي سريع 5G وألياف بصرية في حي قرطبة للاستمتاع بتصفح بلا حدود."
  },
  25: {
    seoTitle: "عروض مندوب زين إنترنت 5G في الروضة",
    seoDescription: "استمتع بأقوى تفاصيل وعروض موظف شركة زين لتأسيس إنترنت منزلي 5G وألياف بصرية في حي الروضة مع اشتراك فوري."
  },
  27: {
    seoTitle: "عروض مندوب زين إنترنت 5G في العزيزية",
    seoDescription: "إليك تفاصيل وعروض مندوب زين المعتمد لتأسيس إنترنت منزلي 5G وألياف بصرية في حي العزيزية بخدمات دعم فني متواصلة."
  }
};

// Simple replacement
// We know these blogs have:
// title: `عرض مندوب زين انترنت X`,
// seoTitle: `عرض مندوب زين انترنت X`,
// seoDescription: `تفاصيل وعروض موظف زين لتأسيس إنترنت منزلي 5G وألياف بصرية.`,

for (const id in newMeta) {
  const searchStr = `    id: ${id},\n    slug: '${id}',\n    title: \`عرض مندوب زين انترنت ${id}\`,\n    seoTitle: \`عرض مندوب زين انترنت ${id}\`,\n    seoDescription: \`تفاصيل وعروض موظف زين لتأسيس إنترنت منزلي 5G وألياف بصرية.\`,`;
  
  const replaceStr = `    id: ${id},\n    slug: '${id}',\n    title: \`${newMeta[id].seoTitle}\`,\n    seoTitle: \`${newMeta[id].seoTitle}\`,\n    seoDescription: \`${newMeta[id].seoDescription}\`,`;
  
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
  } else {
    // try regex
    const regex = new RegExp(`id: ${id},\\s+slug: '${id}',\\s+title: \\\`عرض مندوب زين انترنت ${id}\\\`,\\s+seoTitle: \\\`عرض مندوب زين انترنت ${id}\\\`,\\s+seoDescription: \\\`تفاصيل وعروض موظف زين لتأسيس إنترنت منزلي 5G وألياف بصرية.\\\`,`, 'm');
    content = content.replace(regex, `id: ${id},\n    slug: '${id}',\n    title: \`${newMeta[id].seoTitle}\`,\n    seoTitle: \`${newMeta[id].seoTitle}\`,\n    seoDescription: \`${newMeta[id].seoDescription}\`,`);
  }
}

fs.writeFileSync('data/blogs.ts', content);
console.log('Fixed meta descriptions');
