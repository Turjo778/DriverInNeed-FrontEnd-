import { DriverserviceService } from './../driverservice.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
declare var $: any;
@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
public data:any
public DriverServiceType:any
public servicedata:any=[]
public applicationdata:any=[]
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

  public fare:any
  public servicestatus='occupied'
  public errormsg:any
  display=true
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
        this.errormsg="Clients are unavailable right now"
      }
    
    })
  
 }
 ApplyForThisJob(clientPhn:any){
  this.Cphone=clientPhn
  this.Dphone=localStorage.getItem("dphone")
  this.dfname=localStorage.getItem("dfname")
  this.dlname=localStorage.getItem("dlname")
  this.Daddress=localStorage.getItem("daddress")
  this.fare=localStorage.getItem("Fare")
  console.log(this.fare)
  this.DriverServiceType=localStorage.getItem("Dservice")

  this.applicationdata.push(this.Cphone,this.Dphone,this.dfname,this.dlname,this.Daddress,this.fare,this.DriverServiceType)
  console.log(this.applicationdata)
  console.log(this.fare)
  this.driverserv.applyforjob(this.applicationdata).subscribe(res=>{
    console.log(res)
  })
  this.display=false
  $('#myModal').modal('show');
 } 

}
