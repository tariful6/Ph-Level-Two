import { Router  } from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";

const route = Router()
// route.post("/", userController.createUser)
// route.get("/", userController.getAllUser)
// route.get('/singleuser', userController.getSingleUserEmail)
// route.get('/:id', userController.getSingleUserId)
// route.delete('/:id', userController.deleteSingleUser)
// route.put('/:id', userController.updateSingleUser)


route.post("/", userController.createUser)
route.get("/", auth("admin", "user"), userController.getAllUser)
route.get('/singleuser', auth("user"), userController.getSingleUserEmail)
route.get('/:id', userController.getSingleUserId)
route.delete('/:id', userController.deleteSingleUser)
route.put('/:id', userController.updateSingleUser)

export const userRouter = route


// api for taste ----------------------------------------------------------------------------------------------------------------------------------
// http://localhost:5000/api/v1/users -- get all user.
// http://localhost:5000/api/v1/users/4 -- get single user.
// http://localhost:5000/api/v1/users/singleuser  > { "email": "tariful@gmail.com", "password": "123456" }  -- get single user.
// http://localhost:5000/api/v1/users > {"name": "Tarif", "email": "tarif@gmail.com", "password":"123456", "role" : "user" } -- post user.
// http://localhost:5000/api/v1/users/4 > { "name" : "Tariful Islam", "role" : "user" } -- put
// http://localhost:5000/api/v1/users/1 >  ------- delete 
// http://localhost:5000/api/v1/auth/login >  {"email": "tariful@gmail.com", "password":"123456" }
// http://localhost:5000/api/v1/users -- copy jwt secret from login data  route and set it header auth and > request. --- get all user..
// http://localhost:5000/api/v1/users/singleuser -- copy jwt secret from login data route and set it header auth and > request. ---get single user..
// for get single user --- { "email": "tariful@gmail.com", "password": "123456" }