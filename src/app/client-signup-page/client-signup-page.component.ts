import { ClientserviceService } from './../clientservice.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-client-signup-page',
  templateUrl: './client-signup-page.component.html',
  styleUrls: ['./client-signup-page.component.css']
})
export class ClientSignupPageComponent implements OnInit {

  public form: FormGroup;
  public pass1:any
  public pass2:any
 

  constructor(private client:ClientserviceService, private fb:FormBuilder ) {
    this.form = this.fb.group({
      ClientFname:[''],
      ClientLname:[''],
      ClientEmail:[''],
      ClientPassword:[''],
      ClientAddress:[''],
      ClientPhoneNo:[''],
      ClientNid:[''],
      ClientCarLicense:['']
    })
   }
  
  ngOnInit(): void { }

  getClientValue(){
    // console.log(this.form.value);
    // this.client.addNewClient(this.form.value).subscribe()

    this.pass1 = document.getElementById("ClientPassword");
    this.pass2 = document.getElementById("RClientPassword");
    // console.log(this.pass1.value);
    // console.log(this.pass2.value);
    if(this.pass2.value==this.pass1.value){
    // console.log("password matched")
    // console.log(this.form.value);
    this.client.addNewClient(this.form.value).subscribe()
    this.form.reset()
    }
    else{
      alert("Incorrect password")
      console.log(this.pass1.value);
      console.log(this.pass2.value);

  }
}


}

