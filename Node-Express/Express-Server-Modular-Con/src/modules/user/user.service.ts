import bcrypt from "bcryptjs";
import { pool } from "../../database/db";

const createUserIntoDB = async(payload : Record<string, unknown>)=>{
            const {name, email, password, role} = payload;
            
            const hashPassword = await bcrypt.hash(password as string,12)
            const result = await pool.query(`
                INSERT INTO users(name, email, password, role) VALUES($1,$2,$3, $4) RETURNING id, name, email, age, created_at, updated_at`,
                [name, email, hashPassword, role])
            // delete result.rows[0].password; // delete or hide password. 
            // for use delete > INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *` use this
            return result
}

const getUserIntoDB = async()=>{
    const result = await pool.query(`SELECT id, name, email, age, created_at, updated_at FROM users`)
    return result
}

const getSingleUserIntoDB = async(email : string)=>{
    const result = await pool.query(`SELECT id, name, email, age, created_at, updated_at FROM users WHERE email=$1`, [email])
    return result
}

export const userServices = {
    createUserIntoDB,
    getUserIntoDB,
    getSingleUserIntoDB
}