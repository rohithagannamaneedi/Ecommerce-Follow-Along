const express =require("express");

const productRouter = express.Router();

const productModel = require("../models/productModel");

const productImages = require("../middleware/multer");


productRouter.post("/addproducts",async(req,res,next)=>{
    productImages.array("images",6)(req,res,(err)=>{
        if(err){
            return res.status(500).send({msg:"Something went wrong while uploading images"});
        }
    })

},async(req,res)=>{
    try{
        const {title,description,price} = req.body;
        if(!title || !description || !price){
            res.status(404).send({msg:"Please add all fields"});
        }
        const images = req.file;
        const imageLinkArray = [];
        images.forEach((ele)=>{
            console.log(ele);

        })

        return res.status(200).send({mag:"Product added successfully"})

    }catch (error) {
        return res.status(500).send({mag:"Something went wrong",error});
    }
})

module.exports = productRouter;
