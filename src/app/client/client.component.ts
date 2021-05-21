import { Validators } from '@angular/forms';
import { ClientserviceService } from './../clientservice.service';
import { ClientprofileComponent } from './../clientprofile/clientprofile.component';
import { SharedService } from './../shared.service';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  daily: string="/assets/image/daily.png"
  weekly: string="/assets/image/weekly.jfif"
  monthly: string="/assets/image/monthly.png"
  display = false
  display1 = false
  data:any={}
  public phone:any
 
  public name:any
  public clientdata:any=[]
  public displayOfferBox=true
  public showCurrentService=false
  public fname:any
  public lname:any
  imgSrc:string="/assets/image/null.png"

 
  public drivername:any
  public driverfirstname:any
  public driverlastname:any
  public startdate:any
  public enddate:any
//  val:any
//   random: any=[]
  // constructor(private login:LoginService, private shared:SharedService, ) { }
  constructor(private clientserv:ClientserviceService ) {}
  ngOnInit(): void {
    this.fname=localStorage.getItem("cfname")
    this.lname=localStorage.getItem("clname")
   this.phone=localStorage.getItem("cphone")
 
   
   this.clientserv.getClientImg(this.phone).subscribe(img=>{
    this.imgSrc="data:image/png;base64,"+img
   })
    
   this.clientserv.CheckClientInService(this.phone).subscribe(data=>{
   
   if (data!=null){
    this.displayOfferBox=false
    this.showCurrentService=true
   }

   this.driverfirstname=data[0]
   this.driverlastname=data[1]
   this.drivername=( this.driverfirstname+" "+this.driverlastname)
   this.startdate=data[2]
   this.enddate=data[3]

    
   })
   
    this.name=(this.fname+" "+this.lname)
   
   
  
  }
//  
onPress() {
 
  this.display = !this.display;
  if(this.display=this.display){
    this.display1=false
  }
   
  
}
// 
onPressMonthly(){
  this.display1 = !this.display1;
  if(this.display1=this.display1){
    this.display=false
  }
  
  
}
}
