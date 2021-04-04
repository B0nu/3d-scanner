import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuardService implements CanActivate {  
  constructor(public auth: LoginService, public router: Router) {}  
  canActivate(): boolean {
    console.log("can activate");
    
    if (!this.auth.isUserAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }}  