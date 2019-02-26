import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  templateDrivenLoginFormTitle = "Login";
  templateDrivenSignUpFormTitle = "Sign Up";

  

  onSubmit(frm) {
    console.log(frm);
  }
  constructor() {
    
  }

  ngOnInit() {
  }

}
