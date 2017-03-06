import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Footer from './Footer';
import './scss/app.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Overview />
      <Footer />
    </div>
  );
};

export default App;
