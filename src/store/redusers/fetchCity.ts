import { searchCityAction } from "../redusers/searchReducer";
import { Dispatch } from 'redux';

export const fetchCity = () => {

    return function (dispatch: Dispatch) {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Prague&appid=d74880f2c4824695c7d0c5f3ecae84a0&units=metric`)
            .then(response => response.json())
            .then(json => dispatch(searchCityAction(json)))
    }
}