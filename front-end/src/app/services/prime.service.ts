import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prime } from '../_classes/prime';

@Injectable({
  providedIn: 'root'
})
export class PrimeService {
  selectedPrime: Prime;
  primes: Prime[];
  
  readonly baseURL = 'http://localhost:3000/primes';
  constructor(private http: HttpClient) { }
  getPrimeList() {
    return this.http.get(this.baseURL);
  }
  putPrime(prime: Prime) {
    return this.http.put(this.baseURL + `/${prime._id}`, prime);
  }

  deletePrime(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  postPrime(prime: Prime) {
    return this.http.post('http://localhost:3000/primes/addprime', prime);
  }
}
