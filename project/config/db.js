const mongoose = require('mongoose');

const connectToDb = async ()=>{
    // connection to database : by promises 
    mongoose.connect('mongodb+srv://satyaprakashpatel61:k4T5vyBbp0FL3Q9b@cluster0.onqqvow.mongodb.net/testdb')
    .then((conn)=>{
        console.log(`Database connected successfully : ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log('Db connection failed ',err);
        process.exit(1);
    })
};

module.exports = connectToDb;