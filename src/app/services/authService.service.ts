import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {}

  Login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/auth/login',data).pipe(
      map((resp:any)=>{
        if(resp.token){
          localStorage.setItem('token',JSON.stringify(resp.token.original))
        }
      return resp;})
    )
  }

  verifytoken():boolean{
    const token=JSON.parse(localStorage.getItem('token')||'{}')||{};
    if(token.access_token){
      return true;
    }
    return false;
  }
}
