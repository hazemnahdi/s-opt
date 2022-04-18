import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CongeService } from 'src/app/services/conge.service';
import { Conge } from 'src/app/_classes/conge';
import { User } from 'src/app/_classes/user';
declare var M: any;
@Component({
  selector: 'app-list-conge',
  templateUrl: './list-conge.component.html',
  styleUrls: ['./list-conge.component.scss']
})
export class ListCongeComponent implements OnInit {

  constructor(public congeService: CongeService) { }

  ngOnInit(): void {
    this.CongeList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.congeService.selectedConge = {
      _id: "",
      dateDebut: "",
      dateFin: "",
      
  users : new User("","", "", "", "","","",0,0,"","",0)
    }
  }
  CongeList() {
    this.congeService.getCongeList().subscribe((res) => {
      this.congeService.conges = res as Conge[];
      
    });
  }
  refreshCongeList() {
    this.congeService.getCongeList().subscribe((res) => {
      this.congeService.conges = res as Conge[];
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.congeService.deleteConge(_id).subscribe((res) => {
        this.refreshCongeList();
        
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  
}
