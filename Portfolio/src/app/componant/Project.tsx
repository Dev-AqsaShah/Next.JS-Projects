
import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-blue-300  ">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-col text-center w-500 mb-20">
            <h1 className="sm:text-4xl text-2xl font-small title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4 relative group ">
              <div className="relative h-64 w-full bg-gray-300 pd">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  src={require("/assets/cLone.png")}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-200 bg-opacity-70 group-hover:bg-opacity-0 transition-opacity duration-500">
                  <div className="text-center group-hover:hidden">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                      Amazon Clone
                    </h2>
                    <p className="leading-relaxed">
                      I developed an Amazon clone using HTML, CSS, and JavaScript. 
                      In this clone, I focused on responsive design and UI elements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 relative group">
              <div className="relative h-64 w-full bg-gray-300">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  src={require("/assets/qrcode.jpg.png")}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-200 bg-opacity-70 group-hover:bg-opacity-0 transition-opacity duration-500">
                  <div className="text-center group-hover:hidden">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                      QR-Code
                    </h2>
                    <p className="leading-relaxed">
                      I created a QR code generator using Python, allowing users to easily generate QR codes for any text or URL.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 relative group">
              <div className="relative h-64 w-full bg-gray-300">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  src={require("/assets/todolist.jpg.png")}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-200 bg-opacity-70 group-hover:bg-opacity-0 transition-opacity duration-500">
                  <div className="text-center group-hover:hidden">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                      To-Do List
                    </h2>
                    <p className="leading-relaxed">
                      I developed a to-do list application using Next.js. 
                      This project highlights my skills in building dynamic web applications with modern frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 relative group">
              <div className="relative h-64 w-full bg-gray-300">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  src={require("/assets/text voice.png")}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-200 bg-opacity-70 group-hover:bg-opacity-0 transition-opacity duration-500">
                  <div className="text-center group-hover:hidden">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                      Text-To-Voice Converter
                    </h2>
                    <p className="leading-relaxed">
                      I built a text-to-voice converter that transforms written text into spoken words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 relative group">
              <div className="relative h-64 w-full bg-gray-300">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  src={require("/assets/age calc.png")}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-200 bg-opacity-70 group-hover:bg-opacity-0 transition-opacity duration-500">
                  <div className="text-center group-hover:hidden">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                      Age Calculator
                    </h2>
                    <p className="leading-relaxed">
                      I created an age calculator that quickly and accurately computes your age based on the input date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 relative group">
              <div className="relative h-64 w-full bg-gray-300">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  src={require("/assets/todo-css.png")}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-200 bg-opacity-70 group-hover:bg-opacity-0 transition-opacity duration-500">
                  <div className="text-center group-hover:hidden">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                      To-Do List
                    </h2>
                    <p className="leading-relaxed">
                      I designed a to-do list application with a clean and intuitive interface using HTML, CSS, and JavaScript.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="seperate"></div>
    </div>
  )
}

export default Project
