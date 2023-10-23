import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const initialBookedAreas = {};

function ImageSelector() {
  const imageRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endX, setEndX] = useState(null);
  const [endY, setEndY] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");
  const [userAreas, setUserAreas] = useState([]);
  const [showFileInput, setShowFileInput] = useState(true);
  const [imageSelected, setImageSelected] = useState(false);
  const [currentDrawing, setCurrentDrawing] = useState({}); 
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [currentAreaPixels, setCurrentAreaPixels] = useState(0);
  const [tooltip, setTooltip] = useState("");
  const [bookedAreas, setBookedAreas] = useState(initialBookedAreas);


  const FollowCursorText = () => {
  
    useEffect(() => {
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', updatePosition);
  
      return () => {
        window.removeEventListener('mousemove', updatePosition);
      };
    }, []);


  }

  const isAreaSelected = (x, y) => {
    return userAreas.some(
      (area) =>
        x >= area.startX && x <= area.endX && y >= area.startY && y <= area.endY
    );
  };

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      // Left mouse button (button 0) is clicked
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - window.scrollX;
      const y = e.clientY - rect.top - window.scrollY;

      if (!isAreaSelected(x, y)) {
        if (startX === null) {
          setStartX(x);
          setStartY(y);
          setShowFileInput(false); // Hide the file input
        } else if (endX === null) {
          setEndX(x);
          setEndY(y);
          setShowFileInput(true); // Show the file input
        }
      }
    }
  };

  const handleMouseMove = (e) => {
    if (startX !== null && endX === null) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - window.scrollX;
      const y = e.clientY - rect.top - window.scrollY;
  
      setCurrentDrawing({ x1: startX, y1: startY, x2: x, y2: y });
      setPosition({ x, y });             // Update the position ...   state
  
      if (x !== startX && y !== startY) {
        const areaPixels = Math.abs((x - startX) * (y - startY));
        const lastArea = userAreas[userAreas.length - 1];
        const areaValue = lastArea ? checkArea(lastArea) : null;
  
        const boxSize = `${y - startY}  , ${x - startX}  `;
        setTooltip(`Total Block: ${areaPixels}, / , Box Size: ${boxSize}`);
        // console.log(boxSize  , "kaugfkuiagh")
      }
       else {
        setTooltip(""); // Hide the tooltip if the cursor is at the starting point
      }
    }
  };
  

  const handleMouseUp = () => {
    if (startX !== null && endX === null) {
      setCurrentDrawing(null);
    }
  };

  const handleImageUpload = (e, area) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        area.image = e.target.result;
        setUserAreas([...userAreas]);
        // Set imageSelected to true when an image is selected
        setImageSelected(true);
      };
      reader.readAsDataURL(file);
    }
  };
 
  const checkArea = (area) => {
    const conditions = [
            {
              condition: (
                (area.startX >= 0 && area.startX <= 1362 && area.endX <= 1362 && area.endX >= 0) &&
                (area.startY >= 0 && area.startY <= 109 && area.endY <= 109 && area.endY >= 0)
              ),
              value: '1',
            },
            {
              condition: (
                (area.startX >= 0 && area.startX <= 1362 && area.endX <= 1362 && area.endX >= 0) &&
                (area.startY >= 391 && area.startY <= 517 && area.endY <= 517 && area.endY >= 391)
              ),
              value: '1',
            },
            {
              condition: (
                (area.startX >= 0 && area.startX <= 212 && area.endX <= 212 && area.endX >= 0) &&
                (area.startY >= 113 && area.startY <= 390 && area.endY <= 390 && area.endY >= 113)
              ),
              value: '1',
            },
            {
              condition: (
                (area.startX >= 1104 && area.startX <= 1347 && area.endX <= 1347 && area.endX >= 1104) &&
                (area.startY >= 114 && area.startY <= 389 && area.endY <= 389 && area.endY >= 114)
              ),
              value: '1',
            },
            {
              condition: (
                (area.startX >= 215 && area.startX <= 1097 && area.endX <= 1097 && area.endX >= 215) &&
                (area.startY >= 114 && area.startY <= 196 && area.endY <= 196 && area.endY >= 114)
              ),
              value: '2',
            },
            {
              condition: (
                (area.startX >= 215 && area.startX <= 1102 && area.endX <= 1102 && area.endX >= 215) &&
                (area.startY >= 308 && area.startY <= 387 && area.endY <= 387 && area.endY >= 308)
              ),
              value: '2',
            },
            {
              condition: (
                (area.startX >= 862 && area.startX <= 1100 && area.endX <= 1100 && area.endX >= 862) &&
                (area.startY >= 201 && area.startY <= 305 && area.endY <= 305 && area.endY >= 201)
              ),
              value: '2',
            },
            {
              condition: (
                (area.startX >= 216 && area.startX <= 431 && area.endX <= 431 && area.endX >= 216) &&
                (area.startY >= 199 && area.startY <= 306 && area.endY <= 306 && area.endY >= 199)
              ),
              value: '2',
            },
            {
              condition: (
                (area.startX >= 436 && area.startX <= 858 && area.endX <= 858 && area.endX >= 436) &&
                (area.startY >= 200 && area.startY <= 305 && area.endY <= 305 && area.endY >= 200)
              ),
              value: '3',
            },
          ];

          let areaValues = [];

  for (const conditionObject of conditions) {
    if (conditionObject.condition) {
      areaValues.push(conditionObject.value);
    }
  }
  
  if (areaValues.length === 1) {
    return areaValues[0]; // Single condition is true
  } else if (areaValues.length >= 2) {
    return areaValues.join(", ") // Multiple conditions matched
    
    // console.log(areaValues , "areavalue"); // Log the areaValues array
    // console.log(areaValues.length , "areavalue lengthh" ); // Log the length of areaValues
  }
  else{
    return 'null';
    
  }  
};

  const calculatePixels = (area) => {
    return Math.abs((area.endX - area.startX) * (area.endY - area.startY));
  };




  
  const handleAssign = () => {
    if (startX !== null && endX !== null && selectedUser !== "") {
      const tempArea = {
        startX: Math.min(startX, endX),
        startY: Math.min(startY, endY),
        endX: Math.max(startX, endX),
        endY: Math.max(startY, endY),
        user: selectedUser,
        image: null,
      };
  
      if (isAreaBooked(tempArea)) {
        console.log(tempArea , "ascfdskkvk");
        alert("This area is already booked.");
      } else {
        updateBookedAreas(tempArea);
      }
        
      
      const areaValue = checkArea(tempArea);
      const areaPixels = calculatePixels(tempArea);
      
      const area = {
        startX: Math.min(startX, endX),
        startY: Math.min(startY, endY),
        endX: Math.max(startX, endX),
        endY: Math.max(startY, endY),
        user: selectedUser,
        image: null,
        areaValue:areaValue,
        areaPixels: areaPixels,
      };
      if (areaValue !== null) {
        alert(`Area value is ${areaValue}`);
      } else {
        console.log("Area value is null");
      }

      alert(`Total pixels selected: ${areaPixels}`);

      setUserAreas([...userAreas, area]);

      

      setStartX(null);
      setStartY(null);
      setEndX(null);
      setEndY(null);
      setCurrentDrawing(null);
      setSelectedUser("");
    }
  }
  const isAreaBooked = (area) => {
    for (const key in bookedAreas) {
      const bookedArea = bookedAreas[key];
      if (areAreasOverlap(area, bookedArea)) {
        return true;
      }
    }
    return false;
  };
  
        const areAreasOverlap = (area1, area2) => {
          // Check if area1 and area2 overlap (e.g., one is to the left, right, above, or below the other)
          return (
            area1.startX < area2.endX &&
            area1.endX > area2.startX &&
            area1.startY < area2.endY &&
            area1.endY > area2.startY
          );
        };
        const updateBookedAreas = (area) => {
          const key = `selected area  ${area.startX}-${area.startY}-${area.endX}-${area.endY}`;
          setBookedAreas({ ...bookedAreas, [key]: area.user });
        };
        console.log(bookedAreas , "bookedAreas")
        console.log(userAreas, "userareas")

                             
  return (
    <div className="container">
      <div 
        style={{
           display: "flex",
          // flex-direction: "column",  
          width: "100%", 
          height: "auto"
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
            >
        <img
          ref={imageRef}
          src="https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg"
          alt="Selectable Image"
          onMouseDown={handleMouseDown}
          style={{ cursor: "crosshair", width: "100%", height: "520px" }}
        />

        {/* Render the boundaries for each selected area only if imageSelected is false */}
        {!imageSelected &&
          userAreas.map((area, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: area.startX,
                top: area.startY,
                width: area.endX - area.startX,
                height: area.endY - area.startY,
                border: "0.5px solid red",
              }}
            />
          ))}

        {currentDrawing?.x1 !== undefined &&
          currentDrawing?.x2 !== undefined && (
            <div
              style={{
                position: "absolute",
                left: Math.min(currentDrawing.x1, currentDrawing.x2),
                top: Math.min(currentDrawing.y1, currentDrawing.y2),
                width: Math.abs(currentDrawing.x2 - currentDrawing.x1),
                height: Math.abs(currentDrawing.y2 - currentDrawing.y1),
                border: "0.5px solid red",
              }}
            />
          )}

        {startX !== null && endX !== null && (
          <div
            style={{
              position: "absolute",
              left: Math.min(startX, endX),
              top: Math.min(startY, endY),
              width: Math.abs(endX - startX),
              height: Math.abs(endY - startY),
              border: "0.5px solid red",
            }}
          />
        )}
      </div>
     
   

      <div 
        style={{ alignItems: "center", marginLeft: "450px", marginTop: "10px" }}
      >
        <label>Name OR ID:</label>
        <input
          type="text"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        />
        {startX !== null && endX !== null && (
          <button onClick={handleAssign}>Assign to User</button>
        )}
        {showFileInput && (
          <input
            type="file"
            accept=".png, .jpg, .jpeg, .svg"
            onChange={(e) =>
              handleImageUpload(e, userAreas[userAreas.length - 1])
            }
          />
        )}
     <div className="follow-cursor-text" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
  {tooltip && userAreas.length > 0 && (
    <>
    
      Area Value: {userAreas[userAreas.length - 1].areaValue}<br />
      {tooltip}
      <FollowCursorText />
    </>
  )}
</div>
  
        <ul>
          {userAreas.map((area, index) => (
            <li key={index}>
              User: {area.user}, Area: {area.startX}, {area.startY}, {area.endX}
              , {area.endY} ,  pixels-value: {area.areaValue} , Totalpixels :{area.areaPixels}  ,boxsize :{area.boxSize}         
              {area.image && (
                <img
                  src={area.image}
                  alt="User Image"
                  style={{
                    position: "fixed",
                    left: area.startX,
                    top: area.startY,
                    width: area.endX - area.startX,
                    height: area.endY - area.startY,
                  }}
                />
              )}
            </li>
          ))}
        </ul>
        </div>
      </div>
  );
}

export default ImageSelector





