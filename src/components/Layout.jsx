import React from "react"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  console.log("rootPath:", rootPath);
  console.log(location && location.pathname)
  console.log(location)


  
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
        <footer 
        style={{
          fontSize: 16,
          color: `#555555`
        }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout