import React, { useState, useEffect } from 'react';

const Mouseflower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position when the mouse moves
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Custom cursor following the mouse */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '20px',      // Adjust size as needed
          height: '20px',
          backgroundColor: '#ff358b',   // Change color
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)', // Center the cursor on the mouse
          pointerEvents: 'none',   // Prevent blocking mouse events
          zIndex: 9999,
        }}
       className='lg:block hidden'></div>

      {/* Main content */}
      <div></div>
    </div>
  );
};

export default Mouseflower;
