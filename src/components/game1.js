import celebration from './celebration.js';
import React, { useEffect, useState } from 'react'
import './game.css'
import puz from '../puzzle.png'
import heart from './images/heart.png'
import EndScreen from './endScreen.js';

let arr=[1,2,3,4];
let tolives=['l1'];
let newmarg='fourinone';
let newlife='life1';
let showtime=1000;
let complete=false;
export default function Game1() {
  
  const [t,setT] = useState(false);
  
  let turn=Array(13).fill(true);
  let count=0;
  let newone=[...arr];
  let lives=[...tolives];
  let deletedLives=[];
  
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  newone=shuffle(newone);
  const [level, setLevel] = useState(1);

  const handleClick=async (val)=>{
    const ele=document.getElementById(val);
    ele.className='content1';
    if(val===arr[count]){
      turn[val]=false;
      count+=1;
    }
    else{
      let x=document.getElementById(lives[lives.length-1]);
      deletedLives.push(x);
      x.style.display='none';
      lives.pop();
      console.log(lives.length);
      if(lives.length<=0){
        
        setT(true);
      }
      setTimeout(() => {
        ele.className='content';
      }, 1000);
    }

    if(count>=arr.length){
      deletedLives.forEach(element => {
        element.style.display ='block';
      });
      celebration();
      if(arr.length===4){
          arr.push(5,6);
          newmarg='threeinone';
          newlife='life2';
          tolives.push('l2');
          showtime=1500;
      }
      else if(arr.length===6){
        arr.push(7,8);
        newmarg='fourinone';
        tolives.push('l3');
        newlife='life3';
        showtime=2000;
      }
      else if(arr.length===8){
        arr.push(9,10);
        newmarg='fiveinone';
        tolives.push('l4');
        newlife='life4';
        showtime=2500;
      }
      else if(arr.length===10){
        arr.push(11,12);
        newmarg='fourinone';
        tolives.push('l5');
        newlife='life5';
        showtime=3000;
      }
      else{
        complete=true;
        setT(true);
        return;
      }
      count=0;
      setTimeout(() => {
        setLevel(level+1);
      }, 1000);
      
      
    }
  }
  const handleClick2=()=>{};
  let restart = () =>{
    arr=[1,2,3,4];
    tolives=['l1'];
    newmarg='fourinone';
    newlife='life1';
    showtime=1000;
    complete=false;
    setLevel(1);
    setT(false);
  }
  const calltime = () =>{
    const el = document.getElementsByClassName('content1');
    const n=el.length;
    for(let i=0;i<n;i++){
      el[0].className='content';
    }
  }
  useEffect(()=>{
      const timer = setTimeout(() => {
        calltime();
      }, showtime);
      return ()=>{
        clearTimeout(timer);
      }
  },[t, level]);
  
  return (
    
    <div>
      {!t && <div className='lvl'>Level : {level}</div>}
      {!t && <div className={`d-flex justify-content-center life ${newlife}`}>
          {lives.map((value)=>{
            console.log(value)
              return <div className='image' key={value} id={value}><img src={heart} height='50px' width='50px' alt='life'/></div>
          })}
        </div>}
      <div className={`gamearea ${newmarg}`}>
        {!t && newone.map((val)=>{
          return  <div className='content1' key={val} id={val} onClick={()=>{turn[val] ? handleClick(val) : handleClick2()}}>
                    <div className="front"><img src={puz} width='80px' height='80px' alt='logo'></img></div>
                    <div className="back">{val}</div>
                  </div>
        })}
      </div>
      
      {t && <EndScreen complete={complete} restart={restart}/>}
    </div>
  )
}
