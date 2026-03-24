import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

function Home({ addToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('/api/products')
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load products')
        setLoading(false)
      })
  }, [])

  const seedProducts = () => {
    axios.post('/api/products/seed')
      .then(() => axios.get('/api/products'))
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '100px', fontSize: '20px' }}>
      Loading products...
    </div>
  )

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h2 style={{ fontSize: '28px' }}>Featured Products</h2>
        <button
          onClick={seedProducts}
          style={{
            background: '#28a745',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px 20px'
          }}>
          Load Sample Products
        </button>
      </div>

      {error && (
        <div style={{
          background: '#fff3cd',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          color: '#856404'
        }}>
          ⚠️ {error} — Make sure backend is running!
        </div>
      )}

      {products.length === 0 && !error ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>No products yet!</p>
          <button
            onClick={seedProducts}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 25px',
              marginTop: '15px',
              fontSize: '16px'
            }}>
            Add Sample Products
          </button>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          {products.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
