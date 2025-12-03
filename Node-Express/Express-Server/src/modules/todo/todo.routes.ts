import express, { Request, Response } from "express";
import { todosControllers } from "./todo.controller";


const router = express.Router();

router.post("/", todosControllers.createTodosControler);

router.get("/", todosControllers.getTodosControler);

router.get("/:id", todosControllers.getSingleTodoControler);

router.put("/:id", todosControllers.updateTodoControler);

router.delete("/:id", todosControllers.deleteTodoControler);

export const todoRoute = router;