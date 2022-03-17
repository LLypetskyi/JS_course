import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  constructor() { }
  dataVar = Date();
  currency = 200;
  percent = 0.20;
  upperCaseStr = 'hello from parent component'
  lowerCaseStr = 'HELLO FROM PARENT COMPONENT'
  sliceStr = 'цю стрінгу потрібно обрізати'
}
