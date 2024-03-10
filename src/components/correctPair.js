import React, { useState } from 'react'
import './rOcP.css'
import Game2 from './game2';
export default function PairGame() {
  const [state,setState] = useState(false);
  const handle=()=>{
    setState(true);
  }
  return (
    <div>
      <div className='headrocp'>Correct Pair</div>

      {!state && <div className='start'>
              <div className='rule'>
                Rules:
                <ol>
                  <li>Random pair of fruits will be shown for 1 second before starting each level.</li>
                  <li>These fruits are randomly arranged, you need to click them in pair.</li>
                  <li>You will get 5 lifes. If you click the wrong pair, you will lose one life.</li>
                  <li>There are 6 levels, with each level one more pair will be added.</li>
                  <li>Game over after all 6 levels are completed.</li>
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
      {state && <Game2/>}
    </div>
  )
}