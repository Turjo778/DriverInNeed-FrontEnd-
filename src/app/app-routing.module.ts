import { MonthlyComponent } from './monthly/monthly.component';
import { DailyComponent } from './daily/daily.component';
import { DriverprofileComponent } from './driverprofile/driverprofile.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import { LoginGuard } from './login.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DriverComponent } from './driver/driver.component';
import { ClientSignupPageComponent } from './client-signup-page/client-signup-page.component';
import { DriverSignupPageComponent } from './driver-signup-page/driver-signup-page.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';





import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';



const routes: Routes = [
  {path:'',component : LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'client',component:ClientComponent,canActivate:[LoginGuard]},
  {path:'driver_signup_page',component:DriverSignupPageComponent},
  {path:'client_signup_page',component:ClientSignupPageComponent},
  {path:'driver',component:DriverComponent,canActivate:[LoginGuard]},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admin',component:AdminComponent,canActivate:[LoginGuard]},
  {path:'clientprofile', component:ClientprofileComponent},
  {path:'driverprofile', component:DriverprofileComponent},
  {path:'daily',component:DailyComponent},
  {path:"monthly",component:MonthlyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { 
  
  constructor (){}

  
}
