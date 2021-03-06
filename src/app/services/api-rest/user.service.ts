import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url2: string = "https://api-rest-portfolio-arpr.herokuapp.com/api/login";
  //url1: string = "https://error-pueblada-api.herokuapp.com/api/login"

  user: User = { username: "", password: "", token: "" };

  constructor(private http: HttpClient) {

  } 

  login(username: string, password: string): Observable<any> {  
    this.user.username = username;
    this.user.password = password;
    return this.http.post(`https://api-rest-portfolio-arpr.herokuapp.com/api/login`, this.user);
    
	}

  
}
