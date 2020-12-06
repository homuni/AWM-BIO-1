import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntragRoutingModule } from './antrag-routing.module';
import {AntragComponent} from './antrag.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [AntragComponent],
  imports: [
    CommonModule,
    AntragRoutingModule,

    MatDividerModule,
    MatButtonModule,

    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,

  
    
  ]
})
export class AntragModule { }
