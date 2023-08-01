// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="mobile-view-container">
      <div className="mobile-header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-log"
        />
        <button className="logout-icon-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-icon"
          />
        </button>
      </div>

      <div className="large-container-home-products-cart-logout-btn-container">
        <ul className="menu-items">
          <li className="nav-items">Home</li>
          <li className="nav-items">Products</li>
          <li className="nav-items">Cart</li>
        </ul>
        <button className="logout-btn" type="button">
          Logout
        </button>
      </div>

      <ul className="home-cart-products-icon-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="home-icon"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="products-icon"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="car-icon"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
