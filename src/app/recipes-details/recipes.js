 /* var mysql = require('mysql');
  var express=require('express');
  var connection = mysql.createConnection({
   host: 'cookingbook.database.windows.net',
   user: 'joaquin',
   password: 'taes_1234',
   database: 'BDTAES',
   port: 1433
});

var app = express();

var connectionString = "Driver={ODBC Driver 13 for SQL Server};Server=tcp:cookingbook.database.windows.net,1433;Database=BDTAES;Uid=joaquin@cookingbook;Pwd={your_password_here};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30";
connection.open(connectionString,function(error,conn){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');

        
        conn.queryRaw('SELECT * FROM usuarios', function(error,rows){
        //connection.end();
        if(error){
            throw error;
        }else{
            //res.json(rows);
            console.log(rows);
        }
        });
        
   }
});

app.listen(1433);*/

  var Connection = require('tedious').Connection;  
    var config = {  
        userName: 'joaquin',  
        password: 'taes_1234',  
        server: 'cookingbook.database.windows.net',  
        // When you connect to Azure SQL Database, you need these next options.  
        options: {encrypt: true, database: 'BDTAES'}  
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed. 
        if(err) console.log(err); 
        console.log("Connected");  
        executeStatement();  
    });  

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  

    function executeStatement() {  
        request = new Request("SELECT * FROM usuarios;", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  

        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        connection.execSql(request);  
    }
