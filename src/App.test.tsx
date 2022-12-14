
import renderer from 'react-test-renderer';
import App from "./App";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { render, screen, waitFor } from '@testing-library/react';

it('useEffect works, getWeather calls', async () => {
  render(<Provider store={store}><App /></Provider>);
  await waitFor(() => {
    expect(screen.getByText(/City or region/i)).toBeInTheDocument()    
  });
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><App /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

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

