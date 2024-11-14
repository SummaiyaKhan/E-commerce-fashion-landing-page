export default function Seventh() {
    return(
        <div>
        <div className="w-[750px] rounded-xl bg-[#3a2bb1] mx-auto flex flex-col items-center mt-20 p-8 shadow-lg space-y-6">
  <h1 className="text-lg font-bold text-white text-center">
    Sign Up Now So Your Selected Items Are Saved to Your Personal Cart
  </h1>
  
  <div className="bg-white w-[600px] h-20 rounded-2xl flex items-center justify-between px-4 shadow-md">
    <input 
      type="text" 
      placeholder="Enter Your Email" 
      className="border border-[#3a2bb1] bg-transparent text-gray-700 placeholder-[#3a2bb1] text-sm  px-4 w-[400px] h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a2bb1] transition duration-300"
    />
    <button className="bg-[#3a2bb1] text-sm text-white px-9 py-[10px] rounded-lg hover:bg-[#4D3ADC] transition duration-300">
      Sign Up Now
    </button>
  </div>
</div>



        </div>
    )
}