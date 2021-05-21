import { HttpClient } from '@angular/common/http';

import { ClientserviceService } from './../clientservice.service';
import { NavigationEnd, Router } from '@angular/router';

import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';


// 
class ImageSnippet{
  constructor(public src:string, public file:File){
   
  }
}
// 
@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css']
})
export class ClientprofileComponent implements OnInit {
  public clientdata:any=[]
  val:any

  public fname:any
  public lname:any
  public address:any
  public email:any
  public phone:any
  public license:any
  public nid:any
  public addMsg:any

  public imginfo:any=[] //used to send base64 version of image and phone number
  public file:any //used to keep the image file
  public base64textString:any //used to keep base64 image's string
  public profpic:any
  
  imgSrc: string="/assets/image/null.png"

// for updating photo
  random: any=[]
  selectedfile=null;
// for address
  editedAddress: any=[]
  enteredAddress=null
// for updating email
  editedEmail: any=[]
  enteredEmail=null
// for updating phone
editedPhone: any=[]
enteredPhone=null
// for updating license
editedLicense: any=[]
enteredLicense=null 


  constructor(private login:LoginService, private clientServ:ClientserviceService, private http:HttpClient ) { }

  ngOnInit(): void {
    this.fname=localStorage.getItem("cfname")
    this.lname=localStorage.getItem("clname")
    this.phone=localStorage.getItem("cphone")
    this.nid=localStorage.getItem("cnid")
    this.address=localStorage.getItem("caddress")
    this.email=localStorage.getItem("cemail")
    this.license=localStorage.getItem("clicense")

    this.login.setLoggedIn(true)


 
    this.clientServ.getClientImg(this.phone).subscribe(img=>{   //////this is used to load profile pic
      this.imgSrc="data:image/png;base64,"+img
  
      })
    
   
  }
 
 

  fileselected(event:any){   //this function is used to select file
    
    this.file = event.target.files[0];//object
    var reader = new FileReader();

    reader.onload =this.handleFile.bind(this);

    reader.readAsBinaryString(this.file);
   
   
    }
    handleFile(event:any){  //this function is used to convert to base64
      var binaryString = event.target.result;
      this.base64textString= btoa(binaryString);
      // console.log(btoa(binaryString));
      // console.log(this.base64textString);
      this.imginfo.push(this.base64textString,this.phone)
      console.log(this.imginfo)
    }
    

  sendselectedfile(){  //this function is used to send image to server via api
    this.clientServ.addClientImg(this.imginfo).subscribe(data=>{
      alert("image saved ")
      location.reload()
    })
  }


  // for updating address
editaddress(){
      this.editedAddress.push(this.enteredAddress,this.phone)
      console.log(this.editedAddress)
      this.clientServ.upAdd(this.editedAddress).subscribe(data=>{
        alert(data)
      
      })
        this.address=this.enteredAddress
   } 
 
//for upadting email  
editEmail(){
  this.editedEmail.push(this.enteredEmail,this.phone)
  console.log(this.editedEmail)
  this.clientServ.upEmail(this.editedEmail).subscribe(data=>{
    alert(data)
  
  })
    this.email=this.enteredEmail
}
// for updating phone
editPhone(){
  this.editedPhone.push(this.enteredPhone,this.phone)
  console.log(this.editedPhone)
  this.clientServ.upPhone(this.editedPhone).subscribe(data=>{
    alert(data)
  
  })
    this.phone=this.enteredPhone
}
// for updating license
editLicense(){
  this.editedLicense.push(this.enteredLicense,this.phone)
  console.log(this.editedLicense)
  this.clientServ.upLicense(this.editedLicense).subscribe(data=>{
    alert(data)
  
  })
    this.license=this.enteredLicense
}
















}
