import React from 'react'
import { Hero } from '../Personal/component/Hero'
import { LatestArrival } from './component/LatestArrival'
import '../../assets/styles/Personal.css'
import { Testimony } from './component/Testimony'
import LastCard from '../../assets/images/LastCard.svg'

export const PersonalContainer = () => {
  return (
    <div className="PersonalContainer">
      <Hero />
      <LatestArrival />
      <Testimony />
      <div>
        <img src={LastCard} alt="Last Card" />
      </div>
    </div>
  )
}
