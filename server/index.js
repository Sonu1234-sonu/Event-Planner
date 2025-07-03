import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import { sample } from "./src/middlewares/authMiddleware.js";
import ConnecteDB from './src/config/db.js';
const app=express();
app.use(sample);
 app.use("/auth",AuthRouter);
app.get("/",(req,res)=>{
    res.json({message:"Server Connected"});
});
const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Server Started at",port);
});