
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
}

const TypingAnimation = ({ text }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  return (
    <div className="relative inline-block">
      <span>{displayText}</span>
      {!isComplete && (
        <span className="animate-pulse ml-1 text-light-cyan">|</span>
      )}
    </div>
  );
};

export default TypingAnimation;
