import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = [
    {id: '1', name: 'user1', age: 19},
    {id: '2', name: 'user2', age: 29}
  ];
  constructor() { }

  ngOnInit() {
  }

}
