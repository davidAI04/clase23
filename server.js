//Importo los modulos necesarios
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')


const { appListar } = require('./app/vistas/vista.producto')
//Middleware globales
app.use(express.json())
app.use(cors())

//Globals config

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Levantamos nuestro servidor
async function bootstrap () {
  try {
    // await sequelize.authenticate();
    console.log('Conección estabilizada correctamente');
    app.listen(process.env.PORT, function () {
        console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar correctamebte con la Base de datos:', error);
  }
}

bootstrap();

appListar(app)