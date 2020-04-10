import React from 'react';

import '../styles/components/contact.css';

function ContactItem({ children, large }) {
  return <p className={`contact__item ${large && 'contact__item--large'}`}>{children}</p>;
}

export default function Contact() {
  return (
    <section className='contact'>
      <h2>Get in touch</h2>
      <div className='contact__items'>
        <ContactItem large>Phone: (+45) 28 14 72 96</ContactItem>
        <ContactItem large>
          Email: <a href='mailto:jacobpackert@gmail.com'> jacobpackert@gmail.com</a>
        </ContactItem>
      </div>
      <div className='contact__items'>
        <ContactItem>
          <a href='https://medium.com/@jacobpackert'>Twitter</a>
        </ContactItem>
        <ContactItem>
          <a href='http://www.linkedin.com/in/jacobpackert'>Linkedin</a>
        </ContactItem>
        <ContactItem>
          <a href='https://github.com/jacobpackert'>Github</a>
        </ContactItem>
        <ContactItem>
          <a href='https://medium.com/@jacobpackert'>Blog</a>
        </ContactItem>
      </div>
    </section>
  );
}
