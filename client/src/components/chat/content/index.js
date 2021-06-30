import React from 'react'
import './styles/content.css'

const index = (props) => {
    return (
        <div className="chat-section-content">

            {props.messages.map((msg)=>{
               return ( 
                    <p className="chat-message-incoming">
                        <span>message</span>
                    </p>
               )
            })}
           
            <p className="chat-message-outgoing">
                <span>message</span>
            </p>
           
        </div>
    )
}

export default index
