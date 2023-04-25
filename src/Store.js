import {combineReducers, legacy_createStore} from 'redux'
import HomeReducer from "./Reducers/HomeReducer";
import ProfileReducer from "./Reducers/ProfileReducer";

let reducers = combineReducers({
    homeReducer: HomeReducer,
    profileReducer: ProfileReducer
})

let store = legacy_createStore(reducers)

export default store