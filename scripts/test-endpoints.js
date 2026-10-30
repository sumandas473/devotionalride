const http = require('http');

const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/jackets',
  'http://localhost:3000/gloves',
  'http://localhost:3000/products/advento-pro',
  'http://localhost:3000/products/tornado-pro-4-jacket',
  'http://localhost:3000/products/tornado-pro-4-jacket-all-weather-mesh',
  'http://localhost:3000/products/stealth-evo-touring-jacket-asphalt-gray',
  'http://localhost:3000/products/storm-shield-extreme-adventure-jacket',
  'http://localhost:3000/products/air-gt-2-gloves',
  'http://localhost:3000/products/air-gt-2-gloves-all-black',
  'http://localhost:3000/advento-pro',
  'http://localhost:3000/assets/logo/devotional-ride-logo.jpeg',
  'http://localhost:3000/assets/jackets/jacket-1.png'
];

async function check() {
  let allPassed = true;
  for (const u of urls) {
    await new Promise((res) => {
      http.get(u, (response) => {
        console.log(u, '=>', response.statusCode);
        if (response.statusCode !== 200) allPassed = false;
        res();
      }).on('error', (err) => {
        console.error(u, '=> error:', err.message);
        allPassed = false;
        res();
      });
    });
  }
  if (!allPassed) {
    process.exit(1);
  } else {
    console.log('ALL ENDPOINTS RETURNED HTTP 200 OK!');
  }
}

check();
