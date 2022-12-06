// this is a list of all reducers

import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";

export const rootReducer = combineReducers({

    //  city reducer
    city: cityReducer,

})