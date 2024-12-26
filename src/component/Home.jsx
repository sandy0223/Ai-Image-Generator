import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-blue-900 w-screen h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-10 h-64 rounded-lg shadow-md">
            <h1 className="text-4xl text-center font-bold">Welcome to AI Image Generator</h1>
            <p className="text-center mt-6 text-gray-600">Generate high-quality, unique images using AI-powered algorithms.</p>
            <div className="flex w-full justify-center items-center p-4">
              <Link to="/main"><button className="bg-blue-500 hover:bg-blue-700  text-white font-bold px-10 py-2 md:py-3 md:mt-5 rounded-lg md-px">Get Started</button></Link>
            </div>
            <p className='text-center text-white m-8'>Created by <span className='text-xl font-bold'>Sandeep Behera</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
