import React, { useEffect, useRef, useState } from 'react'
import styles from './styles/Suggestions.module.css'

function Suggestions() {
    let[dataa,setData] = useState({});
    let [text, setText] =useState('Submit');
  //   useEffect(()=>{
  //       fetch('http://localhost:4002/suggestion')
  // .then(response => response.json())
  // .then(data => {
  //   setData(data)
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });
  //   })
    let{message}= dataa;

let inputRef = useRef(null)

let onClickHandler= async function(){
    console.log(inputRef.current.value)
await fetch('http://localhost:4002/suggestion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({suggestion:inputRef.current.value}),
    credentials: 'include'
  })
    .then(response => {
      if(response.ok){
        inputRef.current.value='';
        setText('Done!!!')
      }

      response.json()})
    .catch(error => {
      console.error('Error:', error);
    });
  

  
}

  return (<>
  <div className={styles.suggestions}>

    <div style={{
        width:'100%',
        padding:'4rem'}}>
        </div>
        <div className={styles.inputDiv}>
        <input ref={inputRef} type="text" placeholder='Suggestions' />
        <button onClick={onClickHandler}>{text}</button>
        </div>
        <p>{message}</p>
        <div style={{
        width:'100%',
        padding:'2rem'}}></div>
            </div>
        </>
    
  )
}

export default Suggestions