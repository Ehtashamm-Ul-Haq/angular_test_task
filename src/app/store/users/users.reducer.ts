import { IUserState } from 'src/app/core/interfaces';
import { UsersActionType, UsersActions } from './users.actions';

export type Action = UsersActions;

export const initialState: IUserState = {
    users: []
};

export function usersReducer(state: IUserState = initialState, action: Action) {

    switch (action.type) {
        case UsersActionType.GET_USERS: {
            return { ...state };
        }
        case UsersActionType.ADD_NEW_USER: {
            return {
                ...state,
                users: [action.payload, ...state.users,]
            };
        }
        default:
            return state;
    }
}