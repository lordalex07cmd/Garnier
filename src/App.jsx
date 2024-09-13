import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="product-card">
        <img
          className="product-image"
          src="https://dionamite.academy/watch-diogo.png" // You can replace with your actual image source
          alt="Product"
        />
        <h2 className="product-brand">GARNIER</h2>
        <p className="product-description">
          Garnier Pure Active Micellar Cleansing Water, 125 ml
        </p>
        <p className="product-price">$60</p>
        <div className="product-rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9734;</span>
          <span className="star">&#9734;</span>
        </div>
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
}

export default App;
