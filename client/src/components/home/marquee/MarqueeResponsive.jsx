import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../../../styles/hero/Marquee.css'; // Ensure this path is correct

const MarqueeResponsive = ({ cards, cards2 }) => {
  const carouselRefLeft = useRef(null);
  const carouselRefRight = useRef(null);

  useEffect(() => {
    const carouselLeft = carouselRefLeft.current;
    const carouselRight = carouselRefRight.current;
    const cardSize = 80; // Width of each card (130px square)
    const gap = 16; // Space between cards
    const totalWidth = (cardSize + gap) * cards.length; // Total width of the carousel

    // Function to reset position
    const resetPosition = (element) => {
      gsap.set(element, { x: 0 });
    };

    // Create an infinite loop for the top row (moving left)
    gsap.fromTo(
      carouselLeft.children,
      { x: 0 },
      {
        x: `-${totalWidth}px`,
        ease: 'none',
        duration: 20,
        repeat: -1,
        stagger: 0, // Ensures all children move together
        onRepeat: () => resetPosition(carouselLeft.children),
      }
    );

    // Create an infinite loop for the bottom row (moving right)
    gsap.fromTo(
      carouselRight.children,
      { x: `-${totalWidth}px` },
      {
        x: 0,
        ease: 'none',
        duration: 20,
        repeat: -1,
        stagger: 0, // Ensures all children move together
        onRepeat: () => resetPosition(carouselRight.children),
      }
    );
  }, [cards]);

  return (
    <div className="flex items-center justify-center min-y-screen overflow-x-hidden overflow-y-hidden">
      <div className="relative min-w-full h-[calc(80px*2+2px)] space-y-1 mb-10">
        {/* Marquee Scrolling Left */}
        <div
          className="absolute top-0 left-0 flex flex-row"
          style={{ height: '80px', width: '100%' }}
          ref={carouselRefLeft}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '80px', height: '80px', marginRight: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Duplicate cards to ensure seamless scrolling */}
          {cards.map((card, index) => (
            <div
              key={index + cards.length}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '80px', height: '80px', marginRight: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Marquee Scrolling Right */}
        <div
          className="absolute top-[100px] left-0 flex flex-row"
          style={{ height: '80px', width: '100%' }}
          ref={carouselRefRight}
        >
          {cards2.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '80px', height: '80px', marginRight: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Duplicate cards to ensure seamless scrolling */}
          {cards2.map((card, index) => (
            <div
              key={index + cards2.length}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl flex justify-center items-center"
              style={{ width: '80px', height: '80px', marginRight: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeResponsive;
