import React from 'react';

import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';
import PricingTable from './components/PricingTable';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import './styles/styles.css'; // Import your CSS file

function App() {
  return (
    <div className="App">
      <Hero />
      <ServiceCards />
      <PricingTable />
      <SearchBar />
      <ContactForm />
    </div>
  );
}

export default App;