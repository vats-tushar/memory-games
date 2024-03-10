import celebration from './celebration.js';
import React, { useEffect, useState } from 'react'
import './game.css'
import puz from '../puzzle.png'
import heart from './images/heart.png'
import EndScreen from './endScreen.js';

let imglist={
  'a1': './images/apple.png',
  'a2': './images/apple.png',
  'b1': './images/banana.png',
  'b2': './images/banana.png',
  'g1': './images/grapes.png',
  'g2': './images/grapes.png',
  'k1': './images/Kiwi.png',
  'k2': './images/Kiwi.png',
  'm1': './images/Mango.png',
  'm2': './images/Mango.png',
  'p1': './images/Pineapple.png',
  'p2': './images/Pineapple.png' 
}
let arr=['a1','a2','b1','b2'];
let tolives=['l1'];
let newmarg='fourinone';
let newlife='life1';
let showtime=1000;
let complete=false;
export default function Game2() {

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
  let sele='';

  const handleClick=async (val)=>{
    const ele=document.getElementById(val);
    const el=document.getElementById(sele);
    ele.className='content1';
    if(sele===''){
      turn[arr.indexOf(val)]=false;
      sele=val;
    }
    else{
      if(val[0]===sele[0]){
        sele='';
        count+=2;
        turn[arr.indexOf(val)]=false;
      }
      else{
        turn[arr.indexOf(sele)]=true;
        let x=document.getElementById(lives[lives.length-1]);
        console.log(x);
        deletedLives.push(x);
        x.style.display='none';
        lives.pop();
        if(lives.length<=0){
          setT(true);
        }
        setTimeout(() => {
          ele.className='content';
          el.className='content';
        }, 1000);
        sele='';
      }
    }
    if(count>=arr.length){
      deletedLives.forEach(element => {
        element.style.display ='block';
      });
      celebration();
      if(arr.length===4){
        arr.push('g1','g2');
        newmarg='threeinone';
        newlife='life2';
        tolives.push('l2');
        showtime=1500;
      }
      else if(arr.length===6){
        arr.push('k1','k2');
        newmarg='fourinone';
        tolives.push('l3');
        console.log(lives);
        newlife='life3';
        showtime=2000;
      }
      else if(arr.length===8){
        arr.push('m1','m2');
        newmarg='fiveinone';
        newlife='life4';
        tolives.push('l4');
        showtime=2500;
      }
      else if(arr.length===10){
        arr.push('p1','p2');
        newmarg='fourinone';
        newlife='life5';
        tolives.push('l5');
        showtime=3000;
      }
      else{
        setT(true);
        complete=true;
        return;
      }
      count=0;
      sele='';
      setLevel(level+1);
    }
  }
  const handleClick2=()=>{};
  let restart = () =>{
    arr=['a1','a2','b1','b2'];
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
  },[t,level]);
  
  return (
    
    <div>
      {!t && <div className='lvl'>Level : {level}</div>}
      {!t && <div className={`d-flex justify-content-center life ${newlife}`}>
          {lives.map((value)=>{
              return <div className='image' key={value} id={value}><img src={heart} height='50px' width='50px' alt='life'/></div>
          })}
        </div>}
      <div className={`gamearea ${newmarg}`}>
        {!t && newone.map((val)=>{
          return  <div className='content1' key={val} id={val} onClick={()=>{turn[arr.indexOf(val)] ? handleClick(val) : handleClick2()}}>
                    <div className="front"><img src={puz} width='80px' height='80px' alt='logo'></img></div>
                    <div className="back"><img src={require(`${imglist[val]}`)} width='80px' height='80px' alt='none'/></div>
                  </div>
        })}
        </div>
        
      {t && <EndScreen complete={complete} restart={restart}/>}
      </div>
  )
}