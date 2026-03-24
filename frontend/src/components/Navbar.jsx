function Navbar({ currentPage, setCurrentPage, cartCount }) {
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '15px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          🛍️ ShopFlow
        </h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              background: currentPage === 'home' ? 'white' : 'transparent',
              color: currentPage === 'home' ? '#667eea' : 'white',
              border: '2px solid white',
              fontWeight: 'bold'
            }}>
            Home
          </button>
          <button
            onClick={() => setCurrentPage('cart')}
            style={{
              background: currentPage === 'cart' ? 'white' : 'transparent',
              color: currentPage === 'cart' ? '#667eea' : 'white',
              border: '2px solid white',
              fontWeight: 'bold'
            }}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
