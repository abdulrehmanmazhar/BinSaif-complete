import React from 'react'
import styles from './styles/Card.module.css'
import { useContext } from 'react';
import Contextfile from '../contexts/badgeContext/Contextfile';

function Card(props) {
  const {badge, setBadge} = useContext(Contextfile);
    const {name, price, image, description}=props.info;
    let badgeHandler = function(){
      setBadge((prev)=>prev+1);
    }
  return (<>
  
  <div className={styles.card}>
    <div className={styles.image}>
    <img src={image} alt="" />
    </div>
    <div className={styles.other}>
        <h2 >{name}</h2>
        <h2 className={styles.price}>{price}</h2>
        <p>{description}</p>
        <div className={styles.btns}>

        <button className={styles.light} onClick={badgeHandler}>Add to Cart</button>
        <button className={styles.dark}>Buy</button>
        </div>
    </div>
  </div>
  </>
  )
}

export default Card