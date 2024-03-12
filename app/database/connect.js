const { MongoClient } = require('mongodb');

module.exports = async function connectDB() {
  try {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    const dbName = 'appointment';

    await client.connect();

    console.log('Connected successfully to database');

    const db = client.db(dbName);
  } catch (error) {
    console.log(`Database connection failed: ${error}`);

    await client.close();
  }

  return 'done.';
};
