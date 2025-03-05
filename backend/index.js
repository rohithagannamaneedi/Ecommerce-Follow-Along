const express = require("express");

const app = express();
const connect = require("./mongoDB");
const userRouter=require("./controller/userRouter");
 
app.get("/",(req,res)=>{
    try {
        res.status(200).send({mgs:"This is e-commerce code along backend"});

        



    } catch (error) {
        res.status(500).send({message:"error occured"});
    }
})

app.use("/user",userRouter)

app.listen(8000,async()=>{
    try {
        await connect();
        console.log("Server connected sucessefully");
    } 
    catch (error) {
        console.log("Server not connected",error)
    }
})


     