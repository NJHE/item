import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = props => {
  return (
    <div className = "navs">
      <NavLink to = "/movies/hot" activeClassName = "active"> 正在热映 </NavLink>
      <NavLink to = "/movies/comming" activeClassName = "active"> 即将上映 </NavLink>
    </div>
  )
}

export default Nav