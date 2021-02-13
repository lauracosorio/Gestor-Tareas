const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/GestorTareas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log(`BD conectada`))
  .catch((err) => console.log(err));
