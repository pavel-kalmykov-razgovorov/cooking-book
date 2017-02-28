import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-recipes-feed',
  templateUrl: './recipes-feed.component.html',
  styleUrls: ['./recipes-feed.component.css']
})
export class RecipesFeedComponent implements OnInit {
  //indexes: number[] = new Array(11);
  recetas = [
    { id: 1, nombre: "Ensalada César", descripcion: "La Ensalada César lleva muy pocos ingredientes (pollo, lechuga, picatostes y queso parmesano fundamentalmente) pero, gracias a la Salsa César que preparamos el otro día, el sabor de esta ensalada es realmente estupendo y por eso no necesita muchos más ingredientes para conseguir una ensalada estupenda." },
    { id: 2, nombre: "Pizza con piña", descripcion: "Una puta aberración!" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
