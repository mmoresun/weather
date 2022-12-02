// this is a list of all reducers

import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({

    //  city reducer
    city: cityReducer,

    // search reducer with thunk
    seatch: searchReducer

})