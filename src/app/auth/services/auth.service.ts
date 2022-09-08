import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap,map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl:string = environment.baseUrl;
private _auth:Auth | undefined;

get auth(){
  return {...this._auth}
}

  constructor(private http:HttpClient) { }

  verificaAutenticacion():Observable<boolean>{
    if(localStorage.getItem('token')){
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map(auth =>{
        this._auth = auth;
        return true;
      })
    )
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap(auth=>{ this._auth = auth,
        localStorage.setItem('id', auth.id)}))
    
  }
  logout(){
    this._auth=undefined;
  }
}


