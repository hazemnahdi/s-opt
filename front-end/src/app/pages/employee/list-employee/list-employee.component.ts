import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/_classes/user';
declare var M: any;

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss'],
  
})
export class ListEmployeeComponent implements OnInit {
  
  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {
    this.UserList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.userService.selectedUser = {
      _id: "",
      name: "",
      username: "",
      email: "",
      password: "",
      rib:"",
      dateEmbauche:"",
      cnss:null,
      salaireHoraire:null,
      Tel:"",
      cin:"",
      urpp:null
    }
  }
  UserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }
  refreshUserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteUser(_id).subscribe((res) => {
        this.refreshUserList();
        
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  
}
