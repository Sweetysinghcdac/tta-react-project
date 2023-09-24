import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Column from './Column';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
      <Column />
      <Footer />

    </div>
  );
}

export default App;
