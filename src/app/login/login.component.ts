import { Component } from '@angular/core';
import { LoginRequest } from '../login-request';
import { UserServiceService } from '../user-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  msg: string = '';
  loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  onSubmit() {
    this.userService.loginUser(this.loginRequest).subscribe((data) => {
      this.msg = data;
    });
  }
}
