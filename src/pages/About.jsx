import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <NavBar/>
    <div className="flex flex-col items-center bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 h-[600px] p-8">
      <h1 className="text-2xl font-bold mb-8 text-white">UX Sitemap</h1>

      {/* Homepage */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
          Homepage
        </div>

        {/* Level 1 */}
        <div className="flex mt-8 space-x-8">
          {/* Node 1.0 */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md">
              <a href='#r'>Page Title</a>
            </div>
            {/* Level 2 */}
            <div className="flex flex-col mt-6 space-y-6">
              <div className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md">
                <a href='#r'>Page Title</a>
              </div>
              <div className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md">
              <a href='#r'>Page Title</a>
              </div>
            </div>
          </div>

          {/* Node 2.0 */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md">
            <a href='#r'>Page Title</a>
            </div>
          </div>

          {/* Node 3.0 */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md">
            <a href='#r'>Page Title</a>
            </div>
          </div>

          {/* Node 4.0 */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md">
            <a href='#r'>Page Title</a>
            </div>
            {/* Level 2 */}
            <div className="flex flex-col mt-6 space-y-6">
              <div className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md">
              <a href='#r'>Page Title</a>
              </div>
            </div>
          </div>

          {/* Node 5.0 */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md">
            <a href='#r'>Page Title</a>
            </div>
          </div>

          {/* Node 6.0 */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md">
            <a href='#r'>Page Title</a>
            </div>
          </div>
        </div>
      </div>
    </div>

      <Footer/>
    </div>
  )
}

export default About

