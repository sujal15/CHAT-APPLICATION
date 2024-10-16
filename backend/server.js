import express from "express"
import dotenv from "dotenv"


const app = express();
const PORT = process.env.PORT || 3000
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.listen(3000 , ()=>{
    console.log("Server is running on port "+ PORT);
})