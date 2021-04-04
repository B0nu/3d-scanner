import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated= false;

  //change the username and password accordingly
  user:any ={ 
    username:"testingUser",
    password:"test@123"
  }

  constructor() { }

  public login(user):boolean{

    if(user && user.username === this.user.username && user.password ===this.user.password){
      localStorage.setItem("user","true");
      this.isAuthenticated=true;
      return true;
    }else{
      return false;
    }

  }

  public isUserAuthenticated(){
    return this.isAuthenticated;
  }

  public logout(){
    this.isAuthenticated=false;
    
  }
}
