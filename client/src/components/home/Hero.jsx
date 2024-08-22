import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Marquee from './marquee/Marquee';
import MarqueeResponsive from './marquee/MarqueeResponsive';
const logo1 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004172/Yuga/Company%20Logos/Nikaay_u71ujk.svg';
const logo2 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004171/Yuga/Company%20Logos/Mask_Production_gwcgqx.svg';
const logo3 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004171/Yuga/Company%20Logos/Envifuture_ks0rmj.svg';
const logo4 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004169/Yuga/Company%20Logos/Yugandhara_Foundation_nesbu5.svg';
const logo5 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724337335/Yuga/Company%20Logos/Yugandhara_Strategic_Holdings_ao84bo.svg';
const logo6 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004168/Yuga/Company%20Logos/YUGA_Weddings_p9pdhr.svg';
const logo7 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004166/Yuga/Company%20Logos/Yuga_Studios_bixo6l.svg';
const logo8 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004165/Yuga/Company%20Logos/YUGA_Sports_Entertainment_gyc9ki.svg';
const logo9 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004165/Yuga/Company%20Logos/Yuga_Production_House_w3hxln.svg';
const logo10 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004163/Yuga/Company%20Logos/YUGA_Hospitality_vwphur.svg';
const logo11 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004162/Yuga/Company%20Logos/Useless_vn8okj.svg';
const logo12 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004161/Yuga/Company%20Logos/TMS_Global_Kitchen_fqa8ss.svg';
const logo13 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004161/Yuga/Company%20Logos/Urban_Farmer_yyirob.svg';
const logo14 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004160/Yuga/Company%20Logos/SM_Consultancy_qbfrt4.svg';
const logo15 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004159/Yuga/Company%20Logos/Rooh_Photography_zz5hij.svg';
const logo16 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724004159/Yuga/Company%20Logos/SIGA_bf7iav.svg';


const mlogo1 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724338544/Yuga/Company%20Logos/NEw/Yugandhara_Strategic_Holdings-1_zryzm8.svg';
const mlogo2 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724338545/Yuga/Company%20Logos/NEw/Yugandhara_Strategic_Holdings_nz6qtf.svg';
const mlogo3 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724338544/Yuga/Company%20Logos/NEw/YUGA_Sports_Entertainment_trb437.svg';
const mlogo4 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724338544/Yuga/Company%20Logos/NEw/Siga_vrwty2.svg';
const mlogo5 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724261482/Yuga/Company%20Icons/Mask_Production_ebdkyb.svg';
const mlogo6 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724261481/Yuga/Company%20Icons/YUGA_Hospitality_kxvyrq.svg';
const mlogo7 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724261479/Yuga/Company%20Icons/Useless_rzzyu0.svg';
const mlogo8 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724261480/Yuga/Company%20Icons/TMS_Global_Kitchen_qgmzbh.svg';
const mlogo9 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724261479/Yuga/Company%20Icons/Urban_Farmer_whvxx8.svg';
const mlogo10 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724261479/Yuga/Company%20Icons/SM_Consultancy_bdyypz.svg';
const mlogo11 = 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724261479/Yuga/Company%20Icons/Yuga_tyofuz.svg';


const Hero = () => {
  const cards = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 },
    { logo: logo7 },
    { logo: logo8 },
  ];
  const cards2 = [
    { logo: logo9 },
    { logo: logo10 },
    { logo: logo11 },
    { logo: logo12 },
    { logo: logo13 },
    { logo: logo14 },
    { logo: logo15 },
    { logo: logo16 },
  ]
  const containerRef = useRef(null);
  const images = [mlogo1, mlogo2, mlogo3, mlogo4];
  const imageCount = images.length;

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = container.querySelectorAll('.image');
    
    // Initial setup
    gsap.set(imageElements, { opacity: 0, scale: 0.7 });
  
    const animateImages = () => {
      // Create a GSAP timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // Reset all properties and restart the animation
          gsap.set(imageElements, { opacity: 0, scale: 0.7 });
          animateImages(); // Restart the animation
        }
      });
  
      images.forEach((image, index) => {
        const imageElement = imageElements[index];
  
        tl.to(imageElement, {
          duration: 1.1,
          opacity: 1,
          scale: 1,
          ease: 'power3.out',
        })
        .to(imageElement, {
          duration: 0.3,
          opacity: 0,
          scale: 1.1,
          ease: 'power3.in',
        });
      });
    };
  
    // Start the animation loop
    animateImages();
  }, [images]);



  return (
    <section className="hero-section flex flex-row max-xmlg:flex-col h-auto">
      {/* 70% Part */}
      <div className="w-[75%] flex flex-col items-center mt-16 text-center max-xmlg:w-full" ref={containerRef}>
      {images.map((image, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={{ zIndex: imageCount - index }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="image w-24 h-auto object-fill max-sm:w-16"
              style={{ zIndex: 1 }}
            />
          </div>
        ))}
        <div className='w-[70%] max-md:w-[100%]'>
        <h1 className="relative text-7xl max-md:text-5xl font-gothicbold pt-32 max-sm:pt-28 tracking-[-0.04rem]">Yugandhara Strategic Holdings</h1>
        </div>
        <div className='pt-4 w-[60%] max-xmlg:w-full max-sm:px-3'>
          <p className='font-gothicbook text-xl max-md:text-lg'>Leading the way in event management, sustainable agriculture, luxury products, and digital solutions, delivering excellence across global industries.</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-6 pt-4 max-sm:gap-2'>
        <a href="">
          <button className='flex py-3 px-3 bg-[#111111] text-whiteo font-gothicdemi rounded-3xl max-sm:px-3 max-sm:text-sm'>About Us</button>
        </a>
        <a href="/cards">
          <button className='flex flex-row py-3 px-2 bg-[#FFFFFF] font-gothicdemi rounded-3xl border max-sm:px-2 max-sm:text-sm'>Products
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
        <Marquee cards={cards} cards2={cards2} />
      </div>
      <div className='pt-16 xmlg:hidden'>
        <MarqueeResponsive cards={cards} cards2={cards2} />
      </div>
    </section>
  );
};

export default Hero;
