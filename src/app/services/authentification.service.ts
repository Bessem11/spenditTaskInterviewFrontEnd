import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private serverUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  login(user:User){
    return this.http.put(this.serverUrl+"login", user);
  }
  logout(user:User){
    return this.http.put(this.serverUrl+"logout", user);
  }
  registration(user:User){
    return this.http.post(this.serverUrl+"registration", user);
  }
  changePassword(user:User){
    return this.http.put(this.serverUrl+"changepassword", user)
  }
  resetPassword(user:User){
    return this.http.post(this.serverUrl+"resetpassword", user)
  }
}
