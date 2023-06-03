import {combineReducers, legacy_createStore} from "redux";
import {CountReducer} from "./Reducers/CountReducer";

export const rootReducer = combineReducers({
    count: CountReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>