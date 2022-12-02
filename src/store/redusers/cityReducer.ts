
// this is todo reducer. it holds actions for working with the state

import { citylist } from "../citylist";
import { ICityStateEntry } from "../../types/types";
import { ICityAction } from "../../types/types";

import { ADD_CITY, REMOVE_CITY } from "./actions";

export const cityReducer = (state = citylist, action: ICityAction): ICityStateEntry[] => {

    switch (action.type) {

        case ADD_CITY: {
            return [...state, action.payload]
        }

        case REMOVE_CITY: {
            const { id } = action.payload;            
            return [...state.filter((item) => item.id !== id)]
        }

        default:
            return state;
    }
};

export const addCityAction = (payload: Object) => ({ type: ADD_CITY, payload })
export const removeCityAction = (payload: Object) => ({ type: REMOVE_CITY, payload })