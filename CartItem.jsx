import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, totalQuantity } = useSelector(state => state.cart);

  return (
    <div>
      <nav>
        <Link to="/products">Continue Shopping</Link>
      </nav>

      <h2>Your Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ${totalPrice}</p>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>+</button>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Checkout Coming Soon!")}>
        Checkout
      </button>
    </div>
  );
};

export default CartItem;

