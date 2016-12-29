import React, { Component } from 'react';
import '../../styles/styles.css';
import logo from '../../images/logo.svg';
import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';

class App extends Component {
  render() {
    console.log('props: ', this.props);
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
