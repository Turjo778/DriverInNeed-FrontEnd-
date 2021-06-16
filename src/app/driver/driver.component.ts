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
  public fare:any
  imgSrc: string="/assets/image/null.png"
  
 
  public clientname:any
  public clientFname:any
  public clinetLname:any
  public startdate:any
  public enddate:any
  public cphone:any
  public caddress:any
 public id:any
getdata={}
display=false
showCurrentService=false
searchJobbtn=true
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
      if (data != null){
        this. showCurrentService=true
        this.searchJobbtn=false
      }
      this.clientFname=data[0]
      this.clinetLname=data[1]
      this.clientname=(this.clientFname+" "+this.clinetLname)
      this.startdate=data[2]
      this.enddate=data[3]
      this.cphone=data[4]
      this.caddress=data[5]
      this.fare=data[6]
4
    })

 
  }
  searchJob(){
    this.display=!this.display
  }

  stopservice(){
 
    var data1=[this.cphone,'vacant']
  this.shared.changeClientstatus(data1).subscribe(res=>{
    console.log(res)
  })

  var data2=[this.phone,'vacant']
  this.shared.changedriverstatus(data2).subscribe(res=>{
   console.log(res)
 })
 this.shared.delService(this.cphone).subscribe(res=>{ //
  console.log(res)
  location.reload()
  
 })
}


  
}
