import SpiralGallery from './components/SpiralGallery';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <SpiralGallery />
      <Clients />
      <Contact />

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

