import React from 'react'
import Logo from '../../../../assets/images/Logo.svg'
import IG from '../../../../assets/images/IG.svg'
import FB from '../../../../assets/images/FB.svg'
import TWITTER from '../../../../assets/images/TWITTER.svg'
import LINKEDIN from '../../../../assets/images/LINKEDIN.svg'

export const SocialMedia = () => {
  return (
    <div className="socialsContainer">
      <div className="socialImg">
        <img src={Logo} alt="HomeLogo" />
      </div>
      <p>Creating Happiness One Giftcard at a Time.</p>
      <div className="MediaIcons">
        <div>
          <img src={IG} alt="IgIcon" />
        </div>
        <div>
          <img src={FB} alt="FbIcon" />
        </div>
        <div>
          <img src={TWITTER} alt="TwitterIcon" />
        </div>
        <div>
          <img src={LINKEDIN} alt="LinkedinIcon" />
        </div>
      </div>
    </div>
  )
}
