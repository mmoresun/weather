
// import my elements
import { API_KEY } from '../../apikey';
import { IWeatherDataObj, ICityStateEntry, IReducer } from '../../types/types';
import WeatherCard from '../WeatherCard/WeatherCard';

// import some react and third party elements
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import material UI elements
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addCityAction } from '../../store/redusers/cityReducer';

const WeatherCardsList = ({ weatherData, addDisabled, setAddDisabled, }: { weatherData: IWeatherDataObj, addDisabled: boolean, setAddDisabled: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const myCityList: any = useSelector((state: IReducer) => state.city);

    const dispatch = useDispatch();

    const addNewCity = (e: React.MouseEvent) => {
        e.preventDefault();

        const newCity = {
            url: `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.name}&lang=en&appid=${API_KEY}&units=metric`,
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

    const mappedCityList = myCityList.map(((item: ICityStateEntry) => {
        return (
            <WeatherCard
                key={item.id}
                {...item} />
        )
    }));

    useEffect(() => {

    }, [myCityList])

    return (

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
            {weatherData.name &&
                <div style={{ display: addDisabled ? 'none' : 'block', border: '1px dashed black', padding: '0 10px 10px 10px', width: '250px', background: 'rgba(255, 255, 255, .3)' }}>
                    <p>City/Region: <b>{weatherData.name}</b></p>
                    <p>Temperature: <b>{weatherData.temp}°C</b></p>
                    <p>Wind: <b>{weatherData.wind} m/s</b></p>
                    <p>Sky: <b>{weatherData.clouds}</b></p>

                    <Button
                        onClick={addNewCity}
                    // disabled={addDisabled ? true : false}
                    >
                        Add to my list
                    </Button>
                </div>}
            <p><b>{weatherData.error}</b></p>

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
