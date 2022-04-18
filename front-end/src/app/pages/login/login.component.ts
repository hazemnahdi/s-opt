import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup, FormControl ,FormBuilder} from '@angular/forms' ;
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LoginData } from 'src/app/_classes/login_data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = new LoginData("","");
  constructor(private authService: AuthServiceService,
    private router: Router,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
  }
  onLoginSubmit() {
    const loginData = new LoginData(this.loginData.username, this.loginData.password);
    
    this.authService.authenticateUser(loginData).subscribe(res => {
      if(res.succes) {
        this.authService.storeUserData(res.token, res.user);
       // this.flashMessagesService.show('You are now logged in.', { cssClass: 'alert-success', timeout: 2500});
        this.router.navigate(['home']);
      }
      else {
        //this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 2500});
        this.router.navigate(['login']);
      }
    });
  }
}
