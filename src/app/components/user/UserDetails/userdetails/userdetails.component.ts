import { Component, Input, OnInit } from '@angular/core';
import { Router, ROUTES } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  @Input() user: User | null = null;
  users: User[] = [];
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.userService.selectItem$
    .subscribe(user => {
      this.user = user;
    });
  }

  DeleteUser(){
      if (this.user) {
        this.userService.deleteUserService(this.user.id).subscribe({
          next: () => {
            alert('User supprimé avec succès')
            this.userService.getUsers().subscribe({
              next: (listUser) => {
                //this.users = listUser;
                //this.listUser.push(listUser)
                alert('User supprimé avec succès')
              },
              error: () => {
                console.log(`Problème au niveau du serveur, attention les données sont fake `);
                this.users = this.userService.getFakeUsers();
              }
            });

          },
          error: (e) => {
            //this.tostr.error('Veuillez contacter l admin');
            console.log(e);
          }
        });

      }
  }

}
