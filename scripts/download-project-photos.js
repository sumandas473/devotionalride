const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/category-test');

const projectPhotos = {
  'p-1558981403.jpg': 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80',
  'p-1558980664-a8.jpg': 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=400&q=80',
  'p-1558980664-3d.jpg': 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=400&q=80',
  'p-1558981420.jpg': 'https://images.unsplash.com/photo-1558981420-87aa92d001a1?auto=format&fit=crop&w=400&q=80',
  'p-1558981806.jpg': 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80',
  'p-1568772585.jpg': 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80'
};

async function run() {
  for (const [name, url] of Object.entries(projectPhotos)) {
    const filePath = path.join(dir, name);
    const file = fs.createWriteStream(filePath);
    await new Promise((res) => {
      https.get(url, (resp) => {
        resp.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Saved', name);
          res();
        });
      }).on('error', err => {
        console.log('Error', name, err.message);
        res();
      });
    });
  }
}

run();

