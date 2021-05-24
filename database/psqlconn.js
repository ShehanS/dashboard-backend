const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'shehan@123',
    port: 5432,
});

client.connect((error, client, done) =>{
    if(error) throw error;
});

module.exports = client;
