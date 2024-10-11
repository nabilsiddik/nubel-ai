import React from 'react'

const ChatHistory = () => {
  return (
    <div id='chat_history'>
      <ul className='flex flex-col gap-2'>
        <li className='flex items-center gap-3 border border-white px-3 md:px-5 py-3 mb-2 mr-3'>
            <span>
                <i className="fa-regular fa-message"></i>
            </span>
            <span>CSS psudo elements</span>
        </li>
      </ul>
    </div>
  )
}

export default ChatHistory
