import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateUserComponent>) { }

  ngOnInit(): void {
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
    this.dialogRef.close(this.form.value);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
