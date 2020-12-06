import { AwmTour } from './../../_services/tour.service';
import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/_services/tour.service';


@Component({
  selector: 'ask-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})


export class PartieComponent implements OnInit {

  panelOpenState = false;

  tour: AwmTour;

  private tons;

  tourCompleted = false;

  constructor(private tourService: TourService) {
/*     this.tons = {
      first: false,
      second: false,
      third: false,
    } */
  }

  ngOnInit() {
    this.tour = this.tourService.getTour();

    // sind schon alle Tonnen geprüft???
    // Annahme: tor komplett
    this.tourCompleted = true;
    // Die Fehlermeldung kann hier zwar ignoriert werden, weil es trotzdem läuft
    // Wahrscheinlich geht der Build nicht
    // Es muss eine Datentyp deklariert werden, d.h. eine eigene Klasss, ein sog. Model
    for (let ton of this.tour.tons) {
      if (ton.checked == false) {
        this.tourCompleted = false;
      }

    }

  }

};

