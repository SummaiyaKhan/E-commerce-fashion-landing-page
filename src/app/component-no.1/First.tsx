import { FaArtstation, FaCheckCircle} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdVideocam } from "react-icons/io";
import Image from "next/image";
import pic from "../pics-folder/maria-fernanda-pissioli-vqq0USaiZpg-unsplash.jpg"
import pic2 from "../pics-folder/fortune-vieyra-hGkMKseo6eI-unsplash-removebg-preview (1).png"
import pic3 from "../pics-folder/asset-no.1.png"
import pic4 from "../pics-folder/asset-no.2.jpg"
import pic5 from "../pics-folder/asset-no.3.png"

function Navbar() {
    return (
      <div className="relative bg-[#A5E5FF] pb-32 flex flex-col items-end justify-end">
      {/* Left Side Content */}
      <div className="mx-40">
        <ul className="flex pt-14 items-center">
          <FaArtstation size={35} className="text-[#3a2bb1]" />
          <h1 className="text-[#3a2bb1] text-base font-bold mx-10">FashionForAll</h1>
    
          <li className="ml-20 hover:text-[#3a2bb1] text-sm text-gray-600 hover:underline hover:decoration-2 hover:decoration-[#3a2bb1]">Home</li>
          <li className="ml-10 hover:text-[#3a2bb1] text-sm text-gray-600 hover:underline hover:decoration-2 hover:decoration-[#3a2bb1]">About</li>
          <li className="ml-10 hover:text-[#3a2bb1] text-sm text-gray-600 hover:underline hover:decoration-2 hover:decoration-[#3a2bb1]">Contact</li>
    
          <IoSearchSharp size={35} className="text-[#3a2bb1] ml-28 bg-[#cfeffd] rounded-2xl p-2" />
          <li className="ml-3 text-sm hover:text-[#3a2bb1] text-gray-600 hover:underline hover:decoration-2 hover:decoration-[#3a2bb1]">Search</li>
    
          <AiOutlineShoppingCart size={35} className="text-[#3a2bb1] ml-5 bg-[#cfeffd] rounded-2xl p-2" />
          <li className="mx-3 text-sm hover:text-[#3a2bb1] text-gray-600 hover:underline hover:decoration-2 hover:decoration-[#3a2bb1]">Cart</li>
    
          <button className="bg-[#3a2bb1] border-[#3a2bb1] text-[#F8FDFF] rounded-xl hover:bg-[#4D3ADC] py-2 px-6 text-base font-thin">
            Get started
          </button>
        </ul>
    
        <div className="w-[940px] h-[2px] mt-4 bg-[#cfeffd]"></div>
    
        <div className="bg-[#cfeffd] py-4 rounded-2xl px-4 w-[335px] mt-12 mb-5">
          <ul className="text-[#3a2bb1] text-xs font-light flex">
            <FaCheckCircle size={13} className="text-[#3a2bb1]" />
            <li className="ml-1">Free Register</li>
            <FaCheckCircle size={13} className="ml-3 text-[#3a2bb1]" />
            <li className="ml-1">Great Service</li>
            <FaCheckCircle size={13} className="ml-3 text-[#3a2bb1]" />
            <li className="ml-1">Easy payment</li>
          </ul>
        </div>
    
        <h2 className="text-black text-5xl font-extralight leading-[1.3] w-[500px]">
          Getting the best and latest style has never <span className="text-[#3a2bb1] font-extrabold">been easier!</span>
        </h2>
    
        <p className="w-[400px] my-4 text-gray-600 font-bold text-base">
          <span>FashionForAll</span> is a platform that helps to make fashion accessible to all. It brings fashion to your doorstep!
        </p>
    
        <div className="flex items-center">
          <button className="text-xs mt-4 ml-2 text-[#F8FDFF] bg-[#3a2bb1] hover:bg-[#4D3ADC] rounded-md py-3 px-12">Shop collection</button>
          <div className="flex mt-4 ml-5 items-center justify-center w-8 h-8 bg-red-700 rounded-full">
            <IoMdVideocam size={15} className="text-white" />
          </div>
          <p className="text-[#3a2bb1] mt-4 text-xs ml-2">Watch reviews</p>
        </div>
      </div>
    
      {/* Image Section */}
      <div className="flex  mx-20  absolute top-[12rem] space-x-8">
        <div className="relative">
          <Image src={pic} width={300} alt="Main Image" className="w-64 rounded-full" />
    
          {/* Overlay Images */}
          <div className="absolute top-[23rem] left-0 flex space-x-3 bg-[#F8FDFF] py-3 px-2 rounded-md">
            <Image src={pic3} width={300} alt="Image 1" className="w-20 h-16 bg-pink-500 rounded-md" />
            <Image src={pic4} width={300} alt="Image 2" className="w-20 h-16 bg-yellow-400 rounded-md" />
            <Image src={pic5} width={300} alt="Image 3" className="w-16 h-16 bg-red-900 rounded-md" />
          </div>
        </div>
        <Image src={pic2} width={300} alt="Second Main Image" className="w-44 h-64 mt-20 rounded-full" />
      </div>
    
     {/* Bottom Section */}
<div className="flex items-center justify-center h-36 bg-[#E1F6FF] absolute -bottom-28 px-20 left-1/2 -translate-x-1/2">
  <div className="w-[1000px] text-center">
    <p>Our <span className="font-extrabold text-[#241a6d] text-2xl">32k+</span> fashion gurus are growing their brands with FashionForAll.</p>
    <ul className="flex justify-center space-x-5 mt-4">
      <li className="flex items-center text-xs">
        <span className="flex items-center justify-center text-green-900 text-xl font-bold mr-1">N</span> NextFashion
      </li>
      <li className="flex items-center text-xs">
        <FaArtstation size={15} className="text-[#3a2bb1] mr-1" /> FashionForAll
      </li>
      <li className="flex items-center text-xs">
        <span className="flex items-center justify-center text-pink-900 text-xl font-bold mr-1">Q</span> Queen Clozet
      </li>
      <li className="flex items-center text-xs">
        <FaArtstation size={15} className="text-[#3a2bb1] mr-1" /> FashionForAll
      </li>
      <li className="flex items-center text-xs">
        <span className="flex items-center justify-center text-yellow-900 text-xl font-bold mr-1">Q</span> Queen Clozet
      </li>
    </ul>
  </div>
</div>

    </div>
    
      
 
    );
  }

  export default Navbar
  