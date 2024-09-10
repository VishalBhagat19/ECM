const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  question:{
      type:String,
      required:true
  },
  role:{
    type:String,
    default:"user"
  }
},{timestamps:true})

const userModel=mongoose.model('user',userSchema)
module.exports=userModel