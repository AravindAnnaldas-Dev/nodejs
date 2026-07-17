import express, { json } from "express";
import { todos } from "./todos.js";
import { config } from "dotenv";
config();

const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to home page!");
});

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);
  const todo = todos.find((t) => t.id === todoId);

  res.status(200).json(todo);
});

app.post("/todos", (req, res) => {
  const body = req.body;

  if (!body.task) {
    return res.status(400).json({ message: "Task is missing!" });
  }
  if (!body.tags) {
    return res.status(400).json({ message: "Tags are missing!" });
  }
  if (!body.status) {
    return res.status(400).json({ message: "Status is missing!" });
  }

  const newTodo = {
    id: todos[todos.length - 1].id + 1,
    ...body,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);
  const body = req.body;

  const todoIndex = todos.findIndex((t) => t.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found!" });
  }

  if (body) {
    todos[todoIndex] = {
      id: todoId,
      ...body,
    };
  }

  res.status(200).json(todos[todoIndex]);
});

app.delete("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  const todoIndex = todos.findIndex((t) => t.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found!" });
  }

  todos.splice(todoIndex, 1);

  res.status(200).json({ message: "Todo deleted successfully!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
