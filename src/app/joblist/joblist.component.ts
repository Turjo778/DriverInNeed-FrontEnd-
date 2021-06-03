import { DriverserviceService } from './../driverservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
public data:any


person2: string="/assets/image/p2.jpg"
  constructor(private driverserv:DriverserviceService) { }

  ngOnInit(): void {
  


    this.driverserv.joblist().subscribe(info=>{
      this.data=info
     
      console.log(this.data)
    })
 }
  
 selectThisJob(clientPhn:any){
console.log(clientPhn)
 }
 
}
