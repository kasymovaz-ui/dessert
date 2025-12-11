// src/data/cart.js
let cart = JSON.parse(localStorage.getItem('dessertCart') || '[]');

export const addToCart = (dessert, qty = 1) => {
  const existing = cart.find(item => item.id === dessert.id);
  if (existing) existing.quantity += qty;
  else cart.push({ ...dessert, quantity: qty });
  localStorage.setItem('dessertCart', JSON.stringify(cart));
};

export const getCart = () => cart;

export const updateQuantity = (id, qty) => {
  if (qty <= 0) removeFromCart(id);
  else {
    const item = cart.find(i => i.id === id);
    if (item) item.quantity = qty;
    localStorage.setItem('dessertCart', JSON.stringify(cart));
  }
};

export const removeFromCart = (id) => {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('dessertCart', JSON.stringify(cart));
};

export const clearCart = () => {
  cart = [];
  localStorage.removeItem('dessertCart');
};