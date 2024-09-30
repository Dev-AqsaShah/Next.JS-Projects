import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font bg-blue-300 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-evenly">
    <div className="lg:max-w-lg lg:w-full md:w-3/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded "
        alt="hero"
        src={require("/assets/about.jpg")}
        width={300}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed ">
    I am currently studying Cloud Applied Generative AI Engineering at Governor House Sindh, where I have completed my first quarter, focusing on TypeScript. As a senior student, I am now diving into Next.js in the next quarter. Additionally, I'm also pursuing Cloud Native Applied Generative AI Engineering and Cloud Computing at PIAIC, where I am gaining expertise in Docker, Linux, and Python.
      </p>
    </div>
  </div>
</section>
<div className="seperate"></div>

    </div>
  )
}

export default about
