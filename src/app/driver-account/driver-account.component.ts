import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-account',
  templateUrl: './driver-account.component.html',
  styleUrls: ['./driver-account.component.css']
})
export class DriverAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
saverate(rate:any){
  console.log(rate)
}
}
