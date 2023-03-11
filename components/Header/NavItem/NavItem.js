import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './NavItem.module.css'

function NavItem({route, routeName}) {
  return (
    <Link className={Styles.navItem} to={"/"+route} key={route}>
      <span>{routeName}</span>
    </Link>

  )
}

export default NavItem