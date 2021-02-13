const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const registro = require('./routes/signUp');

require('./db/connection')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
app.set('port', 5000);


//Rutas
app.use('/', registro);

//Levantamiento del servidor 
app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})
