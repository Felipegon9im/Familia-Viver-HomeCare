
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import MissionVisionValues from './components/MissionVisionValues';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-light text-dark font-sans">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <MissionVisionValues />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
