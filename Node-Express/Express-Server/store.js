import { Request, Response } from "express"
import { userServices } from "./user.service"

const createUserController = async(req:Request, res:Response)=>{
    try {
       const result =  await userServices.createUserIntoDB(req.body)
       return  res.status(201).json({success : true, message : "user creaed", data : result.rows[0]})
      
    } catch (error : any) {
        return res.status(500).json({success : false, message : error.message})
    }
}

const getAllUserController = async(req:Request, res:Response)=>{
    try {
       const result = await userServices.getAllUserIntoDB()
       console.log(req);
       return  res.status(201).json({success : true, message : "all users", data : result.rows})
    } catch (error : any) {
        return res.status(500).json({success : false, message : error.message})
    }
}


const getSingleUserControllerId = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getSingleUserIntoDB(req.params.id as string);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "user not found" });
    }else{
        res.status(200).json({success : true, message : "single user get successfully", data : result.rows[0]});
    }
   } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};



const getSingleUserControllerUser = async(req:Request, res:Response)=>{
    try {
      const {email} = req?.body;
      console.log(email);
       const result = await userServices.getSingleUserIntoDB(email)
       return  res.status(201).json({success : true, message : "all users", data : result.rows})
    } catch (error:any) {
       return res.status(500).json({success : false, message : error.message})
    }
}

export const userController = {
    createUserController,
    getAllUserController,
    getSingleUserControllerId,
    getSingleUserControllerUser
}




// service ---------------------------------
import { pool } from "../../config/db";

const createUserIntoDB = async(payload : Record<string ,unknown>)=>{
       const {name, email, password, role} = payload;
        const result = await pool.query(`
                INSERT INTO users(name, email, password, role) VALUES($1,$2,$3, $4) RETURNING id, name, email, age, created_at, updated_at`,
                [name, email, password, role])
         return result
}

const getAllUserIntoDB = async()=>{
   const result = await pool.query(`SELECT id, name, email, role, age, created_at, updated_at FROM users`)
   return result
}


const getSingleUserIntoDB = async(id : string)=>{
    const result = await pool.query(`SELECT id, name, email, role, age, created_at, updated_at FROM users WHERE id=$1`, [id])
    return result
}
const getSingleUserEmailIntoDB = async(email : string)=>{
    const result = await pool.query(`SELECT id, name, email, age, created_at, updated_at FROM users WHERE email=$1`, [email])
    return result
}


export const userServices = {
    createUserIntoDB,
    getAllUserIntoDB,
    getSingleUserIntoDB,
    getSingleUserEmailIntoDB
}


// route --------------------------------------------------------
import { Router  } from "express";
import { userController } from "./user.controller";

const router = Router()
router.get("/", userController.getAllUserController)// - /api/v1/users
router.get('/:id', userController.getSingleUserControllerId) // - /api/v1/users
router.get('/singleuser', userController.getSingleUserControllerUser) // - /api/v1/users/2

router.post("/", userController.createUserController)

export const userRouter = router


