const mongoose = require('mongoose');

require('dotenv').config();

 const db =  ()=>{

    const DATABASE_URL = process.env.DATABASE_URL;


    mongoose.connect(DATABASE_URL)
    .then(()=>{
        console.log('Database connected')
    })
    .catch((error)=>{
        console.log("error")
    })

 }

 module.exports = db;