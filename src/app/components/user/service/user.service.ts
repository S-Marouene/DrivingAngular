import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { API } from 'src/app/config/api';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private selectedUserSubject = new Subject<User>();
  selectItem$ = this.selectedUserSubject.asObservable();



  private users: User[] = [
    new User(1, 39, 'Marouene', 'Saidi', 'Developper', 'logoprofil.jpg', '96581234','saidi.marouen@gmail.com','super-admin','31/01/2021'),
    new User(1, 39, 'med', 'abess', 'dont no ', 'logoprofil.jpg', '1234654','abess@gmail.com','admin','02/01/2020'),
    new User(1, 39, 'ali', 'salah', 'Other', 'logoprofil.jpg', '1234741','ali5441@gmail.com','visitor','16/01/2021'),
  ];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API.users);
  }

  getFakeUsers(): User[] {
    return this.users;
  }

  GetSelectedUser(user:User){
    this.selectedUserSubject.next(user);
  }

  deleteUserService(id:number): Observable<any> {

    return this.http.delete<any>(API.deleteUsers + id /* {params} */);
  }

}
