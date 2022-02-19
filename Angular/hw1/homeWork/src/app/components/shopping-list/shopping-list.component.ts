import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
items: string [] = ['bread', 'butter', 'milk', 'kefir', 'cheese','fish', 'chicken', 'apples', 'bananas', 'candies']
makeActive: boolean = false;
makeBold: boolean = false;
addLine: boolean = false;

// removeActive: boolean = false;
// removeBold: boolean = false;
// removeLine: boolean = false;
  constructor() { }

  

}
