
import React from 'react'
import { CiSquareCheck } from "react-icons/ci";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font bg-blue-300 homecolor ">
        <div className="container px-5 py-16 mx-auto"> 
          <div className="flex flex-col text-center w-full mb-100"> 
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* skill */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <CiSquareCheck className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl" style={{ width: '100%' }}></div> {/* Corrected the width */}
                  </div>
                  <p className='font-bold text-blue-500 text-right'>100%</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <CiSquareCheck className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl" style={{ width: '95%' }}></div> 
                  </div>
                  <p className='font-bold text-blue-500 text-right'>95%</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <CiSquareCheck className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                  JavaScript/TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl" style={{ width: '90%' }}></div> 
                  </div>
                  <p className='font-bold text-blue-500 text-right'>90%</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <CiSquareCheck className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    React
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl" style={{ width: '85%' }}></div> 
                  </div>
                  <p className='font-bold text-blue-500 text-right'>85%</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <CiSquareCheck className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next.js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl" style={{ width: '80%' }}></div> 
                  </div>
                  <p className='font-bold text-blue-500 text-right'>80%</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <CiSquareCheck className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Python
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl" style={{ width: '80%' }}></div> 
                  </div>
                  <p className='font-bold text-blue-500 text-right'>80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='seperate'></div>
    </div>
  )
}

export default Skills
