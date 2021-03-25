import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  password:string;
  user:User;
  infoMessage:any;


  constructor(private userAuthentification:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    this.user=new User();
    this.user.setFirstName(this.firstName)
    this.user.setLastName(this.lastName)
    this.user.setEmail(this.email);
    this.user.setPassword(this.password);
    return this.userAuthentification.registration(this.user).subscribe(
      data=>{
        this.infoMessage=data;
        const navigationExtras: NavigationExtras = {state: {message: this.infoMessage}};
        this.router.navigate(['login'],navigationExtras);
      },
      error=>{
        console.log(error)
      }
    )
  }

}
