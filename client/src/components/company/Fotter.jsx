import React from 'react'
import bg from '../../assets/Y_icons.svg'
function Fotter({company}) {
    const {name,aboutLogo} = company;
  return (
    <div className='w-full bg-slate-50 mt-10 relative'>
        <div className='w-full flex flex-col md:flex-row '>
        <div className='md:w-1/2  h-1/5 px-5 md:px-20'>
        <img src={bg} alt="" className='h-full absolute md:left-20 top-0 p-3 md:p-10 opacity-20 select-none' />
          <div className='md:py-20 max:sm:w-full'>
                <img src={aboutLogo} alt={name} className="w-52 px-3 py-5" />
                <h1 className=" text-2xl  md:text-3xl font-gothicbold">{name}</h1>
            </div>
        </div>
        <div className='md:w-1/2 flex justify-center items-center'>
               <ul className="font-gothicmedium md:text-xl px-2 md:px-10 my-10">
                <li className="text-slate-950 font-gothicbold p-1">
                  Healpful Links
                </li>
                <a href="/"><li className="text-slate-700 p-1 cursor-pointer">Home</li></a>
                <a href="/companies"><li className="text-slate-700 p-1 cursor-pointer">Companies</li></a>
                <a href="/"><li className="text-slate-700 p-1 cursor-pointer">About</li></a>
              </ul>
              <ul className="font-gothicmedium md:text-xl px-2  md:px-10  my-10">
              <li className="text-slate-950 font-gothicbold p-1">
                  Contact
                </li>
                <li className="text-slate-700 p-1 cursor-pointer">Services</li>
                <li className="text-slate-700 p-1 cursor-pointer">Our Expertise</li>
                <li className="text-slate-700 p-1 cursor-pointer">Our Mission</li>
              </ul>
        </div>
        </div>
        
        <div className='w-full text-center py-5'>
            <a href="https://www.talentronaut.in/">
            <h3 className=' text-sm md:text-xl font-gothicmedium '>© 2024 Yugandhara Strategic Holdings Pvt. Ltd. | Developed by Talentrone Technologies Pvt. Ltd.</h3>
            </a>
        </div>

    </div>
  )
}

export default Fotter