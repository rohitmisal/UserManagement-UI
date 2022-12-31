import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from './user';
import { Country } from './country';
import { State } from './state';
import { City } from './city';
import { LoginRequest } from './login-request';
import { UnlockAccount } from './unlock-account';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl = 'http://localhost:8080';
  constructor(private httpclinet: HttpClient) {}

  loginUser(loginUser: LoginRequest): Observable<string> {
    return this.httpclinet.post(`${this.baseUrl}/login`, loginUser, {
      responseType: 'text',
    });
  }

  getCountries() {
    return this.httpclinet
      .get(`${this.baseUrl}/countries`)
      .pipe(
        map((countryId: any) => {
          return countryId;
        }),
        map((countryName) => {
          return countryName;
        })
      );
  }

  getStates(countryId: number) {
    return this.httpclinet.get(`${this.baseUrl}/countries/${countryId}`);
  }
  getcities(stateId: number): Observable<City[]> {
    return this.httpclinet.get<City[]>(`${this.baseUrl}/cities/${stateId}`);
  }

  registerUser(user: User): Observable<Object> {
    return this.httpclinet.post(`${this.baseUrl}/registeruser`, {
      resposeType: 'text',
    });
  }

  unlockAccount(unlockAccount: UnlockAccount): Observable<Object> {
    return this.httpclinet.post(`${this.baseUrl}/unlockaccount`, {
      resposeType: 'text',
    });
  }

  forgotPwd(email: String): Observable<Object> {
    return this.httpclinet.post(`${this.baseUrl}/forgotpwd/{$this.email}`, {
      resposeType: 'text',
    });
  }
}
