import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AvanceService } from 'src/app/services/avance.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Avance } from 'src/app/_classes/avance';
import { User } from 'src/app/_classes/user';
declare var M: any;

@Component({
  selector: 'app-add-avance',
  templateUrl: './add-avance.component.html',
  styleUrls: ['./add-avance.component.scss']
})
export class AddAvanceComponent implements OnInit {

  constructor(public avanceService: AvanceService,public userService:UserServiceService) { }

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
    this.avanceService.selectedAvance = {
      _id: "",
      mois: "",
      annee: "",
      montantAvance: null,
      users: new User("", "", "", "", "", "", "", 0, 0, "", "", 0)
    }
  }
  refreshAvanceList() {
    this.avanceService.getAvanceList().subscribe((res) => {
      this.avanceService.avances = res as Avance[];
    });
  }
  onSubmit(form: NgForm) {
    
      this.avanceService.postAvance(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAvanceList();
       // M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    
  }
}
