import React from 'react';
import { Link } from 'gatsby';

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
          <a href='https://mastodon.social/@jacobpackert' target='_blank' rel='noopener noreferrer'>
            Mastodon
          </a>
        </ContactItem>
        <ContactItem>
          <a href='http://www.linkedin.com/in/jacobpackert' target='_blank' rel='noopener noreferrer'>
            Linkedin
          </a>
        </ContactItem>
        <ContactItem>
          <a href='https://github.com/jacobpackert' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </ContactItem>
        <ContactItem>
          <Link to='/blog'>Blog</Link>
        </ContactItem>
      </div>
    </section>
  );
}
