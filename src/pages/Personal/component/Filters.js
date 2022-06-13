import React, { useState } from 'react'
import { FilterContents } from '../../../utils/LatestArrival'

export const Filters = () => {
  const [checked, setChecked] = useState([])

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked]
    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1)
    }
    setChecked(updatedList)
  }

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? 'checked-item' : 'not-checked-item'

  return (
    <div className="filterContainer">
      <div className="filterBody">
        <div className="filterHeader">
          <h4>Filters</h4>
          <h4>Reset</h4>
        </div>
        <h4>Categories</h4>
        <div>
          <div className="list-container">
            {FilterContents.map((filter) => (
              <div key={filter} className="lists">
                <input value={filter} type="checkbox" onChange={handleCheck} />
                <span className={isChecked(filter)}>{filter}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
