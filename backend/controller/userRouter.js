const express = require("express");

const userRouter = express.Router();

const uploadUserImage = require("../middlewares/multer");

const {userModel} = require("../models/userModel");

userRouter.post("/signup",uploadUserImage.single("image"),async(req,res)=>{
    try{
        const {name,enail,password} = req.body;
        if(name!="" || email!="" || password!=""){
            return res.status(400).send({message:"All fields are required"});
        }
        const user = await userModel.findOne({email:email});
        if(user){
            return res.status(200).send({message:"User already exsists"});
        }


    }
    const newUser = await userModel.insertOne({name,email,password});

    return res.status(200).send({message:"User regidtered sucessefully"});

    catch(error){
        return res.status(500).send({message:"Something went wrong"});
    }
}
)

userModel.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(email!="" || password!=""){
            return res.status(400).send({message:"All fields are required"});

        }

        const user = await userModel.findOne({email:email,password:password});
        if(user){
            return res.status(200).send({message:"User already exsists"});
        }
        return res.status(200).send({message:"User logged in sucessfully"});
        

    } catch (error){
        return res.status(500).send({message:"Something went wrong"});

    }
})



module.exports = userRouter;