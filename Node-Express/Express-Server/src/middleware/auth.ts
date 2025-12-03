import { NextFunction, Request, Response } from "express"

import jwt, { JwtPayload } from 'jsonwebtoken'; 
import config from "../config";

const auth = (...roles:string[]) => {   // add this user route - get user.
    return async (req : Request, res:Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;
            console.log({authToken : token});
            if(!token){
                return res.status(500).json({message : "yoou are not allow"})
            }
            const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload;
            console.log({decoded});
            req.user = decoded 

            if(roles.length && !roles.includes(decoded.role as string)){
                 res.status(500).json({error : "unauthorized"})
            }
            next()  
        } catch (error:any) {
            res.status(500).json({success : false, message : error.message})
        }

    }
}

export default auth;

// add token secret withut qnote in postman > get > header >  authentication > value