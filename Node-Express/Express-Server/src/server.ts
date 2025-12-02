import express, { NextFunction, Request, Response } from "express"
import {Pool} from "pg"
import path from "path"
import dotenv from "dotenv"
dotenv.config({path: path.join(process.cwd(), ".env")});
const app = express()
const port = 5000;

app.use(express.json())
// app.use(express.urlencoded())


// Db
const pool = new Pool({
    connectionString : `${process.env.CONNECTION_STR}`
});

const initDB = async()=> {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            age INT,
            phone VARCHAR(15),
            address TEXT,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
    await pool.query(`
         CREATE TABLE IF NOT EXISTS todos(
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(ID) ON DELETE CASCADE,
            title VARCHAR(200) NOT NULL,
            description TEXT,
            completed BOOLEAN DEFAULT false,
            due_date DATE,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
};
initDB()

// middlewre ---

const logger = (req:Request, res:Response, next:NextFunction) =>{
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
  next();

}

// get all users ------------------------------------------
app.get('/users', async(req:Request, res:Response) => {
   try {
    const result = await pool.query(`SELECT * FROM users`)
     res.status(200).json({success : true, message : "Data get successfully", data : result.rows})
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
})

// get single users ------------------------------------------
app.get('/users/:id', async(req:Request, res:Response) => {
   try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`,[req.params.id])
    if(result.rows.length ===0){
      res.status(404).json({success : false, message : "User not found"})
    }else{
      res.status(200).json({success : true, message : "single user get successfully", data : result.rows[0]})
    }
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
})

// put single users ------------------------------------------
app.put('/users/:id', async(req:Request, res:Response) => {
   const {name, email} = req.body;
   try {
    const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,[name, email, req.params.id])
    if(result.rows.length === 0){
      res.status(404).json({success : false, message : "User not found"})
    }else{
      res.status(200).json({success : true, message : "user update successfully", data : result.rows[0]})
    }
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
})

// delete single users ------------------------------------------
app.delete('/users/:id', async(req:Request, res:Response) => {
   try {
    const result = await pool.query(`DELETE FROM users WHERE id = $1`,[req.params.id])
    if(result.rowCount === 0){
      res.status(404).json({success : false, message : "User not found"})
    }else{
      res.status(200).json({success : true, message : "single user delete successfully", data : result.rows})
    }
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
})

// post users ------------------------------------------
app.post('/users', async (req:Request, res:Response) => {
  const {name, email} = req.body;
  try {
    const result = await pool.query(`INSERT INTO users(name, email) VALUES($1, $2)RETURNING *`, [name, email])
    // console.log(result.rows[0]);
      res.status(201).json({success : true, message : "Data insert successfully", data : result.rows[0]})
  } catch (error : any) {
    res.status(500).json({success : false, message : error.message})
  }
})


// todos api ======================================================================
// post api --------------------------------------------
app.post("/todos", async(req:Request, res:Response)=>{  // give here user available id -
  const {user_id, title} = req.body;
  try {
     const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`, [user_id, title])
     res.status(201).json({success : true, message : "Todos created successfully", data : result.rows[0]})
  } catch (error : any) {
      res.status(500).json({success : false, message : error.message})
  }
})

// get all todos ------------------------------------------
app.get("/todos", async(req: Request, res: Response) => {
   try {
    const result = await pool.query(`SELECT * FROM todos`)
     res.status(200).json({success : true, message : "Data get successfully", data : result.rows})
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
})

// get single todos ------------------------------------------
app.get('/todos/:id', async(req:Request, res:Response) => {
   try {
    const result = await pool.query(`SELECT * FROM todos WHERE id = $1`,[req.params.id])
    if(result.rows.length ===0){
      res.status(404).json({success : false, message : "User not found"})
    }else{
      res.status(200).json({success : true, message : "single user get successfully", data : result.rows[0]})
    }
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
})

// put single todos ------------------------------------------
app.put('/todos/:id', async(req:Request, res:Response) => {
   const {user_id, title} = req.body;
   try {
    const result = await pool.query(`UPDATE todos SET user_id=$1, title=$2 WHERE id=$3 RETURNING *`,[user_id, title, req.params.id])
    if(result.rows.length === 0){
      res.status(404).json({success : false, message : "Todos not found"})
    }else{
      res.status(200).json({success : true, message : "Todos update successfully", data : result.rows[0]})
    }
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
})


// delete single todos ------------------------------------------
app.delete('/todos/:id', async(req:Request, res:Response) => {
   try {
    const result = await pool.query(`DELETE FROM todos WHERE id = $1`,[req.params.id])
    if(result.rowCount === 0){
      res.status(404).json({success : false, message : "User not found"})
    }else{
      res.status(200).json({success : true, message : "single todos delete successfully", data : result.rows})
    }
   } catch (error : any) {
     res.status(500).json({success : false, message : error.message})
   }
})

// basic hello world api --------------------------------
app.get('/',logger, (req:Request, res:Response) => {
  res.send('Hello !')
})

// not found route  -------------------------
app.use((req,res)=> {
  res.status(404).json({ success : false , message : "Route not found", path: req.path})
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
