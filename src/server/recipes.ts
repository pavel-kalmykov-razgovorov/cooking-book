export class Recipe{

    constructor() { }

load(){
var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
   host: 'eu-cdbr-azure-west-d.cloudapp.net',
   user: 'b917c79dcd2c3d',
   password: '376ca238',
   database: 'dbcookingbook',
   port: 3306
});

var app = express();


connection.connect(function(error){
   if(error){
      //throw error;
   }else{
      console.log('Conexion correcta.');
   }
});


app.get("/", function(req, res) {
  connection.query('SELECT * FROM recetas', function(error,rows, fields){
   
   if(error){
      throw error;
   }else{
      //res.json(rows);
      console.log(rows);
   }
 });
});
connection.end();
  }
}