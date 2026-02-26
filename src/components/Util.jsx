import React from 'react'
import { headerData } from '../util/header'

const Util = () => {
  const utilData = headerData.utils
  return (
    <ul className='util-list'>
      {utilData.map((u)=>(
        <li key={u.id}>
          <a href={u.href}>
            <img src={u.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Util