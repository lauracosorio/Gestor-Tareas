const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const url = process.env.DB_CONNECT;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log(`BD conectada`))
  .catch((err) => console.error(`Error al conectarse a la BD \n${err}`));


