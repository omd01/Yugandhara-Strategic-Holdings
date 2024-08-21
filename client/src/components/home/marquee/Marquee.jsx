import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../../../styles/hero/Marquee.css'; // Ensure this path is correct

const Marquee = ({ cards }) => {
  const carouselRefLeft = useRef(null);
  const carouselRefRight = useRef(null);

  useEffect(() => {
    const carouselLeft = carouselRefLeft.current;
    const carouselRight = carouselRefRight.current;
    const cardSize = 130; // Size of each card (130px square)
    const gap = 16; // Space between cards
    const totalHeight = (cardSize + gap) * cards.length; // Total height of the carousel

    // Function to reset position
    const resetPosition = (element) => {
      gsap.set(element, { y: 0 });
    };

    // Create an infinite loop for the left column (moving up)
    gsap.fromTo(
      carouselLeft.children,
      { y: 0 },
      {
        y: `-${totalHeight}px`,
        ease: 'none',
        duration: 10,
        repeat: -1,
        stagger: 0, // Ensures all children move together
        onRepeat: () => resetPosition(carouselLeft.children),
      }
    );

    // Create an infinite loop for the right column (moving down)
    gsap.fromTo(
      carouselRight.children,
      { y: `-${totalHeight}px` },
      {
        y: 0,
        ease: 'none',
        duration: 10,
        repeat: -1,
        stagger: 0, // Ensures all children move together
        onRepeat: () => resetPosition(carouselRight.children),
      }
    );
  }, [cards]);

  return (
    <div className="flex items-center justify-center min-h-screen lg:mr-44">
      <div className="relative min-h-screen w-[calc(130px*2+2px)] lg:space-x-16">
        {/* Marquee Scrolling Up */}
        <div
          className="absolute top-0 left-0 flex flex-col"
          style={{ width: '130px', height: '100%' }}
          ref={carouselRefLeft}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '130px', height: '130px', marginBottom: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Duplicate cards to ensure seamless scrolling */}
          {cards.map((card, index) => (
            <div
              key={index + cards.length}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '130px', height: '130px', marginBottom: '16px' }}
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
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '130px', height: '130px', marginBottom: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Duplicate cards to ensure seamless scrolling */}
          {cards.map((card, index) => (
            <div
              key={index + cards.length}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '130px', height: '130px', marginBottom: '16px' }}
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
