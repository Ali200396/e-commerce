import { Component, Fragment } from "react";
import './Service.css'
import d1 from '../img/d1.jpg'
import d2 from '../img/d2.jpg'
import f1 from '../img/f1.jpg'
import f2 from '../img/f2.jpg'
import Popular from "../products/Popular";
import { Link } from 'react-router-dom'
import { DataContext } from '../contextApi/Context'

class Service extends Component {
  static contextType = DataContext;
  state = {
    img: [d1, d2, f1, f2],
    products: [
      {
        "_id": "1",
        title: "Airpods Pro",
        price: 2400,
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
        "description": "Lorem ipsum dolor",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.",
        "colors": ["red", "crimson", "teal"],
        "count": 1,
        oldPrice: "2600",
        className: "All"
      },
      {
        "_id": "2",
        title: "Apple Watch",
        price: 40900,
        src: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
        "description": "Lorem ipsum dolor",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.",
        "colors": ["red", "crimson", "teal"],
        "count": 1,
        oldPrice: "5600",
        className: "FURNITURES"
      },
      {
        "_id": "3",
        title: "Macbook Pro",
        price: 19900,
        src: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
        "description": "Lorem ipsum dolor",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.",
        "colors": ["red", "crimson", "teal"],
        "count": 1,
        oldPrice: "22600",
        className: "Bags"
      },
      {
        "_id": "4",
        title: "iPhone 11 pro",
        price: 106600,
        src:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
        "description": "Lorem ipsum dolor",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.",
        "colors": ["red", "crimson", "teal"],
        "count": 1,
        oldPrice: "12600",
        className: "DECORATION"
      },
    ]
  }
  // deleteProduct = (name) => {
  //     let productDetails = this.state.productDetails.filter(Product => {
  //       return Product.name !== name
  //     })
  //     this.setState({productDetails})
  //   }
  //   // deletItem =(id) =>{
  //   //   let Items = this.state.Items;
  //   //   let i = Items.findIndex(item => item.id === id)
  //   //   Items.splice(i,1);
  //   //   this.setState({Items})
  //  // }
  addProduct = (Product) => {
    // Product.id = Math.random();
    let productDetails = this.state.productDetails;
    productDetails.push(Product);
    this.setState(productDetails)
  }
  render() {
    const { addCart } = this.context;
    const products = this.state.products;
    const theNewloop = products.map((product) => {
      return (
        <div className="col-sm-6 col-md-4 col-lg-3 " key={Math.random()}>
          <div className="mb-2">
            <div className="cd">
              <img key={Math.random()} className="card-img-top" src={product.src} alt="Card cap" />
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
              <p ><span>{product.oldPrice}</span><span>{product.price}</span></p>
            </div>
          </div>
        </div>
      )
    })
    return (
      < >
        <section className="services">
          <div id="multi-item-example" className="carousel slide ali" data-ride="carousel">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="product-categories-all">
                    <div className="product-categories-title">
                      <h3>Jewelry &amp; watches</h3>
                    </div>
                    <div className="product-categories-menu">
                      <ul style={{ paddingLeft: "0" }}>
                        <li><a href="#w">awesome Rings</a></li>
                        <li><a href="#w">Hot Earrings</a></li>
                        <li><a href="#w">Jewelry Sets</a></li>
                        <li><a href="#w">Beads Jewelry</a></li>
                        <li><a href="#w">Men's Watches</a></li>
                        <li><a href="#w">Women’s Watches</a></li>
                        <li><a href="#w">Popular Bracelets</a></li>
                        <li><a href="#w"> Pendant Necklaces</a></li>
                        <li><a href="#w">Children's Watches</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="contro">
                    <ul className=" list-unstyled float-left">
                      <li data-className="All" className=" active">Latest</li>
                      <li data-className=".Website" className="">Best Sale</li>
                      <li data-className=".Logos" className="">Top Rated</li>
                      <li data-className=".Graphic" className="">On Sale</li>
                    </ul>
                    <div className="controls-top float-right">
                      <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left"></i></a>
                      <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div style={{ clear: "both" }}></div>
                  </div>
                  <div style={{ float: "none" }}></div>
                  <div className="carousel-inner ssll" role="listbox">
                    <div className="carousel-item ali active " style={{ height: "auto" }}>
                      <div className="row">
                        {theNewloop}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Popular productDetails={this.state.productDetails} />
      </>
    )
  }
}
export default Service