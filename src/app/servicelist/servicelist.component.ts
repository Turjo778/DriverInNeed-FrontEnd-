import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {
  public servicedata:any=[]
 public cphone:any
 public dphone:any
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.getservicedata().subscribe(data=>{
      this.servicedata=data 
      // this.clientname=this.servicedata[5]
     
      
    })
    // console.log(this.servicedata)
   }   
  
   DeleteService(id:any,cp:any,dp:any){
    var tostorecpdp=[id,cp,dp]
    console.log(tostorecpdp)
     this.shared.delService(cp).subscribe(res=>{ //
      console.log(res)
      location.reload()
      
     })
     var data1=[cp,'vacant']
     this.shared.changeClientstatus(data1).subscribe(res=>{
       console.log(res)
     })

     var data2=[dp,'vacant']
     this.shared.changedriverstatus(data2).subscribe(res=>{
      console.log(res)
    })



   }

  }
