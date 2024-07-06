"use client"
import React, { useState, useEffect } from 'react';

const styles = [
  'font-montserrat',
  'font-poppins',
  'font-bold font-montserrat',
  'font-bold font-poppins',
  'italic font-montserrat',
  'italic font-poppins',
  'underline font-montserrat',
  'underline font-poppins',
  'font-bold italic font-montserrat',
  'font-bold italic font-poppins',
  'font-bold underline font-montserrat',
  'font-bold underline font-poppins',
  'italic underline font-montserrat',
  'italic underline font-poppins',
  'font-bold italic underline font-montserrat',
  'font-bold italic underline font-poppins',
  // Add more styles if needed
];

const Header: React.FC = () => {
  const [styleIndex, setStyleIndex] = useState(0);

  const handleStyleChange = () => {
    setStyleIndex((prevIndex) => (prevIndex + 1) % styles.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStyleIndex((prevIndex) => (prevIndex + 1) % styles.length);
    }, 1000); // Change style every 1 second

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl">
        <span
          className={`text-black cursor-pointer ${styles[styleIndex]}`}
          onClick={handleStyleChange}
        >
          Razominer</span>{' '}
 your leads scrapping powerhouse from web
      </h1>
    </div>
  );
};

export default Header;
