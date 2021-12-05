import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contextApi/Context";
import "../service/Service.css";

export class Products extends Component {
static contextType = DataContext;

  render() {
    const { products, addCart } = this.context;
    const theNewloop = products.map((product) => {
      return (
        <div className="col-md-3" key={product._id}>
          <div className={product.className}>
            <div className="cd">
              <Link to={`/product/${product._id}`}>
                <img
                  className="card-img-top"
                  src={product.src}
                  alt="Card cap"
                />
              </Link>

              <div className="ovo">
                <ul className="product__action">
                  <li>
                    {" "}
                    <Link to={`/product/${product._id}`} title="Quick View">
                      <i className="fas fa-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Add TO Cart">
                      <i className="fas fa-heart" title="love"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      title="Wishlist"
                      onClick={() => addCart(product._id)}
                    >
                      <i
                        className="fas fa-shopping-cart"
                        title="add to car"
                      ></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <h4>{product.title}</h4>
              <p>
                <span>{product.oldPrice}</span>
                <span>{product.price}</span>
              </p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <section className="popular">
        <div className="container">
          <div className=" ssll">
            <div className=" ali active ">
              <div className="row">{theNewloop}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
