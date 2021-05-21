import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
constructor(private http:HttpClient){}
private loginUrl ="http://127.0.0.1:5000/login" 
private adminloginUrl ="http://127.0.0.1:5000/adminlogin" 

public subject = new BehaviorSubject<any>('')
private loggedInStatus = false

// 
setLoggedIn(value:boolean){
  this.loggedInStatus = value
}
get IsLoggedIn(){
return this.loggedInStatus
}
// 
logInUser(getdata:any){
  return this.http.post<any>(this.loginUrl,getdata)
}

logInAdmin(data:any){
  return this.http.post<any>(this.adminloginUrl,data)
}

sendinfo(msg:any){
  this.subject.next(msg)
}
receiveinfo():Observable<any>{
  return this.subject.asObservable();
}




}
