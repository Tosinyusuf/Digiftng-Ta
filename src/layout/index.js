import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import Footer from './Footer'

export const Layout = ({ theme, setTheme, children }) => {
  function changeTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const getStyle = () => {
    return {
      width: '95%',
      margin: '0 auto',
    }
  }
  const getContainerStyle = () => {
    return {
      backgroundColor: theme === 'light' ? 'white' : 'black',
      transition: 'all .5s ease',
      color: theme === 'dark' && 'white',
      maxWidth: '1440px',
      margin: '0 auto',
    }
  }
  return (
    <div style={getContainerStyle()}>
      <div style={getStyle()}>
        <Nav changeTheme={changeTheme} />
        <div className="pages">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.bool,
  setTheme: PropTypes.bool,
  changeTheme: PropTypes.func,
}

