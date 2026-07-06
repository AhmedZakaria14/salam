const fs = require('fs');
let c = fs.readFileSync('export/generate.js', 'utf8');
c = c.replace(/\\\$\{/g, '${');
fs.writeFileSync('export/generate.js', c);
