import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, OnDestroy, Component} from '@angular/core';
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id=params['id'];
      console.log(id);
    });
  }
  receta = {nombre: "Pavel Razgovorov", descripcion: ""}
//1.
loadEmployees() {
  var sql = require('mssql');
//2.
var config = {
    server: 'localhost',
    database: 'Company',
    user: 'sa',
    password: 'sa',
    port: 1433
    //4.
}
    var dbConn = sql.Connection(config);
    //5.
    dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.
        request.query("select * from EmployeeInfo").then(function (recordSet) {
            console.log(recordSet);
            dbConn.close();
        }).catch(function (err) {
            //8.
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });
}

};
//3.

