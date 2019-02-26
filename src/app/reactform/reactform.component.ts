import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  ReactiveFormTitle: string;
  ReactiveFormSignUptitle: string;
  ReactiveForm: FormGroup;
  ReactiveFormObj: {};
  ReactiveSignUpForm: FormGroup;
  ReactiveSignUpFormObj: {};
  genderArray: any[];
  education: any[];
  state: any[];
  houseaddress =[];

  constructor() {
    this.ReactiveFormTitle = "Login";
    this.ReactiveFormSignUptitle = "Sign Up";
    this.education = [
      { id: 1, name: "SSC" },
      { id: 2, name: "Graduation" },
      { id: 3, mame: "Post Graduation" },
    ];
    this.genderArray = [
      { id: 1, name: "Male" },
      { id: 2, name: "Female" }
    ];
    this.state = [
      { id: 1, name: "Andhrapradesh" },
      { id: 2, name: "Telangana" }
    ];
    this.houseaddress=[{}];

  }


  ngOnInit() { 
     // login 
    this.ReactiveForm = new FormGroup({
      emailid: new FormControl(),
      password: new FormControl(),
    });

    // sign up
    this.ReactiveSignUpForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      genderType: new FormControl(),
      education: new FormControl(),
      houseaddress: new FormControl(),
      street: new FormControl(),
      state: new FormControl(),
      address: new FormGroup({        
        city: new FormControl(),        
        zip: new FormControl(),        
      }),

    });
  }
  // submit for login and signup
  onSubmit(val: any): void {
    this.ReactiveFormObj = val;
    console.log(this.ReactiveForm.value);
    this.ReactiveSignUpFormObj = val;
    console.log(this.ReactiveSignUpForm.value);
  }

  // clear for sign
  onClear(): void {
    this.ReactiveSignUpForm.reset();
    this.ReactiveSignUpFormObj = {};
  }
}
