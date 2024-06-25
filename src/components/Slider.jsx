import React, { useState } from 'react';
import './Slider.css'; // Import your CSS file for styling

const Slider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsInRow, setCardsInRow] = useState(3); // Initial number of cards displayed in a row

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setCardsInRow(1);
    } else if (window.innerWidth < 992) {
      setCardsInRow(2);
    } else {
      setCardsInRow(3);
    }
  };

  // Attach resize event listener
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="cards-wrapper" style={{ width: `${100 * cards.length}%` }}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ width: `${100 / cardsInRow}%`, transform: `translateX(-${currentIndex * (100 / cardsInRow)}%)` }}
          >
            <img src={card.src} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>
        Prev
      </button>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;
