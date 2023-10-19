import React, { useState, useEffect } from 'react';
import './topButton.css';
import { AiOutlineArrowUp } from 'react-icons/ai';

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const toTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showButton && (
      <div className="gpt3__topButton scale-up-center" onClick={toTop}>
        <AiOutlineArrowUp fill="#ffffff" size={25} />
      </div>
    )
  );
};

export default TopButton;
