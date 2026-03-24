function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <span style={{
        background: '#667eea',
        color: 'white',
        padding: '4px 10px',
        borderRadius: '20px',
        fontSize: '12px'
      }}>
        {product.category}
      </span>
      <h3 style={{ margin: '10px 0 5px', fontSize: '18px' }}>{product.name}</h3>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
        {product.description}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#667eea' }}>
          ${product.price}
        </span>
        <button
          onClick={() => addToCart(product)}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px 20px'
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
