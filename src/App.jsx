import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Slide from "./components/Slide";
import Unstitched from "./components/Unstitched";
import CardCarousel from "./components/CardCarousel";
import ReadyToWear from "./components/ReadyToWear";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import {Outlet} from 'react-router-dom'
import ContextBadge from "./contexts/badgeContext/ContextBadge";
import { useState } from "react";
import "./App.css";

function App() {
  const LOGO = "BinSaif.";
  let Links= [
    {text:'Home', link:'/home'},
    {text:'Products', link:'/products'},
    // {text:'Category', link:'/category'},
    {text:'About', link:'/about'},
    {text:'Hot Sales', link:'/hotsales'}
    
  ]
  const LINKS = ["Home", "Products", "Category", "About", "HOT SALES"];
  const LINKSLIDE = [{text:'Sign Up', link:'/signup'},{text:'Search', link:'/search'}, ...Links];
  // const IMAGES = [
  //   "./src/assets/01.jpg",
  //   "./src/assets/02.jpg",
  //   "./src/assets/03.jpg",
  //   "./src/assets/04.jpg",
  //   "./src/assets/05.jpg",
  //   "./src/assets/06.jpg",
  //   "./src/assets/07.jpg",
  //   "./src/assets/08.jpg",
  // ];
  // const CARD = [{
  //   src: 'src/assets/01.jpg',
  //   title: 'two-piece',
  //   description: "a great fabric which is great for summer and dont get faint so early"
  // },
  // {
  //   src: 'src/assets/02.jpg',
  //   title: 'three-piece',
  //   description: "a great fabric which is great for summer and dont get faint so early"
  // },
  // {
  //   src: 'src/assets/03.jpg',
  //   title: 'single piece',
  //   description: "a great fabric which is great for summer and dont get faint so early"
  // },
  // {
  //   src: 'src/assets/04.jpg',
  //   title: 'lawns',
  //   description: "a great fabric which is great for summer and dont get faint so early"
  // },
  // {
  //   src: 'src/assets/05.jpg',
  //   title: 'cotton',
  //   description: "a great fabric which is great for summer and dont get faint so early"
  // },
  // {
  //   src: 'src/assets/06.jpg',
  //   title: 'boski',
  //   description: "a great fabric which is great for summer and dont get faint so early"
  // }];
  // const SRC = "./src/assets/unstitched.jpg"

  let [state, setState] = useState(false);
  function hamClick() {
    setState((prevState) => !prevState);
  }

  return (
    <>
        <ContextBadge>
      <div className="container">

        <Navbar LOGO={LOGO} LINKS={Links} toggleSlide={hamClick}></Navbar>
        {state && <Slide LINKS={LINKSLIDE} />}   

          <Outlet></Outlet>
        <Footer></Footer>
      
      </div>
        </ContextBadge>
    </>
  );
}

export default App;
