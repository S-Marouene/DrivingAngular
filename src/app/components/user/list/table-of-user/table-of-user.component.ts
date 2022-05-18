import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-table-of-user',
  templateUrl: './table-of-user.component.html',
  styleUrls: ['./table-of-user.component.css']
})
export class TableOfUserComponent implements OnInit {
  @Input() users: User[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
