import React from 'react'
import { Hero } from './components/Hero'
import Business from '../../assets/images/Business-Homepage.svg'
import Design from '../../assets/images/Design.svg'
import '../../assets/styles/Business.css'
import { Api } from './components/Api'

export const BusinessContainer = () => {
  return (
    <div className="BusinessComponent">
      <Hero />
      <div>
        <img src={Business} alt="Business img" />
      </div>
      <div className="DesignImg">
        <div>
          <img src={Design} alt="Design img" />
        </div>
        <div className="DesignImg2">
          <img src={Design} alt="Design img" />
        </div>
      </div>
      <Api />
    </div>
  )
}
