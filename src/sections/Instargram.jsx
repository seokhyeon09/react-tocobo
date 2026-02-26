import React from 'react'
import instar from '../util/instar'
import './styles/Instargram.scss'
const Instargram = () => {
  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className="tit">Instagram</h2>
        <p className="txt">@tocobo_official</p>
      </div>
      <ul className="instar-list">
        {instar.map((i)=>(

        <li key={i.id}>
          <a href={i.link}
          alt={i.alt}
          style={{backgroundImage:`url(${i.image})`}}

          // 배경 넣어보기
          >{i.id}</a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Instargram