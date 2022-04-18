import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/_classes/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model = new User("","", "", "", "","","",0,0,"","",0);
  constructor(private userService: UserServiceService,
    private router: Router,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
  }
  onRegisterSubmit() {
    this.userService
    .registerUser(this.model)
    .subscribe(res => {
      if(res.success) {
       // this.flashMessagesService.show("User registered successfully", { cssClass: 'alert-success', timeout: 2500});
        this.router.navigate(['/login']);
      }
      else {
       // this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 2500});
        this.router.navigate(['/register']);
      }
    });
  }
}
