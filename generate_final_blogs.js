const fs = require('fs');

const currentBlogs = require('./temp_blogs.js');

// Filter the NEW articles (which currently have IDs 101-107)
const newArticles = currentBlogs.filter(b => b.id >= 101 && b.id <= 107);

// Reset their IDs to 1-7
const restoredNewArticles = newArticles.map(b => {
  return {
    ...b,
    id: b.id - 100,
    slug: String(b.id - 100)
  };
});

// Now parse the OLD articles 8 to 27
const oldArticles = [];
for (let i = 8; i <= 27; i++) {
  const filePath = `export/articles/${i}.php`;
  let title = `عرض مندوب زين انترنت ${i}`;
  let seoDescription = `تفاصيل وعروض موظف زين لتأسيس إنترنت منزلي 5G وألياف بصرية.`;
  let seoKeywords = ['فايبر انترنت زين', 'طلب توصيل الياف زين', '5G زين'];
  let image = 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279248/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B4%D8%B1%D9%83%D8%A9_%D8%B2%D9%8A%D9%86_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6_nppqfj.png';
  let htmlContent = `<p>يمكنك الاتصال مباشرة لتقديم الخدمات، لدينا موظفين خدمة مؤهلين يتميزون باللطف والصدق والأدب.</p>`;
  let date = '2026-04-28';
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/\$article_title = "(.*?)";/);
    if (titleMatch) title = titleMatch[1];
    
    const descMatch = content.match(/\$meta_description = "(.*?)";/);
    if (descMatch) seoDescription = descMatch[1];
    
    const kwMatch = content.match(/\$page_keywords = "(.*?)";/);
    if (kwMatch) seoKeywords = kwMatch[1].split(',').map(k => k.trim());
    
    const imgMatch = content.match(/\$page_image = "(.*?)";/);
    if (imgMatch && imgMatch[1]) {
      image = imgMatch[1];
    } else {
      const imgTagMatch = content.match(/<img src="(.*?)"/);
      if (imgTagMatch) image = imgTagMatch[1];
    }
    
    const h1Match = content.match(/<h1>(.*?)<\/h1>/);
    const h1 = h1Match ? h1Match[1] : title;
    
    const contentStart = content.indexOf(`<h1>${h1}</h1>`);
    const contentEnd = content.indexOf('<div class="related-articles">');
    if (contentStart > -1 && contentEnd > -1) {
      htmlContent = content.substring(contentStart + `<h1>${h1}</h1>`.length, contentEnd).trim();
    }
  }
  
  oldArticles.push({
    id: i,
    slug: String(i),
    title: title,
    seoTitle: title,
    seoDescription: seoDescription,
    keywords: seoKeywords,
    imageUrl: image,
    content: htmlContent,
    date: date
  });
}

// Combine them
const allArticles = [...restoredNewArticles, ...oldArticles];

let fileOut = `export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  imageUrl: string;
  content?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  date?: string;
}

export const blogPosts: BlogPost[] = [
`;

allArticles.forEach(b => {
  fileOut += `  {
    id: ${b.id},
    slug: '${b.slug}',
    title: \`${b.title.replace(/`/g, '\\`')}\`,
    seoTitle: \`${(b.seoTitle || b.title).replace(/`/g, '\\`')}\`,
    seoDescription: \`${(b.seoDescription || '').replace(/`/g, '\\`')}\`,
    keywords: [${(b.keywords || []).map(k => `'${k.replace(/'/g, "\\'")}'`).join(', ')}],
    imageUrl: '${b.imageUrl || ''}',
    content: \`${(b.content || '').replace(/`/g, '\\`')}\`,
    date: '${b.date || ''}'
  },
`;
});

fileOut += `];
`;

fs.writeFileSync('data/blogs.ts', fileOut);
console.log('Final blogs.ts generated');
