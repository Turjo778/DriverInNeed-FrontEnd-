import { DriverserviceService } from './../driverservice.service';
import { LoginService } from './../login.service';
import { LoginComponent } from './../login/login.component';
import { SharedService } from './../shared.service';
import { ClientserviceService } from './../clientservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
data:any={}
dpimg: string="/assets/image/null.png"
// public dpimg:any
person2: string="/assets/image/p2.jpg"
person3: string="/assets/image/person3.png"

public startingtime:any
public endingtime:any
// public servicetype:any

public fname:any
public lname:any
public address:any
public phone:any
public license:any
public service:any
public servicestatus='occupied'
public errormsg:any

public info1: Array<string>=[]

public Cfname:any
public Clname:any
public Caddress:any
public Cphone:any
public fare:any
public servicedata:any=[]

  constructor(public clientserv:ClientserviceService,
              public shared :SharedService,
              public driverserv :DriverserviceService
              ) {}

  ngOnInit(): void {
     this.clientserv.getHourlyDriver().subscribe(info=>{
       this.data=info
       console.log(info.length)
       if (info.length==0){
        this.errormsg="Drivers are unavailable right now"
      }
   

     })
    
    
     var time = new Date();
     console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds())
     
     var endtime = new Date();
     
     console.log(endtime.getHours() +24 )
     console.log((endtime.getHours() +24)-time.getHours())
  }

  selectedDriver(value:any){   //info in invoice
    console.log("Driver phone ==>",value)

    this.shared.getdriverbyPhn(value).subscribe(data=>{
      
      this.fname=data[0]
      this.lname=data[1]
      this.address=data[2]
      this.phone=data[3]
      this.license=data[4]
      this.service=data[5]
      this.fare=data[6]
      
     
    })
    this.Cfname=localStorage.getItem("cfname")
    this.Clname=localStorage.getItem("clname")
    this.Caddress=localStorage.getItem("caddress")
    this.Cphone=localStorage.getItem("cphone")

    
    var dt = new Date();
    dt.setHours( dt.getHours()  );
    this.startingtime=dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear()
    console.log(this.startingtime)
  

    var st = new Date();
    st.setHours( st.getHours() +24 );
    this.endingtime=st.getDate()+"/"+st.getMonth()+"/"+st.getFullYear()
    console.log(st.getDate()+"/"+st.getMonth()+"/"+st.getFullYear())



  }
  SaveServiceData(){
   
      this.servicedata.push(
        this.service,
        this.startingtime,
        this.endingtime,
         (this.fare*8),  //enter fare
        this.Cfname,
        this.Clname,
        this.Caddress,
        this.Cphone,
        this.fname,
        this.lname,
        this.address,
        this.phone,
        this.license,
        this.servicestatus
        
      )
    
    
    console.log(this.servicedata)
    
  // saving service data
    this.shared.servicedata(this.servicedata).subscribe(res=>{
      alert(res)
    
    })
    // changing driver status
    var data1=[this.phone,'occupied']
    this.shared.changedriverstatus(data1).subscribe(res=>{
      alert(res)
      
    })
   
     //changing client status 
  var data2=[this.Cphone,'occupied']
  this.shared.changeClientstatus(data2).subscribe(res=>{
    alert(res)
    location.reload()
  })
  
  }
 
}