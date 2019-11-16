import React, {Component} from 'react';
import HeaderComponent from './components/HeaderComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ServicesComponent from "./components/ServicesComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import BetweenComponent from "./components/BetweenComponent";




export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <AboutUsComponent />
        <BetweenComponent />
        <ServicesComponent />
        <ContactComponent />
        <FooterComponent />
      </div>
    );
  }
}
