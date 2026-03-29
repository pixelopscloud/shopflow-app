import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const existing = cart.find(item => item._id === product._id)
    if (existing) {
      setCart(cart.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId))
  }

  return (
    <div>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cart.length}
      />
      {currentPage === 'home'
        ? <Home addToCart={addToCart} />
        : <Cart cart={cart} removeFromCart={removeFromCart} />
      }
    </div>
  )
}

export default App
// force rebuild
