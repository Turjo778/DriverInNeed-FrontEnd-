import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  getAdminData:any ={}
 
  public name:any
  constructor(private login:LoginService, private shared: SharedService, private router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem("name")
  }
  getadminValue(){
    this.login.logInAdmin(this.getAdminData).subscribe(data=>{
      // 
      localStorage.setItem("name",data[2])
      console.log(this.name)
      this.router.navigate(['admin']);
     
      this.login.setLoggedIn(true)
  })
}
}
