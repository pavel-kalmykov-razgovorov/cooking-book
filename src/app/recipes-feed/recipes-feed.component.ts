import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-recipes-feed',
  templateUrl: './recipes-feed.component.html',
  styleUrls: ['./recipes-feed.component.css']
})
export class RecipesFeedComponent implements OnInit {
  indexes: number[] = new Array(11);
  constructor() { }

  ngOnInit() {
  }

}
