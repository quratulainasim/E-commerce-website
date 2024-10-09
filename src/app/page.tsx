import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';
function Home() {
  return (
    <div className='flex flex-col'>
    <Header />
    <Hero />
    <About />
    <Product />
    <Contact />
    <Footer />
    </div>
  );
}

export default Home;