import { LoginPayload } from './login-paylod';
import { JwtAutResponse } from './jwt-aut-response';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from './register-payload';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:8080/api/auth/"

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + "signup", registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAutResponse>(this.url + 'login', loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }

  isAuthentication(): boolean {
    return this.localStorageService.retrieve("username") != null;
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
  }
}
