import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { RootState } from "../core/interfaces";
import { usersReducer } from "./users/users.reducer";
import { hydrationMetaReducer } from "./hydration/hydration.reducer";

export const reducers: ActionReducerMap<RootState> = {
    users: usersReducer as any
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]