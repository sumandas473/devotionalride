const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/category-test');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const candidates = {
  'offroad-1.jpg': 'https://images.unsplash.com/photo-1542550546-88afdd84b64f?auto=format&fit=crop&w=400&q=80',
  'offroad-2.jpg': 'https://images.unsplash.com/photo-1625677797917-69c5a4d2f379?auto=format&fit=crop&w=400&q=80',
  'offroad-3.jpg': 'https://images.unsplash.com/photo-1509409347569-27f88c82131c?auto=format&fit=crop&w=400&q=80',
  'gloves-1.jpg': 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=400&q=80',
  'jackets-1.jpg': 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=400&q=80',
  'luggage-1.jpg': 'https://images.unsplash.com/photo-1615074639137-c895a6a6789b?auto=format&fit=crop&w=400&q=80',
  'helmet-1.jpg': 'https://images.unsplash.com/photo-1575396565848-e8031f12ce2a?auto=format&fit=crop&w=400&q=80',
  'accessory-1.jpg': 'https://images.unsplash.com/photo-1666864027466-42873657b486?auto=format&fit=crop&w=400&q=80'
};

async function download() {
  for (const [filename, url] of Object.entries(candidates)) {
    const filePath = path.join(dir, filename);
    const file = fs.createWriteStream(filePath);
    await new Promise((res) => {
      https.get(url, (resp) => {
        resp.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Saved', filename, fs.statSync(filePath).size, 'bytes');
          res();
        });
      }).on('error', (err) => {
        console.log('Error', filename, err.message);
        res();
      });
    });
  }
}

download();

