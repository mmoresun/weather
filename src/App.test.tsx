import renderer from 'react-test-renderer';
import App from "./App";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { DataTestReponse } from './types/types';
const axios = require('axios');

jest.mock('axios');

describe('getWeather', () => {

  let response: DataTestReponse;

  beforeEach(() => {
    response = {
      data: [{ "coord": { "lon": 14.4208, "lat": 50.088 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "base": "stations", "main": { "temp": -1.22, "feels_like": -6.53, "temp_min": -2.62, "temp_max": 0, "pressure": 1009, "humidity": 85 }, "visibility": 6000, "wind": { "speed": 5.14, "deg": 280 }, "clouds": { "all": 75 }, "dt": 1670855797, "sys": { "type": 2, "id": 2010430, "country": "CZ", "sunrise": 1670827920, "sunset": 1670857206 }, "timezone": 3600, "id": 3067696, "name": "Prague", "cod": 200 }]
    }
  });

  // test('Корректное значение', () => {
  //   axios.get.mockReturnValue(response);
  //   const data = await getData()
  // })

});

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<Provider store={store}><App /></Provider>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

// ========================

// INITIAL TEST
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
