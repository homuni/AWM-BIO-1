import { async } from '@angular/core/testing';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'ask-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;                  // {1}

  constructor(
    private router: Router,
    private authService: AuthenticationService) {

}


ngOnInit() {
  /*
  if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
          if (confirm('New version available. Load New Version?')) {
              window.location.reload();
          }
      });
  }
  */

  this.isLoggedIn$ = this.authService.isLoggedIn; // {2}

  this.isLoggedIn$.subscribe(x => {
    if (x) {
        console.log('user is logged in - show home page');
        this.router.navigate(['/kontrolleur']);
        } else {
          console.log('no user is logged in - show landing page');
          this.router.navigate(['/kontrolleur']);
        }
    });


    /*
  const user = this.userService.getCurrentUser();
  console.log(user);

  if (user != null) {
    console.log('zeige home');
    this.router.navigate(['/home']);
  } else {
    console.log('zeige landing');
    this.router.navigate(['/landing']);
  }
  */
}

}
