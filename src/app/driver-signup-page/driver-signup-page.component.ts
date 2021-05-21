
import { DriverserviceService } from './../driverservice.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators, } from '@angular/forms'


@Component({
  selector: 'app-driver-signup-page',
  templateUrl: './driver-signup-page.component.html',
  styleUrls: ['./driver-signup-page.component.css']
})
export class DriverSignupPageComponent implements OnInit {
  public Driverform: FormGroup;
  public pass1:any
  public pass2:any
  public Fname:any;
  public Lname:any;
  public address:any;
  public phnNumber:any;
  public option:any;
  public nid:any;
  public license:any;
 

  constructor(private driver:DriverserviceService, private fb:FormBuilder) {
   
    this.Driverform = this.fb.group({
      DriverFname:['',Validators.required],
      DriverLname:[''],
      DriverEmail:[''],
      DriverPassword:[''],
      DriverAddress:[''],
      DriverPhone:[''],
      RadioOptions:['',Validators.required],
      DriverNid:[''],
      DriverLicense:['']
    })


  }

  ngOnInit(): void {}
  removeFname(event:any){
    console.log(event.target.value)
    if(event!=null){
      const error: HTMLElement = document.getElementById("error-fname") as HTMLElement
      error.style.visibility = "hidden";
    }
  }
  removeLname(event:any){
    if(event!=null){
      const error: HTMLElement = document.getElementById("error-lname") as HTMLElement
      error.style.visibility = "hidden";
    }
  }
  removeAddress(event:any){
    if(event!=null){
      const error: HTMLElement = document.getElementById("error-address") as HTMLElement
      error.style.visibility = "hidden";
    }
  }
  removePhone(event:any){
    if(event!=null){
      const error: HTMLElement = document.getElementById("error-phone") as HTMLElement
      error.style.visibility = "hidden";
    }
  }
  removeNID(event:any){
    if(event!=null){
      const error: HTMLElement = document.getElementById("error-nid") as HTMLElement
      error.style.visibility = "hidden";
    }
  }
  removeLicense(event:any){
    if(event!=null){
      const error: HTMLElement = document.getElementById("error-license") as HTMLElement
      error.style.visibility = "hidden";
    }
  }
 getDriverValue(){
  this.pass1 = document.getElementById("DriverPassword");
  this.pass2 = document.getElementById("RDriverPassword");
  this.Fname = document.getElementById("DriverFname");
  this.Lname = document.getElementById("DriverLname");
  this.address = document.getElementById("DriverAddress");
  this.phnNumber=document.getElementById("DriverPhone")
  this.nid=document.getElementById("DriverNid")
  this.license=document.getElementById("DriverCarLicense")
  
  if(this.Fname.value==""){
    const error: HTMLElement = document.getElementById("error-fname") as HTMLElement
    error.innerHTML="Enter First Name"
  
  }
  else if(this.Lname.value==""){
    const error: HTMLElement = document.getElementById("error-lname") as HTMLElement
    error.innerHTML="Enter Last Name"
  }
  else if(this.pass2.value!=this.pass1.value || this.pass1.value=="" ){
    alert("Password Incorrect")
  }else if(this.address.value==""){
    const error: HTMLElement = document.getElementById("error-address") as HTMLElement
    error.innerHTML="Enter Address"
  }else if(this.phnNumber.value==""){
    const error: HTMLElement = document.getElementById("error-phone") as HTMLElement
    error.innerHTML="Enter Phone Number"
  }else if(this.nid.value==""){
    const error: HTMLElement = document.getElementById("error-nid") as HTMLElement
    error.innerHTML="Enter NID"
  }else if(this.license.value==""){
    const error: HTMLElement = document.getElementById("error-license") as HTMLElement
    error.innerHTML="Enter License number"
  }
  else{
    console.log("password matched")
    alert("Registration Successful")
    this.driver.addNewDriver(this.Driverform.value).subscribe()
    this.Driverform.reset()
  
  }
 
}

}
