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

  private heroesUrl = '/server/recipes';  // URL to web api

  private listeUrl = "http://localhost:4200";
  constructor(private activatedRoute: ActivatedRoute,private http: Http) {   
    if (window.location.href.startsWith(this.listeUrl)){
      this.heroesUrl = "http://localhost:3000" + this.heroesUrl;
    }
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id=params['id'];
      console.log(id);
    });
  }
  receta = {nombre: "Pavel Razgovorov", descripcion: ""}
 
}

