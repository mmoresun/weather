
// import my elements

import { ICityStateEntry, IReducer, IWeatherCardsListProps } from '../../types/types';
import WeatherCard from '../WeatherCard/WeatherCard';

// import some react and third party things
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import material UI things
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addCityAction } from '../../store/redusers/cityReducer';

const API_WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherCardsList: React.FC<IWeatherCardsListProps> = ({ weatherData, addDisabled, setAddDisabled }) => {

    const myCityList: any = useSelector((state: IReducer) => state.city);

    const dispatch = useDispatch();

    const addNewCity = (e: React.MouseEvent) => {
        e.preventDefault();

        const newCity = {
            url: `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.name}&lang=en&appid=${API_WEATHER_KEY}&units=metric`,
            id: uuid()
        }

        // old variant: 

        // dispatch({
        //     type: ADD_CITY,
        //     payload: {
        //         url: `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.name}&lang=en&appid=${API_KEY}&units=metric`,
        //         id: uuid()
        //     }                      
        // });

        // new variant 
        dispatch(addCityAction(newCity));

        setAddDisabled(true); // hide search results after the city is added to the list

    };

    // mapping myCityList to get a list of weather cards
    const mappedCityList = myCityList.map(((item: ICityStateEntry) => {
        return (
            <WeatherCard
                key={item.id}
                {...item} />
        )
    }));

    // re-render component every time then citylist is changed
    useEffect(() => {
    }, [myCityList])

    return (

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {weatherData.name &&
                <div style={{ display: addDisabled ? 'none' : 'block', border: '1px dashed black', padding: '0 10px 10px 10px', width: '250px', background: 'rgba(255, 255, 255, .3)', margin: '0 0 20px 0' }}>
                    <p>City or region: <b>{weatherData.name}</b></p>
                    <p>Local temperature: <b>{weatherData.temp}°C</b></p>
                    <p>Wind: <b>{weatherData.wind} m/s</b></p>
                    <p>Sky: <b>{weatherData.clouds}</b></p>

                    <Button
                        onClick={addNewCity}
                    >
                        Add to my list
                    </Button>
                </div>}
            <p style={{display: weatherData.error ? '' : 'none'}}><b>{weatherData.error}</b></p>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                {mappedCityList}
            </Box>
        </div>
    );
}

export default WeatherCardsList;
