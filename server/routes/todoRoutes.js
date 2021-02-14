const { Router } = require("express");
const todo = Router();
const Todos = require("../models/todoSchemas");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./vToken");
const { registerValidation, loginValidation } = require("../validation");

todo.post("/createTodo", async (req, res) => {
  //destructuring
  const { nombre, prioridad, estado, vencimiento } = req.body;

  //new usser
  const newTodo = new Todos({ nombre, prioridad, estado, vencimiento });

  await newTodo.save();
  res.json({
    message: "Taraea registrada con éxito!",
  });
});

todo.get("/todos", async(req, res)=>{
    const getTodos = await Todos.find().sort('-_id')
    res.json(getTodos);
    console.log(getTodos)
})

todo.put("/editarTodo/", async (req, res) =>{
    const { nombre, prioridad, estado, vencimiento, _id } = req.body; 
    // const id = req.params.id;
      
    Todos.findByIdAndUpdate(_id,{$set:req.body},(err,resultado)=>{
       if(err){
           console.log(err)
       }
       res.json({'message':resultado});
    })
})

todo.delete(`/deleteTodo/:id`, async(req,res)=>{

    const _id = req.params.id;
    const deleteTodo = await Todos.findByIdAndDelete(_id);
    res.json({message:'Tarea eliminada'})

});

module.exports = todo;
