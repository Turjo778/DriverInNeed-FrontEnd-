import { ClientserviceService } from './../clientservice.service';
import { LoginService } from './../login.service';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { DriverserviceService } from './../driverservice.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  public driverdata:any=[]
  public fname:any
  public lname:any
  public phone:any
  imgSrc: string="/assets/image/null.png"
  

  public clientname:any
  public clientFname:any
  public clinetLname:any
  public startdate:any
  public enddate:any
 public id:any
getdata={}
display=false
showCurrentService=true
  constructor(private shared:SharedService, private login:LoginService, private driverserv:DriverserviceService,
              ) { }

  ngOnInit(): void {
    this.fname=localStorage.getItem("dfname")
    this.lname=localStorage.getItem("dlname")
    this.phone=localStorage.getItem("dphone")
   
 
   
   
    this.driverserv.getDriverImg(this.phone).subscribe(img=>{
      this.imgSrc="data:image/png;base64,"+img
    })

    this.driverserv.CheckDriverInService(this.phone).subscribe(data=>{  /*<==========  need correction*/
      console.log(data)
      if (data == null){
        this. showCurrentService=false
      } 
      this.clientFname=data[0]
      this.clinetLname=data[1]
      this.clientname=(this.clientFname+" "+this.clinetLname)
      this.startdate=data[2]
      this.enddate=data[3]

    })

 
  }
  searchJob(){
    this.display=!this.display
  }




  
}
