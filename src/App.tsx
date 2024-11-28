import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Specs } from './components/Specs';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <Gallery />
        <Specs />
        <Testimonials />
        <Pricing />
      </div>
    </div>
  );
}

export default App;