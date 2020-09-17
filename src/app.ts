import express, { Request, Response, NextFunction } from "express";
// import the json middleware 
// import { json } from "body-parser";

import todoRoutes from "./routes/todosRoutes";

const app = express();

app.use(express.json())

app.use("/todos", todoRoutes);

app.use((err: Error ,req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})


app.listen(3000, function () {
  console.log("Server has started at port 3000")
})