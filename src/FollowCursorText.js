import React, { useState, useEffect } from 'react';
import "./App.css"

const FollowCursorText = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div className="follow-cursor-text" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      Follow Me
    </div>
  );
};

export default FollowCursorText;
