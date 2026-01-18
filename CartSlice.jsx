import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    },
    updateQuantity(state, action) {
      const { id, amount } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item && item.quantity + amount > 0) {
        item.quantity += amount;
        state.totalQuantity += amount;
        state.totalPrice += item.price * amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

