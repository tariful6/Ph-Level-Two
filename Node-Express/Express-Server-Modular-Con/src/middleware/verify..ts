import { NextFunction, Request, Response } from "express";

const verify = (req:Request, res:Response, next: NextFunction)=>{
    console.log("show Your id");
    const Id = true;
    if(!Id){
        throw new Error("Not Allow")
    }
    next()
}
export default verify