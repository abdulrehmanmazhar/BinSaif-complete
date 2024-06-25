import React, { useEffect, useState } from 'react';

const ViewportSizeListener = ({viewportHandler}) => {
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {

    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <div>
      <p>Viewport Width: {viewportSize.width}</p>
      <p>Viewport Height: {viewportSize.height}</p>
    </div>
  );
};

export default ViewportSizeListener;
