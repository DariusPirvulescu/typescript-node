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
  res.json({ tasks: TODOS });
};

export const patchTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const text = (req.body as { text: string }).text;

  const todo = TODOS.find((todo) => todo.id === id);

  if (!todo) {
    throw new Error("Cannot find the task with id: " + id);
  }

  todo!.text = text;
  res.json({ message: "Task updated", patchedTodo: todo });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    throw new Error("Cannot find the task with id: " + id);
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: `Task with id: ${id} has been deleted` });
};
