import { useEffect, useState } from 'react';
import { IBigWeatherDataObj, ICityStateEntry } from '../../types/types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModalWindow from '../ModalWindow/ModalWindow';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
// import { REMOVE_CITY } from '../../store/redusers/actions';
import { removeCityAction } from '../../store/redusers/cityReducer';

const WeatherCard = ({ ...props }) => {

    const dispatch = useDispatch();

    // deleting city from the list
    const deleteCity = (item: ICityStateEntry) => {

        // dispatch(
        //     {
        //         type: REMOVE_CITY,
        //         payload: item
        //     }
        // );

        const cityNeedToRemove = item;        

        dispatch(removeCityAction(cityNeedToRemove));
    }

    // manage the ModalWindow
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // trigger useEffect every time when the 'Refresh button is clicked'
    const [isRefresh, setIsreflesh] = useState(true);
    const handleRefresh = () => {
        setIsreflesh(!isRefresh)
    }

    const [cardData, setCardData] = useState({} as IBigWeatherDataObj);
    useEffect(() => {

        fetch(props.url)
            .then((response) => response.json())
            .then((data) => setCardData({
                name: data.name,
                country: data.sys.country,
                wind: data.wind.speed,
                clouds: data.weather[0].description,
                temp: Math.round(data.main.temp),
                feels_like: Math.round(data.main.feels_like),
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                visibility: data.visibility,
                icon: data.weather[0].icon,
                wind_deg: data.wind.deg
            }));
        // .then((data) => console.log(data));
    }, [isRefresh, props.url])

    return (
        <>
            <Card sx={{ minWidth: 250, maxWidth: 300, margin: 1, boxShadow: 6, padding: '0 0 10px 0' }} variant="outlined">

                <CardContent>
                    <Typography variant="body2">City/Region: <b>{cardData.name}</b></Typography>
                    <Typography variant="body2">Temperature: <b>{cardData.temp}°C</b></Typography>
                    <Typography variant="body2">Wind: <b>{cardData.wind} m/s</b></Typography>
                    <Typography variant="body2">Sky: <b>{cardData.clouds}</b> </Typography>
                    <img src={`https://openweathermap.org/img/wn/${cardData.icon}@2x.png`} alt="" />
                </CardContent>

                <ModalWindow
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    cardData={cardData}
                />
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Box sx={{ width: 220, display: 'flex', justifyContent: 'space-around', gap: .2 }}>
                        <Button
                            size="medium"
                            onClick={handleRefresh}
                        >Refresh &#x21bb;
                        </Button>
                        <Button
                            color="error"
                            size="medium"
                            onClick={() => deleteCity(props as ICityStateEntry)}
                        >Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>

        </>
    );
};

export default WeatherCard;