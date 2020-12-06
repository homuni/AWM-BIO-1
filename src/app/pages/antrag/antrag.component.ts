import { Component, OnInit } from '@angular/core';

/* export interface Attmnt {
  value: string;
  viewValue: string;
}  */

@Component({
  selector: 'ask-antrag',
  templateUrl: './antrag.component.html',
  styleUrls: ['./antrag.component.css']
})
export class AntragComponent implements OnInit {

  selected = '';

  constructor() { }

  ngOnInit() {
  }

}
/* 
export class test {
  att: Attmnt[] = [
    {value: '1', viewValue: 'Zeitkorrektur'},
    {value: '1', viewValue: 'Arbeitsunfähigkeitsbescheinigung'},
  ];
} */