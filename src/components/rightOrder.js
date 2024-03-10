import React, { useState } from 'react'
import './rOcP.css'
import Game1 from './game1';
export default function OrderGame() {
  const [state,setState] = useState(false);
  const handle=()=>{
    setState(true);
  }
  return (
    <div>
      <div className='headrocp'>Right Order</div>

      {!state && <div className='start'>
              <div className='rule'>
                Rules:
                <ol>
                  <li>Random numbers will be shown before starting each level.</li>
                  <li>These numbers are randomly arranged, you need to click them in ascending order.</li>
                  <li>You will get fixed lives. If you click the wrong number, you will lose one life.</li>
                  <li>There are 6 levels, with each level two more numbers will be added.</li>
                  <li>Game over after all 6 levels are completed or ypu lose all lives.</li>
                </ol>
              </div>
              <button onClick={handle} className='button-rOcP'>
              START GAME
              <div id="clip">
                  <div id="leftTop" className="corner"></div>
                  <div id="rightBottom" className="corner"></div>
                  <div id="rightTop" className="corner"></div>
                  <div id="leftBottom" className="corner"></div>
              </div>
              <span id="rightArrow" className="arrow"></span>
              <span id="leftArrow" className="arrow"></span>
        </button></div>}
      {state && <Game1/>}
    </div>
  )
}
