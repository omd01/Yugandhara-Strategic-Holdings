import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Hero from '../components/home/Hero';
import bg from '../assets/Y_icons.svg';

function Home() {
  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      {/* Background Image with Reduced Opacity and Size */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: -570,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: '27%', // Adjust this to control the size of the background image
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1, // Adjust this value to control the faintness
          zIndex: -1, // Ensures the background is behind content
        }}
      ></div>

      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
