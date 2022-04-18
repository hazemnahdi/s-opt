import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CongeService } from 'src/app/services/conge.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Conge } from 'src/app/_classes/conge';
import { User } from 'src/app/_classes/user';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.scss']
})
export class AddCongeComponent implements OnInit {

  constructor(public congeService: CongeService,public userService:UserServiceService) { }

  ngOnInit(): void {
    this.resetForm();
    this.UserList();
    console.log(this.UserList());
  }
  UserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.congeService.selectedConge = {
      _id: "",
      dateDebut: "",
      dateFin: "",
      users: new User("", "", "", "", "", "", "", 0, 0, "", "", 0)
    }
  }
  refreshCongeList() {
    this.congeService.getCongeList().subscribe((res) => {
      this.congeService.conges = res as Conge[];
    });
  }
  onSubmit(form: NgForm) {
    
      this.congeService.postConge(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCongeList();
       // M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    
  }
}
