import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ForgotpwdComponent } from './Component/forgotpwd/forgotpwd.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisteruserComponent } from './Component/registeruser/registeruser.component';
import { UnlockAccountComponent } from './Component/unlock-account/unlock-account.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisteruserComponent,
    ForgotpwdComponent,
    UnlockAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
