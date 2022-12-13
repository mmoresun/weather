import ModalWindow from './ModalWindow';
import { render, screen } from '@testing-library/react';
import React from "react";

test('Renders search form itself', () => {

  render(<ModalWindow />);    
  const modalButton = screen.getByRole('Button');
  expect(modalButton).toBeInTheDocument();
});

// test('Renders search panel input field', () => {
//   render(<SearchPanel />);
//   const searchInput = screen.getByPlaceholderText('Enter city');
//   expect(searchInput).toBeInTheDocument();
// });

// test('Renders search panel search button', () => {
//   render(<SearchPanel />);
//   const searchButton = screen.getByRole('button');
//   expect(searchButton).toBeInTheDocument();
// });