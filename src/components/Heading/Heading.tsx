"use client"
import React, { useState, useEffect } from 'react';

const styles = [
  'font-bold',
  'italic',
  'underline',
  'font-bold italic',
  'font-bold underline',
  'italic underline',
  'font-bold italic underline',
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
    }, 1000); // Change style every 2 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        <span
          className={`text-black cursor-pointer ${styles[styleIndex]}`}
          onClick={handleStyleChange}
        >
          Razominer
        </span>{' '}
        your leads scrapping powerhouse from web
      </h1>
    </div>
  );
};

export default Header;
