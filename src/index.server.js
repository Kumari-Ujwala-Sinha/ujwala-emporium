const express = require("express")
const env = require ("dotenv")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const userRoutes = require('./routes/user')

env.config()

mongoose.connect('mongodb://localhost:27017/mern-ecommercefresh',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log("Database connected")
})

app.use(bodyParser());

app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})