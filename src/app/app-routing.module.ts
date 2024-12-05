import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ChangepasswordComponent } from './component/changepassword/changepassword.component';

const routes: Routes = [
    { path: 'change-password', component: ChangepasswordComponent },
    { path: '', component: HomeComponent},
    { path: 'login',  component:  LoginComponent},
    { path: '**',   redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
