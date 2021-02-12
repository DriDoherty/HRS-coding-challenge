import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../services';
import { User } from '../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: User;
  editForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private userService: UserService
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.userService.getUser(id)
      .pipe(first())
      .subscribe(
        data => {
          this.user = data;

          // update page w/ user details
          document.getElementById('editUserID').innerText = `${this.user.username}`;
          this.f['firstName'].setValue(this.user.firstName);
          this.f['lastName'].setValue(this.user.lastName);
        },
        error => {
          this.loading = false;
          // show error message and disable the save button
        });

    this.editForm = this.formBuilder.group({
      firstName: ["" , Validators.required],
      lastName: ["", Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;
    document.getElementById('editSaveErr').innerText = "";

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }

    let newFirstName = this.editForm.value.firstName;
    let newLastName = this.editForm.value.lastName;

    // if either first or last name has changed, update the user details and save
    // if neither has changed, don't waste time and go back to home
    if ( newFirstName !== this.user.firstName || newLastName !== this.user.lastName) {
      let newUser = JSON.parse(JSON.stringify(this.user));
      newUser.firstName = newFirstName;
      newUser.lastName = newLastName;

      this.loading = true;
      this.userService.updateUser(newUser)
          .pipe(first())
          .subscribe(
              data => {
                this.user = newUser;
                this.router.navigate(['/']);
              },
              error => {
                this.f['firstName'].setValue(this.user.firstName);
                this.f['lastName'].setValue(this.user.lastName);
                document.getElementById('editSaveErr').innerText = "Error saving user details";
                this.loading = false;
              });
    } else {
      this.router.navigate(['/']);
    }
  }
}