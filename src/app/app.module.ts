import { LoginGuard } from './login.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { DriverSignupPageComponent } from './driver-signup-page/driver-signup-page.component';
import { ClientSignupPageComponent } from './client-signup-page/client-signup-page.component';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DriverComponent } from './driver/driver.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import { DriverprofileComponent } from './driverprofile/driverprofile.component';
import { DailyComponent } from './daily/daily.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JoblistComponent } from './joblist/joblist.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { DriverdataComponent } from './driverdata/driverdata.component';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { DriverAccountComponent } from './driver-account/driver-account.component';
import { MdbModule } from 'mdb-angular-ui-kit';






@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    LoginComponent,
    DriverSignupPageComponent,
    ClientSignupPageComponent,
    CarouselComponent,
    SideNavComponent,
    DriverComponent,
    AdminloginComponent,
    AdminComponent,
    ClientprofileComponent,
    DriverprofileComponent,
    DailyComponent,
    MonthlyComponent,
    JoblistComponent,
    ClientlistComponent,
    DriverdataComponent,
    ServicelistComponent,
    DriverAccountComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdbModule
   



      ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
