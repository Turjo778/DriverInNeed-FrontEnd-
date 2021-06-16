import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverserviceService {
url="http://127.0.0.1:5000/addDriver"

updateAddress="http://127.0.0.1:5000/updateDriverAddress"
updateEmail="http://127.0.0.1:5000/updateDriverEmail"
updatePhone="http://127.0.0.1:5000/updateDriverPhone"
updateNid="http://127.0.0.1:5000/updateDriverNid"
getjoblist="http://127.0.0.1:5000/getjob/"

addDriverImgUrl="http://127.0.0.1:5000/addDriverImage"
getDriverImgUrl="http://127.0.0.1:5000/displayDriverImage/"
DriverFareUrl="http://127.0.0.1:5000/setDriversFare"

fetchDriverFareURL="http://127.0.0.1:5000/getDriversFare/"

  constructor(private http:HttpClient) { }

  addNewDriver(data:any)
  {
    return this.http.post(this.url,JSON.stringify(data))
   
  }
 

  upAdd(data:[]){
    return this.http.put(this.updateAddress,data)
  }
  upEmail(data:[]){
    return this.http.put(this.updateEmail,data)
  }
  upPhone(data:[]){
    return this.http.put(this.updatePhone,data)
  }
  upNid(data:[]){
    return this.http.put(this.updateNid,data)
  }

  joblist(data:any):Observable<any>{
    console.log(data)
    return this.http.get<any[]>(this.getjoblist+data)

  }

  addDriverImg(data:any){
    console.log(data)
    return this.http.put(this.addDriverImgUrl,data) 
  }

  getDriverImg(phn:any):Observable<any>{
    return this.http.get<any[]>(this.getDriverImgUrl+phn)
  }
  CheckDriverInService(phn:any):Observable<any>{
    return this.http.get<any[]>("http://127.0.0.1:5000/checkDriverInService/"+phn)
  }
  addDriverFare(data:any){
    console.log(data)
    return this.http.put(this.DriverFareUrl,data) 
  }
 
  getDriverFare(data:any):Observable<any>{
    return this.http.get<any[]>(this.fetchDriverFareURL+data)
  }
 
  Getclientbyphn(phn:any){
    return this.http.get<any>("http://127.0.0.1:5000/clientDatabyPhn/"+phn)
  }
  applyforjob(data:any){
    console.log(data)
    return this.http.post("http://127.0.0.1:5000/ApplyForJob",data)
  }
}
