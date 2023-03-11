import React from 'react'
import NavItem from '../NavItem/NavItem'
import Styles from './NavItems.module.css'

function NavItems() {
  return (
    <>
    <div className={Styles.navItems}>
    <NavItem route="about" routeName="About"/>
    <NavItem route="blog" routeName="Blog"/>
    <button className={Styles.themeButton}>Mode</button>
    </div>
    </>
  )
}

export default NavItems