import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginTitle = 'Login';
  loginResults = 'Results';

  loginFormObj: {};
  loginFrom: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginFrom = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit(val: any): void {
    this.loginFormObj = val;
    console.log(this.loginFrom.value)
  }

}
