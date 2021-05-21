
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  display=false
  display1=false
  display2=false
  public name:any
  public clientdata:any=[]

  public one=null
  public two:null
  public three:null
  public four:null
  public five:null

  constructor() {}

  ngOnInit(): void {
   this.name = localStorage.getItem("name")

   
  }
 
  clientlist(){
   this.display=!this.display
   if(this.display=this.display){
    this.display1=false
    this.display2=false
  }
  } 
  driverlist(){
    this.display1=!this.display1
    if(this.display1=this.display1){
      this.display=false
      this.display2=false
    }
  }
  servicelist(){
    this.display2=!this.display2
    if(this.display2=this.display2){
      this.display=false
      this.display1=false
    }
  }

}
