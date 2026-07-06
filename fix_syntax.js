const fs = require('fs');

const oldBlogs = JSON.parse(fs.readFileSync('old_blogs_parsed.json', 'utf8'));

let currentBlogsContent = fs.readFileSync('data/blogs.ts', 'utf8');

// The original file probably started with:
// export interface BlogPost { ... }
// export const blogPosts: BlogPost[] = [ ... ]

// Let's grab the `export const blogPosts: BlogPost[] = [` until the end.
const match = currentBlogsContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);

let existingBlogsStr = match ? match[1] : '';

if (!existingBlogsStr) {
  const match2 = currentBlogsContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*)/);
  existingBlogsStr = match2 ? match2[1] : '';
}

let oldBlogsGens = oldBlogs.map(b => {
  return `  {
    id: ${b.id},
    slug: '${b.slug}',
    title: \`${b.title.replace(/`/g, '\\`')}\`,
    seoTitle: \`${b.seoTitle.replace(/`/g, '\\`')}\`,
    seoDescription: \`${b.seoDescription.replace(/`/g, '\\`')}\`,
    keywords: [${b.seoKeywords.split(',').map(k => `'${k.trim().replace(/'/g, "\\'")}'`).join(', ')}],
    imageUrl: '${b.image}',
    content: \`${b.content.replace(/`/g, '\\`')}\`,
    date: '${b.date}'
  }`;
}).join(',\n');

const newFileContent = `
export interface BlogPost {
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
${oldBlogsGens},
${existingBlogsStr}
`;

fs.writeFileSync('data/blogs.ts', newFileContent);
console.log('Fixed');
