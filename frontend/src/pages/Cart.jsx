function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cart.length === 0) return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <p style={{ fontSize: '24px', color: '#666' }}>🛒 Your cart is empty!</p>
    </div>
  )

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Your Cart</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {cart.map(item => (
          <div key={item._id} style={{
            background: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '18px' }}>{item.name}</h3>
              <p style={{ color: '#666' }}>Quantity: {item.quantity}</p>
              <p style={{ color: '#667eea', fontWeight: 'bold' }}>
                ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item._id)}
              style={{
                background: '#dc3545',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 20px'
              }}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        marginTop: '20px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textAlign: 'right'
      }}>
        <h3 style={{ fontSize: '24px' }}>
          Total: <span style={{ color: '#667eea' }}>${total}</span>
        </h3>
        <button style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontWeight: 'bold',
          padding: '12px 30px',
          fontSize: '16px',
          marginTop: '15px'
        }}>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
