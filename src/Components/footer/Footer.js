import { Component } from 'react'
import './Footer.css'
class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="row dd">
            <div className="col-md-3">
              <h1>Contact Us</h1>
              <div className="cont">
                <div><i className="fas fa-phone" style={{ color: "#666666" }} ></i> <span>+14325474747</span></div>
                <div ><i className="fas fa-map-marker-alt" style={{ color: "#666666" }}></i><span> kingstr, 34 55546 Cairo </span></div>
                <div ><i className="fas fa-envelope" style={{ color: "#666666" }}></i><span> bc@gmail.com</span></div>
                <div ><i className="fab fa-edge" style={{ color: "#666666" }}></i> <span> http://bc.com</span></div>
              </div>
            </div>
            <div className="col-md-3">
              <h1>Categorie</h1>
              <div className="tag">
                <ul className="list-unstyled">
                  <li>Men</li>
                  <li>Womman</li>
                  <li>Accessories</li>
                  <li>Shoes</li>
                  <li>Booking</li>
                  <li>Dress</li>
                  <li>Denim</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info ">
                <h1>Imformation</h1>
                <div className="tag">
                  <ul className="list-unstyled">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Terms & Conditions</li>
                    <li>Returns & Exchanges</li>
                    <li>Booking</li>
                    <li>Shipping & Delivery</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h1>news Letter</h1>
              <div className="cont">
                <p>Subscribe to our newsletter and get 10% off your first purchase .</p>
                <div><input type="email" placeholder="Email address" /></div>
              </div>
            </div>
          </div>
          <div className="copy-right">
            <div className="row">
              <div className="col">
                <p className="fo">copyright 2020 &copy; all right reserved</p>
              </div>
              <div className="col text-right">
                <a href="#w"><i style={{ color: "#3b5998" }} className="fab fa-facebook-square"></i></a>
                <a href="#w"><i style={{ color: "#1da1f2" }} className="fab fa-twitter "></i></a>
                <a href="#w"><i style={{ color: "#0077b5" }} className="fab fa-linkedin-in "></i></a>
                <a href="#w"><i style={{ color: "#e1306c" }} className="fab fa-instagram "></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Footer;