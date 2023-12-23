const fs = require('fs');

const tmplFilePath = 'chart.tmpl';
const htmlFilePath = 'chart.html';
const jsonFilePath = 'data.json';

// Read HTML and JSON files
const htmlContent = fs.readFileSync(tmplFilePath, 'utf8');
const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

// Replace placeholder with JSON data
const updatedHtmlContent = htmlContent.replace('// JSON_PLACEHOLDER',
`var json = ${jsonData}`);

// Write the updated HTML content back to the file
fs.writeFileSync(htmlFilePath, updatedHtmlContent);
