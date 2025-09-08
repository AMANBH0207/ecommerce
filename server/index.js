const express = require('express');
const app=express()
const dotenv = require('dotenv');
const connectDb = require('./config/db')
const userRoutes = require("./routes/userRoutes");

dotenv.config()
app.use(express.json())
connectDb();




app.use("/api/users", userRoutes);

app.listen(process.env.PORT,()=>{
    console.log("server created")
})