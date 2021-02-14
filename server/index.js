const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('./db/connection')
const cookieParser = require('cookie-parser'); 
const user = require('./routes/userRoutes');
const todo = require('./routes/todoRoutes')

//Initializations
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

//Rutas
app.use('/', user);
app.use('/', todo);

//Settings
app.set('port', 5000);

//Levantamiento del servidor 
app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})
