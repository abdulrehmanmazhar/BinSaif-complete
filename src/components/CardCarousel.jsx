import styles from "./styles/CardCarousel.module.css";
import { GrIndicator, GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";

function CardCarousel() {
  const CARD = [{
    src: 'src/assets/01.jpg',
    title: 'two-piece',
    description: "a great fabric which is great for summer and dont get faint so early"
  },
  {
    src: 'src/assets/02.jpg',
    title: 'three-piece',
    description: "a great fabric which is great for summer and dont get faint so early"
  },
  {
    src: 'src/assets/03.jpg',
    title: 'single piece',
    description: "a great fabric which is great for summer and dont get faint so early"
  },
  {
    src: 'src/assets/04.jpg',
    title: 'lawns',
    description: "a great fabric which is great for summer and dont get faint so early"
  },
  {
    src: 'src/assets/05.jpg',
    title: 'cotton',
    description: "a great fabric which is great for summer and dont get faint so early"
  },
  {
    src: 'src/assets/06.jpg',
    title: 'boski',
    description: "a great fabric which is great for summer and dont get faint so early"
  }];

  const [width, setWidth] = useState(0);
  const componentRef = useRef(null);
  const [element, setElement] = useState([]);
  const [modified, setModified] = useState([...CARD]);

  useEffect(() => {
    const handleResize = () => {
      if (componentRef.current) {
        setWidth(componentRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let divNum;
    if(width < 400){
      divNum = Math.floor(width / 190);
    } else {
      divNum = Math.floor(width / 295);
    }

    // Create a new array of cards based on the modified array
    const newElement = modified.slice(0, divNum).map((item, index) => (
      <Card key={index} info={item}></Card>
    ));
    setElement(newElement);
  }, [width, modified]);

  const previous = () => {
    // Implement previous logic here
  }

  const next = () => {
    // Shift the modified array


      const newModified = [...modified];
      newModified.shift(); // Remove the first element
      
      setModified(newModified);

  }

  return (
    <div className={styles.frame}>
      <div className={styles.container} ref={componentRef}>
        {element}
      </div>
      <div className={styles.controls}>
        <GrPrevious className={styles.prev} onClick={previous}/>
        <GrNext className={styles.next} onClick={next}/>
      </div>
    </div>
  );
}

export default CardCarousel;
