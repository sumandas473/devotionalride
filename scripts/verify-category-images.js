const https = require('https');

const candidateImages = {
  OFFROAD: [
    'https://images.unsplash.com/photo-1542550546-88afdd84b64f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1625677797917-69c5a4d2f379?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592209944467-c6b455648164?auto=format&fit=crop&w=1200&q=80'
  ],
  GLOVES: [
    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1673585115517-6be6af5d9871?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=1200&q=80'
  ],
  JACKETS: [
    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80'
  ],
  RIDING_PANTS: [
    'https://images.unsplash.com/photo-1591216101754-8bad19249658?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1000&q=80'
  ],
  HELMETS_OR_BOOTS: [
    'https://images.unsplash.com/photo-1590506995460-d0d9892b54da?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1575396565848-e8031f12ce2a?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1530025769859-16a85d782882?auto=format&fit=crop&w=1000&q=80'
  ],
  LUGGAGE: [
    'https://images.unsplash.com/photo-1615074639137-c895a6a6789b?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1785595479925-bc3171353938?auto=format&fit=crop&w=1000&q=80'
  ],
  ACCESSORIES: [
    'https://images.unsplash.com/photo-1666864027466-42873657b486?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1752774941054-ce4c4c6fe032?auto=format&fit=crop&w=1000&q=80'
  ]
};

async function testAll() {
  for (const [cat, urls] of Object.entries(candidateImages)) {
    console.log(`Checking category ${cat}:`);
    for (const url of urls) {
      await new Promise((res) => {
        https.get(url, (r) => {
          console.log(`  [${r.statusCode}] ${r.headers['content-type']} : ${url.substring(0, 60)}...`);
          res();
        }).on('error', (e) => {
          console.log(`  [ERR] ${e.message}`);
          res();
        });
      });
    }
  }
}

testAll();

