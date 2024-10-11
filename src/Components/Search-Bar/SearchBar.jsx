import React, { useState } from 'react'


const SearchBar = () => {

  const [input, setInput] = useState("")


  return (
    
    <div id='search_bar'>
      <div className='w-[80%]'>
        <input type="text" value={input} onChange={(e)=>{
          setInput(e.target.value)
        }} placeholder='Ask Nubel Ai' className='rounded-full px-5 py-3 bg-[#2F2F2F] w-full focus:outline-none' />
      </div>
      <button className='bg-white text-black font-bold h-full rounded-full px-10 text-xl w-[20%]'>Ask</button>
    </div>
  )
}

export default SearchBar
