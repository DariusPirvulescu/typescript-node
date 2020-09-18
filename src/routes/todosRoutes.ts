import { Router } from "express";

import {
  createTodo,
  getTodos,
  patchTodo,
  deleteTodo,
} from "../controller/todoController";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", patchTodo);

router.delete("/:id", deleteTodo);

export default router;
