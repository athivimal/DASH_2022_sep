import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({ providedIn: 'root' })
  export class UserService {
  constructor(private http: HttpClient) { }
  
  register(user: User) {
    return this.http.post(`auth/register`, user);
  }
 
}