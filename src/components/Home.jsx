import React from 'react'
import Carousel from './Carousel'
import Unstitched from './Unstitched';
import ReadyToWear from './ReadyToWear'
import Products from './Products';
function Home() {
    const IMAGES = [
    "./src/assets/01.jpg",
    "./src/assets/02.jpg",
    "./src/assets/03.jpg",
    "./src/assets/04.jpg",
    "./src/assets/05.jpg",
    "./src/assets/06.jpg",
    "./src/assets/07.jpg",
    "./src/assets/08.jpg",
  ];
  let mystyle ={
    width:'100%',
    padding:'2rem'
  
  }
  return (<>
    <Carousel images={IMAGES}/>
    <Unstitched src={IMAGES[3]}/>
    <div style={mystyle} className='w-full p-8'></div>
    <ReadyToWear src={IMAGES[5]}></ReadyToWear>
  </>
  )
}

export default Home