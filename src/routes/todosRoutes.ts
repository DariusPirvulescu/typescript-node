import { Router } from "express";

import { createTodo, getTodos, patchTodos } from "../controller/todoController";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", patchTodos);

router.delete("/:id");

export default router;
