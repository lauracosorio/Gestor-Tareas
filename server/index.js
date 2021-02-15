const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer')
require('./db/connection')

const user = require('./routes/userRoutes');
const todo = require('./routes/todoRoutes')
const imagen = require('./routes/uploadImage')

//Initializations
const app = express();

const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
app.use(multerMid.single('file'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rutas
app.use('/', user);
app.use('/', todo);
app.use('/', imagen)

//Settings
app.set('port', 5000);

//Levantamiento del servidor 
app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})
