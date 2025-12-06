import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

const createUserDB = async(payload : Record<string ,unknown>)=>{
       const {name, email, password, role} = payload;
        const hashPassword = await bcrypt.hash(password as string, 12)
        const result = await pool.query(`
                INSERT INTO users(name, email, password, role) VALUES($1,$2,$3, $4) RETURNING id, name, email, age, created_at, updated_at`,
                [name, email, hashPassword, role])
         return result
}

const getAllUser = async()=>{
   const result = await pool.query(`SELECT id, name, email, role, age, created_at, updated_at FROM users`)
   return result
}

const getSingleUserEmail = async(email : string)=>{
    const result = await pool.query(`SELECT id, name, email, role, age, created_at, updated_at FROM users WHERE email=$1`, [email])
    return result
}


const getSingleUserId = async(id : string)=>{
    const result = await pool.query(`SELECT id, name, email, role, age, created_at, updated_at FROM users WHERE id=$1`, [id])
    return result
}

const deleteUserId = async(id : string)=>{
  const result = await pool.query("DELETE FROM users WHERE id=$1 RETURNING *", [id]);
  return result;
}

const updateUserId = async(payload : Record<string, unknown>, id : string)=>{
  const { name, role } = payload;
  const result = await pool.query(
    "UPDATE users SET name=$1, role=$2 WHERE id=$3 RETURNING *",
    [name, role, id]
  );
  return result;
}

export const userServices = {
    getSingleUserId,
    getSingleUserEmail,
    createUserDB,
    getAllUser,
    deleteUserId,
    updateUserId
}