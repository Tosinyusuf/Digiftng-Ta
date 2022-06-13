import React from 'react'
import { Filters } from './Filters'
import { Cards } from './Cards'

export const LatestArrival = () => {
  return (
    <div className="LatestArrivalContainer">
      <h2>Latest Arrivals</h2>
      <div className="latestWrapper">
        <Filters />
        <Cards />
      </div>
    </div>
  )
}
