import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateUserComponent>) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", [Validators.required]),
      about: new FormControl("", []),
    })
  }

  onSubmit() {
    if (!this.form.valid) return;
    this.dialogRef.close({ id: uuidv4(), ...this.form.value });
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
