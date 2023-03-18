import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Layouts/Container/Container'
import Styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={Styles.container}>
    <div className={Styles.footer}>
        <div className={Styles.footer1}>
            <h1>Thanks for reading</h1>
            <p>© Harsh Patel</p>

        </div>

        <div className={Styles.footer2}>
            <a  href="https://www.linkedin.com/in/harsh-patel-38a8b7171/"target="_blank">LinkedIn</a>
            <a  href="https://twitter.com/patelcodes" target="_blank">Twitter</a>
            <a  href="https://github.com/iharshspatel"  target="_blank">GitHub</a>
            <a  href="https://www.instagram.com/harshpatel.me/"target="_blank">Instagram</a>
        </div>
        </div>
    </div>
  )
}

export default Footer