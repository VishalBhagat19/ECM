const { hashPassword, comparePassword } = require('../helpers/authhelper')
const userModel=require('../models/userModel')
const JWT=require('jsonwebtoken')

class RegisterController{
    static register=async(req,res)=>{
        try{
            const {name,email,password,phone,address,question}=req.body
            if(!name){
                return res.send({message:'Name is required'})
            }
            if(!email){
                return res.send({message:'email is required'})
            }
            if(!password){
                return res.send({message:'password is required'})
            }
            if(!phone){
                return res.send({message:'phone is required'})
            }
            if(!address){
                return res.send({message:'address is required'})
            }
            if(!question){
                return res.send({message:'question is required'})
            }
            //check user
            const existinguser=await userModel.findOne({email})
            if(existinguser){
                return res.status(200).send({
                    success:false,
                    message:'Already register Please login'
                })
            }
            //register user
            const hashedPassword=await hashPassword(password)
            const user=await new userModel({name,email,phone,address,question,password:hashedPassword}).save()
            res.status(201).send({
                success:true,
                message:'user register successfullly',
                user
            })
        }catch(error){
            console.log(error);
            res.status(500).send({
                success:false,
                message:'error in registration',
                error
            })
        }
    }
    
    static login=async(req,res)=>{
        try {
            const{email,password}=req.body
            if(!email || !password){
                return res.status(404).send({
                    success:false,
                    message:'Invalid email or password'
                })    
            }
            //check user
            const user=await userModel.findOne({email})
            if(!user){
                return res.status(404).send({
                    success:false,
                    message:'Email is not registered'
                })
            }
            const match=await comparePassword(password,user.password)
            if(!match){
                return res.status(200).send({
                    success:false,
                    message:'Invalid password'
                })
            }
            //token
            const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,
                {expiresIn:"7d"})
            res.status(200).send({
                success:true,
                message:"login successfully",
                user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    phone:user.phone,
                    address:user.address,
                    role:user.role
                },
                token
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success:false,
                message:'error in login',
                error
            })
        }
    }
    static testmethod=async(req,res)=>{
        try {
            res.send('protected routes')
        } catch (error) {
            console.log(error);
            res.send({error})
        }
    }
    static forgot=async(req,res)=>{
        try {
            const {email,question,newPassword}=req.body
            if(!email){
                res.status(400).send({message:'Email is requires'})
            }
            if(!question){
                res.status(400).send({message:'question is requires'})
            }
            if(!newPassword){
                res.status(400).send({message:'newPassword is requires'})
            }
            //check email and question
            const user=await userModel.findOne({email,question})
            if(!user){
                res.status(404).send({
                    success:false,
                    message:'wrong Email or question'
                })
            }
            const hashed=await hashPassword(newPassword)
            await userModel.findByIdAndUpdate(user._id,{password:hashed})
            res.status(200).send({
                success:true,
                message:'Password Reset Successfully!!'
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success:false,
                message:'something went wrong',
                error
            })
        }
    }



    
}

module.exports=RegisterController