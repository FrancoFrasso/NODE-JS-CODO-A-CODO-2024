/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllturismo
 * .getturismoById
 * .createturismo
 * .updateturismo
 * .deleteturismo
 */

//1- Importamos el módulo db.js
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.

const db = require("../db/db.js");

//2- .getAllturismo
const getAllturismo = (req, res)=>{
    // creamos una consulta
    const sql = 'SELECT * FROM turismo';

    //Eviamos la consulta a la bbdd
    db.query(sql, (err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json(result)
    });
};

//3- .getturismoById
const getTurismoById = (req, res)=>{
    //1- Obtenemos la info de id que viene desde el cliente
    // const id = req.params.id;
    // Esta es una notacion de desestructuración {id}
    const {id} = req.params;

    // creamos la consulta
    // Creamos la consulta con marcador de posición ?
    const sql = 'SELECT * FROM turismo WHERE id = ?';

    // Enviamos la consulta a la bbdd
    db.query(sql,[id],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json(result)
    });
}

//4- createturismo
const createTurismo = (req, res)=>{
    // desestructuramos la req
    const {lugar, precio, dias} = req.body;

    // creamos la consulta
    const sql = 'INSERT INTO turismo (lugar, precio, dias) VALUES (?, ?, ?)';

    //Enviamos la consulta a la bbdd
    db.query(sql,[lugar, precio, dias],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Viaje creado"})
    });
}

//5- updateturismo
const updateTurismo = (req, res)=>{
    // desestructuracion de la consulta
    const {id} = req.params;
    const {lugar, precio, dias} = req.body;

    // creamos la consulta sql
    const sql = 'UPDATE turismo SET lugar = ?, precio = ?, dias = ? WHERE id = ?';

    // enviamos consulta a la bbdd
    db.query(sql,[lugar, precio, dias,id],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"viaje actualizado"})
    });
}

//6- Delete
const deleteTurismo = (req, res)=>{
    // desestructuracion
    const {id} = req.params;

    // consulta sql
    const sql = 'DELETE FROM turismo WHERE id = ?';

    // Pasamos la consulta
    db.query(sql,[id], (err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Viaje borrado"})
    });
}

//7- Exportamos los módulos
module.exports = {
    getAllturismo,
    getTurismoById,
    createTurismo,
    updateTurismo,
    deleteTurismo
}

// 8- Pasamos a codificar db.js