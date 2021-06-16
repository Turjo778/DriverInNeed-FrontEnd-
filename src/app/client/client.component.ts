import { Validators } from '@angular/forms';
import { ClientserviceService } from './../clientservice.service';
import { ClientprofileComponent } from './../clientprofile/clientprofile.component';
import { SharedService } from './../shared.service';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  daily: string="/assets/image/daily.png"
  weekly: string="/assets/image/weekly.jfif"
  monthly: string="/assets/image/monthly.png"
  // 
  public Dfname:any
  public Dlname:any
  public Daddress:any
  public Dphone:any
  public Dlicense:any
  public Dservice:any
  public Dnewfare:any
  public Dfare:any
  public startingtime:any
  public endingtime:any

  // 
  display = false
  display1 = false
  data:any={}
  public phone:any
 
  public name:any
  public clientdata:any=[]
  public displayOfferBox=true
  public showCurrentService=false
  public showJobReq=false
  public fname:any
  public lname:any
  public Caddress:any
  public Cphone:any
  imgSrc:string="/assets/image/null.png"

 public driverphone=null
  public drivername:any
  public driverfirstname:any
  public driverlastname:any
  public startdate:any
  public enddate:any
 public reqjobinfo:any={}
 public servicedata:any=[]
 public servicestatus='occupied'
  //  val:any
  //   random: any=[]
  // constructor(private login:LoginService, private shared:SharedService, ) { }
  constructor(private clientserv:ClientserviceService,
              private shared:SharedService ) {}
  ngOnInit(): void {
    this.fname=localStorage.getItem("cfname")
    this.lname=localStorage.getItem("clname")
   this.phone=localStorage.getItem("cphone")
 
   
   this.clientserv.getClientImg(this.phone).subscribe(img=>{
    this.imgSrc="data:image/png;base64,"+img
   })
    
   this.clientserv.CheckClientInService(this.phone).subscribe(data=>{
   console.log(data)
   if (data!=null){
    this.displayOfferBox=false
    this.showCurrentService=true
   }

   this.driverfirstname=data[0]
   this.driverlastname=data[1]
   this.drivername=( this.driverfirstname+" "+this.driverlastname)
   this.startdate=data[2]
   this.enddate=data[3]
   this.driverphone=data[4]
   this.Dnewfare=data[5]

    
   })
   
  this.name=(this.fname+" "+this.lname)

  //  checkinng if any driver applied for job
  this.clientserv.checkReqJob(this.phone).subscribe(res=>{
    this.reqjobinfo=res
    console.log(res)
    if(res!=null){
      this.showJobReq=true
    }
  })
  //  checkinng if any driver applied for job

  }


  close() {
    this.showJobReq=false;
    this.clientserv.DeleteJobReq(this.phone).subscribe(res=>{console.log(res)})
  }
  onPress() {
 let clientsericeAndPhn=["daily",this.phone]
 console.log(clientsericeAndPhn)
  this.clientserv.updateClientReqService(clientsericeAndPhn).subscribe(data=>{
 console.log(data)
  })
  this.display = !this.display;
  if(this.display=this.display){
    this.display1=false
  }
   
  
  }
  // 
  onPressMonthly(){
  let clientsericeAndPhn=["monthly",this.phone]
  this.clientserv.updateClientReqService(clientsericeAndPhn).subscribe(data=>{
    console.log(data)
   })
  this.display1 = !this.display1;
  if(this.display1=this.display1){
    this.display=false
  }
  
  
  }





  stopservice(){
 
    var data1=[this.phone,'vacant']
  this.shared.changeClientstatus(data1).subscribe(res=>{
    console.log(res)
  })

  var data2=[this.driverphone,'vacant']
  this.shared.changedriverstatus(data2).subscribe(res=>{
   console.log(res)
 })
 this.shared.delService(this.phone).subscribe(res=>{ //
  console.log(res)
  location.reload()
  this.reqjobinfo=false
 })
 this.clientserv.DeleteJobReq(this.phone).subscribe(res=>{console.log(res)})
  }
 
  SelectThis(service:any,phn:any,fare:any){

  

    this.shared.getdriverbyPhn(phn).subscribe(data=>{
      console.log(data)
      this.Dfname=data[0]
      this.Dlname=data[1]
      this.Daddress=data[2]
      this.Dphone=data[3]
      this.Dlicense=data[4]
      this.Dservice=data[5]
      this.Dfare=data[6]

    })
    
   alert("Driver Has been selected")
 
  }
  SaveData(){
   
    if(this.Dservice=='daily'){
      this.Dfare=this.Dfare*8 

      var dt = new Date();
       this.startingtime=dt.getDate()+"/"+(dt.getMonth()+1)+"/"+dt.getFullYear()

       
      var dt = new Date();
      this.endingtime=dt.getDate()+"/"+(dt.getMonth()+1)+"/"+dt.getFullYear()
  
    }
    else{
      var dt = new Date();
      this.startingtime=dt.getDate()+"/"+(dt.getMonth()+1)+"/"+dt.getFullYear()
  
     var st = new Date(); 
     st.setHours( st.getHours() +720 );
     this.endingtime=st.getDate()+"/"+(st.getMonth()+1)+"/"+st.getFullYear()
    
      this.Dfare=this.Dfare
    }


    this.servicedata.push(
      this.Dservice,
      this.startingtime,
      this.endingtime,
      this.Dfare,  
       this.fname,
       this.lname,
       this.Caddress=localStorage.getItem("caddress"),
      this.Cphone=localStorage.getItem("cphone"),
       this.Dfname,
      this.Dlname,
      this.Daddress,
      this.Dphone,
      this.Dlicense,
      this.servicestatus 
    )
    console.log(this.servicedata)
    // saving service data
    this.shared.servicedata(this.servicedata).subscribe(res=>{
     
    })

    // changing driver status
    var data1=[this.Dphone,'occupied']
    this.shared.changedriverstatus(data1).subscribe(res=>{
      
    })
   
     //changing client status 
  var data2=[this.Cphone,'occupied']
  this.shared.changeClientstatus(data2).subscribe(res=>{
   
    location.reload()
  })
  this.clientserv.DeleteJobReq(this.phone).subscribe(res=>{console.log(res)})
  } 
    
}
