import express from "express";
import { authController } from "./auth.controller";

const router = express.Router()

// localhost:5000/auth/login
router.post('/login', authController.loginUserController)

export const authRoutes = router;