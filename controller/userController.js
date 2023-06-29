import {User} from "../models/User.js"

export const getAllUsers = async(req,res)=>{
    const users = await User.find({});
    return res.json(users);
}

export const registerUser = async(req,res)=>{
    const {name,email}=req.body;
    const user = await User.findOne({name});
    if(user){
        return res.json({message:"User already registered"});
    }
    await User.create({name,email});
    return res.status(201).json({success:true,message:"User created successfully"});

}

export const getUser = async(req,res)=>{
    const {id} = req.params;
    const user = await User.findOne({_id:id});
    if(!user){
        return res.json({message:"User not found"});
    }
    return res.json({user});
}

export const updateUser = async(req,res)=>{
    const {id} = req.params;
    const update = req.body;
    const updateUser = await User.findOneAndUpdate({_id:id},update,{new:true});
    return res.json({updateUser,message:"User updated successfully"});
}

export const deleteUser = async(req,res)=>{
    const {id} = req.params;
    await User.deleteOne({_id:id});
    return res.json({message:"User deleted successfully"});
}