import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Marquee from './marquee/Marquee';
import MarqueeResponsive from './marquee/MarqueeResponsive';
import logo1 from '../../assets/SM Consultancy.svg';
import logo2 from '../../assets/Useless.svg';
import logo3 from '../../assets/YUGA Weddings.svg';
import logo4 from '../../assets/Mask Production.svg';
import logo5 from '../../assets/The Magic Pan.svg';
import logo6 from '../../assets/YUGA Hospitality.svg';

import mlogo1 from '../../assets/Yuga Production House.svg';
import mlogo2 from '../../assets/YUGA Sports & Entertainment.svg';
import mlogo3 from '../../assets/Yuga Studios.svg';
import mlogo4 from '../../assets/Yugandhara Strategic Holdings.svg';

const Hero = () => {
  const cards = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 },
  ];
  const [currentImage1, setCurrentImage1] = useState(mlogo1);
  const containerRef = useRef(null);
  const images = [mlogo1, mlogo2, mlogo3, mlogo4];
  const imageCount = images.length;

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = container.querySelectorAll('.image');

    // Initial setup
    gsap.set(imageElements, { opacity: 0, scale: 0.9 });

    // Create a GSAP timeline
    const tl = gsap.timeline({ repeat: -1 });

    images.forEach((image, index) => {
      const imageElement = imageElements[index];

      tl.to(imageElement, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
      })
      .to(imageElement, {
        duration: 1,
        opacity: 0,
        scale: 0.9,
        ease: 'power3.in',
      });
    });
  }, [images]);



  return (
    <section className="hero-section flex flex-row max-xmlg:flex-col h-full">
      {/* 70% Part */}
      <div className="w-[70%] flex flex-col items-center mt-16 text-center max-xmlg:w-full" ref={containerRef}>
      {images.map((image, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={{ zIndex: imageCount - index }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="image w-44 h-auto object-cover"
              style={{ zIndex: 1 }}
            />
          </div>
        ))}
        <h1 className="relative text-7xl max-md:text-5xl font-gothicbold pt-36">Yugandhara Strategic Holdings</h1>
        <div className='pt-4 w-[60%] max-xmlg:w-full'>
          <p className='font-gothicbook text-xl max-md:text-lg'>Featuring over 300,000 screens and 1,000 iOS, Android & Web apps - New content weekly.</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-10 pt-4'>
        <a href="">
          <button className='flex py-3 px-3 bg-[#111111] text-whiteo rounded-3xl'>Join for free</button>
        </a>
        <a href="">
          <button className='flex flex-row py-3 px-2 bg-[#FFFFFF] rounded-3xl'>See our plans 
          </button>
        </a>
        </div>
      </div>

      {/* 30% Part */}
      <div className="w-[30%] overflow-y-hidden overflow-x-hidden max-xmlg:hidden">
        <Marquee cards={cards} />
      </div>
      <div className='pt-16 xmlg:hidden'>
        <MarqueeResponsive cards={cards} />
      </div>
    </section>
  );
};

export default Hero;
