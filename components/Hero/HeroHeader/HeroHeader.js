import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Layouts/Container/Container'
import Styles from './HeroHeader.module.css'

const HeroHeader = () => {
  return (
    
    <>
    <Container>
    <h1 className={Styles.heroHeader}>Hi, I'm Harsh.</h1>
    <p className={Styles.heroSubtitle}>
    I create beautiful, accessible, and performant user experiences on the web. You can explore <Link className={Styles.link} to="/blogs">my writing</Link>, <Link className={Styles.link}  to="/about"> learn more about me,</Link> <Link className={Styles.link}  to="/">or subscribe to my blogs.</Link>
    </p>
    </Container>
    </>
  )
}

export default HeroHeader