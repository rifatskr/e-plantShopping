import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Medicinal", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Medicinal", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Rosemary", price: 12, category: "Aromatic", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Mint", price: 8, category: "Aromatic", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Money Plant", price: 18, category: "Decorative", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Peace Lily", price: 20, category: "Decorative", img: "https://via.placeholder.com/100" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h2>Our Plants</h2>

      {plants.map(plant => (
        <div key={plant.id}>
          <img src={plant.img} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>Price: ${plant.price}</p>
          <button
            disabled={cartItems.find(item => item.id === plant.id)}
            onClick={() => dispatch(addItem(plant))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

