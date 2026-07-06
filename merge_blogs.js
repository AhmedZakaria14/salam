const fs = require('fs');

// Read old blogs
const oldBlogs = JSON.parse(fs.readFileSync('old_blogs_parsed.json', 'utf8'));

// Read current blogs.ts
let blogsTs = fs.readFileSync('data/blogs.ts', 'utf8');

// We need to parse blogs.ts to extract the current array.
// It's a TS file, but we can do string manipulation.
// We'll replace the ids 1-7 with 101-107 in blogsTs.

for (let i = 7; i >= 1; i--) {
  blogsTs = blogsTs.replace(new RegExp(`id: ${i},`, 'g'), `id: ${i + 100},`);
  blogsTs = blogsTs.replace(new RegExp(`slug: '${i}'`, 'g'), `slug: '${i + 100}'`);
}

// Now we need to convert oldBlogs to the TS format
let oldBlogsGens = oldBlogs.map(b => {
  return `  {
    id: ${b.id},
    slug: '${b.slug}',
    title: \`${b.title.replace(/`/g, '\\`')}\`,
    seoTitle: \`${b.seoTitle.replace(/`/g, '\\`')}\`,
    seoDescription: \`${b.seoDescription.replace(/`/g, '\\`')}\`,
    seoKeywords: \`${b.seoKeywords.replace(/`/g, '\\`')}\`,
    image: '${b.image}',
    content: \`${b.content.replace(/`/g, '\\`')}\`,
    date: '${b.date}'
  }`;
}).join(',\n');

// Insert the old blogs into the array
const insertionPoint = blogsTs.indexOf('export const blogs: BlogPost[] = [\n') + 'export const blogs: BlogPost[] = [\n'.length;

blogsTs = blogsTs.slice(0, insertionPoint) + oldBlogsGens + ',\n' + blogsTs.slice(insertionPoint);

fs.writeFileSync('data/blogs.ts', blogsTs);
console.log('Merged');
