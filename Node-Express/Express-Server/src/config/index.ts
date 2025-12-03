import path from "path"
import dotenv from "dotenv"
dotenv.config({path: path.join(process.cwd(), ".env")});

const config = {
    CONNECTION_STR : process.env.CONNECTION_STR,
    port : process.env.PORT,
    jwtSecret : process.env.JWT_SECRET
}
export default config