import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() user!: IUser;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
