import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  showSucessMessage: boolean;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  updateProfile() {
    this.userService.updateUserProfile(this.userDetails).subscribe(
        res => {
          this.userService.getUserProfile().subscribe(
              res => {
                this.userDetails = res['user'];
              },
              err => {
                console.log(err);

              }
          );
          this.showSucessMessage = true;
        },
        err => {
          console.log(err);

        }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  showCustomers() {
    this.router.navigateByUrl('/customers');
  }

}
