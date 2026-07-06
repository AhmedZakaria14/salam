const fs = require('fs');
let content = fs.readFileSync('data/blogs.ts', 'utf8');
content = content.replace(/\\`/g, '`');
fs.writeFileSync('data/blogs.ts', content);
