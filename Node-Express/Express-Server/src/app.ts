import express, { NextFunction, Request, Response } from "express"
import {Pool} from "pg"
import initDB from "./config/db";
import logger from "./middleware/logger";
import config from "./config";
import { userRoute } from "./modules/user/user.routes";
import { todoRoute } from "./modules/todo/todo.routes";
import { authRoutes } from "./modules/auth/auth.routes";
// dotenv.config({path: path.join(process.cwd(), ".env")});
const app = express()


app.use(express.json())
// app.use(express.urlencoded())

// Database --
const pool = new Pool({
    connectionString : `${config.CONNECTION_STR}` // come from config > index.ts
});

initDB(); // check or cand add from config > db.
app.use('/users', userRoute) // it handle get put post delete
app.use('/todos', todoRoute)
app.use("/auth", authRoutes)

// basic hello world api ---------------------
app.get('/',logger, (req:Request, res:Response) => {
  res.send('Hello !')
})

// not found route  -------------------------
app.use((req,res)=> {
  res.status(404).json({ success : false , message : "Route not found", path: req.path})
}) 

export default app;