const { Client } = require('pg');
const client = new Client({
    host: '127.0.0.1',
    port: 5432,
    user: 'admin',
    password: 'admin',
    database: 'postgres',
});

client.connect()

module.exports = client