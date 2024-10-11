import React from 'react'
import SearchBar from './../Search-Bar/SearchBar';
import logo from '../../assets/artificial-intelligence.png'

const MainContent = () => {
  return (
    <div id='main_content' className='w-[60%] md:w-[70%] py-5  bg-[#212121] h-[100vh] flex flex-col justify-between px-5 md:px-20 lg:px-30'>
      
      <div className="display_content text-lg">
        <div className="question bg-[#2F2F2F] p-4 md:p-5 lg:p-6 rounded-lg ml-[180px] mb-5">
          <h3 className='font-bold'>You:</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsam vitae cupiditate numquam enim quos ratione consectetur laborum, accusantium repellendus.</p>
        </div>

        <div className="answer bg-[#2F2F2F] p-4 md:p-5 lg:p-6 rounded-lg">
          <div className="logo flex items-center gap-2 mb-5">
                  <span>
                      <img className='max-w-[30px]' src={logo} alt="" />   
                  </span>
                  <span className='font-bold text-lg'>Nubel Ai:</span>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsam vitae cupiditate numquam enim quos ratione consectetur laborum, accusantium repellendus.</p>
        </div>
      </div>

      <div className="ask_question flex items-center h-[55px] w-11/12 md:w-10/13 rounded-full justify-between border border-fuchsia-50 bg-[#2F2F2F]">
        <SearchBar/>
      </div>
    </div>
  )
}

export default MainContent
