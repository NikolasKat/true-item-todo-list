const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4444;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

let todos = require("./db.json");

const generateId = () => {
   return Math.random().toString(36).substring(2, 15);
};

app.get("/todos", (req, res) => {
   console.log("Get all todos");
   res.json(todos.todos);
});

app.post("/todos", (req, res) => {
   console.log("Create new todo", req.body);
   const newTodo = {
      text: req.body.text,
      completed: false,
      id: generateId(),
   };
   todos.todos.push(newTodo);
   res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
   const todoId = req.params.id;
   console.log(`Delete todo with id: ${todoId}`);

   todos.todos = todos.todos.filter(
      (course) => course.id.toString() !== todoId
   );
   res.status(204).send({ message: "Todo was deleted" });
});

app.put("/todos/:id", (req, res) => {
   const todoId = req.params.id;

   todos.todos = todos.todos.map((course) =>
      course?.id?.toString() === todoId
         ? (course = {
              id: course.id,
              text: course.text,
              completed: !course.completed,
           })
         : course
   );

   res.status(201).send({ message: "Status was changed" });
});

app.listen(port, () => {
   console.log(`Server started!`);
});
