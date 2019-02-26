import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {

  dataTable: any[];
  

  constructor() {
    this.dataTable = [
      { id: 1, name: 'uday',designation: 'UI developer',bloodgroup: 'O+ve',phone: '90909090' },
      { id: 2, name: 'vijay', designation: '.Net developer', bloodgroup: 'A+ve', phone: '123456' },
      { id: 3, name: 'ajay', designation: 'UX designer', bloodgroup: 'AB+ve', phone: '8989898' },
      { id: 4, name: 'abhai', designation: 'Php developer', bloodgroup: 'O-ve', phone: '2929292' },
      { id: 5, name: 'Surya', designation: 'Angular developer', bloodgroup: 'B+ve', phone: '39393939' },
    ]
  }

  ngOnInit() {   
   

  }

}
