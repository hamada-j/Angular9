const mysql = require('mysql');
let pool = null;

// Conecta con la base de datos que tenemos con WAMP y HeidiSQL
exports.connect = () => {
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })
    // Desde cualquier punto de la aplicacion en el que acceda a global.db voy a estar accediendo a este pool (de este archivo)
    global.db = pool;
}


// Formas de exportar
/*
module.exports = {
    la clave 'conectar' es igual a la funcion/variable connect
    conectar: connect,
    fnBorrar: funcionABorrar
}

exports.connect = () => {

}
 */