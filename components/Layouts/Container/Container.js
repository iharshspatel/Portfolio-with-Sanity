import React from 'react'
import Styles from './Container.module.css'

const Container = ({children}) => {
  return (
    <div className={Styles.container}>
        {children}
    </div>
  )
}

export default Container