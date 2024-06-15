import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// // test('renders edit src/App.js text', () => {
// //   render(<App />);
// //   const editText = screen.getByText(/edit src\/App.js/i);
// //   expect(editText).toBeInTheDocument();
// // });

// test('renders hello text', () => {
//   render(<App />);
//   const helloText = screen.getByText(/hello/i);
//   expect(helloText).toBeInTheDocument();
// });

// test('renders image with alt text', () => {
//   render(<App />);
//   const imgElement = screen.getByAltText(/logo/i);
//   expect(imgElement).toBeInTheDocument();
// });

test('renders welcome heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to My Store/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const aboutLink = screen.getByText(/About/i);
  const productsLink = screen.getByText(/Products/i);
  const contactLink = screen.getByText(/Contact/i);
  expect(aboutLink).toBeInTheDocument();
  expect(productsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<App />);
  const heroHeading = screen.getByText(/Discover Our New Collection/i);
  const heroText = screen.getByText(/Shop the latest products with amazing discounts!/i);
  const shopNowButton = screen.getByText(/Shop Now/i);
  expect(heroHeading).toBeInTheDocument();
  expect(heroText).toBeInTheDocument();
  expect(shopNowButton).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutHeading = screen.getByText(/About Us/i);
  const aboutText = screen.getByText(/We are a company dedicated to providing the best products./i);
  expect(aboutHeading).toBeInTheDocument();
  expect(aboutText).toBeInTheDocument();
});

test('renders products section', () => {
  render(<App />);
  const productsHeading = screen.getByText(/Our Products/i);
  const product1 = screen.getByText(/Product 1/i);
  const product2 = screen.getByText(/Product 2/i);
  const product3 = screen.getByText(/Product 3/i);
  const price1 = screen.getByText(/\$10.00/i);
  const price2 = screen.getByText(/\$20.00/i);
  const price3 = screen.getByText(/\$30.00/i);
  expect(productsHeading).toBeInTheDocument();
  expect(product1).toBeInTheDocument();
  expect(product2).toBeInTheDocument();
  expect(product3).toBeInTheDocument();
  expect(price1).toBeInTheDocument();
  expect(price2).toBeInTheDocument();
  expect(price3).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactHeading = screen.getByText(/Contact Us/i);
  const email = screen.getByText(/contact@store.com/i);
  const phone = screen.getByText(/\(123\) 456-7890/i);
  expect(contactHeading).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const footerText = screen.getByText(/© 2024 My Store/i);
  expect(footerText).toBeInTheDocument();
});

