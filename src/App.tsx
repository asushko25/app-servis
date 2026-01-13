import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
