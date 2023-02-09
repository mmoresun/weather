
import renderer from 'react-test-renderer';
import App from "./App";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { render, screen } from '@testing-library/react';


it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><App /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('useEffect and getWeather test', async () => {
  render(<Provider store={store}><App /></Provider>);
  // expect(await screen.findByText('Temperature')).toBeInTheDocument()
  expect(await screen.findByText(/City or region/i)).toBeInTheDocument();
})

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

