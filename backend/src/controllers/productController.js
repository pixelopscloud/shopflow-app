const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single product
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Seed sample products
const seedProducts = async (req, res) => {
  try {
    await Product.deleteMany();
    const products = [
      { name: 'Wireless Headphones', price: 99, description: 'Premium sound quality', category: 'Electronics', stock: 15 },
      { name: 'Running Shoes', price: 79, description: 'Comfortable running shoes', category: 'Sports', stock: 20 },
      { name: 'Coffee Maker', price: 49, description: 'Brew perfect coffee', category: 'Kitchen', stock: 10 },
      { name: 'Backpack', price: 59, description: 'Durable travel backpack', category: 'Travel', stock: 25 }
    ];
    const inserted = await Product.insertMany(products);
    res.json({ message: 'Products seeded!', products: inserted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct, seedProducts };
