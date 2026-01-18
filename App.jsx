import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing-page">
              <h1>Paradise Nursery</h1>
              <p>
                Discover a wide variety of indoor plants to refresh your home
                and workspace.
              </p>
              <Link to="/products">
                <button className="get-started-btn">Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;

