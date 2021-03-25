import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent },
  {path: 'registration' , component: RegistrationComponent},
  {path:'home',component:HomePageComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'unauthorized',component:UnauthorizedComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
