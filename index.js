const fs = require('fs');
const thereIsDotEnv = fs.existsSync('.env')
if ( thereIsDotEnv ) require('dotenv').load()

const db = require('./server/db');
const app = require('./server/app');

const PORT = process.env.PORT || 3000;
const dbURI = process.env.URL_DB

db.open(dbURI);
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}...`));