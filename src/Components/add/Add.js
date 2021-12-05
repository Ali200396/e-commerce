import { Component } from "react";
import './Add.css'


class Add extends Component {
  state = {
    name: "Airpods Pro",
    price: 24900,
    imageUrl:
      "https://i.imgur.com/1GrakTl.jpg",
    className: "All"

  }

  render() {
    const { imageUrl, name, price } = this.state;
    return (
      <>

        <div className="card">
          <div className="row">
            <div className="col-md-12 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4><b>Shopping Cart</b></h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">3 items</div>
                </div>
              </div>

              <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                  <div className="col-2"><img className="img-fluid" src={imageUrl} alt="pictur" /></div>
                  <div className="col">
                    <div className=" text-muted">{ }</div>
                    <div className="">{name}</div>
                  </div>
                  <div className="col"> <a href="#w">-</a><a href="#w" className="border">1</a><a href="#w">+</a> </div>
                  <div className="col"> {price} <span className="close">&#10005;</span></div>
                </div>
              </div>

              <div className="back-to-shop"><span className="text-muted">Back to shop</span></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Add

