import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { first } from 'rxjs/operators';
// import { LoadingController } from '@ionic/agular';

@Component({
  selector: 'ask-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public hide = true;
  returnUrl: string;
  loginfailed: boolean;

  isError = false;

  login = {
    email: '',
    password: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router, private authenticationService: AuthenticationService, /* public loadingController: LoadingController*/) { }

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
}

  async onSubmit() {

    //console.log(this.login.email);

    // const loading = await this.loadingController.create();
    // loading.present();
    this.authenticationService.login(this.login.email, this.login.password)
    .pipe(first())
    .subscribe(
        data => {
          // loading.dismiss();
          console.log(data);
          console.log(this.returnUrl);
          if (data != null && data.user != null) {
            this.router.navigate([this.returnUrl]);
          } else {

          }
        },
        error => {
            // loading.dismiss();

        });

  }
}
