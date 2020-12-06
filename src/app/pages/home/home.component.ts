import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/_services/calendar.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'ask-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  day = new Date();
  user: any;
  dates: any;


  constructor(private calendarService: CalendarService, private authService: AuthenticationService) { }

  ngOnInit() {
    console.log('load home page');

    this.user = this.authService.getCurrentUser();

    this.day.setDate(this.day.getDate() + 1);

    this.initList();

  }

  initList() {

    console.log('init list for user:', this.user.user.id);
    console.log('init list for day:', this.day);

    this.calendarService.day(this.user.user.id, this.day)
    .pipe(first())
    .subscribe(
        data => {

            this.dates = data;

            console.log('data received from server:', data);

            this.dates.sort((a: { date: { begin: number; }; }, b: { date: { begin: number; }; }) => {
              if (a.date.begin > b.date.begin) {
                return 1;
              } else if(a.date.begin < b.date.begin) {
                return -1;
              } else {
                return 0;
              }
            });
          },
        error => {
            this.dates = [];
        });



     // this.prevDay.setDate(this.day.getDate() - 1);
     // this.nextDay.setDate(this.day.getDate() + 1);

  }

  onValueChange(event: any) {
    console.log(event.value);
    this.day = event.value;

    this.initList();
  }

}
