import express from "express";
import { userController } from "./user.controller";
import verify from "../../middleware/verify.";
import auth from "../../middleware/auth";
import { Roles } from "../auth/auth.constant";

const router = express.Router()
router.get('/', auth("admin", "user"),  userController.getAllUserController )
// router.get('/', auth("user"),  userController.getAllUserController ) // for only user

router.get('/singleuser',  auth(Roles.user), userController.getSingleUserController )
// router.get('/singleuser', userController.getSingleUserController )

router.post('/',  userController.createUserController )

export const userRoute = router
