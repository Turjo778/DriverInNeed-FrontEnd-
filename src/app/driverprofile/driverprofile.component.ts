import { DriverserviceService } from './../driverservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driverprofile',
  templateUrl: './driverprofile.component.html',
  styleUrls: ['./driverprofile.component.css']
})
export class DriverprofileComponent implements OnInit {
  public fname:any
  public lname:any
  public address:any
  public email:any
  public phone:any
  public license:any
  public nid:any
  public service:any
  imgSrc: string="/assets/image/null.png"


  public imginfo:any=[] //used to send base64 version of image and phone number
  public file:any //used to keep the image file
  public base64textString:any //used to keep base64 image's string
  // for address
  editedAddress: any=[]
  enteredAddress=null

  // for email
  editedEmail: any=[]
  enteredEmail=null
// for phone
  editedPhone: any=[]
  enteredPhone=null



  constructor(private driverserv:DriverserviceService) { }

  ngOnInit(): void {
    this.fname=localStorage.getItem("dfname")
    this.lname=localStorage.getItem("dlname")
    this.phone=localStorage.getItem("dphone")
    this.nid=localStorage.getItem("dnid")
    this.address=localStorage.getItem("daddress")
    this.email=localStorage.getItem("demail")
    this.license=localStorage.getItem("Dlicense")
    this.service=localStorage.getItem("Dservice")

    this. driverserv.getDriverImg(this.phone).subscribe(img=>{   //////this is used to load profile pic
      this.imgSrc="data:image/png;base64,"+img
  
      })


  }


  fileselected(event:any){   //this function is used to select file
    
    this.file = event.target.files[0];//object
    var reader = new FileReader();

    reader.onload =this.handleFile.bind(this);

    reader.readAsBinaryString(this.file);
   
   
    }
    handleFile(event:any){  //this function is used to convert to base64
      var binaryString = event.target.result;
      this.base64textString= btoa(binaryString);
      // console.log(btoa(binaryString));
      // console.log(this.base64textString);
      this.imginfo.push(this.base64textString,this.phone)
      console.log(this.imginfo)
    }
    

  sendselectedfile(){  //this function is used to send image to server via api
    this.driverserv.addDriverImg(this.imginfo).subscribe(data=>{
      alert("image saved ")
      location.reload()
    })
  }




  editaddress(){
    this.editedAddress.push(this.enteredAddress,this.phone)
    console.log(this.editedAddress)
    this.driverserv.upAdd(this.editedAddress).subscribe(data=>{
      alert(data)
    
    })
      this.address=this.enteredAddress
 } 


 editemail(){
  this.editedEmail.push(this.enteredEmail,this.phone)
  console.log(this.editedEmail)
  this.driverserv.upEmail(this.editedEmail).subscribe(data=>{
    alert(data)
  
  })
    this.email=this.enteredEmail
} 


editPhone(){
  this.editedPhone.push(this.enteredPhone,this.phone)
  console.log(this.editedPhone)
  this.driverserv.upPhone(this.editedPhone).subscribe(data=>{
    alert(data)
  
  })
    this.phone=this.enteredPhone
} 


















}
