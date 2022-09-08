import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad,CanActivate {

  constructor(private autService:AuthService, private router:Router){}





  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean  {
    
      return this.autService.verificaAutenticacion().pipe(
        tap((estaAutenticado:boolean) =>{
          if(!estaAutenticado){
            this.router.navigate(['./auth/login'])
          }
        })
      ) 
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
    this.autService.verificaAutenticacion();
   
   
    return this.autService.verificaAutenticacion().pipe(
      tap((estaAutenticado:boolean) =>{
        if(!estaAutenticado){
          this.router.navigate(['./auth/login'])
        }
      })
    ) 
  }
}
