import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import '../../styles/navigation/Navbar.css';
import '../../styles/fonts.css';
// import logo from '../../assets/Yugandhara Strategic Holdings.svg'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(0);

  const handleScroll = () => {
    setNavbarOpacity(window.scrollY > 30 ? 0.9 : 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="nav bg-[#F2F2F2] h-[5.25rem] max-md:pl-5 sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-30"

    >
      {/* Logo Section */}
      <div className="flex items-center max-md:w-36">
        {/* Replace with your actual logo */}
        <a href="/">
        <img src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1723978854/Yuga/logo_imcnpq.svg" alt="Logo" />
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-10 pr-3 text-lg">
        <a
          href=""
          className="text-[#111111] font-gothicbold max-sm:hidden"
        >
          Career
        </a>
        <a
          href=""
          className="text-[#111111] font-gothicbold max-sm:hidden"
        >
          Contact
        </a>
        <button
          type="button"
          className="btn-btn lg:mr-6 md:mr-10 mr-4 justify-center rounded-md p-2.5 text-gray-700 transition-transform duration-300 sm:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-50 bg-black/30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full h-[250px] rounded-lg overflow-y-auto bg-[#F2F2F2] bg-opacity-95 px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="mt-10 space-y-10">
            <a
              href="/pricing"
              className="block text-[#111111] font-gothicbold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career
            </a>
            <a
              href="/login"
              className="block text-[#111111] font-gothicbold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
