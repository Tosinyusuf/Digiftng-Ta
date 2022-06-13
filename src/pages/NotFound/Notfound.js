import React from 'react'
import NotFound from '../../assets/images/404.svg'
import { LinkRoute } from '../../components/LinkRoute'
import '../../assets/styles/Notfound.css'

export const Notfound = () => {
  return (
    <div className="notfoundContainer">
      <div className="">
        <img src={NotFound} alt="Not found img" />
        <h1>Error 404</h1>
        <p>Oops! Something is missing.</p>
        <p>We can’t find the page you’re looking for or the link is broken.</p>
        <LinkRoute to="/" className="btn btn-eze">
          Back to Homepage
        </LinkRoute>
      </div>
    </div>
  )
}
