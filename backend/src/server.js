// const express = require('express')
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.routes.js"
import path from "path"
import { connectDB } from "./lib/db.js"
import {ENV} from "./lib/env.js"



const app = express();
app.use(express.json())//req.body
app.use(cookieParser())
const __dirname = path.resolve();
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
const PORT =ENV.PORT|| 3000;


//make ready for deplayment
if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",(_,res)=> {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}
app.listen(PORT,() => {
    console.log("Server running on this port: 3000");
    connectDB();
});

