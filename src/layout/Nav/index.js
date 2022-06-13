import React from 'react'
import { LinkRoute } from '../../components/LinkRoute'
import Logo from '../../assets/images/Logo.svg'
import Arrow from '../../assets/images/ArrowRight.svg'
import { Toggle } from './component/Toggle'
import { Auth } from './component/Auth'
import '../../assets/styles/Nav.css'
import { MobileNav } from './component/MobileNav'

import { Search } from './component/Search'

const Nav = ({ changeTheme }) => {
  return (
    <>
      <div className="NavContainer">
        <LinkRoute to="/" className="logo">
          <img src={Logo} alt="HomeLogo" />
        </LinkRoute>
        <LinkRoute to="/" className="contentList">
          <h4 className="content">Personal</h4>
          <div className="contentIimg">
            <img src={Arrow} alt="HomeLogo" />
          </div>
        </LinkRoute>
        <LinkRoute to="/business" className="contentList">
          <h4 className="content">Business</h4>
          <div className="contentIimg">
            <img src={Arrow} alt="HomeLogo" />
          </div>
        </LinkRoute>
        <Search />
        <Toggle changeTheme={changeTheme} />
        <Auth />
      </div>
      <div className="mobile">
        <MobileNav changeTheme={changeTheme} />
      </div>
    </>
  )
}

export default Nav
