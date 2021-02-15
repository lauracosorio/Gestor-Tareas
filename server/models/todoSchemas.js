const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const ObjectId = require("mongoose").Types.ObjectId;

const todo = new Schema({
  userId: mongoose.Schema.ObjectId,
  todos: [
    {
      imagen: {
        type: String,
      },
      nombre: {
        type: String,
        required: true,
      },
      prioridad: {
        type: String,
        enum: ["Importante", "Urgente"],
        required: true,
      },
      estado: {
        type: String,
        enum: ["Por_Realizar", "Realizando", "Realizada"],
        required: true,
      },
      vencimiento: {
        type: Date,
        required: true,
      }
    }
  ]
});

module.exports = model("todo", todo);
