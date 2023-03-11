import React from 'react'
import Card from '../Card/Card'
import Container from '../Container/Container'
import Styles from './CardContainer.module.css'

const CardContainer = ({cards, title}) => {
  return (
    <Container>
    <h2>{title}</h2>
    <div className={Styles.cardsContainer} >
        {
            cards.map((card)=><Card key={card.slug} date={card.date} title={card.title} description={card.description} slug={card.slug}/>)
        }
    </div>
    </Container>
  )
}

export default CardContainer