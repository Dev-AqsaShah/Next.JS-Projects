import React from 'react';
import { IoLogoYoutube } from "react-icons/io";
import Image from 'next/image';
// import logo from '../../../public/assets/logo.jpg.jpg'; 
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <>
    <div className='seperate'></div>
    <div className='bg-blue-300'>
      <footer className="text-gray-600 body-font footerName">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/assets/logo.jpg.jpg" alt="AqsaShah Logo" width={100} height={100} className='rounded-full' />
            <span className="ml-3 text-xl">AqsaShah</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            # aqsashah000000@gmail.com
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://youtube.com/@aqsashah120?si=wQGVxGfELs8p8z_7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              <IoLogoYoutube className="text-4xl mr-4" />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin  className="text-3xl mr-4" />
            </a>
            <a
              href="https://github.com/Dev-AqsaShah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-400 hover:text-black-800"
            >
              <FaSquareGithub className="text-3xl mr-2" />
            </a>
          </span>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Footer;
