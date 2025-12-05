import express, { Request, Response } from "express"
import { userRoute } from "./modules/user/user.routes"
import { initDb } from "./database/db"
import { authRoute } from "./modules/auth/auth.route"
const app = express()
app.use(express.json())


initDb()

app.use('/api/v1/users', userRoute)

app.use("/api/v1/auth", authRoute);

app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({message : "This is root route", path : req.path})
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})