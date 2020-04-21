import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const Index = ({location}) => (
  <Layout location={location}>
    <SEO title='Jacob Packert' />
    <h1>Hi! I'm Jacob 👋</h1>
    <section className='intro'>
      <p>I like the Internet, tech, music and code.</p>
      <p>
        I live in lovely{' '}
        <a
          href='https://medium.com/@jacobpackert/why-bicycling-in-copenhagen-is-so-fantastic-ac5e56349df7'
          target='_blank'
          rel='noopener noreferrer'
        >
          Copenhagen
        </a>
        .
      </p>
      <p>
        I work as a Frontend Engineer and Senior Technical Advisor at{' '}
        <a href='https://hellogreatworks.com/' target='_blank' rel='noopener noreferrer'>
          Hello Great Works
        </a>
        .
      </p>
      <p>I used to work with politics, then I worked with marketing. Some would say that’s the same thing.</p>

      <p>Now I write code for a living and build products and websites. For clients and for fun.</p>
      <p>
        I love Javascript and React ⚛️ and I’m building a few apps with React Native and Expo 📱 For data science and Raspberry Pi fun I'm
        learning Python 🐍.
      </p>
    </section>
    <Contact />
  </Layout>
);

export default Index;
