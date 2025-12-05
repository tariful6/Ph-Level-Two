import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUserController = async(req:Request, res:Response)=>{
    try {
       const result = await userServices.createUserIntoDB(req.body)

       return  res.status(201).json({success : true, message : "user creaed", data : result.rows[0]})
    } catch (error:any) {
       return res.status(500).json({success : false, message : error.message})
    }
}

const getAllUserController = async(req:Request, res:Response)=>{
    try {
       const result = await userServices.getUserIntoDB()
       return  res.status(201).json({success : true, message : "all users", data : result.rows})
    } catch (error:any) {
       return res.status(500).json({success : false, message : error.message})
    }
}

const getSingleUserController = async(req:Request, res:Response)=>{
    try {
      const email = req?.user!.email;
       const result = await userServices.getSingleUserIntoDB(email)
       return  res.status(201).json({success : true, message : "all users", data : result.rows})
    } catch (error:any) {
       return res.status(500).json({success : false, message : error.message})
    }
}

export const userController = {
    createUserController,
    getAllUserController,
    getSingleUserController
}