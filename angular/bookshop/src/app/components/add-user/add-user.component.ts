import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm = this.formBuilder.group<User>({
    email:'',
    password:''
  });

  constructor( private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    // Process checkout data here
    console.log(this.userForm);
    this.userService.addBook(this.userForm.value as User);

  }
}
