import React from 'react';
import '../styles/pages/index.css';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from "../components/Contact";


const Index = () => (
  <Layout>
    <SEO title='Jacob Packert' />
    <h1>Hi! I'm Jacob.</h1>
    <section className='intro'>
      <p>I like the Internet, tech, music and code.</p>
      <p>
        I live in lovely <a href='https://medium.com/@jacobpackert/why-bicycling-in-copenhagen-is-so-fantastic-ac5e56349df7'>Copenhagen</a>.
      </p>
      <p>
        I work as a Frontend Engineer and Senior Technical Advisor at <a href='https://hellogreatworks.com/'>Hello Great Works</a>.
      </p>
    </section>
    <Contact />
    
  </Layout>
);

export default Index;
