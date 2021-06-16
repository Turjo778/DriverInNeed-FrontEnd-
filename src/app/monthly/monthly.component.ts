import { SharedService } from './../shared.service';
import { ClientserviceService } from './../clientservice.service';
import { DriverserviceService } from './../driverservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {
  data:any={}
  person1: string="/assets/image/person1.jfif"
  person2: string="/assets/image/p2.jpg"
  person3: string="/assets/image/person3.png"

  public fname:any
public lname:any
public address:any
public phone:any
public license:any
public service:any
public servicestatus='occupied'
public errormsg:any


public startingtime:any
public endingtime:any

public Cfname:any
public Clname:any
public Caddress:any
public Cphone:any
public servicedata:any=[]
public fare:any
  constructor(private clientserv:ClientserviceService,
              private shared: SharedService
               ) {}

  ngOnInit(): void {
    this.clientserv.getMonthlyDriver().subscribe(info=>{
      this.data=info
      console.log(info)
     if (info.length==0){
      this.errormsg="Drivers are unavailable right now"
     }
      console.log(info)
      
    })
  }
  selectedDriver(value:any){
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
    this.startingtime=dt.getDate()+"/"+(dt.getMonth()+1)+"/"+dt.getFullYear()
    console.log(this.startingtime)

    var st = new Date();
    st.setHours( st.getHours() +720 );
    this.endingtime=st.getDate()+"/"+(st.getMonth()+1)+"/"+st.getFullYear()
    console.log(st.getDate()+"/"+st.getMonth()+"/"+st.getFullYear())

  }


  SaveServiceData(){
    
    this.servicedata.push(
      this.service,
      this.startingtime,
      this.endingtime,
      this.fare,          //enter fare
      this.Cfname,
      this.Clname,
      this.Caddress,
      this.Cphone,//change to client phone
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
//changing driver status 
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
