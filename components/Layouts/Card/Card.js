import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Card.module.css'

const Card = ({date,title,description,slug,isProject=false}) => {
  return (
    <div className={Styles.cardContainer}>
        <p className={Styles.cardDate}>{date}</p>
        <h3 className={Styles.title}>
          {
            isProject ?  <a href={`${slug}`} target='_blank'>{title}</a> : <Link to={`/blog/${slug}`}>{title}</Link>
          }
        </h3>
        <p className={Styles.description}>{description}</p>
    </div>
  )
}

export default Card