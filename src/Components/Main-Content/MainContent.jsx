import React, { useContext } from 'react'
import SearchBar from './../Search-Bar/SearchBar';
import logo from '../../assets/artificial-intelligence.png'
import { nubelAiContext } from '../../Context/NubelAi-Context/NubelAiContext';

const MainContent = () => {

  const {QnA, isLoading} = useContext(nubelAiContext)



  return (
    <div id='main_content' className='w-[60%] md:w-[70%] py-5  bg-[#212121] h-[100vh] overflow-hidden flex flex-col justify-between px-5 md:px-10 lg:px-20'>
      
      <div className="display_content text-lg max-h-[100%] overflow-auto mb-10">

          {isLoading ? (
            <div className='flex items-center jsutify-center h-[100%]'>
              <div>
                <span class="loading loading-dots loading-xs"></span>
                <span class="loading loading-dots loading-sm"></span>
                <span class="loading loading-dots loading-md"></span>
                <span class="loading loading-dots loading-lg"></span>
              </div>
            </div>
          ) : (
            QnA && QnA.map((item, index) => {
              return <div className='mb-10' key={index}>
                <div className="question bg-[#2F2F2F] p-3 md:p-5 lg:p-6 rounded-lg ml-[180px] mb-5">
                  <p>
                    <span className='font-bold text-xl'>You: </span>
                    <span>{item.question}</span>
                  </p>
                </div>
  
                <div className="answer bg-[#2F2F2F] p-4 md:p-5 lg:p-6 rounded-lg">
                  <div className="logo flex items-center gap-2 mb-5">
                          <span>
                              <img className='max-w-[30px]' src={logo} alt="" />   
                          </span>
                          <span className='font-bold text-lg'>Nubel Ai:</span>
                  </div>
                  <p>{item.answer}</p>
                </div>
              </div>
            })
          )}



      </div>

      <div className="ask_question">
        <SearchBar/>
      </div>
    </div>
  )
}

export default MainContent
