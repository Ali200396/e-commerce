import React , {Component} from 'react';
import Nav from './Components/test/Nav'
import './App.css';
import Footer from './Components/footer/Footer';
import {BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/nav/Header'
import Section from './Components/route/Section'
import {DataProvider} from './Components/contextApi/Context'


class APP extends Component {
  render(){
  return ( 
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <Section />
        <Footer/>
      </Router>
    </div>
  </DataProvider>
  )}
};

export default APP;
