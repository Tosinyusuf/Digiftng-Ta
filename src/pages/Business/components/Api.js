import React from 'react'
import Code from '../../../assets/images/CodeImg.svg'
import Star from '../../../assets/images/wide.svg'
import Arrow1 from '../../../assets/images/Darkarr.svg'
import Arrow2 from '../../../assets/images/NormalArr.svg'
import AuthButton from '../../../components/AuthButton'

export const Api = () => {
  return (
    <div>
      <div className="BusinessContainer">
        <div className="BusinessWrapper">
          <h2>
            Our API is built to be as{' '}
            <span className="oneCard">lightweight</span> and efficient as
            possible.
            <span className="Star">
              <img src={Star} alt="star" />
            </span>
          </h2>
          <p>We offer client and server libraries in everything from our API</p>
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
          <img src={Code} alt="Api img" />
        </div>
      </div>
    </div>
  )
}
