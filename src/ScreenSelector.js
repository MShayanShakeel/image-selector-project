import React, { useState, useRef, useEffect } from 'react';

function ScreenSelector() {
  const canvasRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endX, setEndX] = useState(null);
  const [endY, setEndY] = useState(null);
  const [selectedColor, setSelectedColor] = useState('lightgreen');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && image) {
        canvasRef.current.width = image.width;
        canvasRef.current.height = image.height;
      }
    };

    window.addEventListener('resize', handleResize);

    // Load the background image
    const backgroundImage = new Image();
    backgroundImage.src = 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'; // Replace with your image URL
    backgroundImage.onload = () => {
      setImage(backgroundImage);
      handleResize();
    };
    console.log(backgroundImage.width * backgroundImage.height, (backgroundImage))

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [image]);


  const handleMouseDownOrTouchStart = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    setStartX(x);
    setStartY(y);
  };

  const handleMouseMoveOrTouchMove = (e) => {
    if (startX !== null && startY !== null) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || e.touches[0].clientX) - rect.left;
      const y = (e.clientY || e.touches[0].clientY) - rect.top;

      setEndX(x);
      setEndY(y);
    }
  };

  const handleMouseUpOrTouchEnd = () => {
    setStartX(null);
    setStartY(null);
    setEndX(null);
    setEndY(null);
  };

  const handleColorChange = () => {
    const color = prompt('Enter a color (e.g., red, green, #FF0000):');
    if (color) {
      setSelectedColor(color);
    }
  };

  return (
    <div className="main">
        {/* <img src={image} alt="" style={{height: "100px", width: "100px"}}/> */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDownOrTouchStart}
        onTouchStart={handleMouseDownOrTouchStart}
        onMouseMove={handleMouseMoveOrTouchMove}
        onTouchMove={handleMouseMoveOrTouchMove}
        onMouseUp={handleMouseUpOrTouchEnd}
        onTouchEnd={handleMouseUpOrTouchEnd}
        style={{ cursor: 'crosshair', backgroundColor: "transparent" }}
      />

      {startX !== null && startY !== null && endX !== null && endY !== null && (
        <div
          style={{
            position: 'fixed',
            left: Math.min(startX, endX),
            top: Math.min(startY, endY),
            width: Math.abs(endX - startX),
            height: Math.abs(endY - startY),
            backgroundColor: selectedColor,
            opacity: 0.5,
          }}
        >
          <p>Selected Area Width: {Math.abs(endX - startX)} px</p>
          <p>Selected Area Height: {Math.abs(endY - startY)} px</p>
          <p>Your Selected pixel is: {Math.abs((endX - startX) * (endY - startY))}</p>
        </div>
      )}

      <button onClick={handleColorChange}>Select your Favorite Color</button>
    </div>
  );
}

export default ScreenSelector;
