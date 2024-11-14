import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { FaMoneyBillWave, FaTruck } from "react-icons/fa";



export default function FifthSection() {
    return(
<div>

<div className="items-center justify-center text-black font-semibold text-3xl absolute -mt-36 flex ml-[550px] mx-auto ">
  <h1>What we do</h1>
</div>

<div className="flex space-x-[650px] mt-60 relative">
<div className="w-72 h-72 bg-[#4634d3] rounded-[80px] -rotate-45 ml-9">
</div>

<div className="w-72 h-72 bg-[#4634d3] rounded-[80px] -rotate-45 ">
</div>
</div>

<section className="text-gray-600 body-font w-[800px] -pb-20 absolute -mt-80">
  <div className="container px-10 py-10 ml-60 bg-slate-100">
    <div className="flex flex-wrap -m-4">
    
      <div className="w-1/2 p-4 pl-5">
        <div className="rounded-lg flex items-start space-x-4">
          <div className="w-14 p-3 h-14 inline-flex items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
            <FiShoppingCart size={30} />
          </div>
          <div className="w-[90%]"> {/* Increased width to 90% */}
            <h2 className="text-lg font-bold text-gray-900 title-font mb-1">Shop for latest wears</h2>
            <p className="leading-relaxed text-sm">Fingerstache flexitarian street art 8-bit waist co, street art 8-bit waist.</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 p-4">
        <div className="rounded-lg flex items-start space-x-4">
          <div className="w-14 h-14 p-3 inline-flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500 mb-4">
            <FiShoppingBag size={30} />
          </div>
          <div className="w-[90%]"> {/* Increased width to 90% */}
            <h2 className="text-lg font-bold text-gray-900 title-font mb-2">Request for measurement for a style</h2>
            <p className="leading-relaxed text-sm">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 p-4 pl-5">
        <div className="rounded-lg flex items-start space-x-4">
          <div className="w-14 h-14 p-3 inline-flex items-center justify-center rounded-2xl bg-blue-100 text-blue-500 mb-4">
            <FaMoneyBillWave size={24} />
          </div>
          <div className="w-[90%]"> {/* Increased width to 90% */}
            <h2 className="text-lg font-bold text-gray-900 title-font mb-2">Sell your wears</h2>
            <p className="leading-relaxed text-sm">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 p-4">
        <div className="rounded-lg flex items-start space-x-4">
          <div className="w-14 h-14 inline-flex items-center justify-center rounded-2xl bg-green-100 text-green-500 mb-4">
            <FaTruck size={30} />
          </div>
          <div className="w-[90%]"> {/* Increased width to 90% */}
            <h2 className="text-lg font-bold text-gray-900 title-font mb-2">Get your wears delivered to you</h2>
            <p className="leading-relaxed text-sm">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
</div>
    )
}