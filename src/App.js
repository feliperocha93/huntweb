import React from 'react';
import Routes from './routes';
import './App.css'

import Header from './components/Header/header';
import Footer from './components/Footer/footer';

const App = () => (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );

export default App;
