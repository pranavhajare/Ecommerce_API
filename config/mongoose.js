const mongoose = require('mongoose');

require('dotenv').config();

// connecting mongoose to its default server and ecommerceDB
mongoose.connect(process.env.connectionString, {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database');
});

module.exports = db;