import React from 'react';
import './styles/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './routes';

function App() {
  return (
    <div className="container">
      <Header />
        <Router/>
      <Footer />
    </div>
  );
}

export default App;
