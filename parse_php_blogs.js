const fs = require('fs');
const path = require('path');

const articles = [];

for (let i = 1; i <= 7; i++) {
  const content = fs.readFileSync(`export/articles/${i}.php`, 'utf8');
  
  const id = i;
  const slug = i.toString();
  
  const titleMatch = content.match(/\$article_title = "(.*?)";/);
  const title = titleMatch ? titleMatch[1] : '';
  
  const descMatch = content.match(/\$meta_description = "(.*?)";/);
  const seoDescription = descMatch ? descMatch[1] : '';
  
  const kwMatch = content.match(/\$page_keywords = "(.*?)";/);
  const seoKeywords = kwMatch ? kwMatch[1] : '';
  
  const imgMatch = content.match(/\$page_image = "(.*?)";/);
  let image = imgMatch ? imgMatch[1] : '';
  if (!image) {
    const imgTagMatch = content.match(/<img src="(.*?)"/);
    image = imgTagMatch ? imgTagMatch[1] : '';
  }
  
  const h1Match = content.match(/<h1>(.*?)<\/h1>/);
  const h1 = h1Match ? h1Match[1] : title;
  
  // Extract content between <h1>...</h1> and <div class="related-articles">
  const contentStart = content.indexOf(`<h1>${h1}</h1>`) + `<h1>${h1}</h1>`.length;
  const contentEnd = content.indexOf('<div class="related-articles">');
  
  let htmlContent = '';
  if (contentStart > -1 && contentEnd > -1) {
    htmlContent = content.substring(contentStart, contentEnd).trim();
  }
  
  articles.push({
    id,
    slug,
    title,
    seoTitle: title,
    seoDescription,
    seoKeywords,
    image,
    content: htmlContent,
    date: '2026-04-28' // Based on the date in the php file
  });
}

fs.writeFileSync('old_blogs_parsed.json', JSON.stringify(articles, null, 2));
console.log('Done');
