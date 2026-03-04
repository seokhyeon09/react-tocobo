import React from 'react'
import Util from './Util'
import { headerData } from '../util/header'
import './styles/Mnav.scss'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

const Mnav = ({ onNavClose }) => {
  const scrollTo = useSmoothScroll()
  const navLink = headerData.menus
  return (
    <div className='m-nav-wrap'>
      <div className="m-top">
        <Util />
        <a href="#" className='m-close-btn' onClick={(e) => {
          e.preventDefault()
          onNavClose()
        }}>
          <img src="/img/icon_search_close.png" alt="icon" />
        </a>
      </div>
      <ul className="m-nav-list">
        {navLink.map((nav, i) => (
          <li key={i}>
            <a href={`${nav.href}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(nav.id)
                onNavClose()
              }}>
              {nav.label}</a>
          </li>
        ))}
      </ul>
      <ul className="btm-list">
        <li><a href="#">로그인</a></li>
        <li><a href="#">회원가입</a></li>
        <li><a href="#">공지사항</a></li>
      </ul>
    </div>
  )
}

export default Mnav