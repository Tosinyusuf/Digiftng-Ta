import React from 'react'
import { Feedbacks } from '../../../utils/Feedback'
import Cs from '../../../assets/images/Cs.svg'

export const Testimony = () => {
  return (
    <div className="testimonyContainer">
      <h1>“Hear what happy customers are saying about Digift”</h1>
      <div className="testimonyContent">
        {Feedbacks.map((Feedback, index) => (
          <div key={index} className="testimonyBody">
            <div className="testimonyList">
              <p>{Feedback.label}</p>
              <div className="testimonyImg">
                <div>
                  <img src={Cs} alt="customer" />
                </div>
                <div>
                  <div className="name">{Feedback.Name}</div>
                  <div className="title">{Feedback.title}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  )
}
