import image9 from "../pics/img.png"
import Image from 'next/image';

export default function fifthSection() {
    return(
    <div>
        


<div className="felx justify-center items-center mx-52 mt-32 mb-7">
 <h3 className="text-4xl font-semibold ">What people all over the world are saying about us</h3>
</div>



<div className="flex w-[900px] mx-auto"> {/* Reduced container width */}

  

  <div className="w-1/3 p-4 ">
    <div className="rounded-lg flex items-start space-x-4 border border-gray bg-slate-200">
      <div className="w-64 h-40"> {/* Reduced width to 70% */}
        <p className="leading-relaxed text-sm pl-3 pt-5">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
      <div className="h-[2px] ml-3 w-12 bg-indigo-500 mt-3 mb-3">

      </div>
      <div className="flex items-center ">
      <Image 
  className="w-12 h-12 ml-3 inline-flex items-center justify-center rounded-full bg-black mb-4" 
  src={image9} 
  alt="image" 
/>
     <div className="ml-3 -mt-3">
      <h1 className="text-sm font-bold text-black">Name SurName</h1>
      <p className="text-gray-500 text-xs font-light">CEO of google</p>
     </div>

      </div>
      </div>
    </div>
  </div>


  <div className="w-1/3 p-4 ">
    <div className="rounded-lg flex items-start space-x-4 border border-gray bg-slate-200">
      <div className="w-64 h-40"> {/* Reduced width to 70% */}
        <p className="leading-relaxed text-sm pl-3 pt-5">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
      <div className="h-[2px] ml-3 w-12 bg-indigo-500 mt-3 mb-3">

      </div>
      <div className="flex items-center ">
      <Image 
  className="w-12 h-12 ml-3 inline-flex items-center justify-center rounded-full bg-black mb-4" 
  src={image9} 
  alt="image" 
/>
     <div className="ml-3 -mt-3">
      <h1 className="text-sm font-bold text-black">Name SurName</h1>
      <p className="text-gray-500 text-xs font-light">CEO of google</p>
     </div>

      </div>
      </div>
    </div>
  </div>



  <div className="w-1/3 p-4 ">
    <div className="rounded-lg flex items-start space-x-4 border border-gray bg-slate-200">
      <div className="w-64 h-40"> {/* Reduced width to 70% */}
        <p className="leading-relaxed text-sm pl-3 pt-5">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
      <div className="h-[2px] ml-3 w-12 bg-indigo-500 mt-3 mb-3">

      </div>
      <div className="flex items-center ">
      <Image 
  className="w-12 h-12 ml-3 inline-flex items-center justify-center rounded-full bg-black mb-4" 
  src={image9} 
  alt="image" 
/>
     <div className="ml-3 -mt-3">
      <h1 className="text-sm font-bold text-black">Name SurName</h1>
      <p className="text-gray-500 text-xs font-light">CEO of google</p>
     </div>

      </div>
      </div>
    </div>
  </div>

</div>

<div className="flex items-center justify-center mt-10  ">
<div className="bg-[#4634d3] w-6 h-2 rounded-xl  ml-2">

</div>

<div className="bg-gray-400 w-2 h-2 rounded-full ml-2">

</div>

<div className="bg-gray-400 w-2 h-2 rounded-full ml-2">

</div>

<div className="bg-gray-400 w-2 h-2 rounded-full ml-2">

</div>


</div>
<div className="flex justify-center items-center mt-10">

<button className="bg-[#3a2bb1] border-[#3a2bb1] text-[#F8FDFF] rounded-md hover:bg-[#4D3ADC] py-3 px-14 text-sm font-thin">
          See all review
</button>
</div>




    </div>
)
      
    
}