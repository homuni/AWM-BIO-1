import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { KontrolleurRoutingModule } from './kontrolleur-routing.module';
import { KontrolleurComponent } from './kontrolleur.component';

/* import fuer materials von Angular */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [KontrolleurComponent],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    KontrolleurRoutingModule,
    CommonModule,
    MatIconModule
  ],
  
})
export class KontrolleurModule { }
