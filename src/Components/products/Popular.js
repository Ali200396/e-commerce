import { Component, Fragment } from "react";
import '../service/Service.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../contextApi/Context'


class Popular extends Component {
  static contextType = DataContext;
  render() {
    const { products, addCart } = this.context;
    // const productDetails = this.props.productDetails;
    const theNewloop = products.map((product) => {
      return (
        <div className="col-md-3" key={Math.random()}>
          <div className={product.className}>
            <div className="cd">
              <img className="card-img-top" src={product.src} alt="Card cap" />
              <div className="ovo">
                <ul className="product__action">
                  <li> <Link to={`/product/${product._id}`} title="Quick View" ><i className="fas fa-plus"></i></Link></li>
                  <li><Link to="#" title="Add TO Cart"  ><i className="fas fa-heart" title="love"></i></Link></li>
                  <li><Link to="#" title="Wishlist" onClick={() => addCart(product._id)} ><i className="fas fa-shopping-cart" title="add to car"></i></Link></li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <h4 >{product.title}</h4>
              <p ><span>{product.price}</span><span>{product.price}</span></p>
            </div>
          </div>
        </div>
      )
    })

    return (
      < >
        <section className="popular">
          <div className="container">
            <h2>Popular Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.</p>
            <div className="contro">
              <ul className=" list-unstyled float-left">
                <li data-className="All" className=" active">All</li>
                <li data-className=".FURNITURES" className="">FURNITURES</li>
                <li data-className=".Bags" className="">Bags</li>
                <li data-className=".DECORATION" className="">DECORATION</li>
                <li data-className=".ACCESSORIES" className="">ACCESSORIES</li>
              </ul>
              <div className="controls-top float-right">
                <a className="btn-floating" href="#multi-item-example1" data-slide="prev">Filter</a>
              </div>
            </div>
            <div className=" ssll" >
              <div className=" ali active ">
                <div className="row">
                  {theNewloop}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default Popular