import React from 'react'
import { CardsContent1 } from '../../../utils/Cards'
import AmazonCard from '../../../assets/images/DarkAmazon.svg'
import Info from '../../../assets/images/info.svg'
import Arrow from '../../../assets/images/WhiteArr.svg'

export const Cards = () => {
  return (
    <div className="CardsContent">
      <div className="CardsWrapper">
        {CardsContent1.map((CardsContent, index) => (
          <div className="Cards CardsList" key={index}>
            <div className="cardLabel">
              <p>{CardsContent.label}</p>
            </div>
            <div className="cardImg">
              <img src={AmazonCard} alt="amazon card" />
              <p>{CardsContent.title}</p>
            </div>
            <div className="title">{CardsContent.content}</div>
            <div className="info">
              <div>
                <img src={Info} alt="infoIcon" />
              </div>
              <p>{CardsContent.info}</p>
            </div>
            <button>
              <p>{CardsContent.btn}</p>
              <p>
                <img src={Arrow} alt="arrow" />
              </p>
            </button>
          </div>
        ))}
      </div>
      <div className="CardsWrapper">
        {CardsContent1.map((CardsContent, index) => (
          <div className="Cards CardsList" key={index}>
            <div className="cardLabel">
              <p>{CardsContent.label}</p>
            </div>
            <div className="cardImg">
              <img src={AmazonCard} alt="amazon card" />
              <p>{CardsContent.title}</p>
            </div>
            <div className="title">{CardsContent.content}</div>
            <div className="info">
              <div>
                <img src={Info} alt="infoIcon" />
              </div>
              <p>{CardsContent.info}</p>
            </div>
            <button>
              <p>{CardsContent.btn}</p>
              <p>
                <img src={Arrow} alt="arrow" />
              </p>
            </button>
          </div>
        ))}
      </div>
      <div className="CardsWrapper">
        {CardsContent1.map((CardsContent, index) => (
          <div className="Cards CardsList" key={index}>
            <div className="cardLabel">
              <p>{CardsContent.label}</p>
            </div>
            <div className="cardImg">
              <img src={AmazonCard} alt="amazon card" />
              <p>{CardsContent.title}</p>
            </div>
            <div className="title">{CardsContent.content}</div>
            <div className="info">
              <div>
                <img src={Info} alt="infoIcon" />
              </div>
              <p>{CardsContent.info}</p>
            </div>
            <button>
              <p>{CardsContent.btn}</p>
              <p>
                <img src={Arrow} alt="arrow" />
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
