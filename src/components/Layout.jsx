import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  console.log('rootPath:', rootPath);
  console.log(location && location.pathname);
  console.log(location);
  let header

  if (location?.pathname.includes('blog')) {
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
    <>
      <div
        style={{
          margin: `0 auto`,
          marginTop: 50,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
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
          </a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
