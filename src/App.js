import React, {Component} from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';
import firebase from "firebase";



import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Pollz from './components/poll';
import SocialMedia from './components/social';
import Footer from './components/header_footer/Footer';
import ScrollToTop from "react-scroll-to-top";
import Youtube from "./components/youtube";
import FAQ from "./components/faq";//added faq section
import Newsletter from "./components/newsletter";//added Newsletter section

class App extends Component {
  render(){
    return(
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venueNfo">
          <VenueNfo/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>

        <Element name="youtube">
          <Youtube/>
        </Element>

        <Element name="highlights">
          <Highlight/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="faq">
          <FAQ/>
      </Element>

        <Element name="poll">
          <Pollz/>
        </Element>

        <Element name="newsletter">
          <Newsletter/>
        </Element>

        <Element name="social">
          <SocialMedia/>
        </Element>
        
        <ScrollToTop/>
        <Footer/>
      </div>
    );
  }
}

export default App;