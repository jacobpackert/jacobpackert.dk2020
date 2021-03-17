import React from 'react';
import { Link } from 'gatsby';
import Toggle from 'react-toggle';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { Colors, LightTheme } from '../constants/Colors';

function Layout({ location, title, children, hidefooter }) {
  let header;

  const isBlogSection = location?.pathname.includes('blog');

  if (isBlogSection) {
    header = (
      <>
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
            to='/blog'
          >
            {title}
          </Link>
        </h3>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <Toggle
              checked={theme === 'dark'}
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
            />
          )}
        </ThemeToggler>
      </>
    );
  }

  return (
    <div
      style={{
        background: isBlogSection ? LightTheme.BACKGROUND_SOLID : LightTheme.BACKGROUND_GRADIENT,
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          background: LightTheme.BACKGROUND_GRADIENT,
          width: '8px',
          minWidth: '8px',
        }}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `50px 1.0875rem 1.45rem`,
          position: 'relative',
          left: '-4px',
        }}
      >
        {isBlogSection && (
          <header style={{ display: 'flex', justifyContent: 'space-between' }}>
            {header}
          </header>
        )}
        <main>{children}</main>
        {!hidefooter && (
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
            </a>
            ,{` `}
            <a href='https:www.netlify.com' target='_blank' rel='noopener noreferrer'>
              Netlify
            </a>{' '}
            {` `}
            and 🧡 in lovely Copenhagen.
          </footer>
        )}
      </div>
    </div>
  );
}

export default Layout;
