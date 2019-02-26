import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {
id:string;
name:string;
gender:string;
email?:string;
phoneNumber?:number;
contactPreference:string;
dateOfBirth:Date;
department:string;
isActive:boolean;
photoPath?:string;

  employeesList=[
    {id:1, name:'Uday', gender:'Male', contactPreference:'phone', phoneNumber:'9090909090', dateOfBirth:new Date('10/10/1985'), department:'UI Developer', isActive:'True', photoPath:'assets/images/male.png'},    
    {id:2, name:'Crysi', gender:'Female', contactPreference:'phone', phoneNumber:'1234567890', dateOfBirth:new Date('10/10/1995'), department:'Content Writer', isActive:'True', photoPath:'assets/images/female.png'},
    {id:3, name:'Bhaskar', gender:'Male', contactPreference:'phone', phoneNumber:'1010101010', dateOfBirth:new Date('10/10/1985'), department:'UX Designer', isActive:'True', photoPath:'assets/images/male.png'},
    {id:4, name:'Raol', gender:'Male', contactPreference:'phone', phoneNumber:'8008001234', dateOfBirth:new Date('10/10/1980'), department:'UI Developer', isActive:'True', photoPath:'assets/images/male.png'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
