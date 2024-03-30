require('dotenv').config();
const { USER, HOST, DATABASE, PASSWORD, PORT } = process.env;
const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "database-2.csltox5vsy0i.ap-northeast-2.rds.amazonaws.com",
    database: "postgres",
    password: "Bpd0yyHitbuTxmCcZCFI",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

module.exports = client