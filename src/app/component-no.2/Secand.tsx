import { TbChevronDown } from "react-icons/tb";
import image1 from "../pics/darko-mitev-c5t_j1zlk1Y-unsplash-removebg-preview.png"
import image2 from "../pics/image-removebg-preview.png"
import image3 from "../pics/image4-removebg-preview.png"
import image4 from "../pics/imgae2-removebg-preview.png"
import image5 from "../pics/imgae3-removebg-preview.png"
import image6 from "../pics/kolapo-oladapo-nUU23uz9d2k-unsplash-removebg-preview.png"
import image7 from "../pics/jc-gellidon-fnc3YCtCCOI-unsplash-removebg-preview.png"
import image8 from "../pics/kate-skumen-PJRabkuH3_Q-unsplash-removebg-preview.png"

import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";

export default function Our_collection() {
    return (
      <main className="w-full h-[1300px]  ">
       <p className="text-5xl pt-44 font-semibold text-black text-bold flex justify-center items-center ">Our featured store</p>
       
       <div className="flex justify-between items-center mx-10">
  <div className="flex items-center">
    <p className="text-[#3a2bb1] text-2xl font-bold">Ankera styles</p>
    <p className="text-gray-600 ml-3 text-sm">Male & Female</p>
  </div>
  <button className="border-2 border-[#3a2bb1] p-2 rounded-lg font-sans text-sm text-[#3a2bb1] flex items-center">
    Sort by: Popular
    <TbChevronDown className="ml-2" />
  </button>
</div>

    <div>
    

    <section className="text-gray-600 body-font mt-0">
  <div className="container px-5 pb-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20"></div>
    <div className="flex flex-wrap -m-4">

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image className="h-52 rounded w-full object-cover object-center mb-6 bg-white" src={image1} alt="content" width={723} height={403} />
          <h3 className="tracking-widest text-black text-base font-semibold title-font mb-3 ">Blouse and belted skirt</h3>
          <div className="flex space-x-5">
          <h2 className="text-xs text-gray-900 font-medium title-font mb-2">Gene: Female</h2>
          <h2 className="text-xs text-gray-900 font-medium title-font mb-3">Age:Renges</h2>
        </div>
        <div className="flex items-center">
          <p className="leading-relaxed text-lg font-extrabold text-black ">N8,900,000</p>
          <FaShoppingCart size={50} className="text-[#F8FDFF] bg-[#241a6d] p-3 rounded-2xl ml-20" /> 
          </div>
          </div>
      </div>

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-52 rounded w-full object-cover object-center mb-6 bg-gray-500" src={image2} alt="content" width={721} height={401} />
          <h3 className="tracking-widest text-black text-base font-semibold title-font mb-3  ">Blouse and belted skirt</h3>
          <div className="flex space-x-5">
          <h2 className="text-xs text-gray-900 font-medium title-font mb-2">Gene: Female</h2>
          <h2 className="text-xs text-gray-900 font-medium title-font mb-3">Age:Renges</h2>
        </div>
        <div className="flex items-center">
          <p className="leading-relaxed text-lg font-extrabold text-black ">N8,900,000</p>
          <FaShoppingCart size={50} className="text-[#F8FDFF] bg-[#241a6d] p-3 rounded-2xl ml-20" /> 
          </div>
          </div>
      </div>

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-52 rounded w-full object-cover object-center mb-6 bg-pink-500" src={image3} alt="content" width={722} height={402} />
          <h3 className="tracking-widest text-black text-base font-semibold title-font mb-3 ">Blouse and belted skirt</h3>
          <div className="flex space-x-5">
          <h2 className="text-xs text-gray-900 font-medium title-font mb-2">Gene: Female</h2>
          <h2 className="text-xs text-gray-900 font-medium title-font mb-3">Age:Renges</h2>
          </div>
          <div className="flex items-center">
          <p className="leading-relaxed text-lg font-extrabold text-black ">N8,900,000</p>
          <FaShoppingCart size={50} className="text-[#F8FDFF] bg-[#241a6d] p-3 rounded-2xl ml-20" /> 
          </div>
        </div>
      </div>

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-52 rounded w-full object-cover object-center mb-6 bg-red-500" src={image4} alt="content" width={723} height={403} />
          <h3 className="tracking-widest text-black text-base font-semibold title-font mb-3 ">Blouse and belted skirt</h3>
          <div className="flex space-x-5">
          <h2 className="text-xs text-gray-900 font-medium title-font mb-2">Gene: Female</h2>
          <h2 className="text-xs text-gray-900 font-medium title-font mb-3">Age:Renges</h2>
        </div>
        <div className="flex items-center">
          <p className="leading-relaxed text-lg font-extrabold text-black ">N8,900,000</p>
          <FaShoppingCart size={50} className="text-[#F8FDFF] bg-[#241a6d] p-3 rounded-2xl ml-20" /> 
          </div>
          </div>
      </div>

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-52 rounded w-full object-cover object-center mb-6 bg-pink-300" src={image5} alt="content" width={723} height={403} />
          <h3 className="tracking-widest text-black text-base font-semibold title-font mb-3 ">Blouse and belted skirt</h3>
          <div className="flex space-x-5">
          <h2 className="text-xs text-gray-900 font-medium title-font mb-2">Gene: Female</h2>
          <h2 className="text-xs text-gray-900 font-medium title-font mb-3">Age:Renges</h2>
        </div>
        <div className="flex items-center">
          <p className="leading-relaxed text-lg font-extrabold text-black ">N8,900,000</p>
          <FaShoppingCart size={50} className="text-[#F8FDFF] bg-[#241a6d] p-3 rounded-2xl ml-20" /> 
          </div>
          </div>
      </div>

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-52 rounded w-full object-cover object-center mb-6 bg-blue-500" src={image6} alt="content" width={723} height={403} />
          <h3 className="tracking-widest text-black text-base font-semibold title-font mb-3 ">Blouse and belted skirt</h3>
          <div className="flex space-x-5">
          <h2 className="text-xs text-gray-900 font-medium title-font mb-2">Gene: Female</h2>
          <h2 className="text-xs text-gray-900 font-medium title-font mb-3">Age:Renges</h2>
        </div>
        <div className="flex items-center">
          <p className="leading-relaxed text-lg font-extrabold text-black ">N8,900,000</p>
          <FaShoppingCart size={50} className="text-[#F8FDFF] bg-[#241a6d] p-3 rounded-2xl ml-20" /> 
          </div>
          </div>
      </div>

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-52 rounded w-full object-cover object-center mb-6 bg-red-900" src={image7} alt="content" width={723} height={403} />
          <h3 className="tracking-widest text-black text-base font-semibold title-font mb-3 ">Blouse and belted skirt</h3>
          <div className="flex space-x-5">
          <h2 className="text-xs text-gray-900 font-medium title-font mb-2">Gene: Female</h2>
          <h2 className="text-xs text-gray-900 font-medium title-font mb-3">Age:Renges</h2>
        </div>
        <div className="flex items-center">
          <p className="leading-relaxed text-lg font-extrabold text-black ">N8,900,000</p>
          <FaShoppingCart size={50} className="text-[#F8FDFF] bg-[#241a6d] p-3 rounded-2xl ml-20" /> 
          </div>
          </div>
      </div>

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-52 rounded w-full object-cover object-center mb-6 bg-gray-200" src={image8} alt="content" width={723} height={403} />
          <h3 className="tracking-widest text-black text-base font-semibold title-font mb-3 ">Blouse and belted skirt</h3>
          <div className="flex space-x-5">
          <h2 className="text-xs text-gray-900 font-medium title-font mb-2">Gene: Female</h2>
          <h2 className="text-xs text-gray-900 font-medium title-font mb-3">Age:Renges</h2>
        </div>
        <div className="flex items-center">
          <p className="leading-relaxed text-lg font-extrabold text-black ">N8,900,000</p>
          <FaShoppingCart size={50} className="text-[#F8FDFF] bg-[#241a6d] p-3 rounded-2xl ml-20" /> 
          </div>
          </div>
      </div>

  </div>
  </div>
</section>
</div>











  </main>
    

    );
  }
  