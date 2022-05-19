import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {



    this.userService.getUsers().subscribe({
      next: (listUser) => {
        this.users = listUser;
      },
      error: () => {
        console.log(`Problème au niveau du serveur, attention les données sont fake `);
        this.users = this.userService.getFakeUsers();
      }
    });

  }

}
