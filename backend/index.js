const express = require('express');
const db = require('./config/database');
const app = express();
const userRoute = require('./routes/userRoute');
const cookieParser = require('cookie-parser');
const cors= require('cors')

require('dotenv').config();

const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use('/api',userRoute);


app.listen(PORT,()=>{
    console.log(`server connected on ${PORT}`)
})

app.get('/',(req ,res)=>{
    res.send("hello world")
})

db();

