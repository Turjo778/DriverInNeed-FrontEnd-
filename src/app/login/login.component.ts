import { ClientprofileComponent } from './../clientprofile/clientprofile.component';
import { SharedService } from './../shared.service';
import { LoginService } from './../login.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NONE_TYPE } from '@angular/compiler';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  getData:any ={}
  public phnmiss:any

  public info:any=[]
  public pos:any
 


  constructor(private login:LoginService, private shared: SharedService, private router:Router) { 
   
  }
  


  getValue(){ 
    
    if(this.getData.phonenumber==null){
      alert("Enter Phone Number")
    }else{
    console.log(this.getData.phonenumber)
   this.login.logInUser(this.getData).subscribe(data=>{
    
     this.info=data
     console.log(data)
     this.pos=data[0]
    if(data=="None"){
     
      $('#myModal').modal('show');
    }
   else if(this.pos=='client'){
      this.router.navigate(['client']);
      this.login.sendinfo(this.info)
      // console.log("==>>"+this.info)
      localStorage.setItem("cfname",data[1])
      localStorage.setItem("clname",data[2])
      localStorage.setItem("cphone",data[3])
      localStorage.setItem("cnid",data[4])
      localStorage.setItem("caddress",data[5])
      localStorage.setItem("cemail",data[6])
      localStorage.setItem("clicense",data[7])

 
    
      // this.login.sendinfo(this.info)
      this.login.setLoggedIn(true)
    }
    else if(this.pos!='client'){
      this.router.navigate(['driver']);
      localStorage.setItem("driver",JSON.stringify(data))
    
      this.login.sendinfo(this.info)
      console.log("==>>"+this.info)
      localStorage.setItem("dfname",data[1])
      localStorage.setItem("dlname",data[2])
      localStorage.setItem("dphone",data[3])
      localStorage.setItem("dnid",data[4])
      localStorage.setItem("demail",data[6])
      localStorage.setItem("daddress",data[5])
      localStorage.setItem("Dlicense",data[7])
      localStorage.setItem("Dservice",data[8])
      localStorage.setItem("Fare",data[9])
    
      
      // localStorage.setItem("license",data[8])


      // this.login.sendinfo(this.info)
      this.login.setLoggedIn(true)
     
    }
    

   })
   
  }
  
  }
  ngOnInit():void{ 
    localStorage.removeItem('fname')
    localStorage.removeItem('lname')
    localStorage.removeItem('phone')
    localStorage.removeItem('nid')
    localStorage.removeItem('address')
 
    localStorage.removeItem('license')
    localStorage.removeItem('email')

    localStorage.removeItem('lname')
    localStorage.removeItem('fname')
    localStorage.removeItem('lname')


  }
  
}
