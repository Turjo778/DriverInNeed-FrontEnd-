import { DriverserviceService } from './../driverservice.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
public data:any
public DriverServiceType:any
public servicedata:any=[]
  public Dname:any
  public Daddress:any
  public Dphone:any
  public Dlicense:any
  public dfname:any
  public dlname:any
  public cfname:any
  public clname:any
  public Cname:any
  public Caddress:any
  public Cphone:any
  public carLicense:any
  public startingtime:any
  public endingtime:any
  public fare:any
  public servicestatus='occupied'
  public errormsg:any
person2: string="/assets/image/p2.jpg"
  constructor(private driverserv:DriverserviceService,
              private shared:SharedService) { }



  ngOnInit(): void {

    
    this.DriverServiceType=localStorage.getItem("Dservice")
    console.log(this.DriverServiceType)
  this.Dlicense=localStorage.getItem("Dlicense")
    this.driverserv.joblist(this.DriverServiceType).subscribe(info=>{
      this.data=info
      if(this.data==0){
        this.errormsg="Drivers are unavailable right now"
      }
    
    })
    var dt = new Date();
    dt.setHours( dt.getHours()  );
    this.startingtime=dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear()
    console.log(this.startingtime)
    
    if(this.DriverServiceType=="monthly"){
      var st = new Date();
    st.setHours( st.getHours() +720 );
    this.endingtime=st.getDate()+"/"+st.getMonth()+"/"+st.getFullYear()

    var Fare=localStorage.getItem("Fare")
    this.fare=Fare
   
    }else{
      var st = new Date();
      st.setHours( st.getHours() +24);
      this.endingtime=st.getDate()+"/"+st.getMonth()+"/"+st.getFullYear()
      var Fare=(localStorage.getItem("Fare"))
      this.fare=Fare
    }
 }
  
 selectThisJob(clientPhn:any){
  this.dfname=localStorage.getItem("dfname")
  this.dlname=localStorage.getItem("dlname")
  this.Dname=(this.dfname+" "+this.dlname)
  this.Daddress=localStorage.getItem("daddress")
  this.Dphone=localStorage.getItem("dphone")
this.driverserv.Getclientbyphn(clientPhn).subscribe(data=>{
  this.cfname=data[0]
  this.clname=data[1]
  this.Cname=(this.cfname+" "+this.clname)
  this.Caddress=data[2]
  this.Cphone=data[3]
  this.carLicense=data[4]
  
})
 }
 
 SaveServiceData(){
   
  this.servicedata.push(
    this.DriverServiceType,
    this.startingtime,
    this.endingtime,
    this.fare,  //enter fare
    this.cfname,
    this.clname,
    this.Caddress,
    this.Cphone,
    this.dfname,
    this.dlname,
    this.Daddress,
    this.Dphone,
    this.Dlicense,
    this.servicestatus
    
  )


console.log(this.servicedata)

// saving service data
this.shared.servicedata(this.servicedata).subscribe(res=>{
  alert(res)

})
// changing driver status
var data1=[this.Dphone,'occupied']
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
