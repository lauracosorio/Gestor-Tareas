const { Router } = require("express");
const todo = Router();
const Todos = require("../models/todoSchemas");
const User = require("../models/userSchemas");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./vToken");
const { registerValidation, loginValidation } = require("../validation");

todo.post("/createTodo", verify, async (req, res) => {
  const { autenticacion } = req.headers;
  const [, token] = autenticacion.split(" ");
  const [email, password] = token.split(":");

  // console.log(req.body)
  //destructuring
  const { imagen, nombre, prioridad, estado, vencimiento } = req.body;

  //buscar usuario
  const user = await User.findOne({ email });

  if (!user) {
    res.status(403);
    res.json({
      message: "invalid access",
    });
    return;
  }

  //encrypt password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    res.status(400).send("Contraseña Invalida");
  }

  const todos = await Todos.find({ userId: user._id });
  if (todos) {
    await Todos.create({
      userId: user._id,
      imagen,
      nombre,
      prioridad,
      estado,
      vencimiento,
    });
  } else {
    await todos.save();
  }

  res.json("Tarea guardada con éxito");
});

todo.get("/todos", verify, async (req, res) => {
  const { autenticacion } = req.headers;
  const [, token] = autenticacion.split(" ");
  const [email, password] = token.split(":");

  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    res.status(403);
    res.json({
      message: "invalid access",
    });
    return;
  }

  //encrypt password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    res.status(400).send("Contraseña Invalida");
  }

  const todos = await Todos.find({ userId: user._id });
  res.json(todos);
});

todo.put("/editarTodo/", verify, async (req, res) => {
  const { imagen, nombre, prioridad, estado, vencimiento, _id } = req.body;

  Todos.findByIdAndUpdate(_id, { $set: req.body }, (err, resultado) => {
    if (err) {
      console.log(err);
    }
    res.json({ message: resultado });
  });
});

todo.delete(`/deleteTodo/:id`, verify, async (req, res) => {
  const _id = req.params.id;
  const deleteTodo = await Todos.findByIdAndDelete(_id);
  res.json({ message: "Tarea eliminada" });
});

module.exports = todo;
