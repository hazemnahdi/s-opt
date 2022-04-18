import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrimeService } from 'src/app/services/prime.service';
import { Prime } from 'src/app/_classes/prime';
import { User } from 'src/app/_classes/user';
declare var M: any;
@Component({
  selector: 'app-list-prime',
  templateUrl: './list-prime.component.html',
  styleUrls: ['./list-prime.component.scss']
})
export class ListPrimeComponent implements OnInit {

  constructor(public primeService: PrimeService) { }

  ngOnInit(): void {
    this.PrimeList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.primeService.selectedPrime = {
      _id: "",
      mois: "",
      annee: "",
      montantPrime:null,
      libelle:"",
      users: new User("", "", "", "", "", "", "", 0, 0, "", "", 0)
    }
  }
  PrimeList() {
    this.primeService.getPrimeList().subscribe((res) => {
      this.primeService.primes = res as Prime[];
      
    });
  }
  refreshPrimeList() {
    this.primeService.getPrimeList().subscribe((res) => {
      this.primeService.primes = res as Prime[];
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.primeService.deletePrime(_id).subscribe((res) => {
        this.refreshPrimeList();
        
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  
}
