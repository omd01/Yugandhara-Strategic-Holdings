import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Hero from '../components/home/Hero';
import bg from '../assets/Y_icons.svg';
import '../styles/home/home.css';

function Home() {
  return (
    <>
    <Navbar />
    <div style={{ position: 'relative', zIndex: 0 }}>
      {/* Background Image with Reduced Opacity and Size */}
      <div
        style={{
          backgroundImage: `url(${bg})`,

        }}
        className='home'
      >
        
      </div>


      <Hero />
    </div>
    </>
  );
}

export default Home;
