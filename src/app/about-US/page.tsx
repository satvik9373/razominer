import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <h1 className='font-bold text-2xl mb-8'><span className='text-blue-600'>Watch</span> the Video till the End</h1>
      <div className="bg-white rounded-lg p-8 max-w-[1500px] mx-auto shadow-xl">
            <iframe
                className="w-[1000px] h-[500px] rounded-md"
                src="https://www.youtube.com/embed/rIijvYFmuyA"
                allowFullScreen
            ></iframe>
        </div>
    </div>
  )
}

export default page
  