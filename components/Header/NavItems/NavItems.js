import React from 'react'
import themeToggler from '../../../utils/themeToggler'
import Lamp from '../../Lamp/Lamp'
import NavItem from '../NavItem/NavItem'
import Styles from './NavItems.module.css'

function NavItems() {
  return (
    <>
    <div className={Styles.navItems}>
    <NavItem route="about" routeName="About"/>
    <NavItem route="blog" routeName="Blog"/>
    <Lamp/>
    </div>
    </>
  )
}

export default NavItems