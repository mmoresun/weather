
import { useEffect, useState } from 'react';
import './App.css';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Header from './components/Header/Header';
import WeatherCardsList from './components/WeatherCardsList/WeatherCardsList';
import { IWeatherDataObj, MyFormSubmitEvent } from './types/types';
import axios from 'axios';

const API_WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {

  // 'Add to my list button' enabled/disabled switcher
  const [addDisabled, setAddDisabled] = useState<boolean>(false);

  // get and set value from search field
  const [myCity, setMyCity] = useState<string>('');

  const getCity = (e: MyFormSubmitEvent): void => {
    e.preventDefault();
    setMyCity(e.currentTarget.city.value);
  };

  const [weatherData, setWeatherData] = useState({
  } as IWeatherDataObj);

  const getWeather = async (myCity: string) => {
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&lang=en&appid=${API_WEATHER_KEY}&units=metric`;
    await axios
      .get(cityUrl)
      .then((response) => setWeatherData({
        name: response.data.name,
        country: response.data.sys.country,
        wind: response.data.wind.speed,
        clouds: response.data.weather[0].description,
        temp: Math.round(response.data.main.temp),
        feels_like: Math.round(response.data.main.feels_like),
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon,
        error: undefined
      }))
      .catch(() => setWeatherData({
        name: undefined,
        country: undefined,
        wind: undefined,
        clouds: undefined,
        temp: undefined,
        feels_like: undefined,
        pressure: undefined,
        humidity: undefined,
        icon: undefined,
        error: `City "${myCity}" is not found`
      }));

    setAddDisabled(false);
  };

  useEffect(() => {
    // if something entered to the search string, run getWeather function
    myCity && getWeather(myCity);

  }, [myCity]);

  // the first render
  useEffect(() => {

    getWeather('Kyiv');

  }, []);

  return (
    <div className="App">
      <Header />
      <SearchPanel
        getCity={getCity}
        setMyCity={setMyCity}
      />
      <WeatherCardsList
        addDisabled={addDisabled}
        setAddDisabled={setAddDisabled}
        weatherData={weatherData}
      />
    </div>
  );
}

export default App;
