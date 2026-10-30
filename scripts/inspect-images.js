const https = require('https');

const imageIds = [
  '1542550546-88afdd84b64f',
  '1625677797917-69c5a4d2f379',
  '1592209944467-c6b455648164',
  '1673585115517-6be6af5d9871',
  '1485965120184-e220f721d03e',
  '1591216101754-8bad19249658',
  '1606907568152-58fcb0a0a4e5',
  '1575396565848-e8031f12ce2a',
  '1615074639137-c895a6a6789b',
  '1666864027466-42873657b486',
  '1752774941054-ce4c4c6fe032'
];

async function check() {
  for (const id of imageIds) {
    const url = `https://unsplash.com/photos/${id}`;
    await new Promise((res) => {
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (resp) => {
        let data = '';
        resp.on('data', chunk => { if (data.length < 50000) data += chunk; });
        resp.on('end', () => {
          const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
          const descMatch = data.match(/<meta property="og:description" content="([^"]+)"/i) || data.match(/<meta name="description" content="([^"]+)"/i);
          console.log(`ID: ${id}`);
          if (titleMatch) console.log(`  Title: ${titleMatch[1]}`);
          if (descMatch) console.log(`  Desc:  ${descMatch[1]}`);
          res();
        });
      }).on('error', err => {
        console.log(`ID ${id} error:`, err.message);
        res();
      });
    });
  }
}

check();

