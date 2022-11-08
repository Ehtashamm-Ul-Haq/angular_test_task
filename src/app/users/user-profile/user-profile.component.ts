import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUser, RootState } from 'src/app/core/interfaces';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userEmail: string = '';
  userData: any;

  tabs = [{ title: "User Info", select: "app-user-info" }, { title: "History", select: "app-user-history" }]

  constructor(private route: ActivatedRoute, private store: Store<RootState>,) {
    this.userEmail = this.route.snapshot.params['id'];
    this.store.select("users").subscribe((data: any) => {
      this.userData = data.users.find((user: IUser) => user.email === this.userEmail);
    })
  }

  ngOnInit(): void {
  }
}
