import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-table-of-user',
  templateUrl: './table-of-user.component.html',
  styleUrls: ['./table-of-user.component.css']
})
export class TableOfUserComponent implements OnInit {
  @Input() users: User[] = [];
  @Input() actualUser: User | null = null;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  sendDetails(actualUser:User){
    if (actualUser) this.userService.GetSelectedUser(actualUser);
  }

}
