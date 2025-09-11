const express = require('express');
const app=express()
const dotenv = require('dotenv');
const connectDb = require('./config/db')
const userRoutes = require("./routes/userRoutes");
const cors = require('cors')

dotenv.config()
app.use(express.json())
connectDb();
app.use(cors())

app.use("/api/users", userRoutes);

app.listen(process.env.PORT,()=>{
    console.log("server created")
})