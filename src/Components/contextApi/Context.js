import React, { Component } from 'react'
import d1 from '../img/d1.jpg'
import d2 from '../img/d2.jpg'
import f1 from '../img/f1.jpg'

export const DataContext = React.createContext();

export class DataProvider extends Component {

  state = {
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
      {
        "_id": "5",
        title: "iPad Pro",
        price: 20000,
        src: d1,
        "description": "Lorem ipsum dolor",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.",
        "colors": ["red", "crimson", "teal"],
        "count": 1,
        oldPrice: "22600",
        className: "All"

      },
      {
        "_id": "6",
        title: "ACCESSORIES",
        price: 500,
        src: d2,
        "description": "Lorem ipsum dolor",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.",
        "colors": ["red", "crimson", "teal"],
        "count": 1,
        oldPrice: "600",
        className: "ACCESSORIES"

      },
      {
        "_id": "7",
        title: "Simple Black Cloc",
        price: 400,
        src: f1,
        "description": "Lorem ipsum dolor",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.",
        "colors": ["red", "crimson", "teal"],
        "count": 1,
        oldPrice: "600",
        className: "ACCESSORIES"

      },
      {
        "_id": "8",
        title: "iPad Pro",
        price: 4008,
        src:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
        className: "FURNITURES",
        "description": "Lorem ipsum dolor",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.",
        "colors": ["red", "crimson", "teal"],
        "count": 1,
        oldPrice: "6000",
      }
    ],
    cart: [],
    total: 0

  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every(item => {
      return item._id !== id
    })
    if (check) {
      const data = products.filter(product => {
        return product._id === id
      })
      this.setState({ cart: [...cart, ...data] })
    } else {
      alert("The product has been added to cart.")
    }
  };
  reduction = id => {
    const { cart } = this.state;
    cart.forEach(item => {
      if (item._id === id) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
    })
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = id => {
    const { cart } = this.state;
    cart.forEach(item => {
      if (item._id === id) {
        item.count += 1;
      }
    })
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = id => {
    // if(window.confirm("Do you want to delete this product?")){}
    const { cart } = this.state;
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1)
      }
    })
    this.setState({ cart: cart });
    this.getTotal();


  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + (item.price * item.count);
    }, 0)
    this.setState({ total: res })
  };

  componentDidUpdate() {
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
  };

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }


  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{ products, addCart, cart, reduction, increase, removeProduct, total, getTotal }}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}


