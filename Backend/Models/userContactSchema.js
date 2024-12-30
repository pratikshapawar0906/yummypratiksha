

const mongoose = require('mongoose');

const userContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true 
    },   
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    

})

const userContact=new mongoose.model("contact",userContactSchema)
module.exports=userContact;