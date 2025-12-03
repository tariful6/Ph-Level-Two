import { Request, Response } from "express";
import { userServices } from "./user.service";
import { pool } from "../../config/db";

const createUserControler = async (req:Request, res:Response) => {
  // const {name, email, password} = req.body;
  try {
    const result = await userServices.createUser(req.body) // from user services
    res.status(201).json({success : true, message : "Data insert successfully", data : result.rows[0]})
  } catch (error : any) {
    res.status(500).json({success : false, message : error.message})
  }
}


const getUserController = async(req:Request, res:Response) => {
   try {
    const result = await userServices.getUser() // from user services
     res.status(200).json({success : true, message : "Data get successfully", data : result.rows})
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
}

const getSingleUserController = async(req:Request, res:Response) => {
   try {
    const result = await userServices.getSingleUser(req.params.id as string);
    if(result.rows.length ===0){
      res.status(404).json({success : false, message : "User not found"})
    }else{
      res.status(200).json({success : true, message : "single user get successfully", data : result.rows[0]})
    }
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
}


const updateUserController = async(req:Request, res:Response) => {
   const {name, email} = req.body;
   try {
    const result = await userServices.updateUser(name, email, req.params.id!)
    if(result.rows.length === 0){
      res.status(404).json({success : false, message : "User not found"})
    }else{
      res.status(200).json({success : true, message : "user update successfully", data : result.rows[0]})
    }
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
}


const deleteUserController = async(req:Request, res:Response) => {
   try {
    const result = await userServices.deleteUser(req.params.id as string)
    if(result.rowCount === 0){
      res.status(404).json({success : false, message : "User not found"})
    }else{
      res.status(200).json({success : true, message : "single user delete successfully", data : result.rows})
    }
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
}

export const userControllers = {createUserControler, getUserController, getSingleUserController, updateUserController, deleteUserController}