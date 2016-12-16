const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
const dbURI = process.env.URL_DB

db.on('error', (err)=>{
	console.log(`Mongoose connection error: ${err}`);
});

db.on('disconnected', ()=>{
	console.log(`Mongoose connection disconnected`);
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

db.on('connected', () => console.log(`Mongoose default connection open to ${dbURI}`));

module.exports = db;