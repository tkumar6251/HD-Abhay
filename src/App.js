import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

