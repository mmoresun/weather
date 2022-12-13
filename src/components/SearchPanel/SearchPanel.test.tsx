import SearchPanel from "./SearchPanel";
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

it('renders SearchPanel correctly', () => {
  const tree = renderer
    .create(<SearchPanel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders search form', () => {
  render(<SearchPanel />);
  // const searchForm = screen.getByTitle('searchpanel')
  const searchForm = screen.getByRole('form');
  expect(searchForm).toBeInTheDocument();
});

it('renders SearchPanel input field', () => {
  render(<SearchPanel />);
  const searchInput = screen.getByPlaceholderText('Enter city');
  expect(searchInput).toBeInTheDocument();
});

it('renders SearchPanel search button', () => {
  render(<SearchPanel />);
  const searchButton = screen.getByRole('button');
  expect(searchButton).toBeInTheDocument();
});

