import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avance } from '../_classes/avance';
import { User } from '../_classes/user';

@Injectable({
  providedIn: 'root'
})
export class AvanceService {
  selectedAvance: Avance;
  avances: Avance[];
  
  readonly baseURL = 'http://localhost:3000/avanves';
  constructor(private http: HttpClient) { }
  postAvance(avance: Avance) {
    return this.http.post('http://localhost:3000/avanves/addavance', avance);
  }
  getAvanceList() {
    return this.http.get(this.baseURL);
  }
  putAvance(avance: Avance) {
    return this.http.put('http://localhost:3000/avanves'+ `/${avance._id}`, avance);
  }

  deleteAvance(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
