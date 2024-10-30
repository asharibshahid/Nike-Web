"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const secShoe: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('US 9');

  const sizes = ['US 9', 'US 8.5', 'US 8', 'US 7.5'];

  return (
    <div className=" ml-3 max-w-md p-8 bg-gradient-to-r from-red-400 to-yellow-300 hover:to-purple-400 shadow-lg rounded-lg">
      {/* Shoe Image */}
      <div className="relative h-96 w-full"> {/* Set a fixed height for the container */}
        <Image 
          src= {require("./images/Nike0.png")}// Use the correct image path
          alt="Shoe pic"
          layout="fill" // Use layout fill to cover the container
          objectFit="cover" // Ensure the image covers the container
          className="rounded-lg" // Optional: Add rounded corners if needed
        />
         {/* Optional floating shoes */}
         <div className="absolute -top-6 left-2">
          <Image
             src = {require("./images/nike2.png")}
            alt="Floating Shoe"
            layout="fixed"
            width={40} // Desired width
            height={70} // Desired height
            className="object-contain"
          />
        </div>
        <div className="absolute -bottom-6 right-2">
          <Image
           src = {require("./images/nikw1.png")}
            alt="Floating Shoe"
            layout="fixed"
            width={40} // Desired width
            height={40} // Desired height
            className="object-contain"
          />
        </div>
      </div>

      {/* Shoe Details */}
      <h2 className="mt-4 text-3xl font-bold text-gray-800">Nike Air Force 1 </h2>
      <h3 className="text-gray-600">Men's Shoes</h3>
      <p className="mt-2 text-xl font-normal text-gray-800 text-center">$300
      <br />
      Nike Air Force: Timeless and versatile, Nike Air Force blends classic style with all-day comfort, perfect for any look.
      </p>

      {/* Shoe Sizes */}
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-500">Select Size</h4>
        <div className="flex space-x-3 mt-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-1 px-3 border rounded-md ${
                selectedSize === size
                  ? 'border-black text-black'
                  : 'border-gray-300 text-gray-600'
              } hover:border-black hover:text-black`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart and Next Style Buttons */}
      <div className="mt-6 flex space-x-4">
        {/* Add to Cart Button */}
        <button className="flex items-center bg-gradient-to-r from-red-400 to-yellow-300 shadow-lg rounded-lg  py-2 px-4  hover:bg-gray-800">
          <span>Add to Cart</span>
          
          <Image
            src={require("./images/cart.png")}
            alt="Cart"
            className="ml-2  h-5 w-5 object-contain"
            height={5}
            width={5}
          />
        </button>

        {/* Next Style Button */}
        <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600">
          Next Style →
        </button>
      </div>
    </div>
  );
};

export default secShoe;
