import React from 'react'
import './styles/chat.css'
import Header from './header/index'
import Content from './content/index'
import Footer from './footer/index'

const index = () => {
    return (
        <div className="chat-section"> 
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default index
