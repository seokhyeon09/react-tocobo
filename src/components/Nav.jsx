import React from 'react'
import { headerData } from '../util/header'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
const Nav = () => {
    const navLinks = headerData.menus
    const scrollTo=useSmoothScroll()
  return (
    <ul>
        {navLinks.map((nav)=>(
            <li key={nav.id}>
                <a
                    href={`${nav.href}`}
                    onClick={(e)=>{
                        e.preventDefault()
                        scrollTo(nav.id)
                    }}
                >{nav.label}</a>
            </li>
        ))}
    </ul>
  )
}

export default Nav