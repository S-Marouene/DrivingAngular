import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.selectItem$
    .subscribe(user => {
      this.user = user;
    });
  }

}
