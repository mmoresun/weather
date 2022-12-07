
import React, { useEffect, useState } from 'react';
import './App.css';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Header from './components/Header/Header';
import WeatherCardsList from './components/WeatherCardsList/WeatherCardsList';
import { IWeatherDataObj, MyFormSubmitEvent } from './types/types';
import { API_KEY } from './apikey';

const App = () => {

  // 'Add to my button' switcher to enabled/disabled
  const [addDisabled, setAddDisabled] = useState<boolean>(false);

  // get and set value from search field
  const [myCity, setMyCity] = useState<string>('');


const getCity = (e:  MyFormSubmitEvent): void => {
  e.preventDefault();
  setMyCity(e.currentTarget.city.value);
};


  // const getCity = (e: MyFormSubmitEvent): void => {
  //   e.preventDefault();
  //   const target = e.target;
  //   setMyCity(target.city.value.trim());
  // };

  const [weatherData, setWeatherData] = useState({
  } as IWeatherDataObj);

  const getWeather = (myCity: string) => {

    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&lang=en&appid=${API_KEY}&units=metric`;

    fetch(cityUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData({
        name: data.name,
        country: data.sys.country,
        wind: data.wind.speed,
        clouds: data.weather[0].description,
        temp: Math.round(data.main.temp),
        feels_like: Math.round(data.main.feels_like),
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        error: undefined
      }))
      .catch((error) =>
        error.response === undefined &&
        setWeatherData({
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
        })
      );

    setAddDisabled(false);
  };

  useEffect(() => {
    // if something entered to the search string, run getWeather function
    myCity && getWeather(myCity);

  }, [myCity]);

  useEffect(() => {
    getWeather('Kyiv');
  }, [])

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

