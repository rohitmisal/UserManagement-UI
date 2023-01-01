import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginRequest } from '../common/login-request';
import { City } from '../common/city';
import { UnlockAccount } from '../common/unlock-account';
import { User } from '../common/user';
import { Country } from '../common/country';
import { State } from '../common/state';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}

  loginUser(loginUser: LoginRequest): Observable<string> {
    return this.httpClient.post(`${this.baseUrl}/login`, loginUser, {
      responseType: 'text',
    });
  }

  getCountries(): Observable<Country[]> {
    return this.httpClient
      .get<GetResponseCountries>(`${this.baseUrl}/countries`)
      .pipe(map((response) => response._embedded.countries));
  }

  getStates(countryId: number): Observable<State[]> {
    return this.httpClient
      .get<GetResponseStates>(`${this.baseUrl}/countries/${countryId}`)
      .pipe(map((response) => response._embedded.states));
  }

  getcities(stateId: number): Observable<City[]> {
    return this.httpClient
      .get<GetResponseCities>(`${this.baseUrl}/cities/${stateId}`)
      .pipe(map((response) => response._embedded.cities));
  }

  registerUser(user: User): Observable<string> {
    return this.httpClient.post(`${this.baseUrl}/registeruser`, user, {
      responseType: 'text',
    });
  }

  unlockAccount(unlockAccount: UnlockAccount): Observable<string> {
    return this.httpClient.post(
      `${this.baseUrl}/unlockaccount`,
      unlockAccount,
      {
        responseType: 'text',
      }
    );
  }

  forgotPwd(email: string): Observable<string> {
    return this.httpClient.get<string>(`${this.baseUrl}/forgotpwd/${email}`);
  }
}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  };
}

interface GetResponseStates {
  _embedded: {
    states: State[];
  };
}
interface GetResponseCities {
  _embedded: {
    cities: City[];
  };
}
