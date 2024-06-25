import React from 'react'
import Card from './Card';
import styles from './styles/Element.module.css'
import { useState, useEffect } from 'react';
function Element() {
  const [CARD, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4002/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchProducts();
  }, []);



    // const CARD = [{
    //     src: 'src/assets/01.jpg',
    //     title: 'two-piece',
    //     description: "a great fabric which is great for summer and dont get faint so early"
    //   },
    //   {
    //     src: 'src/assets/02.jpg',
    //     title: 'three-piece',
    //     description: "a great fabric which is great for summer and dont get faint so early"
    //   },
    //   {
    //     src: 'src/assets/03.jpg',
    //     title: 'single piece',
    //     description: "a great fabric which is great for summer and dont get faint so early"
    //   },
    //   {
    //     src: 'src/assets/04.jpg',
    //     title: 'lawns',
    //     description: "a great fabric which is great for summer and dont get faint so early"
    //   },
    //   {
    //     src: 'src/assets/05.jpg',
    //     title: 'cotton',
    //     description: "a great fabric which is great for summer and dont get faint so early"
    //   },
    //   {
    //     src: 'src/assets/06.jpg',
    //     title: 'boski',
    //     description: "a great fabric which is great for summer and dont get faint so early"
    //   }];
    let element= CARD.map((e,i)=>{
        // console.log(e);
        return <Card key={i} info={e}/>
    })
  return (
    <div className={styles.parent}>{element}</div>
  )
}

export default Element