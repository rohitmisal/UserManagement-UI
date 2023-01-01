import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css'],
})
export class ForgotpwdComponent {
  msg: string = '';
  email: string = '';

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  onSubmit(userForm: NgForm) {
    this.userService.forgotPwd(this.email).subscribe((data) => {
      this.msg = data;
      console.log(data);
    });
    userForm.resetForm();
  }
}
