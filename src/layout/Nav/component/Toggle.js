import React, { useState } from 'react'
import styled from 'styled-components'
import Light from '../../../assets/images/Light.svg'
import Moon from '../../../assets/images/Dark-Moon.svg'

export const Toggle = ({ changeTheme }) => {
  const [state, setState] = useState('Light')

  const setTab = () => {
    setState('Light')
    changeTheme()
  }
  const setTab1 = () => {
    setState('Dark')
    changeTheme()
  }
  return (
    <ToggleWrapper>
      <div className="toggleContainer">
        <div
          className={`${state === 'Light' ? 'active' : 'default'}`}
          onClick={setTab}
        >
          <img src={Light} alt="star" />
        </div>
        <div
          className={`${state === 'Dark' ? 'active' : 'default'}`}
          onClick={setTab1}
        >
          <img src={Moon} alt="star" />
        </div>
      </div>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.div`
  background: #f3f4f7;
  margin-right: 10rem;
  margin-left: 7rem;
  border-radius: 999px;
  padding: 4px;
  @media (max-width: 1406px) {
    margin-right: 4.4rem;
  }
  @media (max-width: 1346px) {
    margin-right: 2rem;
  }
  @media (max-width: 970px) {
    margin-right: 1rem;
  }
  @media (max-width: 760px) {
    margin-right: 0rem;
    margin-left: 0rem;
  }
  .toggleContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 82px;
  }
  .active {
    background: #ffffff;
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 5px;
    border-radius: 22px !important;
    cursor: pointer;
    pointer-events: none;
  }
  .default {
    background: none;
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 5px;
    border-radius: 22px !important;
    cursor: pointer;
  }
  img {
    max-width: 100% !important;
  }
`
