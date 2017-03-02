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
  public user;
  recetas = [
    { id: 1, nombre: "Ensalada César", descripcion: "La Ensalada César lleva muy pocos ingredientes (pollo, lechuga, picatostes y queso parmesano fundamentalmente) pero, gracias a la Salsa César que preparamos el otro día, el sabor de esta ensalada es realmente estupendo y por eso no necesita muchos más ingredientes para conseguir una ensalada estupenda.", imagen: "assets/img/ensaladaCesar.jpg", likes: 20, comentarios: 8,autor: "Julia Garcia", nick: "yulius", avatar: "assets/img/pollito.png"},
    { id: 2, nombre: "Fideos chinos fritos con pollo y verduras", descripcion: "En nuestra cocina siempre tenemos fideos chinos como fondo de armario, te salvan una cena rápida o para preparar el plato de hoy, con pollo y verduras salteadas en el wok. Esta receta admite un montón de variaciones, tanto en los ingredientes como en la preparación. Un plato para los que les guste crear y divertirse cocinando.", imagen: "assets/img/fideosChinos.jpg", likes: 5, comentarios: 0,autor: "Joaquin Anton", nick: "joaquin_95", avatar: "assets/img/Boo.png"},
    {id: 3, nombre: "Pizza carbonara", descripcion: "La receta de Pizza Carbonara viene a ser una versión de la pasta Carbonara, salsa de la que también hay muchas variantes, así que hoy os mostramos nuestra elaboración de la pizza Carbonara y esperamos también que nos contéis la vuestra, si le añadís cebolla, champiñones o un toque único y especial.", imagen: "assets/img/pizzaCarbonara.jpg", likes: 8, comentarios: 4,autor: "Pavel Razgovorov", nick: "paveltrufi", avatar: "assets/img/donald-trump.jpg" },
    {id: 4, nombre: "Quesadilla de ternera brava", descripcion: "Las quesadillas son una elaboración de la cocina mexicana que nos encanta, son fáciles de hacer, rápidas y muy versátiles, nos da tantas posibilidades de combinar ingredientes que muchas veces resulta difícil decidirse de qué rellenar las tortillas mexicanas, y he aquí una propuesta.", imagen: "assets/img/quesadillasTernera.jpg", likes: 17, comentarios: 3,autor: "Pedro Moya", nick: "pepo", avatar: "assets/img/eminem.jpg" },
    {id: 5, nombre: "Focaccia de cebolla y Grana Padano", descripcion: "Para acompañar nuestra comida de hoy hemos preparado esta Focaccia de cebolla y Grana Padano, como sabéis, la focaccia es ‘prima’ de la pizza, un pan plano tradicional de la cocina italiana que nos da muchas posibilidades para enriquecerlo con distintos ingredientes y por tanto, sabores.", imagen: "assets/img/focaccia.jpg", likes: 9, comentarios: 2,autor: "Jorge Poveda", nick: "pove", avatar: "assets/img/gato.png" },
    {id: 6, nombre: "Quiche Lorraine", descripcion: "Para mí la receta de quiche Lorraine es el plato estrella de esta Navidad, porque es muy fácil de preparar y está deliciosa tanto fría como caliente. Esta tarta salada recibe su nombre de la región francesa donde nació y se puede preparar con muchos ingredientes aunque la versión clásica lleva bacon ahumado y queso gruyère.", imagen: "assets/img/quicheLorraine.jpg", likes: 26, comentarios: 5,autor: "Jose Domenech", nick: "JDLK7", avatar: "assets/img/oso.jpeg" }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
