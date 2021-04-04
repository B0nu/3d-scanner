import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public user:any={username:"",password:""};
  public wrongUser:boolean=false;

  constructor(private loginService:LoginService,private route:Router){
    
  }

 ngOnInit(){

 }

 submit(){
   console.log("user:",this.user);
   let authorized = this.loginService.login(this.user);
   if(authorized){
     this.wrongUser= false;
     this.route.navigate([
       'dashboard'
     ])
   }else{
     this.wrongUser =true;
   }


 }

}

