import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-3xl w-1/2 px-10">
        <Image src={"/image.png"} width={300} height={100} alt="fb-logo" />
        <p className="ml-8 mt-3">Facebook helps you connect and share with the people in your life.</p>
      </div>


    <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
      <input className="my-2 border border-1 border-gray-100 p-3 rounder-md  focus: outline-blue-600" 
      type="password" placeholder="Password" />
      <input className="my-2 border border-1 border-gray-100 p-3 rounded-md  focus: outline-blue-600" 
      type="text" placeholder="Email address or phone number" />
      <button className="bg-blue-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-600">log in</button> 
      <p className="cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline"></p>
      <span className="my-2 ">
        <hr />
      </span>
      <button className="bg-green-500 my-2 py-2 px-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">Create new account</button>
    </div>
    </div>
    </>
  );
}
