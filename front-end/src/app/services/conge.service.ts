import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conge } from '../_classes/conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  selectedConge: Conge;
  conges: Conge[];
  
  readonly baseURL = 'http://localhost:3000/conges';
  constructor(private http: HttpClient) { }
  getCongeList() {
    return this.http.get(this.baseURL);
  }
  putConge(conge: Conge) {
    return this.http.put(this.baseURL + `/${conge._id}`, conge);
  }
  postConge(conge: Conge) {
    return this.http.post('http://localhost:3000/conges/addconge', conge);
  }
  deleteConge(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
