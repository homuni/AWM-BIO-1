import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ask-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  public isLoggedIn$: Observable<boolean>;                  // {1}

  // data used in the views
  public title = 'Biomüll AWM ';
  public currentUser = null;

  constructor(
    private router: Router,
    private authService: AuthenticationService) {

      // braucht es das oder macht das dann die subscription automatisch
      this.currentUser = this.authService.getCurrentUser();

    }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/landing']);
  }


}
