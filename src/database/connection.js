const { Client } = require('pg');
const connectionURI = process.env.DATABASE_URL
const client = new Client({
   connectionString:connectionURI
});

client.connect()

module.exports = client