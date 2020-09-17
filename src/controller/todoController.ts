import { RequestHandler } from "express";

import { Todo } from "../model/todoModel";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo)

  res.json({message: "New task created", task: newTodo})
}