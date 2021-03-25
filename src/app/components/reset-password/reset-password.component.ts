import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  email:string;
  user:User;
  infoMessage:any;

  constructor(private userAuthentification:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }
  resetPassword(){
      this.user=new User();
      this.user.setEmail(this.email);
      this.userAuthentification.resetPassword(this.user).subscribe(
        data=>{
          this.infoMessage=data;
          const navigationExtras: NavigationExtras = {state: {message: this.infoMessage}};
          this.router.navigate(["login"],navigationExtras);
        },
        error=>{
          console.log(error)
        }
      )
  }

}
