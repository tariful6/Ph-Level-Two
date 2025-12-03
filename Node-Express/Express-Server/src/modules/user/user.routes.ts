import express, { Request, Response } from "express";
import { pool } from "../../config/db";
import { userControllers } from "./user.controller";
import { userServices } from "./user.service";
import auth from "../../middleware/auth";
import logger from "../../middleware/logger";

const router = express.Router();

router.post("/", userControllers.createUserControler) // check server > app.use('/users', 

router.get("/", logger, auth("admin"), userControllers.getUserController) // check server > app.use('/users', 

router.get("/:id", userControllers.getSingleUserController) // check server > app.use('/users', 

router.put("/:id", userControllers.updateUserController) // check server > app.use('/users', 

router.delete("/:id", userControllers.deleteUserController) // check server > app.use('/users', 

export const userRoute = router;