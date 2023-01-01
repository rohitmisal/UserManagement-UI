import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UnlockAccount } from 'src/app/common/unlock-account';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css'],
})
export class UnlockAccountComponent {
  msg: string = '';

  unlockAccount: UnlockAccount = new UnlockAccount();

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  onSubmit(userForm: NgForm) {
    console.log(this.unlockAccount);
    this.userService.unlockAccount(this.unlockAccount).subscribe((data) => {
      this.msg = data;
    });
    userForm.resetForm();
  }
}
