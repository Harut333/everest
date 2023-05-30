import React from 'react';
import ContactForm from './contact/ContactForm';
import Pricing from './Pricing';

const HomePage = () => {
  return (
      <div>
        <h1>Welcome to Everest Academy</h1>
        <ContactForm />
        <Pricing />
      </div>
  );
};

export default HomePage;
