import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MaskCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleElementHover = (e) => {
      setHoveredElement(e.target);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  const isLinkOrButton = () =>
    hoveredElement &&
    (hoveredElement.tagName === 'A' ||
      hoveredElement.tagName === 'BUTTON' ||
      (hoveredElement.parentNode && hoveredElement.parentNode.tagName === 'A'));

  const smallerCircleSize = 10;
  const biggerCircleSize = 30;
  const trailDuration = 0.3;

  return (
    <>
      <motion.div
        className={`hidden lg:block cursor-mask smaller ${isLinkOrButton() ? 'hovered' : ''}`}
        style={{
          left: position.x - smallerCircleSize / 2,
          top: position.y - smallerCircleSize / 2,
        }}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.2 }}
      />
      <motion.div
        className={`hidden lg:block cursor-mask ${isLinkOrButton() ? 'hovered' : ''}`}
        style={{
          left: position.x - biggerCircleSize / 2,
          top: position.y - biggerCircleSize / 2,
        }}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.2 }}
        transition={{ duration: trailDuration }}
      />
    </>
  );
};

export default MaskCursor;
