import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BewertungRoutingModule } from './bewertung-routing.module';
import {BewertungComponent} from './bewertung.component';


import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [BewertungComponent],
  imports: [
    CommonModule,
    BewertungRoutingModule,
    
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,

    MatDividerModule,
 
    
  ]
})
export class BewertungModule { }
