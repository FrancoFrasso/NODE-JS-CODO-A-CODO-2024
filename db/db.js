/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta 
 * con la base de datos. 
 * Esa conexión utilizará el objeto mysql provisto en en el módulo mysql2
 */

//1- Importamos el módulo mysql2
const mysql = require("mysql2");

//2- Configuramos conexion a la bd
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    port: 3306,
});

// conexion
connection.connect((err)=>{
    // En caso de error
    if(err){
        console.log("Error de conexión con el servidor: "+err);
        return;
    }

    // En caso OK
    console.log("Estado de conexión: CONECTADA");

    // Creamos una consulta
    const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS turismo_db';

    // Pasamos la consulta a la db
    connection.query(sqlCreatedb,(err, results)=>{
        //En caso de error
        if(err){
            console.log("Error de conexión con el servidor: "+err);
            return;
        }

        //exito
        console.log("Base de datos: CREADA/EXISTENTE/GARANTIZADA");

        // TABLA
        connection.changeUser({database: "turismo_db"}, (err)=>{
            if(err){
                console.log("Error al cambiar a la base de datos turismo_db: "+err);
                return;
            }

            // Generamos la consulta para crear la tabla
            const createTableQuery = `
            CREATE TABLE IF NOT EXISTS turismo (
                id INT AUTO_INCREMENT PRIMARY KEY,
                lugar VARCHAR(255) NOT NULL,
                precio INT(10) NOT NULL,
                dias INT(10) NOT NULL
            );
        `;

            // Pasamos la consulta
            connection.query(createTableQuery,(err, results)=>{
                //En caso de error
                if (err) {
                    console.error('Error al crear la tabla:', err);
                    return;
                }

                //Éxito
                console.log("Tabla: CREADA/EXISTENTE/GARANTIZADA");
            })
        })
    })
})

// Exportacion del módulo
module.exports = connection;