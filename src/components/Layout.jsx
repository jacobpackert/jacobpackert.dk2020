import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { Colors, Gradients } from '../constants/Colors';

const Layout = ({ location, title, children }) => {
  let header;

  const isBlogSection = location?.pathname.includes('blog');

  if (isBlogSection) {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/blog`}
        >
          {title}
        </Link>
      </h3>
    );
  }

  return (
    <div
      style={{
        background: isBlogSection ? Colors.BRIGHT_WHITE : Gradients.BACKGROUND_GRADIENT,
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          background: Gradients.BACKGROUND_GRADIENT,
          width: '8px',
          minWidth: '8px',
        }}
      ></div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `50px 1.0875rem 1.45rem`,
            position: "relative",
            left: "-4px"
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer
            style={{
              fontSize: 16,
              color: `#555555`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href='https://www.gatsbyjs.org' target='_blank' rel='noopener noreferrer'>
              Gatsby
            </a>,
            {` `}
            <a href="https:www.netlify.com" target="_blank" rel='noopener noreferrer'>Netlify</a> {` `}
            and 🧡 in lovely Copenhagen.
          </footer>
        </div>
      </div>
  );
};

export default Layout;
