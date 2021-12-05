import React, { Component } from 'react'
import Products from '../products/Products'
import { Route } from "react-router-dom"
import Cart from '../cart/Cart'
import Home from '../home/Home'
import Details from '../details/Details'
import Payment from '../payment/Payment'
import Contact from '../contact/Contact'
import About from '../about/About'
import Login from '../login/Login'

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/Contact" component={Contact} exact />
        <Route path="/About" component={About} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/payment" component={Payment} exact />
      </section>
    )
  }
}

export default Section
