import express, { Request, Response } from "express"
import { initDb } from "./config/db"
import { userRouter } from "./modules/user/user.routes";

import config from "./config";
import { authRoute } from "./modules/auth/auth.route";
const port = config.port;

const app = express()
app.use(express.json())

initDb()

app.use('/api/v1/users', userRouter)
app.use("/api/v1/auth", authRoute);

app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({message : "This is root route", path : req.path})
})

app.listen(port, ()=>{
    console.log("Server is running on port 5000");
})