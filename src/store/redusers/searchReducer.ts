import { SEARCH_CITY } from "./actions";
import { IBigWeatherDataObj, ICityAction } from "../../types/types";

export const searchReducer = (state = {} as IBigWeatherDataObj, action: ICityAction): any => {

    switch (action.type) {
        case SEARCH_CITY: {

            console.log(action.payload);
            return { ...state, searchItem: action.payload }
        }

        default:
            return state;
    }

};

export const searchCityAction = (payload: object) => ({ type: SEARCH_CITY, payload });