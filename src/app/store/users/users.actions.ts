import { Action } from '@ngrx/store';
import { IUser } from 'src/app/core/interfaces';

export enum UsersActionType {
    GET_USERS = 'GET_USERS',
    ADD_NEW_USER = 'ADD_NEW_USER'
}

export class GetUsers implements Action {
    readonly type = UsersActionType.GET_USERS;
}

export class AddUser implements Action {
    readonly type = UsersActionType.ADD_NEW_USER;
    constructor(public payload: IUser) { }
}

export type UsersActions = GetUsers | AddUser;