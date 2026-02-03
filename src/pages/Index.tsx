
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import WhyZaltix from '../components/WhyZaltix';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyZaltix />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
