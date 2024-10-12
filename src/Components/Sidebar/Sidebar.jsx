import React, { useContext, useState } from 'react'
import logo from '../../assets/artificial-intelligence.png'
import ChatHistory from '../Chat-History/ChatHistory'
import { nubelAiContext } from '../../Context/NubelAi-Context/NubelAiContext'

const Sidebar = () => {

    const {isMobileMenuActive, toggleMobileMenu} = useContext(nubelAiContext)

  return (
    <div id='sidebar' className={`${isMobileMenuActive ? 'block absolute sm:static w-[70%]' : 'hidden'} w-[50%] md:w-[30%] py-5 px-5 bg-[#171717] h-[100vh] flex flex-col justify-between`}>
        <div className="sidebar_top">
            <div className="logo_and_menu_icon flex items-center justify-between mb-5">
                <div className="logo flex items-center gap-2">
                    <span>
                        <img className='max-w-[35px]' src={logo} alt="" />   
                    </span>
                    <span className='font-bold text-xl'>Nubel Ai</span>
                </div>
                <div className='mobile_menu_icon'>
                    <span onClick={toggleMobileMenu} className='font-bold text-xl cursor-pointer'><i class="fa-solid fa-bars"></i></span>
                </div>
            </div>
            <div className="new_chat">
                <button className='btn w-full bg-blue-600 text-white font-bold py-2 rounded-sm flex items-center gap-1 justify-center'>
                    <span className='text-lg'><i className="fa-solid fa-plus"></i></span>
                    <span>New Chat</span>
                </button>
            </div>

            <div className="chat_histories mt-5">
                <h3 className='font-bold text-xl mb-3'>Chat History</h3>
                <div className="chat_history max-h-[30vh] overflow-auto">
                    <ChatHistory/>
                </div>
            </div>
        </div>

        <div className="sidebar_bottom border-t pt-5">
            <ul className='flex flex-col gap-2'>
                <li className='flex items-center gap-3 px-3 md:px-5 mb-3 text-lg font-bold mr-3'>
                    <span>
                        <i className="fa-solid fa-house"></i>
                    </span>
                    <span>Home</span>
                </li>

                <li className='flex items-center gap-3 px-3 md:px-5 mb-3 text-lg font-bold mr-3'>
                    <span>
                    <i className="fa-solid fa-rocket"></i>
                    </span>
                    <span>Upgrade PRO</span>
                </li>

                <li className='flex items-center gap-3 px-3 md:px-5 mb-3 text-lg font-bold mr-3'>
                    <span>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    </span>
                    <span>Log Out</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
