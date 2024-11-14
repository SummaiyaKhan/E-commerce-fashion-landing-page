import { FaQuestionCircle } from "react-icons/fa";

export default function Sixth() {
    return(
        <div>
            <div>
            <div className="flex justify-center mt-24">
  <p className="text-3xl font-semibold">Frequently asked question</p>
  
</div>

<div className="flex">
<div className="ml-40 ">
<div className="w-[500px] p-2 bg-white mt-10">
  <div className="flex justify-between items-center">
    <p className="font-bold text-black w-4/5">How can I become a vendor on the app?</p>
    <p className="text-sm">x</p>
  </div>
  <p className="text-sm font-light text-black mt-1">Lorem ipsum adipisicing elit Voluptates ad reprehenderit cupiditate vel cum?</p>
</div>

<div className="w-[500px] p-2 bg-white mt-5">
  <div className="flex justify-between items-center">
    <p className="font-bold text-black w-4/5">Is there a way I can reach out to the seller directly?</p>
    <p className="text-sm">+</p>
  </div>
</div>

<div className="w-[500px] p-2 bg-white mt-5">
  <div className="flex justify-between items-center">
    <p className="font-bold text-black w-4/5">What if I want a refund?</p>
    <p className="text-sm">+</p>
  </div>
</div>

<div className="w-[500px] p-2 bg-white mt-5">
  <div className="flex justify-between items-center">
    <p className="font-bold text-black w-4/5">Can I request for a particular material?</p>
    <p className="text-sm">+</p>
  </div>
</div>


</div>

<div className="ml-64 mt-5">
<div className="bg-white w-80 h-80 border border-[#3a2bb1] rounded-lg">
<FaQuestionCircle size={45} className=" mx-auto mt-12"/>
<h3 className="text-lg font-bold text-black ml-6 mt-4 mb-2">Do you have more questions?</h3>
<div className="items-center flex justify-center">
<p className="text-sm font-light text-black">Lorem ipsum dolor sit amet consectetur
  <span className="items-center flex justify-center">adipisicing elit. odit eius voluptatem amet</span> 
  <span className="items-center flex justify-center">,dolores necessitatibus quod.</span>
  </p>

</div>
<div className="justify-center flex items-center mt-10">
<button className="bg-[#3a2bb1] border-[#3a2bb1] text-[#F8FDFF] rounded-md hover:bg-[#4D3ADC] py-4 px-8 text-sm font-thin">
          Shoot a direct mail
</button>

</div>


</div>

</div>
</div>
            </div>
        </div>
    )
}