import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: [ './users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
