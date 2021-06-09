import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
url="http://127.0.0.1:5000/addClient"
addimageURL="http://127.0.0.1:5000/addClientImage"
updateAddress="http://127.0.0.1:5000/editClientAddress"
updateEmail="http://127.0.0.1:5000/editClientEmail"
updatePhone="http://127.0.0.1:5000/editClientPhone"
updateLicense="http://127.0.0.1:5000/editClientLicense"
dailyDriver="http://127.0.0.1:5000/getDailyDriver"
MonthlyDriver="http://127.0.0.1:5000/getMonthlyDriver"
clientimg="http://127.0.0.1:5000/displayClientImage/"
  constructor(private http:HttpClient) { }


  addNewClient(data:any)
  {
    return this.http.post(this.url,JSON.stringify(data))
   
  }
  addClientImg(data:any){
    console.log(data)
    return this.http.put(this.addimageURL,data) 
  }
  getClientImg(phn:any):Observable<any>{
    return this.http.get<any[]>(this.clientimg+phn)
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
  upLicense(data:[]){
    return this.http.put(this.updateLicense,data)
  }

  getHourlyDriver():Observable<any>{
    return this.http.get<any[]>(this.dailyDriver)
  }

  getMonthlyDriver():Observable<any>{
    return this.http.get<any[]>(this.MonthlyDriver)
  }
 
  CheckClientInService(phn:any):Observable<any>{
    return this.http.get<any[]>("http://127.0.0.1:5000/checkClientInService/"+phn)
  }

  updateClientReqService(data:any){
    return this.http.put("http://127.0.0.1:5000/changeClientReqService",data)
  }
}
  