// Configuración del Servidor

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// environment variables
app.set('port', process.env.PORT || 4000);

// Peticiones de otros Servidores
app.use(cors());

app.use(morgan('dev'));

// Para enteder JSON
app.use(express.json());

// Para entender Formularios
app.use(express.urlencoded({ extended: false }));

// Llamando las Rutas y creando API
app.use('/api/employees', require('./routes/employees.routes'));

module.exports = app;