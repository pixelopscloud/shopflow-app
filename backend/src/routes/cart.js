const express = require('express');
const router = express.Router();

let cart = [];

// Get cart
router.get('/', (req, res) => {
  res.json(cart);
});

// Add to cart
router.post('/add', (req, res) => {
  const { productId, name, price, quantity } = req.body;
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += quantity || 1;
  } else {
    cart.push({ productId, name, price, quantity: quantity || 1 });
  }
  res.json({ message: 'Added to cart!', cart });
});

// Remove from cart
router.delete('/remove/:productId', (req, res) => {
  cart = cart.filter(item => item.productId !== req.params.productId);
  res.json({ message: 'Removed from cart!', cart });
});

// Clear cart
router.delete('/clear', (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared!' });
});

module.exports = router;
