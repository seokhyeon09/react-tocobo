import React from 'react'
import {categories} from '../util/cta'
import './styles/Cta.scss'

const Cta = () => {

  const stagger=(base, idx, step)=>base+idx*step

  return (
    <div className='cta-inner'>
      <ul className="cta-list">
        {categories.map((c,i)=>(
          <li
          key={c.id}
          data-aos='fade-up'
          data-aos-delay = {stagger(1000, i, 100)}
          >
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