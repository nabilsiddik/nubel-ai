import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MainContent from './../../Components/Main-Content/MainContent';

const Chat = () => {
  return (
    <div id='chat_page'>
        <div className="chat_page_container flex">
            <Sidebar/>
            <MainContent/>
        </div>
    </div>
  )
}

export default Chat
