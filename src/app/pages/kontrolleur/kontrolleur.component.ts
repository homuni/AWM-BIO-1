import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { TourService } from 'src/app/_services/tour.service';

@Component({
  selector: 'ask-kontrolleur',
  templateUrl: './kontrolleur.component.html',
  styleUrls: ['./kontrolleur.component.css']
})
export class KontrolleurComponent implements OnInit {

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.tourService.init();
  }



Funktionauswahl1(){
  document.getElementById("iconpin1").style.color="red";
  document.getElementById("iconpin2").style.color="black";
  document.getElementById("iconpin3").style.color="black";
/*   document.getElementById("locpin1").style.fontSize="300px"; */
}
Funktionauswahl2(){
  document.getElementById("iconpin1").style.color="black";
  document.getElementById("iconpin2").style.color="red";
  document.getElementById("iconpin3").style.color="black";
/*   document.getElementById("locpin2").style.fontSize="300px"; */
}
Funktionauswahl3(){
  document.getElementById("iconpin1").style.color="black";
  document.getElementById("iconpin2").style.color="black";
  document.getElementById("iconpin3").style.color="red";
/*   document.getElementById("locpin3").style.fontSize="300px";*/
}

}