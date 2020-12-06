import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/kontrolleur',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: './pages/landing/landing.module#LandingModule'
      },
      {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'kontrolleur',
        loadChildren: './pages/kontrolleur/kontrolleur.module#KontrolleurModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'partie',
        loadChildren: './pages/partie/partie.module#PartieModule',
      },
      {
        path: 'bewertung/:id',
        loadChildren: './pages/bewertung/bewertung.module#BewertungModule',
      },
      {
        path: 'wetter',
        loadChildren: './pages/wetter/wetter.module#WetterModule',
      },
      {
        path: 'antrag',
        loadChildren: './pages/antrag/antrag.module#AntragModule',
      },
        ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
