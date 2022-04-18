import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_classes/user';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  selectedUser: User;
  users: User[];
  readonly baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient, private authService: AuthServiceService) { }
  registerUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post("http://localhost:3000/users/register", user, {headers: headers});
  }

  getProfile(): Observable<any> {
    console.log(this.authService.authToken)
    this.authService.loadToken();
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'bearer ' + this.authService.authToken
    });
    return this.http.get("http://localhost:3000/users/profile", {headers: headers});
  }
  getUserList() {
    return this.http.get(this.baseURL);
  }
  putUser(user: User) {
    return this.http.put(this.baseURL + `/${user._id}`, user);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
