import React from 'react'
import sad from './images/sad-face-emoji.gif'
import happy from './images/thumbs-up-2584.gif'
import './endScreen.css'

export default function EndScreen(props) {
  return (
    <div>
        <div className={`head1 ${!props.complete ? 'headf':'heads'}`}>{!props.complete ? 'GAME OVER!':'COMPLETED!'}</div>
        <div className='sad'>{!props.complete ? <img src={sad} alt='sad' height='150px'/> : <img src={happy} alt='happy' height='150px'/>}</div>
        <button className='button-rOcP' onClick={props.restart}>
              R E S T A R T
              <div id="clip">
                  <div id="leftTop" className="corner"></div>
                  <div id="rightBottom" className="corner"></div>
                  <div id="rightTop" className="corner"></div>
                  <div id="leftBottom" className="corner"></div>
              </div>
              <span id="rightArrow" className="arrow"></span>
              <span id="leftArrow" className="arrow"></span>
        </button>
    </div>
  )
}
