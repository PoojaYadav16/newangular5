import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path: "login", component: LoginComponent, title: "Login"
  },
  {
    path: "loginclick", component: MainpageComponent, title: "Login"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
