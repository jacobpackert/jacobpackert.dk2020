import React from 'react';
import './index.css';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Index = () => (
  <Layout>
    <SEO title='Jacob Packert' />
    <h1>Hi! I'm Jacob.</h1>
    <section>
      <p>I like the Internet, tech, music and code.</p>
      <p>
        I live in lovely <a href='https://medium.com/@jacobpackert/why-bicycling-in-copenhagen-is-so-fantastic-ac5e56349df7'>Copenhagen</a>.
      </p>
      <p>
        I work as a Frontend Engineer and Senior Technical Advisor at <a href='https://hellogreatworks.com/'>Hello Great Works</a>.
      </p>
    </section>
    <section>
      <h2>Get in touch</h2>
      <p>Phone: (+45) 28 14 72 96</p>
      <p>
        Email: <a href='mailto:jacobpackert@gmail.com'>jacobpackert@gmail.com</a>
      </p>
      <p>
        <a href='https://medium.com/@jacobpackert'>Twitter</a>
      </p>
      <p>
        <a href='http://www.linkedin.com/in/jacobpackert'>Linkedin</a>
      </p>
      <p>
        <a href='https://github.com/jacobpackert'>Github</a>
      </p>
      <p>
        <a href='https://medium.com/@jacobpackert'>Blog</a>
      </p>
    </section>
  </Layout>
);

export default Index;
