import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';
import { AppLayoutModule } from './layouts/app-layout/app-layout.module';
import { CalendarService } from './_services/calendar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatSidenavModule } from '@angular/material';
// import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatBadgeModule, MatSnackBarModule } from '@angular/material';
// import { MatDividerModule, MatSlideToggleModule, MatCheckboxModule } from '@angular/material';
// import { MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthenticationService } from './_services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_guards/auth.guard';
import { TourService } from './_services/tour.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /*
    MatSidenavModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatListModule,
    */
    AppLayoutModule,
    LoginLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    CalendarService,
    TourService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
