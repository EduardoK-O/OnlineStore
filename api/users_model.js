const conexion = require("./conexion")
const fs = require("fs");
const path = require("path");
module.exports = {
  insertar(name, username,password,rol ) {
    return new Promise((resolve, reject) => {
      
          conexion.query(`insert into users
            (name, username, password,rol)
            values
            (?, ?, ?, ?)`,
        [name, username, password, rol], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
        
        
    });  


  },


  

  

}