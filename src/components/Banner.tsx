"use client";
import React from 'react'
import Container from './Container';


const Banner = () => {
 
  return (
    
    <div className="sm:py-16 py-10 flex justify-center">
    <div className="container text-center sm:w-3/4 w-full px-4">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight sm:leading-normal">
      Empower Your Future with our <span className="text-blue-600">Programming Courses</span>
      </h1>
  
      {/* Subheading */}
      <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed sm:leading-normal">
        Join hundreds of learners and start building the skills you need for the future. Learn at your own space with courses taught by industry experts.
      </p>
  
      {/* Call-to-Action Buttons */}
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <button className="px-6 py-3 bg-blue-600 text-white text-sm sm:text-base rounded-md hover:bg-blue-700 transition">
          Explore Courses
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-800 text-sm sm:text-base rounded-md hover:bg-gray-300 transition">
          Learn More
        </button>
      </div>
    </div>
  </div>
  

  
  )
}

export default Banner
