import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  CreateEmployeeTitle = "string";
  CreateEmployeeForm: FormGroup;
  CreateEmployeeFormObj: {};
  DateofBirth: any[];
  GenderType: any[];
  ContactPreference: any[];
  Phone: number;
  Department: any[];


  constructor() {
    this.CreateEmployeeTitle = "Create Employee",
      this.GenderType = [
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' }
      ];
    this.ContactPreference = [
      { id: 1, name: 'Phone' },
      { id: 2, name: 'Email' }
    ];
    this.Department = [
      { id: 1, name: 'UI Developer' },
      { id: 2, name: 'UX Designer' },
      { id: 3, name: 'Content Writer' },
      { id: 4, name: 'Net Developer' }
    ];

  }

  ngOnInit() {
    this.CreateEmployeeForm = new FormGroup({
      GenderType: new FormControl(),
      DateofBirth: new FormControl(),
      Phone: new FormControl(),
      ContactPreference: new FormControl(),
      Department: new FormControl()
    })
  }

  onSubmit(val:any): void {   
    this.CreateEmployeeFormObj=val; 
    console.log(this.CreateEmployeeForm.touched);
    console.log(this.CreateEmployeeForm.value);

    console.log(this.CreateEmployeeForm.controls.GenderType.touched);
    console.log(this.CreateEmployeeForm.get('GenderType').value);
  }


}
