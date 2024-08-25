import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import Marquee from "./marquee/Marquee";
import MarqueeResponsive from "./marquee/MarqueeResponsive";
import { cards_one, cards_two, comp_icons } from "../../assets";
import { setHoveredCard, clearHoveredCard } from "../../redux/hoverSlice";
import '../../styles/hero/hero.css';


const Hero = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const ishadow = useRef(null);
  const images = comp_icons;
  const hoveredCard = useSelector((state) => state.hover.hoveredCard);
  const dispatch = useDispatch();
  const imageCount = images.length;

  const [enterTimeout, setEnterTimeout] = useState(null);
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = container.querySelectorAll(".image");
    const ishadowElement = ishadow.current; // Select the ishadow element
    
    // Set initial states
    gsap.set(imageElements, { opacity: 0, scale: 0.7 });
    gsap.set(ishadowElement, { opacity: 0, y: 50 }); // Initial position down and opacity 0
  
    const animateImages = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Reset the image elements to the initial state
          gsap.set(imageElements, { opacity: 0, scale: 0.7 });
          // Reset the ishadow element to the initial state
          gsap.set(ishadowElement, { opacity: 0 });
          animateImages(); // Loop the animation
        },
      });
  
      images.forEach((image, index) => {
        const imageElement = imageElements[index];
  
        // Animate the image element
        tl.to(imageElement, {
          duration: 2,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
        }).to(imageElement, {
          duration: 0.4,
          opacity: 0,
          scale: 1.1,
          ease: "power3.in",
        });
  
        // Animate the ishadow element in sync with the images
        tl.to(
          ishadowElement,
          {
            duration: 0.9,
            opacity: 1,
            y: 0, // Move ishadow to original position
            ease: "power3.out",
          },
          `-=${0.85}` // Start this animation a little earlier to sync with images
        ).to(
          ishadowElement,
          {
            duration: 0.3,
            opacity: 0,
            y: 20, // Move ishadow back down
            ease: "power3.in",
          },
          `-=${0.3}` // Start this animation a little earlier to sync with images
        );
      });
    };
  
    // Start the animation loop
    animateImages();
  }, [images]);
  
  
  

  useEffect(() => {
    const container = containerRef.current;
    const yugaText = document.querySelector('.yuga-text');
const text = yugaText.textContent;

// Split the text into individual characters
yugaText.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');

// Select character spans
const chars = yugaText.querySelectorAll('span');
    const yugaSubtext = container.querySelector(".yuga-subtext");
    const yugaButtons = container.querySelectorAll(".yuga-btn, .yuga-btn2");

    // Check the href attribute of the current URL
    const currentHref = window.location.pathname;

    // Only apply animation if the href is not '/'
    if (currentHref === '/') {
      // Create a GSAP timeline
      const tl = gsap.timeline();

      // Animate the yuga-text from the right
      tl.fromTo(chars, 
        {
          x: "-200%", // Start position (left of the container)
          opacity: 0, // Initial opacity
        },
        {
          x: "0%", // End position (original position)
          opacity: 1, // Final opacity
          stagger: 0.05, // Delay between each character's animation
          duration: 0.6, // Duration of the animation
          ease: "power3.out", // Easing function
        }
      )
        // Animate the yuga-subtext with a scaling effect
        .fromTo(
          yugaSubtext,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.9" // Start this animation 0.7 seconds before the previous one ends
        )
        // Animate the buttons from the left
        .fromTo(
          yugaButtons,
          { y: "250%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }
  }, []);
  
  useEffect(() => {
    if (hoveredCard) {
      // Start GSAP animation for scaling and translating
      gsap.fromTo(
        cardRef.current,
        { scale: 0.5, x: 350, opacity: 0 }, // Start state
        { 
          scale: 1, 
          x: 0, 
          opacity: 1, 
          duration: 0.5, // Duration of the animation
          ease: "power2.out" // Easing function
        }
      );
    }
  }, [hoveredCard]);


  const handleMouseEnter = (card) => {
    // Clear any existing leave timeout
    if (enterTimeout) {
      clearTimeout(enterTimeout);
  }

    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
    }

    // Set a new timeout for mouse enter
    const timeoutId = setTimeout(() => {
      dispatch(setHoveredCard(card));
    }, 100); // Delay before dispatching setHoveredCard

    // Save the timeout ID to clear it if needed
    setEnterTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    // Clear any existing enter timeout
    if (enterTimeout) {
      clearTimeout(enterTimeout);
    }
  
    // Set a new timeout for mouse leave
    const timeoutId = setTimeout(() => {
      if (cardRef.current) {
        // GSAP animation for mouse leave
        gsap.to(cardRef.current, {
          scale: 0.2,
          x: 350,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            // Dispatch clearHoveredCard only after animation completes
            dispatch(clearHoveredCard());
          },
        });
      } else {
        // Dispatch clearHoveredCard immediately if cardRef.current is not available
        dispatch(clearHoveredCard());
      }
    }, 300); // Delay before dispatching clearHoveredCard
  
    // Save the timeout ID to clear it if needed
    setLeaveTimeout(timeoutId);
  };

  

  return (
    <section className="hero-section flex flex-row max-xmlg:flex-col h-auto">
      {/* 70% Part */}
      <div
        className="w-[75%] flex flex-col items-center mt-16 max-sm:mt-12 text-center max-xmlg:w-full"
        ref={containerRef}
      >
        <div class="w-23 h-23 bg-[#F2F2F2] absolute rounded-3xl top-[10rem] left-24 shadow-md z-[100]"></div>
        {hoveredCard && (
          <div
            ref={cardRef}
            className="absolute top-[8%] w-[55%] h-[80%] rounded-[2rem] isolate aspect-video  bg-white/30 backdrop-blur-3xl shadow-lg ring-1 ring-black/5 p-4 flex flex-col "
            style={{ zIndex: 100000 }} // Ensure the card is on top of other elements
            onMouseEnter={() => handleMouseEnter(hoveredCard)} // Maintain hover state
            onMouseLeave={handleMouseLeave}
          >
            {/* Logo at the top left */}
            <img
              src={hoveredCard.logo}
              alt="Hovered Card Logo"
              className="w-40 h-auto object-cover rounded-t-[2rem]"
              style={{ position: 'absolute', top: '0px', left: '16px' }}
            />
            
            {/* Content container with padding to accommodate logo */}
            <div className="">
              <div className="xxl:pt-48 pt-36 flex flex-col justify-center items-center text-center">
              {/* Other card content can go here, if needed */}
              <div className="text-3xl font-gothicbook ">
              <p>Yugandhara Strategic Holdings</p>
              </div>
              <div className=" text-lg px-16 font-gothicbook">
              <p>Leading the way in event management, sustainable agriculture, luxury products, and digital solutions, delivering excellence across global industries.</p>
              </div>
              </div>
              {/* Read More button centered at the bottom */}
              <div className="xxl:pt-[8rem] pt-[3rem] pr-5">
              <a href='#' className="flex justify-end items-center">
                <button className="py-2 px-4 bg-[#111111] text-white rounded-full hover:bg-[#333333]">
                  Explore
                </button>
              </a>
              </div>
            </div>
          </div>
        )}
        <div ref={ishadow} class="w-[3rem] h-[3rem] bg-[#F2F2F2] absolute flex top-[3.6rem] rounded-xl items-center justify-center  shadow-md"></div>
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={{ zIndex: imageCount - index }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="image w-23 h-auto object-fill max-sm:w-16"
              style={{ zIndex: 1 }}
            />
          </div>
        ))}
        <div className="w-[70%] max-md:w-[100%]">
          <h1 className="yuga-text relative text-7xl max-md:text-5xl font-gothicbold pt-32 max-sm:pt-24 tracking-[-0.05rem] p-2">
            Yugandhara Strategic Holdings
          </h1>
        </div>
        <div className="pt-4 w-[60%] max-xmlg:w-full max-sm:px-3">
          <p className="yuga-subtext font-gothicbook text-xl max-md:text-lg">
            Leading the way in event management, sustainable agriculture, luxury
            products, and digital solutions, delivering excellence across global
            industries.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-6 pt-4 max-sm:gap-2">
          <a href="">
            <button className="yuga-btn flex py-3 px-5 bg-[#111111] text-[#F2F2F2] font-gothicdemi rounded-3xl max-sm:px-3 max-sm:text-sm">
              About Us
            </button>
          </a>
          <a href="/companies">
            <button className="yuga-btn2 flex flex-row py-3 px-5  bg-[#FFFFFF] font-gothicdemi rounded-3xl border max-sm:px-2 max-sm:text-sm">
              Companies
              <svg
                className="ml-2 w-4 h-4 mt-1 max-sm:mt-0.5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" /> {/* Horizontal line */}
                <path d="M12 5l7 7-7 7" /> {/* Arrowhead */}
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* 30% Part */}
      <div className="w-[25%] overflow-y-hidden overflow-x-hidden max-xmlg:hidden">
        <Marquee cards={cards_one} cards2={cards_two} hoveredCard={cardRef}/>
      </div>
      <div className="pt-16 xmlg:hidden">
        <MarqueeResponsive cards={cards_one} cards2={cards_two}  />
      </div>
    </section>
  );
};

export default Hero;
