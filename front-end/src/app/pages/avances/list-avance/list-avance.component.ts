import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AvanceService } from 'src/app/services/avance.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Avance } from 'src/app/_classes/avance';
import { User } from 'src/app/_classes/user';
declare var M: any;
@Component({
  selector: 'app-list-avance',
  templateUrl: './list-avance.component.html',
  styleUrls: ['./list-avance.component.scss']
})
export class ListAvanceComponent implements OnInit {

  constructor(public avanceService: AvanceService,public userService:UserServiceService) { }

  ngOnInit(): void {
    this.AvanceList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.avanceService.selectedAvance = {
      _id: "",
      mois: "",
      annee: "",
      montantAvance: null,
  users : new User("","", "", "", "","","",0,0,"","",0)
    }
  }
  AvanceList() {
    this.avanceService.getAvanceList().subscribe((res) => {
      this.avanceService.avances = res as Avance[];
      
    });
  }
  
  refreshAvanceList() {
    this.avanceService.getAvanceList().subscribe((res) => {
      this.avanceService.avances = res as Avance[];
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.avanceService.deleteAvance(_id).subscribe((res) => {
        this.refreshAvanceList();
        
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  
}


