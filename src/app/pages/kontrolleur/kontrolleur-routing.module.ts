import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontrolleurComponent } from './kontrolleur.component';


const routes: Routes = [
  {
    path: '',
    component: KontrolleurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KontrolleurRoutingModule { }
