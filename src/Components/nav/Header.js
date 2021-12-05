import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { DataContext } from '../contextApi/Context'

export class Header extends Component {
  static contextType = DataContext;
  state = {
    toggle: false
  }

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }


  render() {
    const { toggle } = this.state;
    const { cart } = this.context;
    return (
      <header>
        <div className="menu" onClick={this.menuToggle}>
          <i className="fas fa-bars" style={{ fontSize: "40px" }}></i>
        </div>
        <div className="logo">
          <h1><Link to="/">Shop Now</Link></h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li><Link to="/" onClick={this.menuToggle}>Home</Link></li>
            <li><Link to="/product" onClick={this.menuToggle}>Product</Link></li>
            <li><Link to="/contact" onClick={this.menuToggle}>Contact</Link></li>
            <li><Link to="/about" onClick={this.menuToggle}>About</Link></li>
            <li><Link to="/login" onClick={this.menuToggle}>Login / Register</Link></li>
            <li className="close" onClick={this.menuToggle}>
              < i className="fas fa-times" style={{ fontSize: "40px" }}></i>
            </li>
          </ul>
          <div className="nav-cart">
            <span>{cart.length}</span>
            <Link to="/cart">
              <i className="fas fa-shopping-cart" style={{ fontSize: "30px" }} title="add to car"></i>
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
