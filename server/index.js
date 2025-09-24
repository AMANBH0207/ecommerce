const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app=express()
const connectDb = require('./config/db')
const userRoutes = require("./routes/userRoutes");
const cors = require('cors')
const adminRoutes = require('./routes/adminRoutes')
const bannerRoutes = require('./routes/bannerRoutes');

app.use(express.json())
connectDb();
app.use(cors())

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/admin/banner', bannerRoutes);

app.listen(process.env.PORT,()=>{
    console.log("server created")
})