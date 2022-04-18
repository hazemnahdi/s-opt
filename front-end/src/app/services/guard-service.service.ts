import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService {

  constructor(private authService: AuthServiceService, private router: Router) { }
  canActivate(){
    if(this.authService.loggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
