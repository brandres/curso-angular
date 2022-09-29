import { UserForm } from './../../models/user.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm = this.formBuilder.group<UserForm>({
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor( private formBuilder : FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    // Process checkout data here
    console.log(this.userForm);
    this.userService.addUser(this.userForm.value as User);
    this.userForm.reset();
  }
}
