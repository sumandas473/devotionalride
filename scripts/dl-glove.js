const https = require('https');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../public/category-test/gloves-test-5698.jpg');
const file = fs.createWriteStream(filePath);
https.get('https://images.unsplash.com/photo-1569863151123-708666f1aa16?auto=format&fit=crop&w=600&q=80', (resp) => {
  resp.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved', fs.statSync(filePath).size, 'bytes');
  });
});

