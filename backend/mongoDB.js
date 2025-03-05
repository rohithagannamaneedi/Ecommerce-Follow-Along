const mongoose = require("mongoose");

async function connect (){
    try{
        await mongoose.connect("mongodb+srv://rohithagannamaneedi:1watch21@cluster0.bdmsx.mongodb.net/")
    } catch(error){
        console.log("Mongo db error",error);
    }
}

module.exports = connect;
