import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setHoveredCard, clearHoveredCard } from '../../../redux/hoverSlice';
import '../../../styles/hero/Marquee.css'; // Ensure this path is correct

const Marquee = ({ cards, cards2, hoveredCard }) => {
  const carouselRefLeft = useRef(null);
  const carouselRefRight = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [enterTimeout, setEnterTimeout] = useState(null);
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  useEffect(() => {
    const carouselLeft = carouselRefLeft.current;
    const carouselRight = carouselRefRight.current;
    const cardSize = 130; // Size of each card (130px square)
    const gap = 16; // Space between cards
    const totalHeight = (cardSize + gap) * cards.length; // Total height of the carousel

    // Create infinite loop for the left column (moving up)
    const tlLeft = gsap.fromTo(
      carouselLeft.children,
      { y: 0 },
      {
        y: `-${totalHeight}px`,
        ease: 'none',
        duration: 30,
        repeat: -1,
        stagger: 0, // Ensures all children move together
        paused: true, // Initialize as paused
      }
    );

    // Create infinite loop for the right column (moving down)
    const tlRight = gsap.fromTo(
      carouselRight.children,
      { y: `-${totalHeight}px` },
      {
        y: 0,
        ease: 'none',
        duration: 30,
        repeat: -1,
        stagger: 0, // Ensures all children move together
        paused: true, // Initialize as paused
      }
    );

    // Start animations
    if (!isPaused) {
      tlLeft.play();
      tlRight.play();
    }

    // Cleanup on component unmount
    return () => {
      tlLeft.kill();
      tlRight.kill();
    };
  }, [cards]);

  useEffect(() => {
    const carouselLeft = carouselRefLeft.current;
    const carouselRight = carouselRefRight.current;
    
    const tlLeft = gsap.getTweensOf(carouselLeft.children)[0];
    const tlRight = gsap.getTweensOf(carouselRight.children)[0];

    if (isPaused) {
      tlLeft.pause();
      tlRight.pause();
    } else {
      tlLeft.play();
      tlRight.play();
    }
  }, [isPaused]);

  const handleMouseDown = () => setIsPaused(true);
  const handleMouseUp = () => setIsPaused(false);

  const dispatch = useDispatch();

  const handleMouseEnter = (card) => {
    // Clear any existing leave timeout
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }

    // Clear any existing enter timeout
    if (enterTimeout) {
      clearTimeout(enterTimeout);
      setEnterTimeout(null);
    }

    // Set a new timeout for mouse enter with a 700ms delay
    const timeoutId = setTimeout(() => {
      dispatch(setHoveredCard(card)); // Dispatch after delay
    }, 700); // 700 milliseconds delay before dispatching

    // Save the timeout ID so it can be cleared if needed
    setEnterTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    // Clear any existing enter timeout to prevent accidental hover states being set
    if (enterTimeout) {
      clearTimeout(enterTimeout);
      setEnterTimeout(null);
    }
  
    // Clear any existing leave timeout to prevent it from firing prematurely
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
  
    // Set a new leave timeout to check after a delay
    const timeoutId = setTimeout(() => {
      // Check if the mouse is still over the hoveredCard
      if (hoveredCard.current && !hoveredCard.current.matches(':hover')) {
        // Animate the card to scale down and fade out
        gsap.to(hoveredCard.current, {
          scale: 0.2,
          x: 350,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
          onComplete: () => {
            // After animation completes, clear the hovered card
            dispatch(clearHoveredCard());
          }
        });
      }
    }, 700); // Delay before clearing hover state
  
    // Save the timeout ID to clear it if needed
    setLeaveTimeout(timeoutId);
  };
  
  

  return (
    <div
      className="relative flex items-center justify-center lg:mr-44"
      style={{ height: '88vh' }}
      
    >
      <div className="relative min-h-screen w-[calc(130px*2+2px)] xxlg:space-x-10 lg:space-x-5">
        {/* Marquee Scrolling Up */}
        <div
          className="absolute top-0 left-0 flex flex-col"
          style={{ width: '130px', height: '100%' }}
          ref={carouselRefLeft}
          onMouseEnter={handleMouseDown}
          onMouseLeave={handleMouseUp}
        >
          {cards.map((card, index) => (
            <div
              key={card.id || index}
              className="flex-shrink-0 bg-[#F2F2F2] rounded-[2rem] flex justify-center items-center"
              style={{ width: '130px', height: '130px', marginBottom: '16px' }}
              onMouseEnter={() => handleMouseEnter(card)}
              onMouseLeave={handleMouseLeave}
              
            >

              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />

            </div>
          ))}
          {/* Duplicate cards to ensure seamless scrolling */}
          {cards.map((card, index) => (
            <div
              key={card.id || (index + cards.length)}
              className="flex-shrink-0 bg-[#F2F2F2] rounded-[2rem] flex justify-center items-center"
              style={{ width: '130px', height: '130px', marginBottom: '16px' }}
              onMouseEnter={() => handleMouseEnter(card)}
              onMouseLeave={handleMouseLeave}

            >

              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />

            </div>
          ))}
        </div>

        {/* Marquee Scrolling Down */}
        <div
          className="absolute top-0 left-[130px] flex flex-col"
          style={{ width: '130px', height: '100%' }}
          ref={carouselRefRight}
          onMouseEnter={handleMouseDown}
          onMouseLeave={handleMouseUp}

        >
          {cards2.map((card, index) => (
            <div
              key={card.id || index}
              className="flex-shrink-0 bg-[#F2F2F2] rounded-[2rem] flex justify-center items-center"
              style={{ width: '130px', height: '130px', marginBottom: '16px' }}
              onMouseEnter={() => handleMouseEnter(card)}
              onMouseLeave={handleMouseLeave}
 
            >

              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />

            </div>
          ))}
          {/* Duplicate cards to ensure seamless scrolling */}
          {cards2.map((card, index) => (
            <div
              key={card.id || (index + cards.length)}
              className="flex-shrink-0 bg-[#F2F2F2] rounded-[2rem] flex justify-center items-center"
              style={{ width: '130px', height: '130px', marginBottom: '16px' }}
              onMouseEnter={() => handleMouseEnter(card)}
              onMouseLeave={handleMouseLeave}

            >

              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
