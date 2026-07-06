const fs = require('fs');

let content = fs.readFileSync('data/blogs.ts', 'utf8');

// We need to extract the new articles.
// Since we have an array, we can use regex or AST.
// Actually, I can just load it by removing the export type and replacing export const with a module.exports.

// Remove interfaces and types
let scriptContent = content.replace(/export interface BlogPost[\s\S]*?}/, '');
scriptContent = scriptContent.replace('export const blogPosts: BlogPost[] =', 'module.exports =');
scriptContent = scriptContent.replace(/export /g, '');

fs.writeFileSync('temp_blogs.js', scriptContent);
