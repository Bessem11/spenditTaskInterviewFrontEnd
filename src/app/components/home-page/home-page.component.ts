import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user:User;
  password:string;
  isFormHidden=true;
  infoMessage:any;
  constructor(private userAuthentification:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
    //If the email is not stored then the given user is not authentifcated
    let email= sessionStorage.getItem("email")
    if(email=="")
      this.router.navigate(['unauthorized'])
    else{
      this.user=new User();
      this.user.setEmail(email);
    }
  }

  logout(){
    sessionStorage.setItem("email","");
    this.userAuthentification.logout(this.user).subscribe(
      data=>{
        this.router.navigate(['login'])
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
    
  }

  showOrHideChangePasswordForm(){
    this.isFormHidden=!this.isFormHidden; 
  }

  //Change the user password
  changePassword(){
    this.user.setPassword(this.password);
    this.userAuthentification.changePassword(this.user).subscribe(
      data=>{
        this.infoMessage=data;
        this.router.navigate(['home'])
      },
      error=>{
        console.log(error)
      }
    )
  }

}
