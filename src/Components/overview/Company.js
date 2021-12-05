import { Component } from 'react'
import './Company.css'


class Company extends Component {
  render() {
    return (
      <section className="overview text-center">
        <div className="container">
          <h1> comapany overview</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
          <button>View more</button>
        </div>
      </section>
    );
  }

}



export default Company;