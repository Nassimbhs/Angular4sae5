import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
   listUser :any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
       
        this.listUser = data;
        console.log(this.listUser);
        console.log(data);
      },
      err => {
        this.listUser = JSON.parse(err.error).message;
      }
    );
  }

}
