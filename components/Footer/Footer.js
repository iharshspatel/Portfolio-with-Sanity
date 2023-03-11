import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Layouts/Container/Container'
import Styles from './Footer.module.css'

const Footer = () => {
  return (
    <div class={Styles.container}>
    <div className={Styles.footer}>
        <div className={Styles.footer1}>
            <h1>Thanks for reading</h1>
            <p>© Harsh Patel</p>

        </div>

        <div className={Styles.footer2}>
            <Link to="www.google.com">LinkedIn</Link>
            <Link to="www.google.com">Twitter</Link>
            <Link to="www.google.com">GitHub</Link>
            <Link to="www.google.com">Instagram</Link>
        </div>
        </div>
    </div>
  )
}

export default Footer