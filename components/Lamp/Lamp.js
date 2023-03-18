import React from 'react'
import themeToggler from '../../utils/themeToggler'
import Styles from './Lamp.module.css'

const Lamp = () => {
  return (
    <button onClick={themeToggler} id="theme-toggle" className={Styles.lamp} aria-label="Enable dark mode theme" aria-pressed="true" type="button">
      <span class={Styles.lampBase}></span>
      <span class={Styles.lampNeck}></span>
      <span class={Styles.lampHead}></span>
    </button>
  )
}

export default Lamp