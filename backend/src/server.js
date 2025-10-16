// const express = require('express')
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.routes.js"
import path from "path"
dotenv.config();


const app = express();
const __dirname = path.resolve();
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
const PORT =process.env.PORT|| 3000;


//make ready for deplayment
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",(_,res)=> {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}
app.listen(PORT,() => console.log("Server running on this port: 3000"));

