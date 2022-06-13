import React from 'react'
import { LinkRoute } from '../../../../components/LinkRoute'
import Arrow from '../../../../assets/images/PolicyArr.svg'

export const Contacts = () => {
  return (
    <div className="ContactsContainer">
      <h4>Contact us</h4>
      <p>hello@digiftng.com</p>
      <h4>Office</h4>
      <p>226, Awolowo road, Ikoyi, Lagos State, Nigeria</p>
      <p className="policies">
        <LinkRoute to="#" className="policyLinks">
          <p>Our privacy policy </p>
          <p>
            <img src={Arrow} alt="arrow right" />
          </p>
        </LinkRoute>
        <LinkRoute to="#" className="policyLinks">
          <p>Terms and Condition</p>
          <p>
            <img src={Arrow} alt="arrow right" />
          </p>
        </LinkRoute>
      </p>
    </div>
  )
}
