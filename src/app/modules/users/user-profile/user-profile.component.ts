import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUser, IUserState, RootState } from 'src/app/core/interfaces';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userId: string = '';
  userData!: IUser;

  constructor(private route: ActivatedRoute, private store: Store<RootState>,) {
    this.userId = this.route.snapshot.params['id'];
    this.store.select("users").subscribe((data: IUserState) => {
      this.userData = <IUser>data.users.find((user: IUser) => user.id === this.userId);
    })
  }

  ngOnInit(): void {
  }
}
