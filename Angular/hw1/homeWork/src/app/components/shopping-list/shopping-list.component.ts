import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

items:any = [
{name: "bread",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "butter",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "milk",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "efir",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "kefir",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "cheese",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "fish",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "chicken",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "apples",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "bananas",
makeActive: false,
makeBold:  false,
addLine: false},

{name: "candies",
makeActive: false,
makeBold:  false,
addLine: false},
]

constructor() { }

}
