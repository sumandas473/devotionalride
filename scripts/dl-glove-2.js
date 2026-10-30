const https = require('https');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../public/category-test/gloves-putting-on.jpg');
const file = fs.createWriteStream(filePath);
https.get('https://images.unsplash.com/photo-1779791250933-a7f2d709ffc1?auto=format&fit=crop&w=600&q=80', (resp) => {
  resp.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved', fs.statSync(filePath).size, 'bytes');
  });
});

