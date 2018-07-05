import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recepies: Recepie[] = [
    new Recepie('Test', 'Test recepie', 'https://images.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg'),
    new Recepie('Test', 'Test recepie', 'https://images.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
