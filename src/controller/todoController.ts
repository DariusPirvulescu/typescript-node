import { RequestHandler } from "express";

import { Todo } from "../model/todoModel";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.json({ message: "New task created", task: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({tasks: TODOS})
}

export const patchTodos: RequestHandler = (req, res, next) => {
  const id = req.params.id
  const text = req.body.text

  const todo = TODOS.find(todo => todo.id === id)

  todo!.text = text
  res.json({patchedTodo: todo})
  
}