import React from 'react'

const Sidebar = () => {
  return (
    <div id='sidebar' className='w-[40%] md:w-[30%] py-5 px-5 bg-[#171717] h-[100vh]'>
        <div className="sidebar_top">
            <div className="logo">
                <img src="" alt="" />
            </div>
            <div className="new_chat">
                <button className='btn w-full bg-blue-600 text-white font-bold py-2 rounded-sm flex items-center gap-1 justify-center'>
                    <span className='text-lg'><i class="fa-solid fa-plus"></i></span>
                    <span>New Chat</span>
                </button>
            </div>
        </div>
        <div className="sidebar_bottom"></div>
    </div>
  )
}

export default Sidebar
