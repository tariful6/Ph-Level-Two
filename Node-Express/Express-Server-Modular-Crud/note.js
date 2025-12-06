// Poject setup ==================================================================================================
// npm init -y
// Remove  > "type": "commonjs" from packege.json
// Add this in script > packege.json >  "dev" : "tsx watch ./src/server.ts",

// npm i typescript express
// npm i -D tsx @types/express
// tsc --init

// Uncomment file layout from tsconfig
// Make module > esnext 
// Add "node" > in types 
// Add moduleRegulation before types > "moduleResolution": "bundler",

// Comment all other output 
// Comment > "jsx": "react-jsx" from Recommended Options
// And make verbatimModuleSyntax false > "verbatimModuleSyntax": false,

// create a src folder 
// create a server.ts file in  > src folder



// Server setup =================================================================================================
// import express, { Request, Response } from "express"

// const port = 5000;
// const app = express()
// app.use(express.json())

// app.get('/', (req:Request, res:Response)=>{
//     res.status(200).json({message : "This is root route", path : req.path})
// })

// app.listen(port, ()=>{
//     console.log("Server is running on port 5000");
// })


// Postgase db setup ===========================================================================================
// npm i pg
// npm i --save-dev @types/pg
// npm i dotenv
// create a project in neondb make sure you select > Azure provider > click on connect copy connection string.


// Create a .env file in root and add all secret key or string ------------------------------------------------
// PORT=5000 
// CONNECTION_STR=postgresql://neondb_owner:npg_BrPkVz2hiJ9H@ep-lingering-flower-a81e9co9-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require
// JWT_SECRET='KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'


// Create a config folder and  create a index.ts file in config folder.---------------------------------------------
// import path from "path"
// import dotenv from "dotenv"
// dotenv.config({path: path.join(process.cwd(), ".env")});

// const config = {
//     CONNECTION_STR : process.env.CONNECTION_STR,
//     port : process.env.PORT,
//     jwtSecret : process.env.JWT_SECRET
// }
// export default config



// Create a db.ts file in config folder : create pool and db table query --------------------------------------------
// import { Pool } from "pg";
// import config from ".";
// export const pool = new Pool({
//     connectionString : `${config.CONNECTION_STR}`
// })

// export const initDb = async()=>{
//     await pool.query(`
//         CREATE TABLE IF NOT EXISTS users(
//             id SERIAL PRIMARY KEY,
//             name VARCHAR(250) NOT NULL,
//             email VARCHAR(150) UNIQUE NOT NULL,
//             password TEXT NOT NULL,
//             role VARCHAR(100) NOT NULL,
//             age INT,
//             created_at TIMESTAMP DEFAULT NOW(),
//             updated_at TIMESTAMP DEFAULT NOW()
//         )
//     `)
//     console.log("DB Connected");
// }


// Crud operation Get Post Delete Put ================================================================================
// server.ts file ----------------------------------------------------------------------------------------------------
// import express, { Request, Response } from "express"
// import { initDb } from "./config/db"
// import { userRouter } from "./modules/user/user.routes";
// import config from "./config";
// const port = config.port;

// const app = express()
// app.use(express.json())

// initDb()

// app.use('/api/v1/users', userRouter)

// app.get('/', (req:Request, res:Response)=>{
//     res.status(200).json({message : "This is root route", path : req.path})
// })

// app.listen(port, ()=>{
//     console.log("Server is running on port 5000");
// })

// Create a modules folder in src folder and create a  > user folder in src folder.
// create a > user.routes.ts.ts file in user folder.
// create a > user.controller.ts file in user folder.
// create a > user.service.ts file in user folder.

// user.routes.ts.ts --------------------------------------------------------------------------------------------------
// import { Router  } from "express";
// import { userController } from "./user.controller";

// const route = Router()
// route.post("/", userController.createUser) // create user.
// route.get("/", userController.getAllUser)  // get all user..
// route.get('/singleuser', userController.getSingleUserEmail) // get single user based on {email, password}
// route.get('/:id', userController.getSingleUserId) // get single user based on id.
// route.delete('/:id', userController.deleteSingleUser) // delete user.
// route.put('/:id', userController.updateSingleUser) // update user.

// export const userRouter = route

// user.controller.ts -------------------------------------------------------------------------------------------------
// import { Request, Response } from "express"
// import { userServices } from "./user.service"

// const createUser = async(req:Request, res:Response)=>{  // create user ------
//     try {
//        const result =  await userServices.createUserDB(req.body)
//        return  res.status(201).json({success : true, message : "user creaed", data : result.rows[0]})
//     } catch (error : any) {
//         return res.status(500).json({success : false, message : error.message})
//     }
// }


// const getAllUser = async(req:Request, res:Response)=>{ // get all user ------
//     try {
//        const result = await userServices.getAllUser()
//        console.log(req);
//        return  res.status(201).json({success : true, message : "all users", data : result.rows})
//     } catch (error : any) {
//         return res.status(500).json({success : false, message : error.message})
//     }
// }


// const getSingleUserEmail = async(req:Request, res:Response)=>{ // get single user based on {email, pass} --
//     try {
//        const {email} = req.body
//        const result = await userServices.getSingleUserEmail(email)
//        return  res.status(201).json({success : true, message : "all users", data : result.rows})
//     } catch (error:any) {
//        return res.status(500).json({success : false, message : error.message})
//     }
// }



// const getSingleUserId = async(req:Request, res:Response)=>{ // get single user based on id --
//   try {
//     const result = await userServices.getSingleUserId(req.params.id as string);
//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: "user not found" });
//     }else{
//         res.status(200).json({success : true, message : "single user get successfully", data : result.rows[0]});
//     }
//    }catch (err : any) {
//     console.log(err);
//     res.status(500).json({ error: "Failed to fetch user" });
//   }
// }



// const deleteSingleUser = async(req:Request, res:Response)=>{  // delete single user based on id --
//   try {
//     const result = await userServices.deleteUserId(req.params.id as string);
//     if (result.rowCount === 0) {
//       return res.status(404).json({ error: "User not found" });
//     }else{
//         res.status(200).json({success : true, message : "single user delete successfully", data : null});
//     }
//    } catch (err : any) {
//     console.log(err);
//         res.status(500).json({success : false, message : err.message})
//   }
// }



// const updateSingleUser = async(req:Request, res:Response)=>{  // update single user based on id --
//   try {
//     const result = await userServices.updateUserId(req.body, req.params.id!);
//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: "User not found" });
//     }else{
//         res.status(200).json({success : true, message : "single user update successfully", data : result.rows[0]});
//     }
//    } catch (err : any) {
//     res.status(500).json({ error: "Failed to update user" });
//   }
// }


// export const userController = {
//     createUser,
//     getAllUser,
//     getSingleUserId,
//     getSingleUserEmail,
//     deleteSingleUser,
//     updateSingleUser
    
// }

// user.service.ts ----------------------------------------------------------------------------------------------------
// import { pool } from "../../config/db";

// const createUserDB = async(payload : Record<string ,unknown>)=>{ // create user ---
//        const {name, email, password, role} = payload;
//         const result = await pool.query(`
//                 INSERT INTO users(name, email, password, role) VALUES($1,$2,$3, $4) RETURNING id, name, email, age, created_at, updated_at`,
//                 [name, email, password, role])
//          return result
// }


// const getAllUser = async()=>{  // get all user ----
//    const result = await pool.query(`SELECT id, name, email, role, age, created_at, updated_at FROM users`)
//    return result
// }


// const getSingleUserEmail = async(email : string)=>{ // get single user based on email ----
//     const result = await pool.query(`SELECT id, name, email, role, age, created_at, updated_at FROM users WHERE email=$1`, [email])
//     return result
// }


// const getSingleUserId = async(id : string)=>{ // get single user based on id ----
//     const result = await pool.query(`SELECT id, name, email, role, age, created_at, updated_at FROM users WHERE id=$1`, [id])
//     return result
// }


// const deleteUserId = async(id : string)=>{ // delete single user based on id ----
//   const result = await pool.query("DELETE FROM users WHERE id=$1 RETURNING *", [id]);
//   return result;
// }


// const updateUserId = async(payload : Record<string, unknown>, id : string)=>{ // update user based on id ----
//   const { name, role } = payload;
//   const result = await pool.query(
//     "UPDATE users SET name=$1, role=$2 WHERE id=$3 RETURNING *",
//     [name, role, id]
//   );
//   return result;
// }

// export const userServices = {
//     getSingleUserId,
//     getSingleUserEmail,
//     createUserDB,
//     getAllUser,
//     deleteUserId,
//     updateUserId
// }


// Password hashing Implemant in Create user ==========================================================================
// After testing all. if everying is work properly then delete > table from neon database.
// npm i bcryptjs
// import bcrypt from "bcryptjs";

// Add and repleace this from user.service.ts file and replease with old createUserDB ------------------------------
// const createUserDB = async(payload : Record<string ,unknown>)=>{
//        const {name, email, password, role} = payload;
//        const hashPassword = await bcrypt.hash(password as string, 12)
//        const result = await pool.query(`
//                 INSERT INTO users(name, email, password, role) VALUES($1,$2,$3, $4) RETURNING id, name, email, age, created_at, updated_at`,
//                 [name, email, hashPassword, role])
//        return result
// }

// Api For Post ------- http://localhost:5000/api/v1/users
// Data for post --- { "name": "Tarif", "email": "tarif@gmail.com", "password":"123456", "role" : "user"} 


// Authentication JWT and Auth Modules ==========================================================================
// Create a auth folder in modules folder 
// Create a auth.route.ts file in uth folder 
// Create a auth.controller.ts file in uth folder 
// Create a auth.service.ts file in uth folder 
// npm i jsonwebtoken
// npm i --save-dev @types/jsonwebtoken


// server.ts ----------------------------------------------------------------------------------------------
// import express, { Request, Response } from "express"
// import { userRoute } from "./modules/user/user.routes"
// import { initDb } from "./database/db"
// import { authRoute } from "./modules/auth/auth.route"
// const app = express()
// app.use(express.json())


// initDb()

// app.use('/api/v1/users', userRoute)
// app.use("/api/v1/auth", authRoute);

// app.get('/', (req:Request, res:Response)=>{
//     res.status(200).json({message : "This is root route", path : req.path})
// })
// app.listen(5000, ()=>{
//     console.log("Server is running on port 5000");
// })


// auth.route.ts  -----------------------------------------------------------------------------------
// import  { Router } from "express";
// import { authController } from "./auth.controller";

// const router = Router()
// router.post('/login', authController.loginUserController)

// export const authRoute = router


// auth.controller.ts -------------------------------------------------------------------------------
// import { Request, Response } from "express";
// import { authService } from "./auth.service";

// const loginUserController = async (req: Request, res : Response)=>{
//     try {
//        const result = await authService.loginUserInDB(req.body?.email, req.body?.password)
//        return  res.status(201).json({success : true, message : "user creaed", data : result}) 
//     } catch (error:any) {
//        return res.status(500).json({success : false, message : error.message})
//     }
// }
// export const authController = {
//     loginUserController
// }



// auth.service.ts  -----------------------------------------------------------------------------------
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken"
// import config from "../../config";
// import { pool } from "../../config/db";

// const secret = config.jwtSecret as string

// const loginUserDB = async(email: string , password : string)=>{
//   const user = await pool.query(`
//         SELECT * FROM users WHERE email=$1
//         `,
//     [email]);

//     if(user.rows.length === 0){
//       throw new Error("User noot found !")
//     }
//     const matchPassword = await bcrypt.compare(password, user.rows[0].password)
//     if(!matchPassword){
//       throw new Error("Invalid Creadentials")
//     }
//     const jwtPayload = {
//       id : user.rows[0].id,
//       name : user.rows[0].name,
//       email : user.rows[0].email,
//       role : user.rows[0].role,
//     }
//     const token = jwt.sign(jwtPayload, secret, { expiresIn :"7d"})
//     return {token, user : user.rows[0] };
// }

// export const authService = {
//     loginUserDB
// }


// Create a middleware folder in src folder and create a auth.ts file in middleware folder -----------
// import { NextFunction, Request, Response } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import config from "../config";
// import { pool } from "../config/db";

// const auth = (...role : ('admin' | 'user')[])=>{
//     console.log(role);
//     return async (req:Request, res:Response, next:NextFunction)=>{
//       const token = req.headers.authorization
//       console.log(token);
//       if(!token){
//         throw new Error("you are unauthorized")
//       }

//       const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload
//       console.log(decoded);
//       const user = await pool.query(`
//         SELECT * FROM users WHERE email=$1
//         `, [decoded.email])
//         if(user.rows.length === 0){
//             throw new Error("User not found")
//         }
//         req.user = decoded;
//         if(role.length && !role.includes(decoded.role)){
//             throw new Error("you are not authorized")
//         }
//       next()
//     }
// }
// export default auth


// For jwt decoded  ----------------------------------------------------------------------------------------------------------
// Create a types folder in src folder and create a index.ts file in types folder
// import { JwtPayload } from "jsonwebtoken";
// declare global {
//     namespace Express{
//         interface Request{
//             user?: JwtPayload
//         }
//     }
// }


// Jwt api  =============================================================================================
// user.routes.ts ---------------------------------------------------------------------------------------
// route.get("/", auth("admin", "user"), userController.getAllUser)
// route.get('/singleuser', auth("user"), userController.getSingleUserEmail)

// user.controller.ts -------------------------------------------------------------------------------------
// const getSingleUserEmail = async(req:Request, res:Response)=>{
//     try {
//       const email = req?.user!.email;  // use when use jwt.
//        const result = await userServices.getSingleUserEmail(email)
//        return  res.status(201).json({success : true, message : "all users", data : result.rows})
//     } catch (error:any) {
//        return res.status(500).json({success : false, message : error.message})
//     }
// }


// delete db from neon db and post again -----------------------------------------------------------------


// for env ----------
// PORT=5000 
// CONNECTION_STR=postgresql://neondb_owner:npg_BrPkVz2hiJ9H@ep-lingering-flower-a81e9co9-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require
// JWT_SECRET='KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'
