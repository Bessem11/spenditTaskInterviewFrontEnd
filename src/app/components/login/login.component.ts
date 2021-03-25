import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  errorMessage="";
  infoMessage:any;
  user:User;

  constructor(private userAuthentification:AuthentificationService,private router:Router) { 
    if (this.router.getCurrentNavigation().extras.state !== undefined)
      this.infoMessage=this.router.getCurrentNavigation().extras.state.message; 

  }

  ngOnInit(): void {
    //In a normal scenario we would have a JWT that we can save it and use it later
    //For simplicity I choose to save the email and use it later
    sessionStorage.setItem('email','');
  }
  onSubmit(){
    this.user=new User();
    this.user.setEmail(this.email);
    this.user.setPassword(this.password);
    return this.userAuthentification.login(this.user).subscribe(
      data=>{
        if(typeof data !== "string"){
        sessionStorage.setItem('email',this.user.getEmail())
        this.router.navigate(['home']);
        }
        else{
          this.errorMessage=data
        }
      },
      error=>{
        console.log(error);
      }
    )

  }

}
