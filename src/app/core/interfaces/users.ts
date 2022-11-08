export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    about?: string
}

export interface IUserState {
    users: IUser[]
}

export interface RootState {
    users: IUserState
}