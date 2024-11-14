import { TbChevronDown } from "react-icons/tb";
import image2 from "../pics/image-removebg-preview.png";
import Image from 'next/image';
import { BiArrowBack } from "react-icons/bi";
import { IoMdVideocam } from "react-icons/io";


export default function thirdSection() {
    
    return(
        <div>
          <div className="flex items-center -mt-10 pb-10 mx-7">
  
  <div className="flex space-x-3 mx-4 ml-[700px] items-center">
  <BiArrowBack size={15} className="font-bold text-[#3a2bb1] mr-1" />
    <button className="border hover:border-[#3a2bb1] hover:bg-[#3a2bb1] hover:text-white py-1 px-2 font-bold rounded-lg font-sans text-sm text-[#3a2bb1]">1</button>
    <button className="border hover:border-[#3a2bb1] hover:bg-[#3a2bb1] hover:text-white py-1 px-2 font-bold rounded-lg font-sans text-sm text-[#3a2bb1]">2</button>
    <button className="border hover:border-[#3a2bb1] hover:bg-[#3a2bb1] hover:text-white py-1 px-2 font-bold rounded-lg font-sans text-sm text-[#3a2bb1]">3</button>
    <button className="border hover:border-[#3a2bb1] hover:bg-[#3a2bb1] hover:text-white py-1 px-2 font-bold rounded-lg font-sans text-sm text-[#3a2bb1]">4</button>
    <button className="border hover:border-[#3a2bb1] hover:bg-[#3a2bb1] hover:text-white py-1 px-2 font-bold rounded-lg font-sans text-sm text-[#3a2bb1]">...</button>
    <button className="border hover:border-[#3a2bb1] hover:bg-[#3a2bb1] hover:text-white py-1 px-2 font-bold rounded-lg font-sans text-sm text-[#3a2bb1]">28</button>
  </div>
  
  <BiArrowBack size={15} className="text-[#3a2bb1] font-bold " />
  
  <button className="ml-auto border-2 mx-3 border-[#3a2bb1] py-2 px-5 rounded-lg font-sans text-sm text-[#3a2bb1] flex items-center">
    View all
    <TbChevronDown className="ml-2 -rotate-90" />
  </button>
</div>

<div className="bg-[#4634d3]  my-20 mx-40 w-[1000px] h-[300px] relative flex justify-center items-center rounded-2xl">
  
  <div className="bg-gray-50 rounded-3xl ml-[600px] w-96 h-96 rotate-45">
  <div/>
  
<div className="w-[300px] h-[300px] absolute -rotate-45 mt-14 ml-20 justify-center">

<p className="text-[#3a2bb1] text-4xl font-thin">Trendy Styles..</p>
  <p className="text-[#3a2bb1] text-2xl font-bold mt-2">Thousands Styles More!</p>
  <p className="item-end mt-4 text-sm">
    Lorem ipsum dolor sit amet consectetur,
    adipisicing elit. Rem consequatur molestias
    corrupti nam sunt illum, aperiam vel
    distinctio dolor
  </p>
  <div className="flex">
  <button className="text-xs mt-4 ml-2 text-[#F8FDFF] bg-[#3a2bb1] hover:bg-[#4D3ADC] rounded-md py-3 px-7">Shop collection</button>
  <div className="flex items-center">
          <div className="flex mt-4 ml-5 items-center justify-center w-8 h-8 bg-red-700 rounded-full">
            <IoMdVideocam size={15} className="text-white" />
          </div>
          <p className="text-[#3a2bb1] mt-4 text-xs ml-2">Watch reviews</p>
        </div>
</div>
</div>

</div>
<Image className="h-[330px] absolute rounded-full w-48 object-cover object-center mb-6 bg-gray-50 mr-[500px]" src={image2} alt="content" width={723} height={403} />
</div>


        </div>
    )
}