const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');

const uri = process.env.MONGO_URL;

async function checkDB() {
  if (!uri) {
    console.error('MONGO_URL not set in backend/.env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    const db = mongoose.connection.db;

    const collections = [
      { name: 'holdings' },
      { name: 'positions' },
      { name: 'orders' },
    ];

    for (const c of collections) {
      const exists = await db.listCollections({ name: c.name }).hasNext();
      if (!exists) {
        console.log(`${c.name}: collection not found`);
        continue;
      }

      const col = db.collection(c.name);
      const count = await col.countDocuments();
      const sample = await col.findOne();
      console.log(`${c.name}: count = ${count}`);
      if (sample) console.log(` sample doc:`, sample);
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error('DB check failed:', err);
    process.exit(1);
  }
}

checkDB();
