// pages/contact.tsx
"use client";

import React from "react";
import Image from "next/image"; // Import Image from Next.js

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-yellow-300">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Write your message here"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Instagram Icon */}
        <div className="flex justify-center mt-6">
          <a
            href="https://www.instagram.com/web_ghost.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={require("./images/insta-icon.png")} // Make sure to place your icon in the public/images directory
              alt="Instagram"
              className="h-8 w-8" // Adjust size as needed
              width={32} // Set width
              height={32} // Set height
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

