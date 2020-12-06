import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartieComponent } from './partie.component';


const routes: Routes = [
  {
    path: '',
    component: PartieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartieRoutingModule { }
