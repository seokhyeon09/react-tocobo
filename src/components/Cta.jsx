import React from 'react'
import {categories} from '../util/cta'
import './styles/Cta.scss'

const Cta = () => {
  return (
    <div className='cta-inner'>
      <ul className="cta-list">
        {categories.map((c)=>(
          <li key={c.id}>
            <a href={c.href}>
              <div className="img-wrap" style={{ backgroundImage: `url(${c.img.src})` }}>

              </div>
              <p>
                {c.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cta