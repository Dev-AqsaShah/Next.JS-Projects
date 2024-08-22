import Image from 'next/image'; 
import logo from '../../../public/asets/logo.jpg.jpg'; 
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className='bg-blue-500 z-50 sticky top-0 myNav'>
            <header className="text-black-600 body-font">
                <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center ml-2">
                    <a href="#Contact" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-20">
                        <Image src={logo} alt="AqsaShah Logo" width={100} height={100} className='rounded-full '/>
                        <span className="ml-2 text-xxl">AqsaShah</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"#home"} className="mr-5 hover:text-blue-100">Home</Link>
                        <Link href={"#about"} className="mr-5 hover:text-blue-100">About</Link>
                        <Link href={"#skills"} className="mr-5 hover:text-blue-100">Skills</Link>
                        <Link href={"#projects"} className="mr-5 hover:text-blue-100">Projects</Link>
                        <Link href={"#contact"} className="mr-5 hover:text-blue-100">Contact</Link>
                    </nav>
                    <a href='/asets/AqsaNazz.pdf'>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-2 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
                        Download CV
                        <FaCloudDownloadAlt className='text-xl ml-4'/>
                        
                    </button>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Navbar;


