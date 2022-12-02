import { useEffect, useState } from 'react';
import './App.css';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Header from './components/Header/Header';
import WeatherCardsList from './components/WeatherCardsList/WeatherCardsList';
import { IWeatherDataObj } from './types/types';
// import { fetchCity } from './store/redusers/fetchCity';
// import { useDispatch } from 'react-redux';

export const API_KEY = 'd74880f2c4824695c7d0c5f3ecae84a0'; // my API Key for open weather map, don't use it

const App = () => {

  // 'Add to my button' switcher to enabled/disabled
  const [addDisabled, setAddDisabled] = useState<boolean>(false);

  // get and set value from search field
  const [myCity, setMyCity] = useState('');

  const getCity = (e: any): void => {
    e.preventDefault();
    setMyCity(e.target.elements.city.value.trim());

  };

  const [weatherData, setWeatherData] = useState({
  } as IWeatherDataObj);

  const getWeather = (myCity: string) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&lang=en&appid=${API_KEY}&units=metric`)
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

  // useEffect(() => {
  //   getWeather('Kyiv');
  // }, []);

  // const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <button onClick={() => dispatch<any>(fetchCity())}>Тестовая кнопка thunk</button> */}
      <Header />
      <SearchPanel
        getCity={getCity}
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