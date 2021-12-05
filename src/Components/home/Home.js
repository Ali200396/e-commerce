import { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import $ from 'jquery'
import Service from '../service/Service';
import Company from '../overview/Company';

$(window).on("resize", function () {
  var wh = $(window).height(),
    nh = $("header").innerHeight();
  $(".slideHome").height(wh - (nh));
});

class Home extends Component {

  componentDidMount() {
    var wh = $(window).height(),
      nh = $("header").innerHeight();

    $(".slideHome").height(wh - (nh));

  }

  render() {
    return (
      < >
        <section className="slideHome">
          <div className="overlay"></div>
          <div className="ov">
            <h3>Awesome Product Collection</h3>
            <p>In 2021</p>
            <Link to="/product"> Show Link</Link>
          </div>
        </section>

        <section className="new">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="bg bg1">
                </div>
                <div>
                  <h3>new product collection</h3>
                  <Link to="/product"> Shop Now</Link>
                </div>

              </div>
              <div className="col-xs-12 col-md-6">
                <div className="bg bg2">

                </div>
                <div>
                  <h3>new product collection</h3>
                  <Link to="/product"> Shop Now</Link>
                </div>

              </div>
            </div>
          </div>
        </section>
        <Service />
        <Company />
      </>
    )
  }
}
export default Home;