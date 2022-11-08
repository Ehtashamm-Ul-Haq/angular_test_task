import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddUser } from 'src/app/store/users/users.actions';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { IUser, RootState } from 'src/app/core/interfaces';
import {
  debounceTime,
  map,
  distinctUntilChanged
} from "rxjs/operators";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'address', "action"];
  dataSource: IUser[] = [];
  allUsers: IUser[] = [];

  constructor(private store: Store<RootState>, public dialog: MatDialog) {
    this.store.select("users").subscribe((data: any) => {
      this.dataSource = data.users;
      this.allUsers = data.users;
    })
  }

  ngOnInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value.trim();
      }),
      debounceTime(800),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      if (text === "") this.dataSource = this.allUsers;
      if (text.length < 2) return;

      this.dataSource = this.allUsers.filter((user: IUser) => user.email === text)
    });
  }

  createUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, { width: "30rem", height: "auto" });

    dialogRef.afterClosed().subscribe((result: IUser) => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.store.dispatch(new AddUser(result))
      }
    });
  }
}
