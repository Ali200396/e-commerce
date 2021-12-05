import { Component, Fragment } from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import Add from '../add/Add'

class Naav extends Component {
  state = {
    show: false,
  }
  render() {
    const show = this.state.show;
    const apear = (e) => {
      this.setState({
        show: true
      })
    }
    const stabil = (e) => {
      this.setState({
        show: false
      })
    }

    return (
      <Fragment key={Math.random()}>
        <div className="container">
          <div className="row " >
            <div className="col-5 col-md-4">
              <Navbar.Brand href="#home"><span>ecommerce</span> </Navbar.Brand>
            </div>
            <div className="col-5 col-md-4">
              <input type="search" placeholder="search" />
            </div>
            <div className="col-2 col-md-4 text-right icon">
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link href="#home" >  <i className="fas fa-shopping-cart" onMouseOverCapture={apear} onBlur={apear} title="add to car"></i></Nav.Link>
                    <Nav.Link href="#link"> <i className="fas fa-heart" title="love"></i></Nav.Link>
                    <Nav.Link href="#home" >  <i className="fas fa-shopping-cart" title="add to car"></i></Nav.Link>
                    <Nav.Link href="#link">  <i className="fas fa-user-alt" title="login"></i></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            {show && (
              <div onMouseLeave={stabil}>
                <Add />
              </div>
            )}
          </div>
          <div className="text-center">
            <div className="mainmenu__nav  hidden-xs hidden-sm">
              <ul className="main__menu hidden-xs hidden-sm">
                <li className="drop"><NavLink exact to="/">Home</NavLink> </li>
                <li className="drop"><NavLink to="/Service">Service</NavLink> </li>
                <li className="drop"><NavLink to="/login">login</NavLink> </li>
                <li className="drop"><NavLink to="/Add">add</NavLink> </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Naav;


