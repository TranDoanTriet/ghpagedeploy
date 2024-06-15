import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>hello</p>
    //   </header>
    // </div>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Store</h1>
        <nav className="App-nav">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="hero" className="App-hero">
        <h2>Discover Our New Collection</h2>
        <p>Shop the latest products with amazing discounts!</p>
        <button className="App-button">Shop Now</button>
      </section>
      <section id="about" className="App-section">
        <h2>About Us</h2>
        <p>We are a company dedicated to providing the best products.</p>
      </section>
      <section id="products" className="App-section">
        <h2>Our Products</h2>
        <div className="App-products">
          <div className="App-product">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$10.00</p>
            <button className="App-button">Buy Now</button>
          </div>
          <div className="App-product">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$20.00</p>
            <button className="App-button">Buy Now</button>
          </div>
          <div className="App-product">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$30.00</p>
            <button className="App-button">Buy Now</button>
          </div>
        </div>
      </section>
      <section id="contact" className="App-section">
        <h2>Contact Us</h2>
        <p>Email: contact@store.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
      <footer className="App-footer">
        <p>&copy; 2024 My Store</p>
      </footer>
    </div>
  );
}

export default App;
