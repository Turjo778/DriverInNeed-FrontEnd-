import { Component, OnInit } from '@angular/core';

import { SharedService } from './../shared.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {
public clientdata:any=[]
public msg:any
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.getaclientdata().subscribe(data=>{
      this.clientdata=data 
     
     
  })
  }

  
 onDelete(phn:any){

 this.shared.delClient(phn).subscribe(data=>{
  
  location.reload()
})
 }



}
