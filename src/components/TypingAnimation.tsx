
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
}

const TypingAnimation = ({ text }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      // Blink cursor for a bit after completion
      const blinkTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 2000);
      return () => clearTimeout(blinkTimeout);
    }
  }, [currentIndex, text]);

  // Cursor blinking effect
  useEffect(() => {
    if (!isComplete) return;
    
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, [isComplete]);

  return (
    <div className="relative inline-block">
      <span>{displayText}</span>
      {(!isComplete || showCursor) && (
        <span className="animate-pulse ml-1 text-light-cyan">|</span>
      )}
    </div>
  );
};

export default TypingAnimation;
