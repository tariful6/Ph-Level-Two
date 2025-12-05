import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { secret } from "../modules/auth/auth.service"
import { pool } from "../database/db"

const auth = (...role : ('admin' | 'user')[])=>{
    console.log(role);
    return async (req:Request, res:Response, next:NextFunction)=>{
      const token = req.headers.authorization
      console.log(token);
      if(!token){
        throw new Error("you are unauthorized")
      }

      const decoded = jwt.verify(token, secret) as JwtPayload
      console.log(decoded);
      const user = await pool.query(`
        SELECT * FROM users WHERE email=$1
        `, [decoded.email])
        if(user.rows.length === 0){
            throw new Error("User not found")
        }
    //  console.log(decoded);
        req.user = decoded;
        if(role.length && !role.includes(decoded.role)){
            throw new Error("you are not authorized")
        }
      next()
    }
}
export default auth