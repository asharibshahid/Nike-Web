"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-red-400 to-yellow-300">
      {/* Left - Logo */}
      <div className="text-2xl font-bold">
        <Image 
          src={require("./images/nike.png")} // Logo
          alt="Nike-Logo"
          className="h-12 w-12 object-contain"  // Adjusted the size
          height={48} 
          width={48}   
        />
      </div>

      {/* Center - Links for larger screens */}
      <div className="hidden md:flex space-x-8 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/men">Men</Link>
        <Link href="/women">Women</Link>
        <Link href="/Contact">Contact</Link>
      </div>

      {/* Right - Icons */}
      <div className="flex space-x-4">
        <button>
          <Image 
            src={require("./images/search.png")}
            alt="Search"
            className="h-8 w-8 object-contain"  // Adjusted size for icons
            height={32}
            width={32}
          />
        </button>
        <button>
          <Image 
            src={require("./images/cart.png")}
            alt="Cart"
            className="h-8 w-8 object-contain"
            height={32}
            width={32}
          />
        </button>

        {/* Hamburger Menu Icon for Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          <Image 
            src={require("./images/Togglemenu.png")}
            alt="Menu"
            className="h-8 w-8 object-contain bg-black"
            height={32}
            width={32}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen &&  (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-red-400 to-yellow-300 md:hidden flex flex-col items-center space-y-4 py-4 transition-transform duration-300 ease-in-out">
          <Link href="/" onClick={toggleMenu} className="text-lg"> Home</Link>
          <Link href="/men" onClick={toggleMenu} className="text-lg">Men</Link>
          <Link href="/women" onClick={toggleMenu} className="text-lg">Women</Link>
          <Link href="/contact" onClick={toggleMenu} className="text-lg">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
