import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartieRoutingModule } from './partie-routing.module';
import { PartieComponent } from './partie.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [PartieComponent],
  imports: [
    CommonModule,
    PartieRoutingModule,
    MatSliderModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonModule,
  ]
})
export class PartieModule { }
