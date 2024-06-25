import React from 'react'
import Card from './Card';
import Element from './Element';
import Unstitched from './Unstitched';
import ReadyToWear from './ReadyToWear'
import styles from './styles/Products.module.css'
function Products() {
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
    // let element= CARD.map((e,i)=>{
    //     console.log(e);
    //     return <Card key={i} info={e}/>
    // })
  return (<>
  <div className={styles.product}>
  <Unstitched src={IMAGES[3]}>

    <Element></Element>
  </Unstitched>
    <ReadyToWear src={IMAGES[5]}>

    <Element></Element>
    </ReadyToWear>
    </div>
    </>
  )
}

export default Products