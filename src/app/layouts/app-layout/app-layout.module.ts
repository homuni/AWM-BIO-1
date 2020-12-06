import { AppLayoutComponent } from './app-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { MatSidenavModule, MatToolbarModule, MatBadgeModule, MatButtonModule, MatIconModule, MatCardModule, MatSnackBarModule, MatDividerModule, MatSlideToggleModule, MatCheckboxModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
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
  ]
})
export class AppLayoutModule { }
