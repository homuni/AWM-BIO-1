import { Component, OnInit } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from 'src/app/_services/tour.service';

@Component({
  selector: 'ask-bewertung',
  templateUrl: './bewertung.component.html',
  styleUrls: ['./bewertung.component.css']
})



export class BewertungComponent implements OnInit {

  selected = '';

  tonnenId = "";
  // für den Zugriff auf die Routen müssen diese Dienste verwendet werden
  constructor(private route: ActivatedRoute, private router: Router, private tourService: TourService) {
  }

  ngOnInit() {
    // jetzt holen wir dien Parameter mit dem Namen id aus der Rote raus
    // das der parameter den Namen id hat, steht in der Definition der Routen, d.h. in app-routing_module
    this.tonnenId = this.route.snapshot.params['id'];
  }

  Funktiongreen(){
    document.getElementById("buttongreen").style.backgroundColor= "#21610B";
    document.getElementById("buttonyellow").style.backgroundColor= "yellow";
    document.getElementById("buttonred").style.backgroundColor= "red";
    document.getElementById("foto").style.backgroundColor= "";
    
  }
  Funktionyellow(){
    document.getElementById("buttonyellow").style.backgroundColor= "#D7DF01";
    document.getElementById("buttongreen").style.backgroundColor= "rgb(2, 179, 2)";
    document.getElementById("buttonred").style.backgroundColor= "red";
    document.getElementById("foto").style.backgroundColor= "";
    
  }
  Funktionred(){
    document.getElementById("buttonred").style.backgroundColor= "#B40404";
    document.getElementById("buttongreen").style.backgroundColor= "rgb(2, 179, 2)";
    document.getElementById("buttonyellow").style.backgroundColor= "yellow";
    alert("Bei dieser Bewertung bitte ein Bild hinterlegen!");
    
  }
  Funktionfoto(){
    document.getElementById("foto").style.backgroundColor= "";
}

  onSubmit() {
    console.log("onsubmit");
    this.tourService.tonChecked(this.tonnenId);
    this.router.navigate(['/partie']);
  }

}
