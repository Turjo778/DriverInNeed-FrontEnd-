import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-driverdata',
  templateUrl: './driverdata.component.html',
  styleUrls: ['./driverdata.component.css']
})
export class DriverdataComponent implements OnInit {
  public driverdata:any=[]
  public msg:any
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.getadriverdata().subscribe(data=>{
      this.driverdata=data 
      console.log(this.driverdata)
  })
  }
  onDelete(phn:any){
    this.shared.delDriver(phn).subscribe(data=>{
      this.msg=data
      alert(this.msg)
      location.reload()
    })
  }

}
