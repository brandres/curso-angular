import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, USER_API_PATH } from '../app.constants';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_API_URL = `${BASE_URL}${USER_API_PATH}`;
  constructor( private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.USER_API_URL);
  }
  getUser(id: number): Observable<User> {
    return this.httpClient.get(`${this.USER_API_URL}/${id}`)
  }
  getUsersByProperties(user: User): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.USER_API_URL}`, {params: {...user}});
  }
  addUser(user: User){
    this.httpClient.post(this.USER_API_URL, user).subscribe(console.log);
  }

  deleteUser(id: number){
    this.httpClient.delete(`${this.USER_API_URL}/${id}`).subscribe(console.log);
  }

}
