import React, { useState } from "react";

function Adcosadc() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
  };

  return (
    <div className="relative">
      <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md">
        Slide Right
      </button>
      <div
        className={`w-48 h-48 bg-red-500 absolute transition-transform ${
          isAnimating ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>
    </div>
  );
}

export default Adcosadc;
