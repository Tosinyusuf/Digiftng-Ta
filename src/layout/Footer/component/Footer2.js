import React from 'react'
import Arrow from '../../../assets/images/Arrow-Up.svg'

export const Footer2 = () => {
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <div className="footer2Conatiner">
        <div className="footer2Img" onClick={scrollToTop}>
          <img src={Arrow} alt="arrow-up" />
        </div>
        <p>
          The website www.digiftng.com is owned and operated by Blinksky Nigeria
          Limited, a company duly registered under the Laws of the Federal
          Republic of Nigeria with RC Number: 1656204. Trademark to all logos of
          Giftcards are owned by their respective brands and Blinksky Nigeria
          Limited doesn’t claim ownership of these trademarks. All Giftcards
          dominated in USD are provided in conjunction with BlinkSky Inc. Users
          must have valid US account and in some cases a valid US address before
          purchasing.
        </p>
      </div>
      <div className="copyright">
        <p>Copyright © 2022 Blinksky Nigeria Limited</p>
      </div>
    </>
  )
}
