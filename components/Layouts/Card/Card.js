import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Card.module.css'

const Card = ({date,title,description,slug}) => {
  return (
    <div className={Styles.cardContainer}>
        <p className={Styles.cardDate}>{date}</p>
        <h3 className={Styles.title}>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className={Styles.description}>{description}</p>
    </div>
  )
}

export default Card