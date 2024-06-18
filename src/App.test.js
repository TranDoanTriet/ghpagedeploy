import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders edit src/App.js text', () => {
//   render(<App />);
//   const editText = screen.getByText(/edit src\/App.js/i);
//   expect(editText).toBeInTheDocument();
// });

test('renders welcome text', () => {
  render(<App />);
  const helloText = screen.getByText(/hello/i);
  expect(helloText).toBeInTheDocument();
});

test('renders image with alt text', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/logo/i);
  expect(imgElement).toBeInTheDocument();
});