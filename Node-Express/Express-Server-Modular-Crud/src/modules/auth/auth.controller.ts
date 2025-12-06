import { Request, Response } from "express"
import { authService } from "./auth.service"

const loginUser = async (req: Request, res : Response)=>{
    try {
       const result = await authService.loginUserDB(req.body?.email, req.body?.password)
       // return  res.status(201).json({success : true, message : "user creaed", data : result.rows[0]})
       return  res.status(201).json({success : true, message : "user creaed", data : result}) // after jwt..
         
    } catch (error:any) {
       return res.status(500).json({success : false, message : error.message})
    }
}
export const authController = {
    loginUser
}