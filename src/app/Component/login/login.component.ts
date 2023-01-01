import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Route, Router } from '@angular/router';
import { LoginRequest } from 'src/app/common/login-request';
import { UserServiceService } from 'src/app/services/user-service.service';

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

  onSubmit(loginform: NgForm) {
    this.userService.loginUser(this.loginRequest).subscribe((data) => {
      this.msg = data;
    });
  }

  forgotPwd() {
    this.router.navigate(['/forgotpwd']);
  }

  SignUp() {
    this.router.navigate(['/signup']);
  }
}
