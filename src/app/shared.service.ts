
import { HttpClient } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  adminName:any;
  private clientdataUrl ="http://127.0.0.1:5000/clientData" 
  private driverdataUrl ="http://127.0.0.1:5000/driverData" 

  private deleteClient="http://127.0.0.1:5000/deleteClient/"
  private deleteDriver="http://127.0.0.1:5000/deleteDriver/"

  private driverinfobyPhn ="http://127.0.0.1:5000/driverDatabyPhn/" 
  private ServiceDataUrl ="http://127.0.0.1:5000/EnterServiceData" 

  private getServiceDataUrl="http://127.0.0.1:5000/servicedata"
  private deleteServiceDataUrl="http://127.0.0.1:5000/deleteservicedata/"
  private chnDriverStatus ="http://127.0.0.1:5000/changeDriverStatus"
  private chnClientStatus ="http://127.0.0.1:5000/changeClientStatus"



  public subject = new BehaviorSubject<any>('')




  constructor(private http:HttpClient) { 
    
  }
  

 
  sendData(data:any){
    this.subject.next(data)
  }

  receiveMessage():Observable<any>{
    return this.subject.asObservable();
  }

  getaclientdata():Observable<any>{
    return this.http.get<any[]>(this.clientdataUrl)
  }

  getadriverdata():Observable<any>{
    return this.http.get<any[]>(this.driverdataUrl)
  }

  delClient(phn:any){
    return this.http.delete(this.deleteClient+phn)
  }
  delDriver(phn:any){
    return this.http.delete(this.deleteDriver+phn)
  }


  getdriverbyPhn(phn:any):Observable<any>{
    return this.http.get<any[]>(this.driverinfobyPhn+phn)
  
  }
  servicedata(data:any){
    return this.http.post(this.ServiceDataUrl,data)
  }
  getservicedata():Observable<any>{
    return this.http.get<any[]>(this.getServiceDataUrl)
  }
  delService(id:any){
  //  console.log(typeof(tostorecpdp))
    return this.http.delete(this.deleteServiceDataUrl+id)
    
  }
  changedriverstatus(data2:any):Observable<any>{
    console.log(data2)
   
    return this.http.put(this.chnDriverStatus,data2)
  }


  changeClientstatus(data1:any){
    return this.http.put(this.chnClientStatus,data1)
  }
  
}
