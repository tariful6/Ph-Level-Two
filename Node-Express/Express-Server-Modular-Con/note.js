// Poject setup ===============================================================

// npm init -y
// remove  > "type": "commonjs" from packege.json
// add this in script > packege.json >  "dev" : "tsx watch ./src/server.ts",
// npm i typescript express
// npm i -D tsx @types/express
// tsc --init

// uncomment file layout from tsconfig
// make module > esnext 
// add "node" in types 
// add moduleRegulation before types > "moduleResolution": "bundler",
// comment all other output 
// comment > "jsx": "react-jsx" from Recommended Options
// and make verbatimModuleSyntax false > "verbatimModuleSyntax": false,

// create a src folder 
// create a server.ts file in src folder

// Server setup ===============================================================
// import express, { Request, Response } from "express"

// const app = express()
// app.use(express.json())

// app.get('/', (req:Request, res:Response)=>{
//     res.status(200).json({message : "This is root route", path : req.path})
// })

// Postgase db setup in server.ts and pst user ===================================
// npm i pg
// npm i --save-dev @types/pg
// create a project in neondb make sure you select > Azure provider > click on connect copy connection string

// import { Pool } from 'pg'

// const pool = new Pool({
//     connectionString : 'postgresql://neondb_owner:npg_OVUnMc72ETQa@ep-raspy-hill-a8cj6td2-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
// })

// const initDb = async()=>{
//     await pool.query(`
//         CREATE TABLE IF NOT EXISTS users(
//             id SERIAL PRIMARY KEY,
//             name VARCHAR(250) NOT NULL,
//             email VARCHAR(150) UNIQUE NOT NULL,
//             password TEXT NOT NULL,
//             age INT,
//             created_at TIMESTAMP DEFAULT NOW(),
//             updated TIMESTAMP DEFAULT NOW()
//         )
//     `)
//     console.log("DB Connected");
// }
// initDb()

// app.post('/users', async(req:Request, res:Response)=>{
//     const {name, email, password} = req.body;
//     const result = await pool.query(`
//             INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *
//         `,[name, email, password])
//     res.status(201).json({success : true, message : "user creaed", data : result.rows[0]})
// })

// Lets start modular file system ============================================================
// create a database folder in > src . ------- [  db.ts  ] --------
// create a db.ts file in > database folder
// cut all codes from server to here in db.ts and export initDb : -----

// import { Pool } from "pg";
// export const pool = new Pool({
//     connectionString : 'postgresql://neondb_owner:npg_OVUnMc72ETQa@ep-raspy-hill-a8cj6td2-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
// })
// export const initDb = async()=>{
//     await pool.query(`
//         CREATE TABLE IF NOT EXISTS users(
//             id SERIAL PRIMARY KEY,
//             name VARCHAR(250) NOT NULL,
//             email VARCHAR(150) UNIQUE NOT NULL,
//             password TEXT NOT NULL,
//             age INT,
//             created_at TIMESTAMP DEFAULT NOW(),
//             updated TIMESTAMP DEFAULT NOW()
//         )
//     `)
//     console.log("DB Connected");
// }


// create a modules folder in > src   ------- [  user.routes.ts  ] --------------------------------
// create a user folder in > modules folder
// create a user.routes.ts file in > user folder.
// cut all async codes from server post api and paste it in user.routes.ts
// and make post route to app.post to app.use > app.use('/api/v1/users', userRoute)

// import express, { Request, Response } from "express";
// import { pool } from "../../database/db";

// const router = express.Router()
// router.post('/', async(req:Request, res:Response)=>{
//     const {name, email, password} = req.body;
//     const result = await pool.query(`
//             INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *
//         `,[name, email, password])
//     res.status(201).json({success : true, message : "user creaed", data : result.rows[0]})
// })
// export const userRoute = router

// create user.controller.ts file in  user folder -------------------------------------------------------
// create a > const variable in user.controller.ts > const createUserController = 
// cut all async codes from user.routes.ts and use those code in user.controller.ts file.
// import { Request, Response } from "express";
// import { pool } from "../../database/db";
// const createUserController = async(req:Request, res:Response)=>{
//     try {
//         const {name, email, password} = req.body;
//         const result = await pool.query(`
//             INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *`,
//             [name, email, password])

//        return  res.status(201).json({success : true, message : "user creaed", data : result.rows[0]})
//     } catch (error:any) {
//        return res.status(500).json({success : false, message : error.message})
//     }
// }
// export const userController = {
//     createUserController
// }

// goto user.routes.ts page and import >  userController.createUserController -------------------------
// const router = express.Router()
// router.post('/',userController.createUserController )


// create user.service.ts file in user folder -------------------------------------------------------
// create async function and export as a object
// const createUserIntoDB = async()=>{
// }
// export const userServices = {
//     createUserIntoDB
// }

// cut result pool query & body from user.controller.ts and use this code in user.service.ts file >
// change req.body to payload and set type for payload and require pool req, res.
// import { pool } from "../../database/db";
// const createUserIntoDB = async(payload : Record<string, unknown>)=>{
//             const {name, email, password} = payload;

//             const result = await pool.query(`
//                 INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *`,
//                 [name, email, password])
//             return result
// }
// export const userServices = {
//     createUserIntoDB
// }

// goto user.controller.ts page and import >  userServices.createUserIntoDB & give parameter  -------------
// const result = await userServices.createUserIntoDB(req.body)


// Password hashing ======================================================================================
// npm i bcryptjs
// use this in user.service file --------------------------------------------------------------------------
// import bcrypt from "bcryptjs";
// import { pool } from "../../database/db";
// const createUserIntoDB = async(payload : Record<string, unknown>)=>{
//             const {name, email, password} = payload;
//             const hashPassword = await bcrypt.hash(password as string, 12)
//             const result = await pool.query(`
//                 INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING id, name, email, age, created_at, updated_at`,
//                 [name, email, hashPassword])
            
//             // delete result.rows[0].password; // delete or hide password.  
//             // for use delete > INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *` use this
//             return result
// }
// export const userServices = {
//     createUserIntoDB
// }

// middleware authentication ======================================================================================
// create a middleware folder in src folder
// create a verify.ts file in middleware folder.

// import { NextFunction, Request, Response } from "express";
// const verify = (req:Request, res:Response, next: NextFunction)=>{
//     console.log("show Your id");
//     const Id = true;
//     if(!Id){
//         throw new Error("Not Allow")
//     }
//     next()
// }
// export default verify

// use varify > in > user.route.ts file >  on routes --------------------------------------------------
// import express from "express";
// import { userController } from "./user.controller";
// import verify from "../../middleware/verify.";
// const router = express.Router()
// router.post('/', verify, userController.createUserController )
// export const userRoute = router


// Auth setup for login ================================================================================
// create a auth folder in modules folder.
// create a auth.route.ts file in  auth folder ---------------------------------
// import  { Router } from "express";
// import { authController } from "./auth.controller";
// const router = Router()
// router.post('/login', authController.loginUserController)
// export const authRoute = router

// create a auth.controller.ts file in  auth folder ------------------------------
// import { Request, Response } from "express";
// import { authService } from "./auth.service";
// const loginUserController = async (req: Request, res : Response)=>{
//     try {
//        const result = await authService.loginUserInDB(req.body?.email, req.body?.password)
//        return  res.status(201).json({success : true, message : "user creaed", data : result.rows[0]})
         
//     } catch (error:any) {
//        return res.status(500).json({success : false, message : error.message})
//     }
// }
// export const authController = {
//     loginUserController
// }


// create a auth.service.ts file in  auth folder ---------------------------------
// import bcrypt from "bcryptjs";
// import { pool } from "../../database/db"

// const loginUserInDB = async(email: string , password : string)=>{
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
//     return user;
// }

// add route in server for auth >> app.use("/api/v1/auth", authRoute) ---------------

// Json web token implement ======================================================================================
// npm i jsonwebtoken
// npm i --save-dev @types/jsonwebtoken

// goto auth.service page -------------------------------------------------------------
// import bcrypt from "bcryptjs";
// import { pool } from "../../database/db"
// import jwt from "jsonwebtoken"
// const loginUserInDB = async(email: string , password : string)=>{
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

//     const jwtPayload = { // for json web token -
//       id : user.rows[0].id,
//       name : user.rows[0].name,
//       email : user.rows[0].email,
//     }
//     const secret = "KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"  // for json web token -
//     const token = jwt.sign(jwtPayload, secret, { expiresIn :"7d"})  // for json web token -
//     return {token, user : user.rows[0] };  // for json web token -
// }
// export const authService = {
//     loginUserInDB
// }

// goto auth.controller page > change return data -------------------------------------------------------------
// import { Request, Response } from "express";
// import { authService } from "./auth.service";
// const loginUserController = async (req: Request, res : Response)=>{
//     try {
//        const result = await authService.loginUserInDB(req.body?.email, req.body?.password)
//        return  res.status(201).json({success : true, message : "user creaed", data : result}) // after jwt change.
         
//     } catch (error:any) {
//        return res.status(500).json({success : false, message : error.message})
//     }
// }
// export const authController = {
//     loginUserController
// }


// create a file auth.ts file in middleware folder ---------------------
// import { NextFunction, Request, Response } from "express"
// import jwt, { JwtPayload } from "jsonwebtoken"
// import { secret } from "../modules/auth/auth.service"
// import { pool } from "../database/db"

// const auth = (...role : ('admin' | 'user')[])=>{
//     console.log(role);
//     return async (req:Request, res:Response, next:NextFunction)=>{
//       const token = req.headers.authorization
//       console.log(token);
//       if(!token){
//         throw new Error("you are unauthorized")
//       }

//       const decoded = jwt.verify(token, secret) as JwtPayload
//       console.log(decoded);
//       const user = await pool.query(`
//         SELECT * FROM users WHERE email=$1
//         `, [decoded.email])
//         if(user.rows.length === 0){
//             throw new Error("User not found")
//         }
//         console.log(decoded);
//         req.user = decoded;
//         if(role.length && !role.includes(decoded.role)){
//             throw new Error("you are not authorized")
//         }
//       next()
//     }
// }
// export default auth

// create a types folder in modules folder ------------------------------
// create a index.ts file in modules folder -----------------------------
// import { JwtPayload } from "jsonwebtoken"; // for jwt decoded.
// declare global {
//     namespace Express{
//         interface Request{
//             user?: JwtPayload
//         }
//     }
// }



// get all user api ===================================================================
// user.route -------------------------------------------------------------------
// import express from "express";
// import { userController } from "./user.controller";
// import auth from "../../middleware/auth";
// import { Roles } from "../auth/auth.constant";

// const router = express.Router()
// router.get('/', auth("admin", "user"),  userController.getAllUserController )
// router.get('/singleuser',  auth(Roles.user), userController.getSingleUserController )
// router.post('/',  userController.createUserController )
// export const userRoute = router


// user.controller -----------------------------------------------------------------
// const getAllUserController = async(req:Request, res:Response)=>{
//     try {
//        const result = await userServices.getUserIntoDB()
//        return  res.status(201).json({success : true, message : "all users", data : result.rows})
//     } catch (error:any) {
//        return res.status(500).json({success : false, message : error.message})
//     }
// }

// export const userController = {
//     createUserController,
//     getAllUserController,
//     getSingleUserController
// }

// user.services ---------------------------------------------------------------------
// const getUserIntoDB = async()=>{
//     const result = await pool.query(`SELECT id, name, email, age, created_at, updated_at FROM users`)
//     return result
// }
// export const userServices = {
//     createUserIntoDB,
//     getUserIntoDB,
//     getSingleUserIntoDB
// }


// single user get  ======================================================================
// user.route ----------------------------------------------------------------------------
// import express from "express";
// import { userController } from "./user.controller";
// import auth from "../../middleware/auth";
// import { Roles } from "../auth/auth.constant";

// const router = express.Router()
// router.get('/', auth("admin", "user"),  userController.getAllUserController )
// router.get('/singleuser',  auth(Roles.user), userController.getSingleUserController )
// router.post('/',  userController.createUserController )
// export const userRoute = router


// user.controller -----------------------------------------------------------------------
// const getSingleUserController = async(req:Request, res:Response)=>{
//     try {
//       const email = req?.user!.email;
//        const result = await userServices.getSingleUserIntoDB(email)
//        return  res.status(201).json({success : true, message : "all users", data : result.rows})
//     } catch (error:any) {
//        return res.status(500).json({success : false, message : error.message})
//     }
// }

// export const userController = {
//     createUserController,
//     getAllUserController,
//     getSingleUserController
// }

// user.services ------------------------------------------------------------------------
// const getSingleUserIntoDB = async(email : string)=>{
//     const result = await pool.query(`SELECT id, name, email, age, created_at, updated_at FROM users WHERE email=$1`, [email])
//     return result
// }
// export const userServices = {
//     createUserIntoDB,
//     getUserIntoDB,
//     getSingleUserIntoDB
// }

// router.get('/', auth(),  userController.getAllUserController )
// router.get('/singleuser',  auth(), userController.getSingleUserController )
// router.post('/',  userController.createUserController )


// for add user and admin role ---------------------------------------------------------------
// export const initDb = async()=>{  // for  role add----------------------------------------------------------
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

// if you use this go to auth service page and add this --------------------------------------------------
//   const jwtPayload = {
//       id : user.rows[0].id,
//       name : user.rows[0].name,
//       email : user.rows[0].email,
//       role : user.rows[0].role,
//     }

// also go to user service page and add this --------------------------------------------------
// const createUserIntoDB = async(payload : Record<string, unknown>)=>{
//    const {name, email, password, role} = payload;
//    const hashPassword = await bcrypt.hash(password as string,12)
//    const result = await pool.query(`
//        INSERT INTO users(name, email, password, role) VALUES($1,$2,$3, $4) RETURNING id, name, email, age, created_at, updated_at`,
//        [name, email, hashPassword, role])
//    return result
// }


// set jwt secret in postman get header authentication --- for verify user --------


// api -------------------------------

// for post man --------------------------------------------------------------------
// http://localhost:5000/api/v1/auth/login > { "email": "bbb@gmail.com", "password": "1234562" }
// http://localhost:5000/api/v1/users > {"name": "bbb", "email": "bbb@gmail.com", "password": "1234562" }
//  http://localhost:5000/api/v1/users/singleuser >  { "email": "bbb@gmail.com", "password": "1234562" } + jwt cole
