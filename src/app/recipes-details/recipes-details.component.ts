import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, OnDestroy, Component} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {   
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id=params['id'];
      console.log(id);
    });
     
    
  }
  receta = {nombre: "Pavel Razgovorov", descripcion: ""}
  //receta=this.recetas[this.id-1];
  
}

