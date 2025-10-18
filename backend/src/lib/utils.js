import jwt from "jsonwebtoken"
import {ENV} from "./env.js"
    
export const generateToken =(userId,res)=>{
    const token = jwt.sign({userId},ENV.JWT_SECRET,{
        expiresIn:"7d",
    })

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*100,//7 days
        httpOnly:true, // prevent xss attacks: cross site scripting
        sameSite: "strict", //csrf attacks
        secure: ENV.NODE_ENV =="developement" ? false : true,

    });
    return token;
}