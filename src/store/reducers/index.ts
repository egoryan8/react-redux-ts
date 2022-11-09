import {combineReducers} from "redux";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    users: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>;