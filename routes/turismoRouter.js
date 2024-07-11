// src/routes/turismoRoutes.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- Importamos el módulo
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio turismoController (a realizarlo a futuro)
const turismoController = require('../controllers/turismoController');

// 4- En turismoController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al turismoController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', turismoController.getAllturismo);
//Ruta para la consulta de peliculas por id
router.get('/:id', turismoController.getTurismoById);
//Ruta para crear una pelicula
router.post('/', turismoController.createTurismo);
//Ruta para actualizar una pelicula
router.put('/:id', turismoController.updateTurismo);
//Ruta para borrar una pelicula
router.delete('/:id', turismoController.deleteTurismo);

//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar turismoController.js

