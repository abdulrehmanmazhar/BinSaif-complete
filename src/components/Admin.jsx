import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ContextBadge from "../contexts/badgeContext/ContextBadge";
import Slide from './Slide';


function Admin() {
    const LOGO = "BinSaif.";
    let Links= [
      {text:'Add Products', link:'addproducts'},
      {text:'Manage Carousel', link: 'managecarousel'},
      {text:'Orders', link:'orders'}
      
    ]
    const LINKS = ["Home", "Products", "Category", "About", "HOT SALES"];
    const LINKSLIDE = [{text:'Sign Up', link:'/signup'},{text:'Search', link:'/search'}, ...Links];
    let [state, setState] = useState(false);
    function hamClick() {
      setState((prevState) => !prevState);
    }  
  return (  <>
    <ContextBadge>
  <div className="container">

    <Navbar LOGO={LOGO} LINKS={Links} toggleSlide={hamClick}></Navbar>
    {state && <Slide LINKS={LINKSLIDE} />}   

      <Outlet></Outlet>
    <Footer></Footer>
  
  </div>
    </ContextBadge>
</>
    )

}
export default Admin;