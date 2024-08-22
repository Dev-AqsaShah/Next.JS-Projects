"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-black-800 body-font bg-blue-300 homecolor ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Aqsa Shah", "Web Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[500px] h-[] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed">
            With a strong foundation in web development, I bring designs to life
            with clean, efficient code. My focus is on crafting seamless user
            experiences through intuitive UI/UX design. I thrive on solving
            complex problems and delivering responsive, high-performance
            websites. Every project is an opportunity to blend creativity with
            technical expertise, ensuring that the end result is both beautiful
            and functional.
          </p>
          <div className="flex justify-center">
            <Link href="#Contact" passHref>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto w-15rm ">
          <Image
            className="object-cover object-center rounded-full"
            alt="hero"
            width={400}
            height={400}
            src={require("../../../public/asets/1page.jpg")}
          />
        </div>
      </div>
      <div className="seperate"></div>
    </section>
  );
};

export default Hero;
