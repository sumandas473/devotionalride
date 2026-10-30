const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/category-test');

// Let's test diverse candidate IDs for Jackets, Gloves, Pants
const candidates = [
  // Jackets
  { name: 'jacket-cand-1.jpg', url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80' },
  { name: 'jacket-cand-2.jpg', url: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=400&q=80' },
  { name: 'jacket-cand-3.jpg', url: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=400&q=80' },
  { name: 'jacket-cand-4.jpg', url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80' },
  
  // Gloves
  { name: 'gloves-cand-1.jpg', url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80' },
  { name: 'gloves-cand-2.jpg', url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=400&q=80' },
  { name: 'gloves-cand-3.jpg', url: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&w=400&q=80' },
  { name: 'gloves-cand-4.jpg', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80' },
  
  // Pants / Boots
  { name: 'pants-cand-1.jpg', url: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=400&q=80' },
  { name: 'pants-cand-2.jpg', url: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=400&q=80' },
  { name: 'pants-cand-3.jpg', url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=400&q=80' },
  { name: 'pants-cand-4.jpg', url: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=400&q=80' }
];

async function run() {
  for (const item of candidates) {
    const filePath = path.join(dir, item.name);
    const file = fs.createWriteStream(filePath);
    await new Promise((res) => {
      https.get(item.url, (resp) => {
        resp.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Saved', item.name, fs.statSync(filePath).size, 'bytes');
          res();
        });
      }).on('error', err => {
        console.log('Error', item.name, err.message);
        res();
      });
    });
  }
}

run();

