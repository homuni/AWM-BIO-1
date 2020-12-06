import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WetterRoutingModule } from './wetter-routing.module';
import {WetterComponent} from './wetter.component';


@NgModule({
  declarations: [WetterComponent],
  imports: [
    CommonModule,
    WetterRoutingModule,

    
  ]
})
export class WetterModule { }
