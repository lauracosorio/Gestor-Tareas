const { Router } = require("express");
const registro = Router();
const User = require("../models/SignUp");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const verify = require('./vToken');
const { registerValidation, loginValidation } = require("../validation");

//nodemailer
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

let transport = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smt.gmail.email",
    // port: 587,
    // secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
);

registro.post("/registro", async (req, res) => {
  //validation
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //destructuring
  const { name, email, password } = req.body;

  //checking de user already exist
  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    res.json({
      message: "El usuario ya existe",
    });

    return;
  }

  //encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //new usser
  const newUser = new User({ name, email, password: hashPassword });

  await newUser.save();
  // res.json({
  //   message: "Usuario registrado con éxito!",
  // });

  //create token
  const token = jwt.sign({email}, process.env.SECRET_TOKEN)
  res.header('user-token', token).send(token)
});

registro.post("/login", async (req, res) => {
  //validation
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //destructuring
  const { email, password } = req.body;

  //checking de user already exist
  const user = await User.findOne({ email });
  if (!user) {
    res.status(500);
    res.json({
      message: "Datos invalidos",
    });
    return; 
  }

  //password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    res.status(400).send("Contraseña Invalida");
  }

  //create token
  const token = jwt.sign({email}, process.env.SECRET_TOKEN)
  res.header('user-token', token).send(token)
  // res.cookie('token', token)
  // res.send("Bienvenido");
});

registro.get("/dashboard", verify, async (req, res) => {
  const users = await User.find().sort("-_id");
  res.json(users);
});

module.exports = registro;
