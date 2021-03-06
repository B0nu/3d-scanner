import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { LoginComponent } from './login/login.component';
import { 
  AuthGuardService  as AuthGuard
} from '../app/services/authguard.service';
const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
   
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
      canActivate: [AuthGuard],
  },
  {
    path:'downloads',
    
    component:DownloadsComponent
  },

]},
{
path:"login",
component:LoginComponent
},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
