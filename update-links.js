const fs = require('fs');
const path = require('path');

function updateLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content
    .replace(/\]\(\/docs\//g, '](/')
    .replace(/\]\(CODE_OF_CONDUCT\.md\)/g, '](/CODE_OF_CONDUCT)');
  fs.writeFileSync(filePath, updatedContent);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.md')) {
      console.log(`Processing ${filePath}`);
      updateLinks(filePath);
    }
  });
}

processDirectory('docs'); 