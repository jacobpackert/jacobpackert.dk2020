import React from "react"

const Layout = ({ children }) => {
  
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
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout