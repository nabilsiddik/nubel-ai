import React, { useContext, useState } from 'react'
import { nubelAiContext } from '../../Context/NubelAi-Context/NubelAiContext'


const SearchBar = () => {

  const [input, setInput] = useState("")
  const {getAnswer} = useContext(nubelAiContext)

  return (
    
    <div id='search_bar' className='flex items-center justify-center'>
      <div className='w-[80%]'>
        <textarea value={input} onChange={(e)=>{
          setInput(e.target.value)
        }} placeholder='Ask Nubel Ai' className='px-8 py-4 bg-[#2F2F2F] w-full focus:outline-none h-[70px] rounded-tl-full rounded-bl-full placeholder:text-xl'></textarea>
      </div>
      <button onClick={()=>getAnswer(input)} className='bg-white text-black font-bold px-10 text-xl w-[20%] h-[70px] mt-[-5px] rounded-tr-full rounded-br-full flex items-center justify-center'>Ask</button>
    </div>
  )
}

export default SearchBar
