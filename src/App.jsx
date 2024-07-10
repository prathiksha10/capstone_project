import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='.flex-container'>
      <div className='.flex-item'><Header /></div>
      <div className='.flex-item'><Nav /></div>
      <div className='.flex-item'><Main /></div>
      <div className='.flex-item'><Footer /></div>
    </div>
  );
}

export default App;
