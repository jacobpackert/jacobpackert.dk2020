import React from 'react';
import './index.css';

import Layout from "../components/Layout"
import SEO from '../components/SEO';

const Index = () => (
  <Layout>
    <SEO title='Hej' />
    <h1>Hi! I'm Jacob.</h1>
    <p>I like tech, music, marketing and the internet.</p>
    <p>I live in lovely Copenhagen.</p>
    <p>I work as a Senior Digital Strategist for Hello Great Works.</p>
    <p>Phone: (+45) 28 14 72 96</p>
    <p>Email: jacobpackert@gmail.com</p>

    <p>Twitter: @jacobpackert</p>

    <p>Linkedin: LinkedIn</p>
  </Layout>
);

export default Index;
