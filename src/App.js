import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Footer from './Footer';
import './scss/app.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Overview />
        <Footer />
      </div>
    );
  }
}

export default App;
