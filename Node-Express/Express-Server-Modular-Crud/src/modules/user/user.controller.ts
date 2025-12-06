import { Request, Response } from "express"
import { userServices } from "./user.service"

const createUser = async(req:Request, res:Response)=>{
    try {
       const result =  await userServices.createUserDB(req.body)
       return  res.status(201).json({success : true, message : "user creaed", data : result.rows[0]})
    } catch (error : any) {
        return res.status(500).json({success : false, message : error.message})
    }
}


const getAllUser = async(req:Request, res:Response)=>{
    try {
       const result = await userServices.getAllUser()
       console.log(req);
       return  res.status(201).json({success : true, message : "all users", data : result.rows})
    } catch (error : any) {
        return res.status(500).json({success : false, message : error.message})
    }
}


const getSingleUserEmail = async(req:Request, res:Response)=>{
    try {
      const email = req?.user!.email;  // use when use jwt.
      //  const {email} = req.body
       const result = await userServices.getSingleUserEmail(email)
       return  res.status(201).json({success : true, message : "all users", data : result.rows})
    } catch (error:any) {
       return res.status(500).json({success : false, message : error.message})
    }
}



const getSingleUserId = async(req:Request, res:Response)=>{
  try {
    const result = await userServices.getSingleUserId(req.params.id as string);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "user not found" });
    }else{
        res.status(200).json({success : true, message : "single user get successfully", data : result.rows[0]});
    }
   }catch (err : any) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
}



const deleteSingleUser = async(req:Request, res:Response)=>{
  try {
    const result = await userServices.deleteUserId(req.params.id as string);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }else{
        res.status(200).json({success : true, message : "single user delete successfully", data : null});
    }
   } catch (err : any) {
    console.log(err);
        res.status(500).json({success : false, message : err.message})
  }
}



const updateSingleUser = async(req:Request, res:Response)=>{
  try {
    const result = await userServices.updateUserId(req.body, req.params.id!);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }else{
        res.status(200).json({success : true, message : "single user update successfully", data : result.rows[0]});
    }
   } catch (err : any) {
    res.status(500).json({ error: "Failed to update user" });
  }
}


export const userController = {
    createUser,
    getAllUser,
    getSingleUserId,
    getSingleUserEmail,
    deleteSingleUser,
    updateSingleUser
    
}

