import React from 'react'
import './main.css'
import { useNavigate } from 'react-router-dom'
import vid1 from '../rightorder.mov'
import vid2 from '../correctpair.mov'
import ro from '../1.mp4'
import cp from '../2.mp4'
function Main() {
    let navigate = useNavigate();
    const handleClick1=()=>{
        navigate('/rightO');
    }
    const handleClick2=()=>{
        navigate('/correctP');
    }
  return (
    <div>
      <div className='head'>Memory Game</div>
      <div className="gamevid">
        <div className='gamevidchild'>
          <div className='polaroid'><video autoPlay muted><source src={ro}></source></video></div>
          <button onClick={handleClick1}>
              P L A Y
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
        <div className='gamevidchild'>
          <div className='polaroid'><video autoPlay muted><source src={cp}></source></video></div>
          <button onClick={handleClick2}>
              P L A Y
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
      </div>

      <div className="detail">
        <div className='polaroid2'><video width='420px' autoPlay muted loop><source src={vid1}/></video></div>
        <div className='explain'>The Right Order Memory Challenge is a captivating and stimulating memory game designed to enhance your sequential recall abilities. In this engaging game, players are presented with a grid of cards numbered from 1 to n, where n is determined by the chosen difficulty level.
          The objective of the game is simple yet challenging: players must select the cards in ascending numerical order, starting from 1 and progressing through to the highest number. As players progress through the levels, the grid size increases, and the number of cards to be matched also rises, intensifying the challenge and requiring sharper focus and memory skills.
        </div>
        </div>

      <div className="detail">
      <div className='polaroid2'><video width='420px' autoPlay muted loop><source src={vid2}/></video></div>
        <div className='explain'>Correct Pair Match-Up is an exciting memory game designed to challenge your cognitive abilities while immersing you in a visually captivating experience. In this dynamic game, players are presented with an array of cards arranged face down, each featuring unique images.
          The objective is simple: match pairs of cards with identical images by flipping them over one at a time. All cards are initially hidden, requiring players to rely on their memory to recall the locations of matching pairs. As players progress through the levels, the grid size increases, and the number of unique image pairs expands, providing an increasingly challenging and immersive gameplay experience.</div>
      </div>
    </div>
  )
}

export default Main
