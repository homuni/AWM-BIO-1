import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntragComponent} from './antrag.component';

const routes: Routes = [
  {
    path: '',
    component: AntragComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntragRoutingModule { }
