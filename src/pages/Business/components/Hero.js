import React from 'react'
import Dashboard from '../../../assets/images/Dashboard.svg'
import Star from '../../../assets/images/wide.svg'
import Arrow1 from '../../../assets/images/Darkarr.svg'
import Arrow2 from '../../../assets/images/NormalArr.svg'
import AuthButton from '../../../components/AuthButton'

export const Hero = () => {
  return (
    <div className="BusinessContainer">
      <div className="BusinessWrapper">
        <h2>
          Expand the giftcard industry,{' '}
          <span className="oneCard">one card</span> at a time!
          <span className="Star">
            <img src={Star} alt="star" />
          </span>
        </h2>
        <p>
          Digift helps businesses connect with customers by letting them offer
          their business gift cards to a large number of people.
        </p>
        <div className="AuthBtn">
          <AuthButton
            type="submit"
            text={'Get started'}
            className={'signup'}
            icon={Arrow2}
          />
          <AuthButton
            type="submit"
            text={'Sign In'}
            className={'login'}
            icon={Arrow1}
          />
        </div>
      </div>
      <div>
        <img src={Dashboard} alt="Dashboard img" />
      </div>
    </div>
  )
}
