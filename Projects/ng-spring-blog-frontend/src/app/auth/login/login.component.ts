import { AuthService } from './../auth.service';
import { LoginPayload } from './../login-paylod';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPaylod: LoginPayload;

  constructor(
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginPaylod = {
      username:  "",
      password: ""
    }
  }

  ngOnInit(): void {
  }

  onSubimit() {
    this.loginPaylod.username = this.loginForm.get('username')?.value;
    this.loginPaylod.password = this.loginForm.get('password')?.value;

    this.authService.login(this.loginPaylod).subscribe(data => {
      if(data) {
        console.log("Login Sucess");
      } else {
        console.log("Login fail");
      }
    })
  }

}
