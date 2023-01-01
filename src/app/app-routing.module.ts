import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotpwdComponent } from './Component/forgotpwd/forgotpwd.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisteruserComponent } from './Component/registeruser/registeruser.component';
import { UnlockAccount } from './common/unlock-account';
import { UnlockAccountComponent } from './Component/unlock-account/unlock-account.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: RegisteruserComponent },
  { path: 'forgotpwd', component: ForgotpwdComponent },
  { path: 'unlockaccount', component: UnlockAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
