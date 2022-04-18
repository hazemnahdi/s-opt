import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrimeService } from 'src/app/services/prime.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Prime } from 'src/app/_classes/prime';
import { User } from 'src/app/_classes/user';

@Component({
  selector: 'app-add-prime',
  templateUrl: './add-prime.component.html',
  styleUrls: ['./add-prime.component.scss']
})
export class AddPrimeComponent implements OnInit {

  constructor(public primeService: PrimeService,public userService:UserServiceService) { }

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
    this.primeService.selectedPrime = {
      _id: "",
      libelle:"",
      mois: "",
      annee: "",
      montantPrime:null,
      users: new User("", "", "", "", "", "", "", 0, 0, "", "", 0)
    }
  }
  refreshPrimeList() {
    this.primeService.getPrimeList().subscribe((res) => {
      this.primeService.primes = res as Prime[];
    });
  }
  onSubmit(form: NgForm) {
    
      this.primeService.postPrime(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPrimeList();
       // M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    
  }
}
