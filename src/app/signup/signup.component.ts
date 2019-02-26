import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signuptitle = 'Sign Up';
  signupResulttitle = 'Results';

  signupObj: {};
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      education: new FormControl(),
      gender: new FormControl(),
      remember: new FormControl()
    });
  }

  onSubmit(val: any): void {
    this.signupObj = val;
    console.log(this.signupForm.value);


  }
  onClear(): void {
    this.signupForm.reset();
    this.signupObj = {};
  }




}
