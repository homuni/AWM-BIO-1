import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WetterComponent } from './wetter.component';


const routes: Routes = [
  {
    path: '',
    component: WetterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WetterRoutingModule { }
