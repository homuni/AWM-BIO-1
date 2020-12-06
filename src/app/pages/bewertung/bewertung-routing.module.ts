import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BewertungComponent} from './bewertung.component';


const routes: Routes = [
  {
    path: '',
    component: BewertungComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BewertungRoutingModule { }
