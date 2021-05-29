import { DriverserviceService } from './../driverservice.service';
import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-driver-account',
  templateUrl: './driver-account.component.html',
  styleUrls: ['./driver-account.component.css']
})
export class DriverAccountComponent implements OnInit {
  public phone:any
  public fare:any
 
  constructor(private driverserv:DriverserviceService) { 
    
  }

  ngOnInit(): void {
    this.phone=localStorage.getItem("dphone")
    console.log(this.phone)

    this.driverserv.getDriverFare(this.phone).subscribe(res=>{
      this.fare=res
     
      
    })
    
  }
saverate(rate:any){

  var data=[this.phone,rate]
  
 
  this.driverserv.addDriverFare(data).subscribe(res=>{
    alert(res)
    
    location.reload()
  })
 
}

}
