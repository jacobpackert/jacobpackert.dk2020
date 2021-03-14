import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const textStyle = {
  fontSize: "1.2rem",
}

const Index = ({location}) => (
  <Layout location={location}>
    <SEO title='Jacob Packert' />
    <h1>Hi! I’m Jacob 👋</h1>
    <section className='intro'>
      <p style={textStyle}>I like the Internet, tech, music and code.</p>
      <p style={textStyle}>
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
      <p style={textStyle}>
        I work as a Frontend Engineer at{' '}
        <a href='https://dr.dk' target='_blank' rel='noopener noreferrer'>
          DR, the Danish Broadcasting Corporation
        </a>
        .
      </p>
      <p style={textStyle}>I used to work with politics, then I worked with marketing. Some would say that’s the same thing.</p>

      <p style={textStyle}>Now I write code for a living and build products and websites. For work and for fun.</p>
      <p style={textStyle}>
        I love Javascript and React ⚛️ and I’m building a few apps with React Native and Expo 📱 For data science and Raspberry Pi fun I’m
        learning Python 🐍.
      </p>
    </section>
    <Contact />
  </Layout>
);

export default Index;