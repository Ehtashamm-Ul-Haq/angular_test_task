import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoComponent } from './user-profile/user-info/user-info.component';
import { UserHistoryComponent } from './user-profile/user-history/user-history.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    UsersListComponent,
    CreateUserComponent,
    UserProfileComponent,
    UserInfoComponent,
    UserHistoryComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
