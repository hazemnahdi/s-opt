import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/_classes/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user: User;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService
    .getProfile()
    .subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      return false;
    });
  }

}
