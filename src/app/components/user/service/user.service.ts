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
    new User(1, 39, 'marouene', 'ssaidi', 'Developper', '   job  ', '1234'),
    new User(
      2,
      3,
      'skander',
      'sellaouti',
      'tgangin',
      'rotating_card_profile3.png',
      '7'
    ),
    new User(3, 3, 'skander', 'sellaouti', 'tgangin', '', '7'),
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

}
